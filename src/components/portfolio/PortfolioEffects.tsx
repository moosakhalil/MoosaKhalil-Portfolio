"use client";

import { useEffect } from "react";
import { initPortfolio } from "./initPortfolio";

export default function PortfolioEffects() {
  useEffect(() => initPortfolio(), []);
  return null;
}
