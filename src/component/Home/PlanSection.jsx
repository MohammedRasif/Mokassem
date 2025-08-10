import React from "react";
import { CheckCircle, Rocket } from "lucide-react";
import image from "../../image/Vector (3).png";

// PlanCard component
function PlanCard({ plan }) {
  return (
    <div
      className="
        bg-[#1A1A2E] rounded-xl p-8 border border-[#4A4A6A]
        flex flex-col items-center text-center
        transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:border-[#6A6AFF]
        max-w-sm mx-auto h-full
      "
    >
      <h2 className="text-3xl font-bold text-white mb-6">{plan.name}</h2>
      <ul className="space-y-4 text-left w-full mb-8">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-300">
            <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      {/* Add flex-grow to push the button to the bottom */}
      <div className="flex-grow" />
      <button
        className="
          bg-[#6A6AFF] text-white font-semibold py-3 px-8 rounded-lg
          flex items-center justify-center space-x-2 w-full
          transition-colors duration-200 hover:bg-[#5A5AFF]
        "
      >
        <Rocket className="w-5 h-5" />
        <span>{plan.buttonText}</span>
      </button>
      <p
        className="text-xs text-gray-400 mt-8 leading-relaxed w-full"
        style={{ minHeight: "4rem" }} // Ensures consistent spacing for all cards
      >
        {plan.billingInfo.includes("$") ? (
          <>
            You will be charged{" "}
            <span className="font-bold text-white">{plan.price}</span> today
            which will start a new billing cycle. For more information read our{" "}
            <a href="#" className="text-blue-400 hover:underline">
              Teams
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-400 hover:underline">
              Privacy Policy
            </a>
          </>
        ) : (
          plan.billingInfo
        )}
      </p>
    </div>
  );
}

function PlanSection() {
  const plans = [
    {
      name: "Free Plan",
      features: [
        "Basic AI insights",
        "5 searches per month",
        "Preview-style outputs",
        "Basic PESTEL framework",
      ],
      price: "$00.99",
      billingInfo:
        "You will be charged $19.99 today which will start a new billing cycle.",
      buttonText: "Get Started",
    },
    {
      name: "Pro plan",
      features: [
        "Unlimited searches",
        "Full PESTEL reports",
        "File & image uploads",
        "PDF/Excel exports",
        "Advanced AI integration",
      ],
      price: "$44.99",
      billingInfo:
        "You will be charged $44.99 today which will start a new billing cycle.",
      buttonText: "Upgrade",
    },
    {
      name: "Advance plan",
      features: [
        "Basic AI insights",
        "5 searches per month",
        "Preview-style outputs",
        "Basic PESTEL framework",
      ],
      price: "Custom",
      billingInfo:
        "Contact us for a custom quote tailored to your business needs.",
      buttonText: "Contact Sales",
    },
  ];

  return (
    <div className="bg-black py-16 px-4 sm:px-6 lg:px-8 relative" >
      <img
          src={image}
          alt="Planet with rings"
          width={250}
          height={250}
          className="absolute top-10 right-10 mt-0 mr-10 hidden lg:block opacity-40"
        />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-5">
        {/* Header */}
        <div className="text-center mb-12 flex flex-col items-center justify-center">
          <span className="inline-block px-3 py-1 text-xs font-medium rounded-full border border-gray-700 text-gray-400 mb-4">
            Pricing
          </span>
          <h2 className="text-5xl font-semibold bg-gradient-to-r from-white via-gray-300 to-white text-transparent bg-clip-text pb-4 max-w-5xl">
            Choose Your Plan
          </h2>
        </div>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <PlanCard key={index} plan={plan} />
        ))}
      </div>
    </div>
  );
}

export default PlanSection;
