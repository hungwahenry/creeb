"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const campuses = [
  { name: "UCLA", location: "Los Angeles, CA", region: "West", listings: 150 },
  { name: "MIT", location: "Cambridge, MA", region: "Northeast", listings: 85 },
  { name: "UT Austin", location: "Austin, TX", region: "South", listings: 120 },
  { name: "UMich", location: "Ann Arbor, MI", region: "Midwest", listings: 95 },
  { name: "Stanford", location: "Stanford, CA", region: "West", listings: 75 },
  { name: "NYU", location: "New York, NY", region: "Northeast", listings: 200 },
  { name: "UW", location: "Seattle, WA", region: "West", listings: 110 },
  { name: "Georgia Tech", location: "Atlanta, GA", region: "South", listings: 90 },
  { name: "UIUC", location: "Champaign, IL", region: "Midwest", listings: 130 },
  { name: "Boston University", location: "Boston, MA", region: "Northeast", listings: 105 },
  { name: "USC", location: "Los Angeles, CA", region: "West", listings: 140 },
  { name: "UF", location: "Gainesville, FL", region: "South", listings: 115 },
];

const regions = ["All", "West", "Northeast", "South", "Midwest"];

export default function CampusesPage() {
  const [selectedRegion, setSelectedRegion] = useState("All");

  const filteredCampuses =
    selectedRegion === "All"
      ? campuses
      : campuses.filter((c) => c.region === selectedRegion);

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-medium text-neutral-500 uppercase tracking-wider">
              Campuses
            </p>
            <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
              Where we operate
            </h1>
            <p className="mt-4 text-neutral-500 max-w-xl">
              We partner with universities across the US to provide verified
              student housing. Select your region or browse all campuses.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="mt-12 flex flex-wrap gap-8">
            {[
              { value: "50+", label: "Campuses" },
              { value: "25", label: "States" },
              { value: "1,500+", label: "Listings" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-baseline gap-2">
                <span className="text-2xl font-semibold">{stat.value}</span>
                <span className="text-sm text-neutral-500">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="px-6 pb-8 sticky top-16 z-40 bg-white border-b">
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-2 overflow-x-auto py-2 -mx-6 px-6">
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={cn(
                  "px-4 py-2 text-sm rounded-md whitespace-nowrap transition-colors",
                  selectedRegion === region
                    ? "bg-neutral-900 text-white"
                    : "text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100"
                )}
              >
                {region}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Campus grid */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedRegion}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {filteredCampuses.map((campus, index) => (
                <motion.div
                  key={campus.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  className="group p-6 border rounded-xl hover:border-neutral-300 transition-colors"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-medium">{campus.name}</h3>
                      <p className="text-sm text-neutral-500 flex items-center gap-1 mt-1">
                        <MapPin className="w-3 h-3" />
                        {campus.location}
                      </p>
                    </div>
                    <Badge variant="secondary">{campus.region}</Badge>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-sm text-neutral-500">
                      {campus.listings} listings
                    </span>
                    <Link
                      href="/contact"
                      className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1"
                    >
                      Inquire
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Request campus */}
      <section className="py-16 px-6 border-t">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 p-8 border rounded-xl bg-neutral-50">
            <div>
              <h2 className="text-xl font-semibold tracking-tight">
                Don&apos;t see your campus?
              </h2>
              <p className="mt-2 text-neutral-500">
                We&apos;re expanding every month. Let us know where you need
                housing.
              </p>
            </div>
            <Button asChild>
              <Link href="/contact">
                Request campus
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 border-t bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight">
              Ready to find housing?
            </h2>
            <p className="mt-4 text-neutral-500 leading-relaxed">
              Get in touch and we&apos;ll help you find the right apartment near
              your campus.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-start gap-4">
              <Button asChild size="lg">
                <Link href="/contact">
                  Get started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <div className="text-sm text-neutral-500">
                <p>Or call us directly:</p>
                <a
                  href="tel:+1-555-123-4567"
                  className="text-neutral-900 hover:underline"
                >
                  (555) 123-4567
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
