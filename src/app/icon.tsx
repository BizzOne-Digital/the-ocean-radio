import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #063B4A, #087EA4)",
          borderRadius: 8,
        }}
      >
        <div
          style={{
            width: 14,
            height: 14,
            borderRadius: "50%",
            background: "#62D9E8",
            boxShadow: "0 0 12px #18B7D9",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
