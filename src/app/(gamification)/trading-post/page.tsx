import React from "react";
import TradingPost from "./trading-post";
import { getProTraders } from "@/utils/queries";

export const revalidate = 0;

export default async function page() {
  const { traders, error } = await getProTraders({ limit: 4 });

  return <TradingPost traders={traders} error={error} />;
}
