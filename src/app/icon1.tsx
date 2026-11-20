import { ImageResponse } from "next/og";
import { markDataUri } from "@/lib/mark";

export const runtime = "edge";
export const size = { width: 96, height: 96 };
export const contentType = "image/png";

// PNG fallback favicon for browsers that do not use the SVG icon.
export default function Icon() {
  return new ImageResponse(
    (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={markDataUri(15)} width={96} height={96} alt="" />
    ),
    size
  );
}
