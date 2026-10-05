import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Muhammad Moosa Khalil — Full-Stack Software Engineer";
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
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#60a5fa", fontWeight: 700, letterSpacing: 4 }}>
          FULL-STACK SOFTWARE ENGINEER
        </div>
        <div style={{ display: "flex", fontSize: 84, fontWeight: 800, marginTop: 20, lineHeight: 1.05 }}>
          Muhammad Moosa Khalil
        </div>
        <div style={{ display: "flex", fontSize: 32, color: "#cbd5e1", marginTop: 28 }}>
          React.js · Next.js · Node.js · TypeScript · MongoDB · PostgreSQL
        </div>
        <div style={{ display: "flex", gap: 20, marginTop: 56 }}>
          {["4 deployed apps", "NUST COMPPEC award", "Islamabad, Pakistan"].map((t) => (
            <div
              key={t}
              style={{
                display: "flex",
                padding: "12px 24px",
                borderRadius: 999,
                border: "2px solid rgba(96,165,250,0.5)",
                fontSize: 24,
                color: "#e2e8f0",
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}
