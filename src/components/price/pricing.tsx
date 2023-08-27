"use client";

import { Button } from "./button";
// import { useUser } from "./useUser";
import { subscriptionPlans } from "./subscriptionplan";

import { BoltIcon } from "@heroicons/react/24/solid";
import { Suspense, useState } from "react";
import { cn } from "@/lib/utils";

type BillingInterval = "year" | "month";

type Name = "Free" | "Pro" | "Enterprise";

// Create our number formatter.
const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  // These options are needed to round to whole numbers if that's what you want.
  minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

export interface Plan {
  name: Name;
  cta: string;
  desc: string;
  price: number | string;
  priceAnnual: number | string;
  isMostPop: boolean;
  priceIdMonth: string;
  priceIdYear: string;
  features: string[];
}

const plans: Plan[] = [
  {
    name: "Free" as Name,
    cta: "Current Plan",
    desc: "Perfect for tinkering on passion projects",
    price: 0,
    priceAnnual: 0,
    priceIdMonth: "",
    priceIdYear: "",
    isMostPop: false,
    features: [
      "100,000 logs / month",
      "Detailed User Analytics",
      "Track multiple API keys (soon)",
      "Data Exports (soon)",
      "Email / Slack Alerts (soon)",
      
    ],
  },
  {
    name: "Pro" as Name,
    cta: "Upgrade to Pro",
    desc: "For production apps and teams.",
    price: 20,
    priceAnnual: 15,
    priceIdMonth: "price_1NaV0jB24wj8TkEzdNo0HXp7",
    priceIdYear: "price_1NaV0jB24wj8TkEzGVbNRFHf",
    isMostPop: true,
    features: [
      "Unlimited logs / month",
      "Detailed User Analytics",
      "Track multiple API keys (soon)",
      "Data Exports (soon)",
      "Email / Slack Alerts (soon)",
      "Weekly / Monthly Reports (soon)",
      "Unlimited team members (soon)",
      "Unlimited projects (soon)",
     
    ],
  },
 
  {
    name: "Enterprise" as Name,
    cta: "Contact Us",
    desc: "For large-scale applications managing serious workloads. Let us know what you need and we'll make it happen.",
    price: "Contact Us",
    priceAnnual: "Contact Us",
    priceIdMonth: "",
    priceIdYear: "",
    isMostPop: false,
    features: [
      
      "SOC 2",
      "24/7/365 Priority Support",
      "Priority Feature Requests",
      "Private Slack channel",
    ],
  },
];


const Pricing = () => {
  const user = null;

  const [billingInterval, setBillingInterval] =
    useState<BillingInterval>("month");
    console.log( )

  // const handleCheckout = (plan: Name) => {
  //   console.log("AA");
  //   if (!user) return;
  //   console.log("BB");

  //   if (plan === "Enterprise") {
  //     window.open("https://cal.com/dillionverma/llm-report-demo", "_blank");
  //   } else {
  //     const params = new URLSearchParams({
  //       client_reference_id: user.id,
  //     });

  //     console.log(
  //       plan,
  //       process.env.NODE_ENV,
  //       subscriptionPlans[
  //         process.env.NODE_ENV as "development" | "production" | "test"
  //       ]
  //     );
  //     const paymentLink =
  //       subscriptionPlans[
  //         process.env.NODE_ENV as "development" | "production" | "test"
  //       ][plan.toLowerCase() as "free" | "pro"]["monthly"];
  //     const url = `${paymentLink}?${params.toString()}`;
  //     window.open(url, "_blank");
  //   }
  // };

  return (
    <Suspense>
      <section className="container h-full w-full  flex flex-col justify-center items-center">
        <div className="relative max-w-xl mx-auto sm:text-center">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Simple pricing.
          </h3>
          <div className="mt-3 max-w-xl">
            <p>
              <strong>100k logs free every month.</strong> No credit card
              required.
            </p>
          </div>
        </div>
      
        <div className="grid mt-8 items-start bg-red-600 gap-4 sm:grid-cols-3 sm:space-y-0 xl:grid-cols-3">
  {plans.map((item, idx) => (
    <div
      key={idx}
      className={cn(
        `relative mt-6 grid grid-rows-5 h-full rounded-xl border divide-y sm:mt-0`,
        {
          "border-2 border-primary shadow-xl": item.isMostPop,
        }
      )}
    >
              <div className="flex flex-col gap-4 p-4 justify-between row-span-2">
                {item.isMostPop && (
                  <>
                    <div
                      aria-hidden="true"
                      className="left-1/2 top-0 w-full user-select-none center pointer-events-none absolute h-px max-w-full -translate-x-1/2 -translate-y-1/2 bg-[linear-gradient(90deg,rgba(0,0,0,0)_0%,rgba(255,255,255,0)_0%,rgba(143,143,143,0.67)_50%,rgba(0,0,0,0)_100%)]"
                    />
                    <span className="absolute -top-5 left-0 right-0 mx-auto w-32 rounded-full border bg-white px-3 py-2 text-center text-sm font-semibold text-gray-700 shadow-md">
                      Most popular
                    </span>
                  </>
                )}
                <span className="font-medium text-primary">{item.name}</span>
                <div className="flex flex-col justify-between">
                  <div className={`text-4xl font-semibold text-gray-800`}>
                    {billingInterval === "month"
                      ? item.price === "Contact Us"
                        ? item.price
                        : formatter.format(item.price as number)
                      : item.price === "Contact Us"
                      ? item.price
                      : formatter.format(item.priceAnnual as number)}

                    <span className="text-xl font-normal text-gray-600">
                      {item.price === "Contact Us" ? (
                        ""
                      ) : (
                        <sub className="text-xs">/ month</sub>
                      )}
                    </span>
                  </div>
                </div>
                <p className="flex text-xs">{item.desc}</p>

               
                <Button
                  className={cn("relative group justify-center gap-2 w-full", {
                    "opacity-60": user && item.cta === "Current Plan",
                    "transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2":
                      item.cta !== "Current Plan",
                  })}
                  // onClick={() => handleCheckout(item.name as Name)}
                  // disabled={user && item.cta === "Current Plan"}
                >
                  {item.cta !== "Current Plan" && (
                    <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-60"></span>
                  )}
                  {item.name === "Pro" && <BoltIcon className="h-4 w-4" />}
                  <span>{item.cta}</span>
                </Button>
              </div>
              <ul className="flex flex-col gap-2 p-4 row-span-3">
                <li className="pb-2 font-medium text-gray-800">
                  <p>Features</p>
                </li>
                {item.features.map((featureItem, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-primary"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    {featureItem}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      
      </section>
    </Suspense>
  );
};

export default Pricing;
