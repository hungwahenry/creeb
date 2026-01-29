"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const campuses = [
  { name: "UCLA", location: "Los Angeles, CA" },
  { name: "MIT", location: "Cambridge, MA" },
  { name: "UT Austin", location: "Austin, TX" },
  { name: "UMich", location: "Ann Arbor, MI" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <Badge variant="secondary" className="mb-6">
              Now available at 50+ campuses
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1]">
              Student housing,
              <br />
              without the hassle
            </h1>
            <p className="mt-6 text-lg text-neutral-500 max-w-xl leading-relaxed">
              We connect students with verified apartments near their campus.
              No endless searching, no scams, no stress.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <Button asChild size="lg">
                <Link href="/campuses">
                  Browse campuses
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <Link href="/contact">Contact us</Link>
              </Button>
            </div>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t"
          >
            {[
              { value: "50+", label: "Partner campuses" },
              { value: "5,000+", label: "Students housed" },
              { value: "98%", label: "Satisfaction rate" },
              { value: "24h", label: "Avg. response time" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-semibold tracking-tight">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-neutral-500">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-6 border-t">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-neutral-500 uppercase tracking-wider">
              How it works
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Three steps to your new home
            </h2>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                title: "Tell us your needs",
                description:
                  "Share your campus, budget, move-in date, and preferences. We handle the rest.",
              },
              {
                step: "02",
                title: "Get matched",
                description:
                  "Our team curates verified listings that fit your criteria. No spam, just options.",
              },
              {
                step: "03",
                title: "Move in",
                description:
                  "We help with the paperwork and logistics. You focus on starting your semester.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <p className="text-sm font-mono text-neutral-400">{item.step}</p>
                <h3 className="mt-3 text-lg font-medium">{item.title}</h3>
                <p className="mt-2 text-neutral-500 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 border-t bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-sm font-medium text-neutral-500 uppercase tracking-wider">
                Why Creeb
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                Built for students,
                <br />
                by people who get it
              </h2>
              <p className="mt-4 text-neutral-500 leading-relaxed">
                Finding housing shouldn&apos;t compete with your coursework.
                We&apos;ve simplified every step of the process.
              </p>
            </div>

            <div className="grid gap-8">
              {[
                {
                  icon: MapPin,
                  title: "Campus-centric",
                  description:
                    "Every listing is within walking distance or a short commute to your classes.",
                },
                {
                  icon: Shield,
                  title: "Verified properties",
                  description:
                    "We personally vet every landlord and property. No scams, guaranteed.",
                },
                {
                  icon: Clock,
                  title: "Flexible terms",
                  description:
                    "Semester-based leases that align with your academic calendar.",
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
                  <div className="shrink-0 w-10 h-10 rounded-lg border bg-white flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-neutral-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">{feature.title}</h3>
                    <p className="mt-1 text-sm text-neutral-500 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Campus preview */}
      <section className="py-20 px-6 border-t">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-neutral-500 uppercase tracking-wider">
                Campuses
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                Where we operate
              </h2>
            </div>
            <Button variant="ghost" asChild>
              <Link href="/campuses">
                View all campuses
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {campuses.map((campus, index) => (
              <motion.div
                key={campus.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                className="p-6 border rounded-xl hover:border-neutral-300 transition-colors"
              >
                <p className="font-medium">{campus.name}</p>
                <p className="mt-1 text-sm text-neutral-500">{campus.location}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 border-t bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-medium text-neutral-500 uppercase tracking-wider">
            Testimonials
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            What students say
          </h2>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {[
              {
                quote:
                  "Found my apartment within a week. The team understood exactly what I needed as a grad student on a budget.",
                name: "Maria J.",
                school: "UCLA, Class of 2024",
              },
              {
                quote:
                  "As an international student, I was worried about getting scammed. Creeb made the process feel safe and straightforward.",
                name: "Aditya K.",
                school: "MIT, Class of 2025",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="p-8 bg-white border rounded-xl"
              >
                <p className="text-lg leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="mt-6">
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm text-neutral-500">{testimonial.school}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 border-t">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight">
              Ready to find your place?
            </h2>
            <p className="mt-4 text-neutral-500 leading-relaxed">
              Get in touch and we&apos;ll help you find the right apartment for your
              next semester. No commitment, no pressure.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-start gap-4">
              <Button asChild size="lg">
                <Link href="/contact">
                  Get started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <div className="text-sm text-neutral-500">
                <p>Or reach us directly:</p>
                <p className="mt-1">
                  <a
                    href="mailto:hello@creeb.com"
                    className="text-neutral-900 hover:underline"
                  >
                    hello@creeb.com
                  </a>
                  {" "}&middot;{" "}
                  <a
                    href="tel:+1-555-123-4567"
                    className="text-neutral-900 hover:underline"
                  >
                    (555) 123-4567
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
