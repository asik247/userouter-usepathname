import React from "react";

const Banner = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-white px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <span className="px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-400 text-sm font-medium">
            🚀 Welcome to My Project
          </span>

          <h1 className="mt-6 text-5xl md:text-7xl font-extrabold leading-tight">
            Build Modern
            <span className="block text-emerald-400">
              Web Experiences
            </span>
          </h1>

          <p className="mt-6 text-slate-300 text-lg max-w-xl">
            Learn, build and grow with modern technologies like React,
            Next.js, Tailwind CSS and Full-Stack Development.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 transition font-semibold">
              Get Started
            </button>

            <button className="px-6 py-3 rounded-xl border border-slate-700 hover:border-emerald-400 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="relative flex justify-center">
          <div className="w-80 h-80 rounded-full bg-emerald-500/20 blur-3xl absolute"></div>

          <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">
              💻 Developer Dashboard
            </h3>

            <div className="space-y-4">
              <div className="h-4 bg-emerald-400 rounded-full w-3/4"></div>
              <div className="h-4 bg-slate-600 rounded-full"></div>
              <div className="h-4 bg-slate-600 rounded-full w-5/6"></div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-slate-800 p-4 rounded-xl">
                  <h4 className="text-3xl font-bold text-emerald-400">
                    50+
                  </h4>
                  <p className="text-sm text-slate-400">Projects</p>
                </div>

                <div className="bg-slate-800 p-4 rounded-xl">
                  <h4 className="text-3xl font-bold text-emerald-400">
                    100%
                  </h4>
                  <p className="text-sm text-slate-400">Responsive</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Banner;