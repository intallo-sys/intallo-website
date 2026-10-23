"use client";

import { useEffect } from "react";

/**
 * Backward-compatibility client component for legacy #stayora hash bookmarks.
 * Rewrites the URL hash in history to #nova-house without causing page reloads.
 */
export default function StayoraRedirect() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash === "#stayora") {
      window.history.replaceState(null, "", "#nova-house");
    }
  }, []);

  return null;
}
