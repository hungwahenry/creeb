"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                Contact
              </p>
              <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight font-display text-neutral-900 dark:text-neutral-50">
                Get in touch
              </h1>
              <p className="mt-4 text-neutral-500 dark:text-neutral-400">
                Looking for an apartment? Have a question? We&apos;d love to
                hear from you. Fill out the form or reach us directly.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden hidden lg:block"
            >
              <Image
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop"
                alt="Modern apartment interior"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact form and info */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-neutral-900 dark:text-neutral-50">
                      First name
                    </label>
                    <Input placeholder="Jane" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-neutral-900 dark:text-neutral-50">
                      Last name
                    </label>
                    <Input placeholder="Smith" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-neutral-900 dark:text-neutral-50">
                    Email
                  </label>
                  <Input type="email" placeholder="jane@example.com" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-neutral-900 dark:text-neutral-50">
                    City / Location
                  </label>
                  <Input placeholder="e.g., New York, Los Angeles, Chicago" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-neutral-900 dark:text-neutral-50">
                    What can we help with?
                  </label>
                  <select className="flex h-9 w-full rounded-md border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-950 px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 dark:focus-visible:ring-neutral-300 text-neutral-900 dark:text-neutral-50">
                    <option value="">Select a topic</option>
                    <option value="renting">Looking for an apartment</option>
                    <option value="location">Request new location</option>
                    <option value="landlord">I&apos;m a property owner</option>
                    <option value="partnership">Partnership inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-neutral-900 dark:text-neutral-50">
                    Message
                  </label>
                  <Textarea
                    rows={5}
                    placeholder="Tell us what you're looking for - budget, move-in date, preferences, etc."
                  />
                </div>

                <Button type="submit" className="w-full sm:w-auto">
                  Send message
                </Button>

                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  We typically respond within 24 hours.
                </p>
              </form>
            </div>

            {/* Contact info */}
            <div className="lg:col-span-2">
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 border border-neutral-200 dark:border-neutral-700 rounded-lg flex items-center justify-center bg-white dark:bg-neutral-900">
                      <Mail className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />
                    </div>
                    <h3 className="font-medium text-neutral-900 dark:text-neutral-50">Email</h3>
                  </div>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">
                    Best for detailed questions
                  </p>
                  <a
                    href="mailto:hello@creeb.com"
                    className="text-sm hover:underline text-neutral-900 dark:text-neutral-50"
                  >
                    hello@creeb.com
                  </a>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 border border-neutral-200 dark:border-neutral-700 rounded-lg flex items-center justify-center bg-white dark:bg-neutral-900">
                      <Phone className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />
                    </div>
                    <h3 className="font-medium text-neutral-900 dark:text-neutral-50">Phone</h3>
                  </div>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">
                    Mon-Fri, 9am-6pm EST
                  </p>
                  <a
                    href="tel:+1-555-123-4567"
                    className="text-sm hover:underline text-neutral-900 dark:text-neutral-50"
                  >
                    (555) 123-4567
                  </a>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 border border-neutral-200 dark:border-neutral-700 rounded-lg flex items-center justify-center bg-white dark:bg-neutral-900">
                      <Clock className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />
                    </div>
                    <h3 className="font-medium text-neutral-900 dark:text-neutral-50">Response time</h3>
                  </div>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    We aim to respond within 24 hours during business days.
                    Urgent? Call us directly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
              FAQ
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight font-display text-neutral-900 dark:text-neutral-50">
              Common questions
            </h2>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {[
              {
                q: "How does Creeb work?",
                a: "Tell us your preferences and we match you with verified apartments. We handle the legwork so you can focus on what matters.",
              },
              {
                q: "Is there a fee?",
                a: "Our basic search service is free. We may charge for premium features like priority matching and concierge move-in support.",
              },
              {
                q: "How do you verify listings?",
                a: "Every property and landlord goes through our vetting process including in-person inspections before being listed.",
              },
              {
                q: "What if my city isn't listed?",
                a: "Contact us to request it. We prioritize expansion based on demand and add new cities regularly.",
              },
            ].map((faq, index) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                <h3 className="font-semibold mb-2 text-neutral-900 dark:text-neutral-50">{faq.q}</h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
