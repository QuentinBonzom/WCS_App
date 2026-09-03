import type { Metadata } from "next";
import {
  ServiceLandingPage,
  serviceLandingMetadata,
} from "@/components/sections/service-landing-page";

export const metadata: Metadata = serviceLandingMetadata(
  "creationSiteVitrine",
  "en",
);

export default function EnglishCreationSiteVitrinePage() {
  return <ServiceLandingPage pageKey="creationSiteVitrine" locale="en" />;
}
