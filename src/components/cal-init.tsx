"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

export const CAL_LINK = "sbusiness-kvxqhq";

export function CalInit() {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi();
      cal("ui", {
        theme: "dark",
        hideEventTypeDetails: false,
        layout: "month_view",
        styles: {
          branding: { brandColor: "#ebedf2" },
        },
      });
    })();
  }, []);

  return null;
}
