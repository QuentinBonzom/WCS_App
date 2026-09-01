import type { Metadata } from "next";
import {
  LocalLandingPage,
  localLandingMetadata,
} from "@/components/sections/local-landing-page";

export const metadata: Metadata = localLandingMetadata("fr");

export default function CreationSiteInternetMontbeliardPage() {
  return <LocalLandingPage />;
}
