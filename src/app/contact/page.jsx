'use client';
import React, { useState } from 'react';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', subject: '', message: '' });
        }, 4000);
    };

    return (
        <div className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">

                {/* Header Section */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3.5 py-1.5 rounded-full border border-indigo-100">
                        Get In Touch
                    </span>
                    <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-4">
                        Let’s Build Together
                    </h1>
                    <p className="text-slate-500 text-sm sm:text-base mt-3 leading-relaxed">
                        Have questions, want to join the DevPeoples community, or looking to collaborate? Drop us a message below.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Left Column: Contact Cards */}
                    <div className="space-y-4">

                        {/* Direct Email Card */}
                        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex items-start gap-4">
                            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-lg shrink-0">
                                ✉️
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-slate-900">Email Us</h3>
                                <p className="text-xs text-slate-500 mt-0.5">We respond within 24 business hours.</p>
                                <a href="mailto:support@devpeoples.com" className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 mt-2 block">
                                    support@devpeoples.com
                                </a>
                            </div>
                        </div>

                        {/* Community Hub Card */}
                        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex items-start gap-4">
                            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-lg shrink-0">
                                🌍
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-slate-900">Developer Hub</h3>
                                <p className="text-xs text-slate-500 mt-0.5">Headquarters & Tech Coordination</p>
                                <span className="text-xs font-semibold text-slate-700 mt-2 block">
                                    Dhanmondi, Dhaka, Bangladesh
                                </span>
                            </div>
                        </div>

                        {/* Platform Status */}
                        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex items-start gap-4">
                            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center font-bold text-lg shrink-0">
                                ⚡
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-slate-900">Live Support</h3>
                                <p className="text-xs text-slate-500 mt-0.5">Open discussion & platform issues</p>
                                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full mt-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                    Systems Operational
                                </span>
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Interactive Form */}
                    <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-md p-8 sm:p-10">
                        {submitted ? (
                            <div className="h-full flex flex-col items-center justify-center text-center py-12">
                                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-2xl font-bold mb-4">
                                    ✓
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">Message Received!</h3>
                                <p className="text-slate-500 text-xs sm:text-sm mt-1 max-w-sm">
                                    Thanks for reaching out. One of our community moderators will get back to you shortly.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            placeholder="e.g. Tanvir Ahmed"
                                            className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-slate-800"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            placeholder="you@domain.com"
                                            className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-slate-800"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.subject}
                                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                        placeholder="e.g. Join the Developer Directory / Project Collaboration"
                                        className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-slate-800"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                                        Your Message
                                    </label>
                                    <textarea
                                        required
                                        rows={5}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        placeholder="Tell us about yourself, your stack, or the project you want to build..."
                                        className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-slate-800 resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full sm:w-auto px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs uppercase tracking-wider rounded-xl transition-all shadow-sm hover:shadow-indigo-200 cursor-pointer"
                                >
                                    Send Message →
                                </button>
                            </form>
                        )}
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ContactPage;