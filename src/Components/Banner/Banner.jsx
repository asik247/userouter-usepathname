import React from "react";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="bg-slate-50 border-b border-gray-200 py-20 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">

        {/* Left Side */}
        <div>
          <span className="px-3.5 py-1.5 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wide">
            🚀 Welcome to My Project
          </span>

          <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold text-gray-900 leading-tight">
            Build Modern <br />
            <span className="text-indigo-600">Web Experiences</span>
          </h1>

          <p className="mt-4 text-gray-600 text-base max-w-lg">
            Learn, build and grow with modern technologies like React, Next.js,
            Tailwind CSS and Full-Stack Development.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm transition shadow-sm cursor-pointer">
              Get Started
            </button>
            <button className="px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-100 text-gray-700 font-semibold text-sm transition cursor-pointer">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side Card (Matching Peoples Card) */}
        <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 max-w-md mx-auto w-full">
          <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-5">
            <h3 className="text-lg font-bold text-gray-800">💻 Developer Stats</h3>
            <span className="text-xs bg-green-100 text-green-700 font-bold px-2 py-0.5 rounded-full">
              Live
            </span>
          </div>

          <div className="space-y-3 mb-6">
            <div className="h-3 bg-indigo-600 rounded-full w-3/4"></div>
            <div className="h-3 bg-gray-200 rounded-full w-full"></div>
            <div className="h-3 bg-gray-200 rounded-full w-5/6"></div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 border border-gray-100 p-4 rounded-lg text-center">
              <h4 className="text-2xl font-bold text-green-600">50+</h4>
              <p className="text-xs text-gray-500 mt-1">Total Users</p>
            </div>
            <div className="bg-gray-50 border border-gray-100 p-4 rounded-lg text-center">
              <h4 className="text-2xl font-bold text-indigo-600">100%</h4>
              <p className="text-xs text-gray-500 mt-1">Responsive</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Banner;