import type { Metadata } from "next";
import {
  LocalLandingPage,
  localLandingMetadata,
} from "@/components/sections/local-landing-page";

export const metadata: Metadata = localLandingMetadata(
  "creationSiteInternetBelfort",
  "en",
);

export default function EnglishCreationSiteInternetBelfortPage() {
  return <LocalLandingPage pageKey="creationSiteInternetBelfort" locale="en" />;
}
