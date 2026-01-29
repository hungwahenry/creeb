import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Campuses | Creeb",
  description:
    "Explore student housing options near campuses across the United States.",
};

const campuses = [
  {
    name: "University of California, Los Angeles (UCLA)",
    location: "Los Angeles, CA",
    region: "West Coast",
    listingsCount: 150,
  },
  {
    name: "Massachusetts Institute of Technology (MIT)",
    location: "Cambridge, MA",
    region: "Northeast",
    listingsCount: 85,
  },
  {
    name: "University of Texas at Austin",
    location: "Austin, TX",
    region: "South",
    listingsCount: 120,
  },
  {
    name: "University of Michigan",
    location: "Ann Arbor, MI",
    region: "Midwest",
    listingsCount: 95,
  },
  {
    name: "Stanford University",
    location: "Stanford, CA",
    region: "West Coast",
    listingsCount: 75,
  },
  {
    name: "New York University (NYU)",
    location: "New York, NY",
    region: "Northeast",
    listingsCount: 200,
  },
  {
    name: "University of Washington",
    location: "Seattle, WA",
    region: "West Coast",
    listingsCount: 110,
  },
  {
    name: "Georgia Institute of Technology",
    location: "Atlanta, GA",
    region: "South",
    listingsCount: 90,
  },
  {
    name: "University of Illinois Urbana-Champaign",
    location: "Champaign, IL",
    region: "Midwest",
    listingsCount: 130,
  },
  {
    name: "Boston University",
    location: "Boston, MA",
    region: "Northeast",
    listingsCount: 105,
  },
  {
    name: "University of Southern California (USC)",
    location: "Los Angeles, CA",
    region: "West Coast",
    listingsCount: 140,
  },
  {
    name: "University of Florida",
    location: "Gainesville, FL",
    region: "South",
    listingsCount: 115,
  },
];

const regions = ["All", "West Coast", "Northeast", "South", "Midwest"];

export default function CampusesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-emerald-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Partner Campuses
            </h1>
            <p className="text-lg text-gray-600">
              Find student housing near universities across the United States.
              More campuses are being added regularly.
            </p>
          </div>
        </div>
      </section>

      {/* Campus Stats */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-emerald-600">50+</p>
              <p className="text-gray-600">Partner Campuses</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-emerald-600">25</p>
              <p className="text-gray-600">States Covered</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-emerald-600">1,500+</p>
              <p className="text-gray-600">Available Listings</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-emerald-600">Growing</p>
              <p className="text-gray-600">Every Month</p>
            </div>
          </div>
        </div>
      </section>

      {/* Region Filter */}
      <section className="py-8 bg-gray-50 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {regions.map((region) => (
              <button
                key={region}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  region === "All"
                    ? "bg-emerald-600 text-white"
                    : "bg-white text-gray-700 hover:bg-emerald-50 border border-gray-200"
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {campuses.map((campus) => (
              <div
                key={campus.name}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
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
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <span className="text-xs font-medium px-2 py-1 bg-emerald-50 text-emerald-700 rounded-full">
                    {campus.region}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {campus.name}
                </h3>
                <p className="text-gray-500 text-sm mb-4 flex items-center gap-1">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {campus.location}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-600">
                    <span className="font-semibold text-emerald-600">
                      {campus.listingsCount}
                    </span>{" "}
                    listings available
                  </span>
                  <Link
                    href="/contact"
                    className="text-sm font-medium text-emerald-600 hover:text-emerald-700"
                  >
                    Inquire
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More Campuses Coming */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Don&apos;t See Your Campus?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              We&apos;re expanding to new campuses every month. Let us know
              which university you&apos;re attending and we&apos;ll prioritize
              adding it to our network.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-full font-medium hover:bg-emerald-700 transition-colors"
            >
              Request Your Campus
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Find Housing Near Your Campus?
          </h2>
          <p className="text-lg text-emerald-100 max-w-2xl mx-auto mb-8">
            Contact us today and let our team help you find the perfect
            apartment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-emerald-600 px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </Link>
            <a
              href="tel:+1-555-123-4567"
              className="border-2 border-white text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-emerald-700 transition-colors"
            >
              Call (555) 123-4567
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
