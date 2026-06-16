import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/seo";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = (searchParams.get("title") || siteConfig.name).slice(0, 96);
  const label = (searchParams.get("label") || "Studio web premium").slice(0, 42);
  const logoUrl = new URL(siteConfig.logoPath, request.url).toString();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, #f5f5f7 0%, #ffffff 48%, #d8ebff 100%)",
          color: "#1d1d1f",
          padding: "64px",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            fontSize: "28px",
            fontWeight: 700,
          }}
        >
          <img
            src={logoUrl}
            alt="WebCode Studio"
            style={{
              width: "150px",
              height: "100px",
              objectFit: "contain",
            }}
          />
          <span>Studio web premium</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          <div
            style={{
              alignSelf: "flex-start",
              borderRadius: "999px",
              background: "rgba(0, 113, 227, 0.12)",
              color: "#005bb5",
              padding: "12px 22px",
              fontSize: "24px",
              fontWeight: 700,
            }}
          >
            {label}
          </div>
          <div
            style={{
              maxWidth: "980px",
              fontSize: title.length > 58 ? "58px" : "68px",
              lineHeight: 1.04,
              letterSpacing: "-1.6px",
              fontWeight: 800,
            }}
          >
            {title}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "#424245",
            fontSize: "26px",
            fontWeight: 600,
          }}
        >
          <span>Montbéliard · France · International</span>
          <span>{siteConfig.url.replace(/^https?:\/\//, "")}</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
