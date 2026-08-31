import type { Metadata } from "next";
import {
  ServiceLandingPage,
  serviceLandingMetadata,
} from "@/components/service-landing-page";

export const metadata: Metadata = serviceLandingMetadata("creationSiteVitrine");

export default function CreationSiteVitrinePage() {
  return <ServiceLandingPage pageKey="creationSiteVitrine" />;
}
