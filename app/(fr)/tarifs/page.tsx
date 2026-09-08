import type { Metadata } from "next";
import { PricingPage, pricingMetadata } from "@/components/sections/pricing-page";

export const metadata: Metadata = pricingMetadata("fr");

export default function TarifsPage() {
  return <PricingPage locale="fr" />;
}
