import type { Metadata } from "next";
import {
  LocalLandingPage,
  localLandingMetadata,
} from "@/components/sections/local-landing-page";

export const metadata: Metadata = localLandingMetadata(
  "refonteSiteInternetMontbeliard",
  "en",
);

export default function EnglishRefonteSiteInternetMontbeliardPage() {
  return (
    <LocalLandingPage pageKey="refonteSiteInternetMontbeliard" locale="en" />
  );
}
