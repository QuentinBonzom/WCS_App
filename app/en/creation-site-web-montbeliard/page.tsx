import type { Metadata } from "next";
import {
  ServiceLandingPage,
  serviceLandingMetadata,
} from "@/components/sections/service-landing-page";

export const metadata: Metadata = serviceLandingMetadata(
  "creationSiteWebMontbeliard",
  "en",
);

export default function EnglishCreationSiteWebMontbeliardPage() {
  return <ServiceLandingPage pageKey="creationSiteWebMontbeliard" locale="en" />;
}
