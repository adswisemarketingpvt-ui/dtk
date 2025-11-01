// src/components/GoogleReview.tsx
import React from "react";
import GoogleReviewsWidget from "google-reviews-widget"; // make sure this library is installed or remove if not needed

const GoogleReview: React.FC = () => {
  return (
    <div className="w-full flex justify-center items-center py-6">
      <GoogleReviewsWidget instanceId="9b3sz1U4pQ5IGr8eIAVG" />
    </div>
  );
};

export default GoogleReview;
