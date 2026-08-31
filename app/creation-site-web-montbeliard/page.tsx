import type { Metadata } from "next";
import {
  ServiceLandingPage,
  serviceLandingMetadata,
} from "@/components/service-landing-page";

export const metadata: Metadata = serviceLandingMetadata(
  "creationSiteWebMontbeliard",
);

export default function CreationSiteWebMontbeliardPage() {
  return <ServiceLandingPage pageKey="creationSiteWebMontbeliard" />;
}
