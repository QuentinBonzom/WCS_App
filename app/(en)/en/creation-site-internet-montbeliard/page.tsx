import type { Metadata } from "next";
import {
  LocalLandingPage,
  localLandingMetadata,
} from "@/components/sections/local-landing-page";

export const metadata: Metadata = localLandingMetadata(
  "creationSiteInternetMontbeliard",
  "en",
);

export default function EnglishCreationSiteInternetMontbeliardPage() {
  return (
    <LocalLandingPage pageKey="creationSiteInternetMontbeliard" locale="en" />
  );
}
