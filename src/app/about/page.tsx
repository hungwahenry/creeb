"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <p className="text-sm font-medium text-neutral-500 uppercase tracking-wider">
              About
            </p>
            <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
              Making student housing
              <br />
              less stressful
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 px-6 border-t">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-16">
            <div className="lg:col-span-3">
              <div className="prose prose-neutral max-w-none">
                <p className="text-lg text-neutral-600 leading-relaxed">
                  Creeb started with a simple observation: finding student housing
                  is unnecessarily complicated. Between scam listings, unresponsive
                  landlords, and prices that don&apos;t match student budgets, the
                  whole process felt broken.
                </p>
                <p className="mt-6 text-neutral-600 leading-relaxed">
                  We built Creeb to fix that. Our team personally vets every property
                  and landlord on our platform. We negotiate student-friendly lease
                  terms. And we&apos;re always available to help when things go wrong.
                </p>
                <p className="mt-6 text-neutral-600 leading-relaxed">
                  Today, we work with over 50 campuses across the US. But our
                  mission remains the same: help students find a place to call home
                  so they can focus on what matters.
                </p>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "50+", label: "Campuses" },
                  { value: "5,000+", label: "Students" },
                  { value: "98%", label: "Satisfaction" },
                  { value: "2021", label: "Founded" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    className="p-6 border rounded-xl"
                  >
                    <p className="text-2xl font-semibold tracking-tight">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm text-neutral-500">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-6 border-t bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-neutral-500 uppercase tracking-wider">
              Values
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              What guides us
            </h2>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Transparency first",
                description:
                  "No hidden fees, no bait-and-switch. What you see is what you get, every time.",
              },
              {
                title: "Students over profits",
                description:
                  "We optimize for student satisfaction, not commission. That's why students trust us.",
              },
              {
                title: "Always improving",
                description:
                  "We actively seek feedback and iterate. The platform you use today is better than yesterday.",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <h3 className="font-medium">{value.title}</h3>
                <p className="mt-2 text-neutral-500 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-6 border-t">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-neutral-500 uppercase tracking-wider">
              Team
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              The people behind Creeb
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Alex Chen", role: "Founder & CEO" },
              { name: "Jordan Smith", role: "Operations" },
              { name: "Maya Patel", role: "Student Relations" },
              { name: "Chris Johnson", role: "Engineering" },
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                <div className="aspect-square bg-neutral-100 rounded-xl mb-4" />
                <p className="font-medium">{member.name}</p>
                <p className="text-sm text-neutral-500">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 border-t bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                Want to work with us?
              </h2>
              <p className="mt-2 text-neutral-500">
                We&apos;re always looking for ways to help more students.
              </p>
            </div>
            <Button asChild>
              <Link href="/contact">
                Get in touch
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
