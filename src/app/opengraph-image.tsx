import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        background: "white",
        color: "#111827",
      }}
    >
      <div
        style={{
          fontSize: 28,
          color: "#2563eb",
          fontWeight: 600,
          marginBottom: 24,
        }}
      >
        Computer Science Student
      </div>

      <div
        style={{
          fontSize: 72,
          fontWeight: 700,
          lineHeight: 1.1,
          maxWidth: 900,
        }}
      >
        Abiodun Adeleke
      </div>

      <div
        style={{
          fontSize: 32,
          color: "#4b5563",
          marginTop: 28,
          maxWidth: 900,
        }}
      >
        Software Development · QA · Data-Focused Technology
      </div>
    </div>,
    size,
  );
}
