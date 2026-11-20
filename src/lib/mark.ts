// The "MK" monogram used for the favicon and the iOS home-screen icon.
// Drawn from shapes (no font), so it stays sharp at every size.
export function markSvg(radius: number): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#12406E"/><stop offset="1" stop-color="#06182A"/></linearGradient></defs><rect width="64" height="64" rx="${radius}" fill="url(#g)"/><g fill="none" stroke="#E6F1F8" stroke-width="5.5" stroke-linejoin="miter" stroke-miterlimit="3" stroke-linecap="butt"><path d="M9.5 43V15l10 14 10-14v28"/><path d="M38.5 15v28M53 15 40 29l13 14"/></g><circle cx="52.5" cy="54" r="3.7" fill="#FF5A2C"/></svg>`;
}

export function markDataUri(radius: number): string {
  return "data:image/svg+xml;base64," + btoa(markSvg(radius));
}
