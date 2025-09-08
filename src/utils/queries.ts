/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import api from "./axios";

export const getSession = async (): Promise<{
  success: boolean;
  message: string;
  user_data: UserData | null;
}> => {
  try {
    const res = await api.get("/users/me");

    return {
      success: true,
      message: "",
      user_data: res.data,
    };
  } catch (error: any) {
    let errorMessage = "request failed. Please try again later.";

    if (error?.response?.data?.message) {
      if (Array.isArray(error.response.data.message))
        errorMessage = error.response.data.message.join(", ");
      else errorMessage = error.response.data.message;
    } else if (error?.userMessage) errorMessage = error.userMessage;
    else if (error?.message) errorMessage = error.message;

    return { success: false, message: errorMessage, user_data: null };
  }
};

export const getUserGameProgress = async (): Promise<{
  success: boolean;
  message: string;
  game_data: {
    phase: string;
    level: string;
    totalScore: number;
    hasAnswer: boolean;
  } | null;
}> => {
  try {
    const res = await api.get("/gamified/user-progress");

    return {
      success: true,
      message: "",
      game_data: res.data,
    };
  } catch (error: any) {
    let errorMessage = "request failed. Please try again later.";
    if (error?.response?.data?.message) {
      if (Array.isArray(error.response.data.message))
        errorMessage = error.response.data.message.join(", ");
      else errorMessage = error.response.data.message;
    } else if (error?.userMessage) errorMessage = error.userMessage;
    else if (error?.message) errorMessage = error.message;
    return { success: false, message: errorMessage, game_data: null };
  }
};

export const getProTraders = async (
  params?: Record<string, string | number>
): Promise<{
  traders: ProtradersResponse | null;
  error: string | null;
}> => {
  try {
    const queryString = params
      ? "?" +
        Object.entries(params)
          .map(
            ([key, value]) =>
              `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
          )
          .join("&")
      : "";
    const res = await api.get(`/traders${queryString}`);

    return {
      traders: res.data,
      error: null,
    };
  } catch (error: any) {
    let errorMessage = "request failed. Please try again later.";
    if (error?.response?.data?.message) {
      if (Array.isArray(error.response.data.message))
        errorMessage = error.response.data.message.join(", ");
      else errorMessage = error.response.data.message;
    } else if (error?.userMessage) errorMessage = error.userMessage;
    else if (error?.message) errorMessage = error.message;
    return { error: errorMessage, traders: null };
  }
};

export const getProtraderProfileStat = async (
  id: string
): Promise<{
  trader: ProtraderProfileStat | null;
  error: string | null;
}> => {
  try {
    const res = await api.get(`/trade-profile-stats/${id}`);

    return {
      trader: res.data,
      error: null,
    };
  } catch (error: any) {
    let errorMessage = "request failed. Please try again later.";
    if (error?.response?.data?.message) {
      if (Array.isArray(error.response.data.message))
        errorMessage = error.response.data.message.join(", ");
      else errorMessage = error.response.data.message;
    } else if (error?.userMessage) errorMessage = error.userMessage;
    else if (error?.message) errorMessage = error.message;
    return { error: errorMessage, trader: null };
  }
};

export const getProtraderProfilePerformance = async (
  id: string,
  period?: string
): Promise<{
  trader: ProtraderProfilePerformance | null;
  error: string | null;
}> => {
  try {
    const res = await api.get(
      `/trade-profile-performance?userId=${id}${
        period ? `&period=${period}` : ""
      }`
    );

    return {
      trader: res.data,
      error: null,
    };
  } catch (error: any) {
    let errorMessage = "request failed. Please try again later.";
    if (error?.response?.data?.message) {
      if (Array.isArray(error.response.data.message))
        errorMessage = error.response.data.message.join(", ");
      else errorMessage = error.response.data.message;
    } else if (error?.userMessage) errorMessage = error.userMessage;
    else if (error?.message) errorMessage = error.message;
    return { error: errorMessage, trader: null };
  }
};

export const getProtraderDrawdownCurve = async (
  id: string,
  period?: string
): Promise<{
  trader: ProtraderDrawdownCurve | null;
  error: string | null;
}> => {
  try {
    const res = await api.get(
      `/drawdown-curve?userId=${id}${period ? `&period=${Number(period)}` : ""}`
    );

    return {
      trader: res.data,
      error: null,
    };
  } catch (error: any) {
    let errorMessage = "request failed. Please try again later.";
    if (error?.response?.data?.message) {
      if (Array.isArray(error.response.data.message))
        errorMessage = error.response.data.message.join(", ");
      else errorMessage = error.response.data.message;
    } else if (error?.userMessage) errorMessage = error.userMessage;
    else if (error?.message) errorMessage = error.message;
    return { error: errorMessage, trader: null };
  }
};

export const getProtraderPerformanceCurve = async (
  id: string,
  period?: string
): Promise<{
  trader: ProtraderPerformanceCurve | null;
  error: string | null;
}> => {
  try {
    const res = await api.get(
      `/performance-curve?userId=${id}${
        period ? `&period=${Number(period)}` : ""
      }`
    );

    return {
      trader: res.data,
      error: null,
    };
  } catch (error: any) {
    let errorMessage = "request failed. Please try again later.";
    if (error?.response?.data?.message) {
      if (Array.isArray(error.response.data.message))
        errorMessage = error.response.data.message.join(", ");
      else errorMessage = error.response.data.message;
    } else if (error?.userMessage) errorMessage = error.userMessage;
    else if (error?.message) errorMessage = error.message;
    return { error: errorMessage, trader: null };
  }
};

export const clearToken = async () => {
  (await cookies()).delete("streple_auth_token");
  redirect("/login");
};
