import React from 'react';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Badge & Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3.5 py-1.5 rounded-full border border-indigo-100">
            About DevPeoples
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-4">
            Connecting Tech Talent Across the Nation
          </h1>
          <p className="text-slate-500 text-sm sm:text-base mt-4 leading-relaxed">
            DevPeoples is a centralized directory designed to bridge passionate developers,
            designers, and engineers with collaborative opportunities and modern tech teams.
          </p>
        </div>

        {/* Mission & Vision Card */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 sm:p-10 mb-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-xs font-bold uppercase text-emerald-600 tracking-wider">
                Our Mission
              </span>
              <h2 className="text-2xl font-bold text-slate-900 mt-2">
                Empower Every Developer to Be Seen
              </h2>
              <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                Whether you are crafting clean UIs in Dhaka, setting up CI/CD pipelines in Chittagong,
                or writing backend services in Sylhet, DevPeoples provides a structured profile
                hub to showcase your skills, passions, and individuality.
              </p>
            </div>

            {/* Quick Highlight Stats Box */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-50 border border-gray-100 p-5 rounded-xl text-center">
                <span className="block text-3xl font-extrabold text-indigo-600">10+</span>
                <span className="text-xs font-medium text-slate-500 mt-1 block">Active Profiles</span>
              </div>
              <div className="bg-slate-50 border border-gray-100 p-5 rounded-xl text-center">
                <span className="block text-3xl font-extrabold text-emerald-600">100%</span>
                <span className="text-xs font-medium text-slate-500 mt-1 block">Free & Open</span>
              </div>
              <div className="bg-slate-50 border border-gray-100 p-5 rounded-xl text-center">
                <span className="block text-3xl font-extrabold text-teal-600">6+</span>
                <span className="text-xs font-medium text-slate-500 mt-1 block">Tech Divisions</span>
              </div>
              <div className="bg-slate-50 border border-gray-100 p-5 rounded-xl text-center">
                <span className="block text-3xl font-extrabold text-slate-800">Next.js 15</span>
                <span className="text-xs font-medium text-slate-500 mt-1 block">Powered Stack</span>
              </div>
            </div>
          </div>
        </div>

        {/* Core Pillars / Features Grid */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center text-lg font-bold mb-4">
              ⚡
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1">Dynamic Routing</h3>
            <p className="text-slate-500 text-xs leading-relaxed">
              Fast, server-rendered individual developer profiles powered by Next.js dynamic parameters.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center text-lg font-bold mb-4">
              🎯
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1">Skill & Hobby Focus</h3>
            <p className="text-slate-500 text-xs leading-relaxed">
              Showcasing technical roles along with personal interests, creative hobbies, and locations.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="w-10 h-10 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center text-lg font-bold mb-4">
              📱
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1">Responsive UI</h3>
            <p className="text-slate-500 text-xs leading-relaxed">
              Carefully tuned Tailwind CSS layouts matching high-contrast dark and light themes seamlessly.
            </p>
          </div>
        </div>

        {/* Bottom CTA Box */}
        <div className="bg-indigo-600 text-white rounded-2xl p-8 text-center shadow-lg shadow-indigo-200">
          <h2 className="text-2xl font-bold mb-2">Want to explore all member profiles?</h2>
          <p className="text-indigo-100 text-sm max-w-md mx-auto mb-6">
            Check out our community directory to learn more about the developers and their skillsets.
          </p>
          <Link
            href="/peoples"
            className="inline-block bg-white text-indigo-600 hover:bg-slate-100 font-semibold text-xs py-3 px-6 rounded-xl transition-colors shadow-sm"
          >
            Browse Peoples Directory →
          </Link>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;