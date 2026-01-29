import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Creeb",
  description:
    "Learn about Creeb's mission to help students find quality, affordable housing near their campus.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-emerald-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Creeb
            </h1>
            <p className="text-lg text-gray-600">
              We&apos;re on a mission to make student housing simple, safe, and
              affordable.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Creeb was founded by a group of students who experienced
                  firsthand the frustrations of finding quality housing near
                  campus. From scam listings to overpriced apartments, we knew
                  there had to be a better way.
                </p>
                <p>
                  We built Creeb to be the platform we wished existed when we
                  were searching for housing. A place where students can find
                  verified, affordable apartments close to their campus, with
                  transparent pricing and trustworthy landlords.
                </p>
                <p>
                  Today, we&apos;re helping thousands of students across the US
                  find their home away from home. And we&apos;re just getting
                  started.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <p className="text-4xl font-bold text-emerald-600">50+</p>
                  <p className="text-gray-600 mt-2">Partner Campuses</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-emerald-600">5,000+</p>
                  <p className="text-gray-600 mt-2">Students Housed</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-emerald-600">98%</p>
                  <p className="text-gray-600 mt-2">Satisfaction Rate</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-emerald-600">24/7</p>
                  <p className="text-gray-600 mt-2">Support Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do at Creeb.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-emerald-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Trust</h3>
              <p className="text-gray-600">
                We verify every listing and landlord to ensure you&apos;re
                getting exactly what you see. No scams, no hidden fees.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-emerald-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Affordability
              </h3>
              <p className="text-gray-600">
                We understand student budgets. We work hard to bring you options
                that won&apos;t break the bank.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-emerald-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Community
              </h3>
              <p className="text-gray-600">
                We&apos;re building more than a platform. We&apos;re creating a
                community of students helping students.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet the Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We&apos;re a passionate team dedicated to solving student housing
              challenges.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: "Alex Chen", role: "Founder & CEO", initials: "AC" },
              { name: "Jordan Smith", role: "Head of Operations", initials: "JS" },
              { name: "Maya Patel", role: "Student Relations", initials: "MP" },
              { name: "Chris Johnson", role: "Tech Lead", initials: "CJ" },
            ].map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-semibold text-emerald-600">
                    {member.initials}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-900">{member.name}</h3>
                <p className="text-gray-500 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Find Your Home?
          </h2>
          <p className="text-lg text-emerald-100 max-w-2xl mx-auto mb-8">
            Get in touch with our team and let us help you find the perfect
            student apartment.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-emerald-600 px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
