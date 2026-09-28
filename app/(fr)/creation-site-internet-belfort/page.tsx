import type { Metadata } from "next";
import {
  LocalLandingPage,
  localLandingMetadata,
} from "@/components/sections/local-landing-page";

export const metadata: Metadata = localLandingMetadata(
  "creationSiteInternetBelfort",
  "fr",
);

export default function CreationSiteInternetBelfortPage() {
  return <LocalLandingPage pageKey="creationSiteInternetBelfort" />;
}
