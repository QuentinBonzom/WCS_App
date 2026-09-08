import type { Metadata } from "next";
import { PricingPage, pricingMetadata } from "@/components/sections/pricing-page";

export const metadata: Metadata = pricingMetadata("en");

export default function EnglishPricingPage() {
  return <PricingPage locale="en" />;
}
