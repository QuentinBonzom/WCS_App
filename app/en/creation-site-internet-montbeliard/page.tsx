import type { Metadata } from "next";
import {
  LocalLandingPage,
  localLandingMetadata,
} from "@/components/sections/local-landing-page";

export const metadata: Metadata = localLandingMetadata("en");

export default function EnglishCreationSiteInternetMontbeliardPage() {
  return <LocalLandingPage locale="en" />;
}
