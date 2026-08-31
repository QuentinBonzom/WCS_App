import type { Metadata } from "next";
import {
  ServiceLandingPage,
  serviceLandingMetadata,
} from "@/components/sections/service-landing-page";

export const metadata: Metadata = serviceLandingMetadata(
  "agenceWebMontbeliard",
  "en",
);

export default function EnglishAgenceWebMontbeliardPage() {
  return <ServiceLandingPage pageKey="agenceWebMontbeliard" locale="en" />;
}
