"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const team = [
  { name: "Alex Chen", role: "Founder & CEO", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop" },
  { name: "Jordan Smith", role: "Operations", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop" },
  { name: "Maya Patel", role: "Resident Experience", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop" },
  { name: "Chris Johnson", role: "Engineering", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop" },
];

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
            <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
              About
            </p>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight leading-tight font-display text-neutral-900 dark:text-neutral-50">
              Better apartments,
              <br />
              better living
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Hero image */}
      <section className="px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative aspect-[21/9] rounded-2xl overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&h=600&fit=crop"
              alt="Modern apartment building exterior"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 px-6 border-t border-neutral-200 dark:border-neutral-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
                Creeb started with a simple idea: renting an apartment should be
                straightforward, transparent, and fair. Too many people deal with
                hidden fees, unresponsive management, and listings that don&apos;t
                match reality.
              </p>
              <p className="mt-6 text-neutral-500 dark:text-neutral-400 leading-relaxed">
                We built Creeb to change that. Every property on our platform is
                personally verified. Every landlord meets our standards. And our
                team is always available when you need us.
              </p>
              <p className="mt-6 text-neutral-500 dark:text-neutral-400 leading-relaxed">
                Today, we operate in over 50 cities across the US, helping
                thousands of people find apartments they actually love. Our
                mission is simple: make renting better for everyone.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "50+", label: "Cities" },
                { value: "10,000+", label: "Residents" },
                { value: "98%", label: "Satisfaction" },
                { value: "2021", label: "Founded" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  className="p-6 border border-neutral-200 dark:border-neutral-700 rounded-xl bg-white dark:bg-neutral-900"
                >
                  <p className="text-3xl font-bold tracking-tight font-display text-neutral-900 dark:text-neutral-50">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-6 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop"
                alt="Team collaboration"
                fill
                className="object-cover"
              />
            </motion.div>

            <div>
              <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                Values
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight font-display text-neutral-900 dark:text-neutral-50">
                What guides us
              </h2>

              <div className="mt-10 space-y-8">
                {[
                  {
                    title: "Transparency first",
                    description: "No hidden fees, no bait-and-switch. What you see is what you get, every time.",
                  },
                  {
                    title: "Residents over profits",
                    description: "We optimize for resident satisfaction, not commissions. That's why people trust us.",
                  },
                  {
                    title: "Always improving",
                    description: "We actively seek feedback and iterate. The experience you have today is better than yesterday.",
                  },
                ].map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <h3 className="font-semibold text-lg text-neutral-900 dark:text-neutral-50">{value.title}</h3>
                    <p className="mt-2 text-neutral-500 dark:text-neutral-400 leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-6 border-t border-neutral-200 dark:border-neutral-800">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
              Team
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight font-display text-neutral-900 dark:text-neutral-50">
              The people behind Creeb
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                className="group"
              >
                <div className="relative aspect-square rounded-xl overflow-hidden mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="font-semibold text-neutral-900 dark:text-neutral-50">{member.name}</p>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold tracking-tight font-display text-neutral-900 dark:text-neutral-50">
                Want to work with us?
              </h2>
              <p className="mt-2 text-neutral-500 dark:text-neutral-400">
                Whether you&apos;re looking for an apartment or a partnership, we&apos;d love to hear from you.
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
