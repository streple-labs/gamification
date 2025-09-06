import { base_url } from "@/utils/constants";
import axios from "axios";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    const cookieStore = await cookies();
    const refreshToken = cookieStore.get("streple_refresh_token");

    if (!refreshToken) {
      cookieStore.delete("streple_auth_token");
      cookieStore.delete("streple_refresh_token");
      return NextResponse.json({ error: "No refresh token" }, { status: 401 });
    }

    const refreshResponse = await axios.post(`${base_url}/auth/refresh`, {
      token: refreshToken,
    });

    const { streple_auth_token } = refreshResponse.data;

    cookieStore.set("streple_auth_token", streple_auth_token, {
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60,
      path: "/",
    });

    return NextResponse.json({ token: streple_auth_token });
  } catch (error) {
    console.error("Token refresh failed:", error);
    const cookieStore = await cookies();
    cookieStore.delete("streple_auth_token");
    cookieStore.delete("streple_refresh_token");
    return NextResponse.json(
      { error: "Token refresh failed" },
      { status: 401 }
    );
  }
}
