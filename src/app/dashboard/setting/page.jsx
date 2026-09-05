'use client';
import React, { useState } from 'react';

const Setting = () => {
    const [profile, setProfile] = useState({
        adminName: 'Super Admin',
        email: 'admin@devpeoples.com',
        role: 'System Administrator',
    });

    const [notifications, setNotifications] = useState({
        emailAlerts: true,
        newRegistration: true,
        weeklyReport: false,
    });

    const [saved, setSaved] = useState(false);

    const handleSave = (e) => {
        e.preventDefault();
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
    };

    return (
        <div className="space-y-8 max-w-4xl">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Platform Settings</h1>
                <p className="text-xs text-slate-500 mt-1">
                    Manage system controls, administrator details, and notification preferences.
                </p>
            </div>

            {saved && (
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-xs font-semibold text-emerald-700 flex items-center justify-between">
                    <span>✓ Settings updated successfully!</span>
                    <span className="text-[10px] font-normal">All changes active</span>
                </div>
            )}

            {/* Admin Profile Details */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
                <h2 className="text-base font-bold text-slate-900 mb-1">Administrator Profile</h2>
                <p className="text-xs text-slate-500 mb-6">Update contact info for platform-level alerts</p>

                <form onSubmit={handleSave} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                                Display Name
                            </label>
                            <input
                                type="text"
                                value={profile.adminName}
                                onChange={(e) => setProfile({ ...profile, adminName: e.target.value })}
                                className="w-full px-4 py-2.5 bg-slate-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-slate-800"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                                Notification Email
                            </label>
                            <input
                                type="email"
                                value={profile.email}
                                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                                className="w-full px-4 py-2.5 bg-slate-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-slate-800"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                            Role Permission
                        </label>
                        <input
                            type="text"
                            disabled
                            value={profile.role}
                            className="w-full px-4 py-2.5 bg-slate-100 border border-gray-200 rounded-xl text-xs text-slate-500 cursor-not-allowed"
                        />
                    </div>

                    <div className="pt-2">
                        <button
                            type="submit"
                            className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs rounded-xl shadow-sm transition cursor-pointer"
                        >
                            Save Profile
                        </button>
                    </div>
                </form>
            </div>

            {/* Notification Controls */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
                <h2 className="text-base font-bold text-slate-900 mb-1">Alerts & System Preferences</h2>
                <p className="text-xs text-slate-500 mb-6">Choose which activities notify the operations team</p>

                <div className="space-y-4">
                    <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-gray-100">
                        <div>
                            <h4 className="text-xs font-bold text-slate-800">Email Alerts on Transactions</h4>
                            <p className="text-[11px] text-slate-500">Send dispatch notification whenever a client pays a bill</p>
                        </div>
                        <input
                            type="checkbox"
                            checked={notifications.emailAlerts}
                            onChange={(e) => setNotifications({ ...notifications, emailAlerts: e.target.checked })}
                            className="w-4 h-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500 cursor-pointer"
                        />
                    </div>

                    <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-gray-100">
                        <div>
                            <h4 className="text-xs font-bold text-slate-800">New Developer Registrations</h4>
                            <p className="text-[11px] text-slate-500">Trigger alert upon submission of a new developer card</p>
                        </div>
                        <input
                            type="checkbox"
                            checked={notifications.newRegistration}
                            onChange={(e) => setNotifications({ ...notifications, newRegistration: e.target.checked })}
                            className="w-4 h-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500 cursor-pointer"
                        />
                    </div>

                    <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-gray-100">
                        <div>
                            <h4 className="text-xs font-bold text-slate-800">Weekly System Digest</h4>
                            <p className="text-[11px] text-slate-500">Summarize site visitor stats and popular search queries</p>
                        </div>
                        <input
                            type="checkbox"
                            checked={notifications.weeklyReport}
                            onChange={(e) => setNotifications({ ...notifications, weeklyReport: e.target.checked })}
                            className="w-4 h-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500 cursor-pointer"
                        />
                    </div>
                </div>
            </div>

            {/* Danger Zone */}
            <div className="bg-white rounded-2xl border border-rose-100 shadow-sm p-6 sm:p-8">
                <h2 className="text-base font-bold text-rose-600 mb-1">Danger Zone</h2>
                <p className="text-xs text-slate-500 mb-5">Destructive actions for cache and directory storage</p>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-rose-50/50 border border-rose-100">
                    <div>
                        <h4 className="text-xs font-bold text-slate-900">Clear Cache & Temporary Records</h4>
                        <p className="text-[11px] text-slate-500">Reset server parameters and clear temporary analytics buffers</p>
                    </div>
                    <button
                        onClick={() => alert('Directory cache purged successfully!')}
                        className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white font-semibold text-xs rounded-xl shadow-sm transition shrink-0 cursor-pointer"
                    >
                        Purge Cache
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Setting;