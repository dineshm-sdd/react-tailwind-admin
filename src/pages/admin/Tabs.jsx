import React, { useState } from 'react';
import {
    Home,
    User,
    Settings,
    Bell,
    Mail,
    Calendar,
    FileText,
    BarChart,
    Shield,
    Zap
} from 'lucide-react';
import { cn } from '../../utils/cn';

const Tabs = () => {
    const [activeTab1, setActiveTab1] = useState('home');
    const [activeTab2, setActiveTab2] = useState('profile');
    const [activeTab3, setActiveTab3] = useState('overview');
    const [activeTab4, setActiveTab4] = useState('general');

    const basicTabs = [
        { id: 'home', label: 'Home', icon: Home },
        { id: 'profile', label: 'Profile', icon: User },
        { id: 'settings', label: 'Settings', icon: Settings },
        { id: 'notifications', label: 'Notifications', icon: Bell }
    ];

    const pillTabs = [
        { id: 'profile', label: 'Profile', icon: User },
        { id: 'messages', label: 'Messages', icon: Mail, badge: 5 },
        { id: 'calendar', label: 'Calendar', icon: Calendar },
        { id: 'documents', label: 'Documents', icon: FileText }
    ];

    const underlineTabs = [
        { id: 'overview', label: 'Overview', icon: BarChart },
        { id: 'analytics', label: 'Analytics', icon: Zap },
        { id: 'security', label: 'Security', icon: Shield },
        { id: 'settings', label: 'Settings', icon: Settings }
    ];

    const verticalTabs = [
        { id: 'general', label: 'General', description: 'Basic settings', icon: Settings },
        { id: 'profile', label: 'Profile', description: 'Personal info', icon: User },
        { id: 'notifications', label: 'Notifications', description: 'Alert preferences', icon: Bell },
        { id: 'security', label: 'Security', description: 'Privacy & security', icon: Shield }
    ];

    return (
        <div className="max-w-7xl mx-auto space-y-6 pb-12">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">Tabs</h1>
                <p className="text-slate-500 dark:text-slate-400 font-medium text-sm">
                    Tab components with different styles and layouts
                </p>
            </div>

            <div className="space-y-6">
                {/* Basic Tabs */}
                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-slate-200 dark:border-slate-800">
                        <h3 className="font-bold text-slate-900 dark:text-white">Basic Tabs</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Simple tab navigation with icons</p>
                    </div>
                    <div className="p-6">
                        <div className="border-b border-slate-200 dark:border-slate-700">
                            <div className="flex gap-1 -mb-px overflow-x-auto">
                                {basicTabs.map((tab) => {
                                    const Icon = tab.icon;
                                    return (
                                        <button
                                            key={tab.id}
                                            onClick={() => setActiveTab1(tab.id)}
                                            className={cn(
                                                "flex items-center gap-2 px-4 py-3 text-sm font-bold border-b-2 transition-all whitespace-nowrap",
                                                activeTab1 === tab.id
                                                    ? "border-indigo-600 text-indigo-600 dark:text-indigo-400"
                                                    : "border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:border-slate-300 dark:hover:border-slate-600"
                                            )}
                                        >
                                            <Icon className="h-4 w-4" />
                                            {tab.label}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="mt-6">
                            <div className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                                <h4 className="font-bold text-slate-900 dark:text-white mb-2">
                                    {basicTabs.find(t => t.id === activeTab1)?.label} Content
                                </h4>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    This is the content for the {basicTabs.find(t => t.id === activeTab1)?.label.toLowerCase()} tab.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pill Tabs */}
                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-slate-200 dark:border-slate-800">
                        <h3 className="font-bold text-slate-900 dark:text-white">Pill Tabs</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Rounded tabs with badges</p>
                    </div>
                    <div className="p-6">
                        <div className="flex gap-2 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl overflow-x-auto">
                            {pillTabs.map((tab) => {
                                const Icon = tab.icon;
                                return (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab2(tab.id)}
                                        className={cn(
                                            "flex items-center gap-2 px-4 py-2.5 text-sm font-bold rounded-lg transition-all whitespace-nowrap relative",
                                            activeTab2 === tab.id
                                                ? "bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-sm"
                                                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
                                        )}
                                    >
                                        <Icon className="h-4 w-4" />
                                        {tab.label}
                                        {tab.badge && (
                                            <span className="ml-1 px-1.5 py-0.5 bg-indigo-600 text-white text-xs font-bold rounded-full">
                                                {tab.badge}
                                            </span>
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                        <div className="mt-6">
                            <div className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                                <h4 className="font-bold text-slate-900 dark:text-white mb-2">
                                    {pillTabs.find(t => t.id === activeTab2)?.label} Content
                                </h4>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    This is the content for the {pillTabs.find(t => t.id === activeTab2)?.label.toLowerCase()} tab.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Underline Tabs */}
                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-slate-200 dark:border-slate-800">
                        <h3 className="font-bold text-slate-900 dark:text-white">Underline Tabs</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Clean underline style tabs</p>
                    </div>
                    <div className="p-6">
                        <div className="flex gap-6 border-b border-slate-200 dark:border-slate-700 overflow-x-auto">
                            {underlineTabs.map((tab) => {
                                const Icon = tab.icon;
                                return (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab3(tab.id)}
                                        className={cn(
                                            "flex items-center gap-2 px-1 py-3 text-sm font-bold border-b-2 transition-all whitespace-nowrap -mb-px",
                                            activeTab3 === tab.id
                                                ? "border-indigo-600 text-indigo-600 dark:text-indigo-400"
                                                : "border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
                                        )}
                                    >
                                        <Icon className="h-4 w-4" />
                                        {tab.label}
                                    </button>
                                );
                            })}
                        </div>
                        <div className="mt-6">
                            <div className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl border border-indigo-100 dark:border-indigo-800">
                                <h4 className="font-bold text-slate-900 dark:text-white mb-2">
                                    {underlineTabs.find(t => t.id === activeTab3)?.label} Content
                                </h4>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    This is the content for the {underlineTabs.find(t => t.id === activeTab3)?.label.toLowerCase()} tab.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Vertical Tabs */}
                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-slate-200 dark:border-slate-800">
                        <h3 className="font-bold text-slate-900 dark:text-white">Vertical Tabs</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Sidebar-style vertical navigation</p>
                    </div>
                    <div className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            <div className="md:col-span-1 space-y-1">
                                {verticalTabs.map((tab) => {
                                    const Icon = tab.icon;
                                    return (
                                        <button
                                            key={tab.id}
                                            onClick={() => setActiveTab4(tab.id)}
                                            className={cn(
                                                "w-full flex items-start gap-3 px-4 py-3 text-left rounded-xl transition-all",
                                                activeTab4 === tab.id
                                                    ? "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400"
                                                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800"
                                            )}
                                        >
                                            <Icon className="h-5 w-5 mt-0.5 flex-shrink-0" />
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-bold">{tab.label}</p>
                                                <p className="text-xs text-slate-500 dark:text-slate-500 mt-0.5">
                                                    {tab.description}
                                                </p>
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>
                            <div className="md:col-span-3">
                                <div className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
                                    <h4 className="font-bold text-slate-900 dark:text-white mb-2">
                                        {verticalTabs.find(t => t.id === activeTab4)?.label} Settings
                                    </h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                                        {verticalTabs.find(t => t.id === activeTab4)?.description}
                                    </p>
                                    <div className="space-y-4">
                                        <div>
                                            <label className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 block">
                                                Setting Name
                                            </label>
                                            <input
                                                type="text"
                                                className="w-full px-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm"
                                                placeholder="Enter value..."
                                            />
                                        </div>
                                        <button className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold rounded-xl transition-all">
                                            Save Changes
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Compact Tabs */}
                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-slate-200 dark:border-slate-800">
                        <h3 className="font-bold text-slate-900 dark:text-white">Compact Tabs</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Space-efficient tab design</p>
                    </div>
                    <div className="p-6">
                        <div className="inline-flex gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-lg">
                            <button className="px-3 py-1.5 bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 text-xs font-bold rounded-md shadow-sm">
                                All
                            </button>
                            <button className="px-3 py-1.5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 text-xs font-bold rounded-md">
                                Active
                            </button>
                            <button className="px-3 py-1.5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 text-xs font-bold rounded-md">
                                Completed
                            </button>
                            <button className="px-3 py-1.5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 text-xs font-bold rounded-md">
                                Archived
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tabs;
