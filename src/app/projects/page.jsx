import React from 'react';
import Link from 'next/link';

const Projects = () => {
    const projectList = [
        {
            id: 1,
            title: "DevPeoples Directory",
            description: "A centralized community portal for software engineers with dynamic profile routing and tech tagging.",
            category: "Full-Stack",
            tech: ["Next.js 15", "React 19", "Tailwind CSS"],
            author: "Ayesha Rahman",
            status: "Production",
            link: "/peoples"
        },
        {
            id: 2,
            title: "CloudPulse Monitoring",
            description: "Real-time DevOps observability dashboard tracking cluster metrics and server latency across regions.",
            category: "DevOps",
            tech: ["Node.js", "Docker", "Prometheus", "Tailwind"],
            author: "Rakibul Karim",
            status: "Beta",
            link: "#"
        },
        {
            id: 3,
            title: "CyberSentinel CTF Engine",
            description: "An automated cybersecurity contest platform featuring interactive capture-the-flag network challenges.",
            category: "Security",
            tech: ["Python", "Docker", "Next.js", "Redis"],
            author: "Zubair Mahmud",
            status: "Active",
            link: "#"
        },
        {
            id: 4,
            title: "DesignCraft UI Kit",
            description: "A comprehensive Figma and Tailwind component library tailored for fast-paced design teams.",
            category: "UI/UX",
            tech: ["Figma", "Tailwind CSS", "React"],
            author: "Tanvir Ahmed",
            status: "Completed",
            link: "#"
        },
        {
            id: 5,
            title: "ApiBridge Engine",
            description: "High-throughput microservices gateway ensuring zero-downtime database interactions.",
            category: "Backend",
            tech: ["Node.js", "PostgreSQL", "GraphQL"],
            author: "Farhan Kabir",
            status: "Production",
            link: "#"
        },
        {
            id: 6,
            title: "FitTrack Mobile",
            description: "Cross-platform mobile application providing automated workout logging and sync capabilities.",
            category: "Mobile",
            tech: ["React Native", "Expo", "Firebase"],
            author: "Shakil Hasan",
            status: "Beta",
            link: "#"
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3.5 py-1.5 rounded-full border border-indigo-100">
                        Showcase
                    </span>
                    <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-4">
                        Built by Our Community
                    </h1>
                    <p className="text-slate-500 text-sm sm:text-base mt-3">
                        Explore cutting-edge applications, developer tools, and products created by DevPeoples members.
                    </p>
                </div>

                {/* Project Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projectList.map((project) => (
                        <div
                            key={project.id}
                            className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col justify-between"
                        >
                            <div>
                                {/* Meta Top: Category & Status */}
                                <div className="flex items-center justify-between gap-2 mb-4">
                                    <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md">
                                        {project.category}
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                        {project.status}
                                    </span>
                                </div>

                                {/* Title & Description */}
                                <h3 className="text-lg font-bold text-slate-900 mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-5">
                                    {project.description}
                                </p>

                                {/* Tech Badges */}
                                <div className="flex flex-wrap gap-1.5 mb-6">
                                    {project.tech.map((t, idx) => (
                                        <span
                                            key={idx}
                                            className="text-[11px] font-mono font-medium bg-slate-50 text-slate-600 border border-slate-200/80 px-2 py-0.5 rounded-md"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Card Footer */}
                            <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
                                <span className="text-slate-400">
                                    By <strong className="text-slate-700 font-semibold">{project.author}</strong>
                                </span>
                                <Link
                                    href={project.link}
                                    className="inline-flex items-center gap-1 font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
                                >
                                    View Details →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Projects;