// src/pages/ReturnPolicy.tsx
import React, { useEffect } from "react";

const ReturnPolicy: React.FC = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-amber-50 text-[#2e0e02] py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-center mb-6 border-b-2 border-amber-300 pb-3">
          Return Policy – DTK Footwear
        </h1>

        <p className="text-gray-700 mb-4">
          At <span className="font-semibold">DTK Footwear</span>, customer
          satisfaction is our top priority. If you are not fully satisfied with
          your purchase, we offer a convenient return option for the following
          reasons:
        </p>

        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          <li>Incorrect size</li>
          <li>Manufacturing defects</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-3 text-[#2e0e02]">
          Return Window
        </h2>
        <p className="text-gray-700 mb-4">
          You may request a return within{" "}
          <span className="font-semibold">30 days</span> from the date of
          delivery or purchase.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3 text-[#2e0e02]">
          Conditions for Return
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          <li>
            Shoes must be unused, unworn, and in their original packaging with
            tags attached.
          </li>
          <li>
            Returns are not accepted for shoes that show signs of use, wear, or
            damage.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-3 text-[#2e0e02]">
          Return Charges
        </h2>
        <p className="text-gray-700 mb-4">
          A <span className="font-semibold">₹20 advance charge</span> applies
          for return processing. The customer is responsible for arranging and
          paying for shipping of the returned item.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3 text-[#2e0e02]">
          Return Process
        </h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-2 mb-4">
          <li>
            Contact our customer support within 30 days of delivery to request a
            return.
          </li>
          <li>
            Ensure the shoes are securely packed with the original box and tags.
          </li>
          <li>
            Ship the product to our address as instructed by the support team.
          </li>
          <li>
            Once received and inspected, eligible returns will be processed as
            per policy.
          </li>
        </ol>

        <h2 className="text-xl font-semibold mt-8 mb-3 text-[#2e0e02]">
          Warranty
        </h2>
        <p className="text-gray-700 mb-4">
          All DTK Footwear products come with a{" "}
          <span className="font-semibold">1-year warranty</span> for
          manufacturing defects, separate from the general 30-day return policy.
        </p>

        <div className="mt-8 border-t border-amber-200 pt-6">
          <h2 className="text-xl font-semibold mb-3 text-[#2e0e02]">
            Need Help?
          </h2>
          <p className="text-gray-700 mb-2">
            If you have questions or need assistance, please contact our
            customer service team:
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

export default ReturnPolicy;
