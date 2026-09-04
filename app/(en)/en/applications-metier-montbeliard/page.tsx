import type { Metadata } from "next";
import {
  ServiceLandingPage,
  serviceLandingMetadata,
} from "@/components/sections/service-landing-page";

export const metadata: Metadata = serviceLandingMetadata(
  "applicationsMetierMontbeliard",
  "en",
);

export default function EnglishApplicationsMetierMontbeliardPage() {
  return (
    <ServiceLandingPage pageKey="applicationsMetierMontbeliard" locale="en" />
  );
}
