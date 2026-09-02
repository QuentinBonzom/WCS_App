import type { Metadata } from "next";
import {
  LocalLandingPage,
  localLandingMetadata,
} from "@/components/sections/local-landing-page";

export const metadata: Metadata = localLandingMetadata(
  "refonteSiteInternetMontbeliard",
  "fr",
);

export default function RefonteSiteInternetMontbeliardPage() {
  return <LocalLandingPage pageKey="refonteSiteInternetMontbeliard" />;
}
