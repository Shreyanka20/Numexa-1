"use client";

import { Icons } from "./icons";
import { buttonVariants } from "../price/button";
import { cn } from "@/lib/utils";
import { List } from "lucide-react";
import Link from "next/link";

const features = [
  {
    id: "feature-openai",
    header: "Analyze",
    name: "What do we do?",
    description:
      "Numexa offers observability solutions to companies engaged in both LLM development and LLM utilization.",
    icon: Icons.openai,
    video: "https://cdn.llm.report/openai-demo.mp4",
    cta: "Get Started",
    href: "/login",
    reverse: false,
  },
  {
    id: "feature-logs",
    header: "Optimize",
    name: "Real-time observability",
    description:
      "A platform agnostic observability application for large language models with a user-friendly dashboard for visualizing logs and metrics in real-time.",
    icon: List,
    video: "https://cdn.llm.report/logs-demo.mp4",
    cta: "Get Started",
    href: "/login",
    reverse: true,
  },
  {
    id: "feature-users",
    header: "Minimize",
    name: "Cost control & Optimisation",
    description:
      "Numexa provides a detail cost breakdown of your AI operations. It intelligently generates cost-optimization recommendation to optimize your spending on AI operations.",
    icon: Icons.user,
    video: "https://cdn.llm.report/users-demo.mp4",
    cta: "Get Started",
    href: "/login",
    reverse: false,
  },
];

const FeatureSections = () => {
  return (
    <>
      {features.map((feature) => (
        <section id={feature.id} key={feature.id}>
          <div className="mx-auto px-6 py-6 sm:py-20">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-16 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5">
              <div
                className={cn("m-auto lg:col-span-2", {
                  "lg:order-last": feature.reverse,
                })}
              >
                <h2 className="text-base font-semibold leading-7 text-blue-900">
                  {feature.header}
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-cyan-600 sm:text-4xl">
                  {feature.name}
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  {feature.description}
                </p>
                <Link
                  className={cn(
                    buttonVariants({
                      variant: "default",
                      size: "lg",
                    }),
                    "mt-8"
                  )}
                  href={feature.href}
                >
                  {feature.cta}
                </Link>
              </div>
              <video
                src={feature.video}
                autoPlay
                loop
                muted
                className="rounded-xl border m-auto lg:col-span-3 shadow-2xl"
              />
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default FeatureSections;
