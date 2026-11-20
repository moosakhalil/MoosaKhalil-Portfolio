import { ImageResponse } from "next/og";
import { markDataUri } from "@/lib/mark";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// iOS home-screen icon. iOS rounds the corners itself, so the tile is full-bleed.
export default function AppleIcon() {
  return new ImageResponse(
    (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={markDataUri(0)} width={180} height={180} alt="" />
    ),
    size
  );
}
