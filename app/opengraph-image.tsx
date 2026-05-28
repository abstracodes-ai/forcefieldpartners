import { ImageResponse } from "next/og";

import { BRAND_NAME } from "@/lib/site-content";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          position: "relative",
          background:
            "radial-gradient(circle at top left, rgba(66, 214, 224, 0.22), transparent 28%), radial-gradient(circle at top right, rgba(17, 74, 145, 0.24), transparent 32%), linear-gradient(135deg, #06101f 0%, #0c1b31 52%, #0f223f 100%)",
          color: "white",
          fontFamily: "sans-serif",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
            opacity: 0.28,
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            padding: "58px 64px",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <div
              style={{
                width: "78px",
                height: "78px",
                borderRadius: "24px",
                border: "1px solid rgba(255,255,255,0.16)",
                background: "rgba(255,255,255,0.05)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 24px 60px rgba(0,0,0,0.2)",
                overflow: "hidden",
              }}
            >
              <svg
                width="62"
                height="62"
                viewBox="0 0 128 128"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  width: "62px",
                  height: "62px",
                }}
              >
                <defs>
                  <linearGradient id="shield" x1="35" y1="24" x2="89" y2="105" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#F2C870" />
                    <stop offset="1" stopColor="#B07A31" />
                  </linearGradient>
                  <linearGradient id="ring" x1="18" y1="64" x2="110" y2="64" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#0A8FC6" />
                    <stop offset="1" stopColor="#31E3DB" />
                  </linearGradient>
                </defs>
                <ellipse cx="64" cy="64" rx="44" ry="32" stroke="url(#ring)" strokeWidth="6" opacity="0.9" />
                <path
                  d="M64 22L88 32V59C88 77.3 77.9 93.8 64 101C50.1 93.8 40 77.3 40 59V32L64 22Z"
                  stroke="url(#shield)"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M54 44H72M54 56H68M54 44V82"
                  stroke="url(#shield)"
                  strokeWidth="7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", fontSize: 46, fontWeight: 700, lineHeight: 1.02 }}>
                Force<span style={{ color: "#5BE9F1" }}>Field</span>
              </div>
              <div
                style={{
                  marginTop: "8px",
                  fontSize: 14,
                  letterSpacing: "0.38em",
                  textTransform: "uppercase",
                  color: "rgba(198,214,234,0.84)",
                }}
              >
                Partners LLP
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              maxWidth: "860px",
            }}
          >
            <div
              style={{
                fontSize: 18,
                fontWeight: 700,
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                color: "#6AEFF5",
              }}
            >
              Field Execution • DevOps • Workflow Automation
            </div>
            <div
              style={{
                fontSize: 66,
                lineHeight: 1.02,
                fontWeight: 700,
                letterSpacing: "-0.04em",
              }}
            >
              Execution teams for the field, cloud, and AI era.
            </div>
            <div
              style={{
                fontSize: 26,
                lineHeight: 1.45,
                color: "rgba(224,233,244,0.86)",
                maxWidth: "920px",
              }}
            >
              {`${BRAND_NAME} delivers field execution teams, DevOps services, MLOps support, and business workflow automation for modern businesses.`}
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
