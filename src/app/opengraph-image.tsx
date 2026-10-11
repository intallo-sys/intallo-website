import { ImageResponse } from "next/og";

export const alt = "Intallo — Turn Manual Work Into Digital Solutions";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#07090D",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Ambient Radial Glow */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "-80px",
            width: "550px",
            height: "550px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(26,118,255,0.3) 0%, transparent 70%)",
          }}
        />

        {/* Top Branding Strip */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: "52px",
              height: "52px",
              borderRadius: "14px",
              background: "linear-gradient(135deg, #0C34C5 0%, #1A76FF 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontWeight: 800,
              fontSize: "30px",
            }}
          >
            I
          </div>
          <span style={{ fontSize: "36px", fontWeight: 700, color: "white", letterSpacing: "-0.5px" }}>
            Intallo
          </span>
          <div
            style={{
              marginLeft: "12px",
              padding: "6px 18px",
              borderRadius: "9999px",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "#93c5fd",
              fontSize: "14px",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            Systems &amp; Automation
          </div>
        </div>

        {/* Center Tagline & Proposition */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "980px" }}>
          <div
            style={{
              fontSize: "64px",
              fontWeight: 800,
              color: "white",
              lineHeight: 1.1,
              letterSpacing: "-2px",
            }}
          >
            Turn Manual Work Into Digital Solutions.
          </div>
          <div
            style={{
              fontSize: "24px",
              color: "#94a3b8",
              lineHeight: 1.45,
            }}
          >
            High-performance web platforms, custom operational systems, and automated workflows engineered for growing businesses.
          </div>
        </div>

        {/* Bottom Metadata Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            paddingTop: "32px",
            borderTop: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <div style={{ display: "flex", gap: "36px", fontSize: "16px", color: "#64748b", fontWeight: 500 }}>
            <span>Bengaluru, India</span>
            <span>Next.js &amp; Edge Stack</span>
            <span>You Own What We Build</span>
          </div>
          <div style={{ color: "#38bdf8", fontSize: "20px", fontWeight: 700, letterSpacing: "-0.5px" }}>
            intallo.in
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
