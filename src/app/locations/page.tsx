"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const locations = [
  { name: "Manhattan", city: "New York, NY", region: "Northeast", listings: 320, image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=600&h=400&fit=crop" },
  { name: "Downtown LA", city: "Los Angeles, CA", region: "West", listings: 250, image: "https://images.unsplash.com/photo-1580655653885-65763b2597d0?w=600&h=400&fit=crop" },
  { name: "South Loop", city: "Chicago, IL", region: "Midwest", listings: 180, image: "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?w=600&h=400&fit=crop" },
  { name: "Midtown", city: "Atlanta, GA", region: "South", listings: 145, image: "https://images.unsplash.com/photo-1569447891824-7a1758aa73a2?w=600&h=400&fit=crop" },
  { name: "Capitol Hill", city: "Seattle, WA", region: "West", listings: 165, image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&h=400&fit=crop" },
  { name: "Back Bay", city: "Boston, MA", region: "Northeast", listings: 140, image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&h=400&fit=crop" },
  { name: "East Austin", city: "Austin, TX", region: "South", listings: 190, image: "https://images.unsplash.com/photo-1531218150217-54595bc2b934?w=600&h=400&fit=crop" },
  { name: "River North", city: "Denver, CO", region: "West", listings: 130, image: "https://images.unsplash.com/photo-1546156929-a4c0ac411f47?w=600&h=400&fit=crop" },
  { name: "Wicker Park", city: "Chicago, IL", region: "Midwest", listings: 155, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop" },
  { name: "Wynwood", city: "Miami, FL", region: "South", listings: 200, image: "https://images.unsplash.com/photo-1535498730771-e735b998cd64?w=600&h=400&fit=crop" },
  { name: "Pearl District", city: "Portland, OR", region: "West", listings: 120, image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop" },
  { name: "Williamsburg", city: "Brooklyn, NY", region: "Northeast", listings: 275, image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop" },
];

const regions = ["All", "West", "Northeast", "South", "Midwest"];

export default function LocationsPage() {
  const [selectedRegion, setSelectedRegion] = useState("All");

  const filteredLocations =
    selectedRegion === "All"
      ? locations
      : locations.filter((l) => l.region === selectedRegion);

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
            <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
              Locations
            </p>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight font-display text-neutral-900 dark:text-neutral-50">
              Find your city
            </h1>
            <p className="mt-4 text-neutral-500 dark:text-neutral-400 max-w-xl">
              We have apartments in neighborhoods across the country.
              Filter by region or browse all available locations.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="mt-12 flex flex-wrap gap-8">
            {[
              { value: "50+", label: "Cities" },
              { value: "30", label: "States" },
              { value: "2,500+", label: "Listings" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-baseline gap-2">
                <span className="text-2xl font-bold font-display text-neutral-900 dark:text-neutral-50">{stat.value}</span>
                <span className="text-sm text-neutral-500 dark:text-neutral-400">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="px-6 pb-8 sticky top-16 z-40 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-sm border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-2 overflow-x-auto py-2 -mx-6 px-6">
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={cn(
                  "px-4 py-2 text-sm rounded-md whitespace-nowrap transition-colors",
                  selectedRegion === region
                    ? "bg-neutral-900 text-neutral-50 dark:bg-neutral-50 dark:text-neutral-900"
                    : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                )}
              >
                {region}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Locations grid */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedRegion}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredLocations.map((location, index) => (
                <motion.div
                  key={location.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  className="group border border-neutral-200 dark:border-neutral-700 rounded-xl overflow-hidden hover:border-neutral-300 dark:hover:border-neutral-600 transition-colors bg-white dark:bg-neutral-900"
                >
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <Image
                      src={location.image}
                      alt={location.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3">
                      <Badge variant="secondary" className="bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm">
                        {location.region}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">{location.name}</h3>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400 flex items-center gap-1 mt-1">
                          <MapPin className="w-3 h-3" />
                          {location.city}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-3 border-t border-neutral-200 dark:border-neutral-700">
                      <span className="text-sm text-neutral-500 dark:text-neutral-400">
                        {location.listings} listings
                      </span>
                      <Link
                        href="/contact"
                        className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 text-neutral-900 dark:text-neutral-50"
                      >
                        Inquire
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Request location */}
      <section className="py-16 px-6 border-t border-neutral-200 dark:border-neutral-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 p-8 border border-neutral-200 dark:border-neutral-700 rounded-xl bg-neutral-50 dark:bg-neutral-900">
            <div>
              <h2 className="text-xl font-bold tracking-tight font-display text-neutral-900 dark:text-neutral-50">
                Don&apos;t see your city?
              </h2>
              <p className="mt-2 text-neutral-500 dark:text-neutral-400">
                We&apos;re expanding to new cities every month. Let us know where
                you&apos;re looking.
              </p>
            </div>
            <Button asChild>
              <Link href="/contact">
                Request a location
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight font-display text-neutral-900 dark:text-neutral-50">
              Ready to find your apartment?
            </h2>
            <p className="mt-4 text-neutral-500 dark:text-neutral-400 leading-relaxed">
              Get in touch and we&apos;ll help you find the right place in your
              city.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-start gap-4">
              <Button asChild size="lg">
                <Link href="/contact">
                  Get started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <div className="text-sm text-neutral-500 dark:text-neutral-400">
                <p>Or call us directly:</p>
                <a
                  href="tel:+1-555-123-4567"
                  className="text-neutral-900 dark:text-neutral-50 hover:underline"
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
