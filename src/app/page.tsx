"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const campuses = [
  { name: "UCLA", location: "Los Angeles, CA", image: "https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?w=600&h=400&fit=crop" },
  { name: "MIT", location: "Cambridge, MA", image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=600&h=400&fit=crop" },
  { name: "UT Austin", location: "Austin, TX", image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop" },
  { name: "UMich", location: "Ann Arbor, MI", image: "https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop" },
];

const testimonials = [
  {
    quote: "Found my apartment within a week. The team understood exactly what I needed as a grad student on a budget.",
    name: "Maria J.",
    school: "UCLA, Class of 2024",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    quote: "As an international student, I was worried about getting scammed. Creeb made the process feel safe and straightforward.",
    name: "Aditya K.",
    school: "MIT, Class of 2025",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="secondary" className="mb-6">
                Now available at 50+ campuses
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] font-display">
                Student housing,
                <br />
                without the hassle
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
                We connect students with verified apartments near their campus.
                No endless searching, no scams, no stress.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button asChild size="lg">
                  <Link href="/campuses">
                    Browse campuses
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact">Contact us</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="relative hidden lg:block"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop"
                  alt="Students studying together"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card border rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">5,000+ students</p>
                    <p className="text-xs text-muted-foreground">found their home</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t"
          >
            {[
              { value: "50+", label: "Partner campuses" },
              { value: "5,000+", label: "Students housed" },
              { value: "98%", label: "Satisfaction rate" },
              { value: "24h", label: "Avg. response time" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold tracking-tight font-display">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured image section */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative aspect-[21/9] rounded-2xl overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=1400&h=600&fit=crop"
              alt="Modern student apartment"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-white/80 text-sm uppercase tracking-wider">Featured</p>
              <p className="text-white text-2xl font-bold font-display mt-1">Modern living spaces designed for students</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-6 border-t">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              How it works
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight font-display">
              Three steps to your new home
            </h2>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                title: "Tell us your needs",
                description: "Share your campus, budget, move-in date, and preferences. We handle the rest.",
                image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop",
              },
              {
                step: "02",
                title: "Get matched",
                description: "Our team curates verified listings that fit your criteria. No spam, just options.",
                image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop",
              },
              {
                step: "03",
                title: "Move in",
                description: "We help with the paperwork and logistics. You focus on starting your semester.",
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
                <p className="text-sm font-mono text-muted-foreground">{item.step}</p>
                <h3 className="mt-2 text-xl font-semibold font-display">{item.title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 border-t bg-secondary/50">
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
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                Why Creeb
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight font-display">
                Built for students,
                <br />
                by people who get it
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Finding housing shouldn&apos;t compete with your coursework.
                We&apos;ve simplified every step of the process.
              </p>

              <div className="mt-10 grid gap-6">
                {[
                  {
                    icon: MapPin,
                    title: "Campus-centric",
                    description: "Every listing is within walking distance or a short commute to your classes.",
                  },
                  {
                    icon: Shield,
                    title: "Verified properties",
                    description: "We personally vet every landlord and property. No scams, guaranteed.",
                  },
                  {
                    icon: Clock,
                    title: "Flexible terms",
                    description: "Semester-based leases that align with your academic calendar.",
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
                    <div className="shrink-0 w-10 h-10 rounded-lg border bg-background flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{feature.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
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

      {/* Campus preview */}
      <section className="py-20 px-6 border-t">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                Campuses
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight font-display">
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
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4">
                  <Image
                    src={campus.image}
                    alt={campus.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                </div>
                <p className="font-semibold">{campus.name}</p>
                <p className="text-sm text-muted-foreground">{campus.location}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 border-t bg-secondary/50">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Testimonials
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight font-display">
            What students say
          </h2>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="p-8 bg-background border rounded-2xl"
              >
                <p className="text-lg leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
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
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.school}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 border-t">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-display">
                Ready to find your place?
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
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
                <div className="text-sm text-muted-foreground">
                  <p>Or reach us directly:</p>
                  <p className="mt-1">
                    <a href="mailto:hello@creeb.com" className="text-foreground hover:underline">
                      hello@creeb.com
                    </a>
                    {" "}&middot;{" "}
                    <a href="tel:+1-555-123-4567" className="text-foreground hover:underline">
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
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop"
                alt="Happy students"
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
