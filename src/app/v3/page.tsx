import type { Metadata } from "next";
import PortfolioV3 from "@/components/PortfolioV3";
import "../v2/v2-overrides.css";

export const metadata: Metadata = {
  title: "Portfolio V3 — Content Field Map",
  description: "Content-mapping version of the portfolio with technical field labels.",
};

export default function V3Page() {
  return <PortfolioV3 />;
}
