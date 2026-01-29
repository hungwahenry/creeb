"use client";

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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <p className="text-sm font-medium text-neutral-500 uppercase tracking-wider">
              Contact
            </p>
            <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
              Get in touch
            </h1>
            <p className="mt-4 text-neutral-500">
              Have questions about finding housing? We&apos;re here to help.
              Fill out the form or reach us directly.
            </p>
          </motion.div>
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
                    <label className="block text-sm font-medium mb-2">
                      First name
                    </label>
                    <Input placeholder="Jane" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Last name
                    </label>
                    <Input placeholder="Smith" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input type="email" placeholder="jane@university.edu" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Campus
                  </label>
                  <Input placeholder="e.g., UCLA, MIT, UT Austin" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    What can we help with?
                  </label>
                  <select className="flex h-9 w-full rounded-md border border-neutral-200 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950">
                    <option value="">Select a topic</option>
                    <option value="housing">Looking for housing</option>
                    <option value="campus">Request new campus</option>
                    <option value="landlord">I&apos;m a landlord</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    rows={5}
                    placeholder="Tell us about your needs - budget, move-in date, preferences, etc."
                  />
                </div>

                <Button type="submit" className="w-full sm:w-auto">
                  Send message
                </Button>

                <p className="text-sm text-neutral-500">
                  We typically respond within 24 hours.
                </p>
              </form>
            </div>

            {/* Contact info */}
            <div className="lg:col-span-2">
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 border rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-neutral-600" />
                    </div>
                    <h3 className="font-medium">Email</h3>
                  </div>
                  <p className="text-sm text-neutral-500 mb-2">
                    Best for detailed questions
                  </p>
                  <a
                    href="mailto:hello@creeb.com"
                    className="text-sm hover:underline"
                  >
                    hello@creeb.com
                  </a>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 border rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-neutral-600" />
                    </div>
                    <h3 className="font-medium">Phone</h3>
                  </div>
                  <p className="text-sm text-neutral-500 mb-2">
                    Mon-Fri, 9am-6pm EST
                  </p>
                  <a
                    href="tel:+1-555-123-4567"
                    className="text-sm hover:underline"
                  >
                    (555) 123-4567
                  </a>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 border rounded-lg flex items-center justify-center">
                      <Clock className="w-5 h-5 text-neutral-600" />
                    </div>
                    <h3 className="font-medium">Response time</h3>
                  </div>
                  <p className="text-sm text-neutral-500">
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
      <section className="py-16 px-6 border-t bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-neutral-500 uppercase tracking-wider">
              FAQ
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight">
              Common questions
            </h2>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {[
              {
                q: "How does Creeb work?",
                a: "Share your preferences and we match you with verified listings. We handle the legwork so you can focus on school.",
              },
              {
                q: "Is there a fee?",
                a: "Our basic service is free for students. We may charge for premium features like priority matching.",
              },
              {
                q: "How do you verify listings?",
                a: "Every property and landlord goes through our verification process before being listed.",
              },
              {
                q: "What if my campus isn't listed?",
                a: "Contact us to request it. We prioritize based on student demand and expand regularly.",
              },
            ].map((faq, index) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                <h3 className="font-medium mb-2">{faq.q}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
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
