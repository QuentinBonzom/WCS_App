import type { Metadata } from "next";
import {
  ServiceLandingPage,
  serviceLandingMetadata,
} from "@/components/sections/service-landing-page";

export const metadata: Metadata = serviceLandingMetadata(
  "applicationsMetierMontbeliard",
  "fr",
);

export default function ApplicationsMetierMontbeliardPage() {
  return (
    <ServiceLandingPage pageKey="applicationsMetierMontbeliard" locale="fr" />
  );
}
