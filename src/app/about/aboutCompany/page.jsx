import React from 'react';
import Link from 'next/link';

const AboutCompany = () => {
  const leadership = [
    {
      name: "Tanvir Ahmed",
      role: "Head of Product & Design",
      bio: "Leading user experience and interface architecture across all DevPeoples platforms.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"
    },
    {
      name: "Farhan Kabir",
      role: "Chief Technology Officer",
      bio: "Overseeing backend infrastructure, API ecosystems, and database scalabilities.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150"
    },
    {
      name: "Ayesha Rahman",
      role: "Frontend Lead",
      bio: "Specializing in Next.js performance optimizations and component-driven libraries.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
    }
  ];

  const values = [
    {
      title: "Open Collaboration",
      description: "We build transparent systems where developers exchange knowledge freely across tech ecosystems.",
      icon: "🤝"
    },
    {
      title: "Engineering Excellence",
      description: "Zero compromises on runtime speed, clean code conventions, and high accessibility standards.",
      icon: "⚡"
    },
    {
      title: "Community First",
      description: "Dedicated to elevating engineers from all experience levels with equal representation and tools.",
      icon: "🌍"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Top Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3.5 py-1.5 rounded-full border border-indigo-100">
            About Our Organization
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-4">
            Building the Infrastructure for Engineers
          </h1>
          <p className="text-slate-500 text-sm sm:text-base mt-3 leading-relaxed">
            DevPeoples is run by a dedicated collective of engineers and designers striving to build nationwide tech visibility.
          </p>
        </div>

        {/* Company Overview Banner */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 sm:p-12 mb-14">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-xs font-bold uppercase text-emerald-600 tracking-wider">
                Who We Are
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
                A modern platform built on performance & transparency
              </h2>
              <p className="text-slate-600 text-sm mt-4 leading-relaxed">
                Founded to bridge developers with teams, DevPeoples provides comprehensive portfolio indexing, 
                real-time directory sorting, and seamless tech-stack discovery for modern software agencies.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 text-xs font-semibold text-slate-700">
                <span className="bg-slate-50 border border-slate-200/80 px-3 py-1.5 rounded-lg">📍 Headquartered in Dhaka</span>
                <span className="bg-slate-50 border border-slate-200/80 px-3 py-1.5 rounded-lg">🚀 Founded 2024</span>
                <span className="bg-slate-50 border border-slate-200/80 px-3 py-1.5 rounded-lg">👥 10+ Engineers</span>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-indigo-50/60 border border-indigo-100 p-6 rounded-xl text-center">
                <span className="block text-3xl font-extrabold text-indigo-600">99.9%</span>
                <span className="text-xs font-medium text-slate-600 mt-1 block">Platform Uptime</span>
              </div>
              <div className="bg-emerald-50/60 border border-emerald-100 p-6 rounded-xl text-center">
                <span className="block text-3xl font-extrabold text-emerald-600">100%</span>
                <span className="text-xs font-medium text-slate-600 mt-1 block">Open Standards</span>
              </div>
              <div className="bg-slate-50 border border-gray-100 p-6 rounded-xl text-center">
                <span className="block text-3xl font-extrabold text-slate-900">&lt;50ms</span>
                <span className="text-xs font-medium text-slate-600 mt-1 block">Routing Latency</span>
              </div>
              <div className="bg-teal-50/60 border border-teal-100 p-6 rounded-xl text-center">
                <span className="block text-3xl font-extrabold text-teal-600">5+</span>
                <span className="text-xs font-medium text-slate-600 mt-1 block">Districts Connected</span>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">Our Core Principles</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {values.map((val, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
                <span className="text-2xl mb-3 block">{val.icon}</span>
                <h3 className="text-base font-bold text-slate-900 mb-2">{val.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Team */}
        <div className="mb-14">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="text-2xl font-bold text-slate-900">Leadership & Maintainers</h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              The engineers steering the roadmap and architecture of DevPeoples.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {leadership.map((person, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm flex flex-col items-center text-center">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-20 h-20 rounded-full object-cover border-2 border-indigo-500 mb-4"
                />
                <h3 className="text-base font-bold text-slate-900">{person.name}</h3>
                <p className="text-xs font-medium text-indigo-600 mb-2">{person.role}</p>
                <p className="text-slate-500 text-xs leading-relaxed">{person.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-white border border-gray-100 rounded-2xl p-8 text-center shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h3 className="text-lg font-bold text-slate-900">Want to join our developer network?</h3>
            <p className="text-xs text-slate-500 mt-1">Submit your portfolio to get featured on the community directory.</p>
          </div>
          <Link
            href="/contact"
            className="whitespace-nowrap px-6 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs transition"
          >
            Get in Touch →
          </Link>
        </div>

      </div>
    </div>
  );
};

export default AboutCompany;