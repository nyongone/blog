import React from "react";
import Script from "next/script";

const GoogleAdsense = () => {
  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID}`}
      crossOrigin="anonymous"
    ></Script>
  );
};

export default GoogleAdsense;
