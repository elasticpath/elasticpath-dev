import { useCallback, useEffect, useState } from "react";

declare global {
  interface Window {
    _linkedin_partner_id: string;
    _linkedin_data_partner_ids: string[];
    lintrk: LintrkFunction;
  }

  interface LintrkFunction {
    (action: string, data: object): void;

    q: [string, object][];
  }
}

const LINKEDIN_SCRIPT_PATH =
  "https://snap.licdn.com/li.lms-analytics/insight.min.js";

function useLinkedInInsight(partnerId: string, conversionId?: string) {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    window._linkedin_partner_id = partnerId;
    window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
    window._linkedin_data_partner_ids.push(partnerId);

    // Load the LinkedIn Insight script
    const loadLinkedInScript = () => {
      if (!window.lintrk) {
        window.lintrk = function (action: string, data: object) {
          window.lintrk.q.push([action, data]);
        } as LintrkFunction;
        window.lintrk.q = [];
      }

      // Check if already loaded
      if (document.querySelector(`script[src="${LINKEDIN_SCRIPT_PATH}"]`)) {
        setScriptLoaded(true);
        return;
      } else {
        const firstScriptTag = document.getElementsByTagName("script")[0];
        const linkedInScriptTag = createScript(() => setScriptLoaded(true));

        if (firstScriptTag && firstScriptTag.parentNode) {
          firstScriptTag.parentNode.insertBefore(
            linkedInScriptTag,
            firstScriptTag,
          );
        }
      }
    };

    loadLinkedInScript();
  }, [partnerId]);

  return useCallback(() => {
    if (scriptLoaded && conversionId) {
      window.lintrk("track", { conversion_id: conversionId });
      console.info("Insight Tracked");
    } else {
      console.error(
        "LinkedIn Insight script is not loaded yet, or conversionId is not provided.",
      );
    }
  }, [scriptLoaded, conversionId]);
}

function createScript(callback: () => void) {
  const s = document.createElement("script");
  s.type = "text/javascript";
  s.async = true;
  s.src = LINKEDIN_SCRIPT_PATH;
  s.onload = callback;

  return s;
}

export default useLinkedInInsight;
