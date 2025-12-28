// src/components/GoogleReview.tsx
import { useEffect } from "react";

const GoogleReview = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://featurable.com/assets/bundle.js";
    script.async = true;
    script.defer = true;
    script.charset = "UTF-8";

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full flex justify-center items-center py-6">
      <div
        id="featurable-d9d004b9-1058-4cfe-865c-52456eb653d0"
        data-featurable-async
        className="w-full max-w-5xl"
      />
    </div>
  );
};

export default GoogleReview;
