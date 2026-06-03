import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "GHXSTSHIP — Venture Beyond";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#060815",
          color: "#FBFAF6",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 60,
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 18, letterSpacing: 8, color: "#E9A23B", textTransform: "uppercase" }}>
            G H X S T S H I P
          </div>
          <div style={{ fontSize: 14, letterSpacing: 6, color: "#FF2E88", textTransform: "uppercase" }}>
            ◆ Now Departing
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 18, letterSpacing: 6, color: "#21D4D4", textTransform: "uppercase", marginBottom: 16 }}>
            Production · Operations · Technology
          </div>
          <div style={{ fontSize: 144, lineHeight: 0.9, fontWeight: 900, color: "#FBFAF6", textTransform: "uppercase", letterSpacing: -2 }}>
            <span style={{ color: "#E9A23B" }}>V</span>enture
            <br />
            <span style={{ color: "#E9A23B" }}>B</span>eyond.
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ fontSize: 18, letterSpacing: 4, color: "#B9C0E0", textTransform: "uppercase" }}>
            Miami · New York · Chicago · Los Angeles
          </div>
          <div style={{ fontSize: 18, letterSpacing: 4, color: "#E9A23B" }}>ghxstship.tours</div>
        </div>
      </div>
    ),
    size
  );
}
