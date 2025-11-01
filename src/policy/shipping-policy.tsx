// src/pages/ShippingPolicy.tsx
import React from "react";
import { useEffect } from "react";

const ShippingPolicy: React.FC = () => {

   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="min-h-screen bg-amber-50 text-[#2e0e02] py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-center mb-6 border-b-2 border-amber-300 pb-3">
          Shipping Policy – DTK Footwear
        </h1>

        <p className="text-gray-700 mb-4">
          At <span className="font-semibold">DTK Footwear</span>, we aim to
          deliver your order safely and on time, wherever you are in India.
          Please read the following shipping details carefully before placing
          your order.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3 text-[#2e0e02]">
          1. Shipping Coverage
        </h2>
        <p className="text-gray-700 mb-4">
          We currently deliver across most locations in India through trusted
          courier partners. If your pincode is not serviceable, our team will
          inform you before dispatch.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3 text-[#2e0e02]">
          2. Shipping Charges
        </h2>
        <p className="text-gray-700 mb-4">
          Shipping charges are not included in the product price and vary
          depending on your delivery location and order weight. The exact
          shipping charge will be shared with you over WhatsApp or call after
          order confirmation.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3 text-[#2e0e02]">
          3. Order Processing Time
        </h2>
        <p className="text-gray-700 mb-4">
          All confirmed orders are usually processed within{" "}
          <span className="font-semibold">1–2 business days</span> after payment
          confirmation.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3 text-[#2e0e02]">
          4. Delivery Timeline
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          <li>2–5 business days for major cities and towns</li>
          <li>5–8 business days for other or remote areas</li>
        </ul>
        <p className="text-gray-700 mb-4">
          Delays may occur due to courier availability, weather conditions, or
          local restrictions.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3 text-[#2e0e02]">
          5. Tracking Your Order
        </h2>
        <p className="text-gray-700 mb-4">
          After dispatch, we’ll share your tracking details via WhatsApp or
          email so you can check your shipment status anytime.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3 text-[#2e0e02]">
          6. Damaged or Delayed Shipments
        </h2>
        <p className="text-gray-700 mb-4">
          If your order arrives damaged or delayed beyond the expected time,
          please contact us within{" "}
          <span className="font-semibold">48 hours of delivery</span> at{" "}
          <a
            href="mailto:contact@dtkfootwear.com"
            className="text-amber-600 underline"
          >
            contact@dtkfootwear.com
          </a>{" "}
          or call <span className="font-semibold">+91 9765758830</span> /{" "}
          <span className="font-semibold">+91 9021220354</span>.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3 text-[#2e0e02]">
          7. International Shipping
        </h2>
        <p className="text-gray-700 mb-4">
          Currently, we do not provide international shipping. Orders are
          fulfilled only within India.
        </p>

        <div className="mt-8 border-t border-amber-200 pt-6">
          <h2 className="text-xl font-semibold mb-3 text-[#2e0e02]">
            Need Help?
          </h2>
          <p className="text-gray-700 mb-2">
            For any questions about shipping or delivery, please reach out to
            us at:
          </p>
          <ul className="list-none text-gray-700 space-y-1">
            <li>
              📩{" "}
              <a
                href="mailto:contact@dtkfootwear.com"
                className="text-amber-600 underline"
              >
                contact@dtkfootwear.com
              </a>
            </li>
            <li>📞 +91 9765758830 / +91 9021220354</li>
          </ul>
        </div>

        <p className="text-center text-sm text-gray-500 mt-8">
          Last updated on October 30, 2025
        </p>
      </div>
    </div>
  );
};

export default ShippingPolicy;
