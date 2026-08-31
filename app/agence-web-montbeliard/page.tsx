import type { Metadata } from "next";
import {
  ServiceLandingPage,
  serviceLandingMetadata,
} from "@/components/service-landing-page";

export const metadata: Metadata = serviceLandingMetadata("agenceWebMontbeliard");

export default function AgenceWebMontbeliardPage() {
  return <ServiceLandingPage pageKey="agenceWebMontbeliard" />;
}
