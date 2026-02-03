"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const locations = [
  { name: "New York", state: "NY", image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=600&h=400&fit=crop" },
  { name: "Los Angeles", state: "CA", image: "https://images.unsplash.com/photo-1580655653885-65763b2597d0?w=600&h=400&fit=crop" },
  { name: "Austin", state: "TX", image: "https://images.unsplash.com/photo-1531218150217-54595bc2b934?w=600&h=400&fit=crop" },
  { name: "Chicago", state: "IL", image: "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?w=600&h=400&fit=crop" },
];

const testimonials = [
  {
    quote: "Moved in within two weeks of my first inquiry. The whole process was seamless and the apartment exceeded my expectations.",
    name: "Maria J.",
    detail: "New York, NY",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    quote: "After years of dealing with unresponsive landlords and hidden fees, Creeb was a breath of fresh air. Transparent and professional.",
    name: "Aditya K.",
    detail: "Austin, TX",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[100svh] flex items-end">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&h=1080&fit=crop&q=80"
            alt="Modern apartment building"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full">
          <div className="max-w-6xl mx-auto px-6 pb-12 pt-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-2xl"
            >
              <p className="text-sm font-medium text-white/60 uppercase tracking-widest mb-4">
                50+ cities nationwide
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] font-display text-white">
                Modern apartments,
                <br />
                everywhere you
                <br />
                want to be
              </h1>
              <p className="mt-6 text-lg text-white/70 max-w-lg leading-relaxed">
                Verified listings, transparent pricing, and a move-in
                experience that just works.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button asChild size="lg" className="bg-white text-neutral-900 hover:bg-neutral-200 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200">
                  <Link href="/locations">
                    View locations
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="!border-white/30 !text-white !bg-transparent hover:!bg-white/10 dark:!border-white/30 dark:!text-white dark:!bg-transparent dark:hover:!bg-white/10">
                  <Link href="/contact">Contact us</Link>
                </Button>
              </div>
            </motion.div>

            {/* Stats bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 pt-8 border-t border-white/15"
            >
              {[
                { value: "50+", label: "Cities" },
                { value: "10,000+", label: "Residents" },
                { value: "98%", label: "Satisfaction" },
                { value: "24h", label: "Response time" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                >
                  <p className="text-2xl md:text-3xl font-bold tracking-tight font-display text-white">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-white/50">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-6 border-t border-neutral-200 dark:border-neutral-800">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
              How it works
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight font-display text-neutral-900 dark:text-neutral-50">
              Three steps to your new home
            </h2>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                title: "Tell us what you need",
                description: "Share your city, budget, move-in date, and preferences. We narrow down the options for you.",
                image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop",
              },
              {
                step: "02",
                title: "Get matched",
                description: "Our team curates verified apartments that fit your criteria. No spam, just quality options.",
                image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop",
              },
              {
                step: "03",
                title: "Move in",
                description: "We handle the paperwork and coordination. You focus on settling into your new place.",
                image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group"
              >
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-6">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="text-sm font-mono text-neutral-500 dark:text-neutral-400">{item.step}</p>
                <h3 className="mt-2 text-xl font-semibold font-display text-neutral-900 dark:text-neutral-50">{item.title}</h3>
                <p className="mt-2 text-neutral-500 dark:text-neutral-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative aspect-square rounded-2xl overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=800&fit=crop"
                alt="Cozy apartment interior"
                fill
                className="object-cover"
              />
            </motion.div>

            <div>
              <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                Why Creeb
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight font-display text-neutral-900 dark:text-neutral-50">
                Apartment living,
                <br />
                done right
              </h2>
              <p className="mt-4 text-neutral-500 dark:text-neutral-400 leading-relaxed">
                Finding a great apartment shouldn&apos;t be a full-time job.
                We&apos;ve streamlined every step from search to move-in.
              </p>

              <div className="mt-10 grid gap-6">
                {[
                  {
                    icon: MapPin,
                    title: "Nationwide coverage",
                    description: "Apartments in 50+ cities across every region of the country. Go where life takes you.",
                  },
                  {
                    icon: Shield,
                    title: "Verified properties",
                    description: "Every listing and landlord is vetted by our team. No scams, no surprises.",
                  },
                  {
                    icon: Clock,
                    title: "Flexible leasing",
                    description: "Short-term, long-term, or month-to-month. Lease terms that fit your life, not the other way around.",
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex gap-4"
                  >
                    <div className="shrink-0 w-10 h-10 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-neutral-900 dark:text-neutral-50" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">{feature.title}</h3>
                      <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location preview */}
      <section className="py-20 px-6 border-t border-neutral-200 dark:border-neutral-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                Locations
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight font-display text-neutral-900 dark:text-neutral-50">
                Where we are
              </h2>
            </div>
            <Button variant="ghost" asChild>
              <Link href="/locations">
                View all locations
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {locations.map((location, index) => (
              <motion.div
                key={location.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4">
                  <Image
                    src={location.image}
                    alt={location.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                </div>
                <p className="font-semibold text-neutral-900 dark:text-neutral-50">{location.name}</p>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">{location.state}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
            Testimonials
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight font-display text-neutral-900 dark:text-neutral-50">
            What residents say
          </h2>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="p-8 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-2xl"
              >
                <p className="text-lg leading-relaxed text-neutral-900 dark:text-neutral-50">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900 dark:text-neutral-50">{testimonial.name}</p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">{testimonial.detail}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 border-t border-neutral-200 dark:border-neutral-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-display text-neutral-900 dark:text-neutral-50">
                Ready to find your place?
              </h2>
              <p className="mt-4 text-neutral-500 dark:text-neutral-400 leading-relaxed">
                Get in touch and we&apos;ll help you find the right apartment in
                your city. No commitment, no pressure.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-start gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Get started
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <div className="text-sm text-neutral-500 dark:text-neutral-400">
                  <p>Or reach us directly:</p>
                  <p className="mt-1">
                    <a href="mailto:hello@creeb.com" className="text-neutral-900 dark:text-neutral-50 hover:underline">
                      hello@creeb.com
                    </a>
                    {" "}&middot;{" "}
                    <a href="tel:+1-555-123-4567" className="text-neutral-900 dark:text-neutral-50 hover:underline">
                      (555) 123-4567
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop"
                alt="Modern apartment living room"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
