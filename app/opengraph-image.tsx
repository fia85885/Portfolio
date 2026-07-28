import { ImageResponse } from "next/og";
import { SITE } from "@/constants/site";

export const alt = `${SITE.name} — ${SITE.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          backgroundColor: "#0B0B0C",
          color: "#FAFAFA",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              backgroundColor: "#FAFAFA",
              color: "#0B0B0C",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            FK
          </div>
          <div style={{ fontSize: 24, color: "#9CA3AF" }}>Portfolio</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: -2 }}>
            {SITE.name}
          </div>
          <div style={{ fontSize: 36, color: "#60A5FA", marginTop: 12 }}>
            {SITE.role}
          </div>
          <div style={{ fontSize: 24, color: "#9CA3AF", marginTop: 24 }}>
            Generative AI · RAG Systems · Agentic AI · Python
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
