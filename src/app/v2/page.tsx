import type { Metadata } from "next";
import PortfolioV2 from "@/components/PortfolioV2";
import "./v2-overrides.css";

export const metadata: Metadata = {
  title: "Anirudh Rastogi — Management Consultant (v2)",
  description:
    "Portfolio v2 — refined editorial layout for Anirudh Rastogi, management consultant.",
};

export default function V2Page() {
  return <PortfolioV2 />;
}
