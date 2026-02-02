import React from 'react';
import {
    Users,
    ShoppingBag,
    BarChart3,
    ArrowUpRight,
    ArrowDownRight,
    TrendingUp,
    Activity,
    DollarSign
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    AreaChart,
    Area
} from 'recharts';

const data = [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 300 },
    { name: 'Mar', value: 600 },
    { name: 'Apr', value: 800 },
    { name: 'May', value: 500 },
    { name: 'Jun', value: 900 },
];

const StatCard = ({ title, value, change, trend, icon: Icon, color }) => (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm shadow-slate-200/50 dark:shadow-none transition-colors">
        <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-xl ${color} bg-opacity-10 dark:bg-opacity-20`}>
                <Icon className={`h-6 w-6 ${color.replace('bg-', 'text-')} dark:text-opacity-90`} />
            </div>
            <div className={`flex items-center gap-1 text-sm font-semibold ${trend === 'up' ? 'text-emerald-500' : 'text-rose-500'}`}>
                {trend === 'up' ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
                {change}%
            </div>
        </div>
        <h3 className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">{title}</h3>
        <p className="text-2xl font-bold text-slate-900 dark:text-white">{value}</p>
    </div>
);

const DashboardHome = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const colors = {
        stroke: isDark ? '#818cf8' : '#6366f1',
        grid: isDark ? '#1e293b' : '#f1f5f9',
        tick: isDark ? '#64748b' : '#94a3b8',
        tooltipBg: isDark ? '#0f172a' : '#ffffff',
        tooltipShadow: isDark ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.1)',
        barHover: isDark ? '#1e293b' : '#f8fafc'
    };

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Dashboard Overview</h1>
                <p className="text-slate-500 dark:text-slate-400 font-medium">Welcome back, here's what's happening today.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                <StatCard
                    title="Total Users"
                    value="2,543"
                    change="12.5"
                    trend="up"
                    icon={Users}
                    color="bg-indigo-500 text-white"
                />
                <StatCard
                    title="Total Sales"
                    value="$45,231"
                    change="8.2"
                    trend="up"
                    icon={DollarSign}
                    color="bg-emerald-500 text-white"
                />
                <StatCard
                    title="Active Projects"
                    value="12"
                    change="2.4"
                    trend="down"
                    icon={Activity}
                    color="bg-amber-500 text-white"
                />
                <StatCard
                    title="Growth"
                    value="+18.7%"
                    change="5.1"
                    trend="up"
                    icon={TrendingUp}
                    color="bg-rose-500 text-white"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 min-w-0">
                {/* Sales Chart */}
                <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm shadow-slate-200/50 dark:shadow-none overflow-hidden min-w-0 transition-colors">
                    <div className="mb-6">
                        <h3 className="font-bold text-slate-900 dark:text-white text-lg">Sales Performance</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Monthly overview of sales</p>
                    </div>
                    <div className="h-80 w-full min-w-0">
                        <ResponsiveContainer width="100%" height="100%" minWidth={0}>
                            <AreaChart data={data}>
                                <defs>
                                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor={colors.stroke} stopOpacity={0.2} />
                                        <stop offset="95%" stopColor={colors.stroke} stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={colors.grid} />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: colors.tick, fontSize: 12 }} dy={10} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: colors.tick, fontSize: 12 }} />
                                <Tooltip
                                    contentStyle={{
                                        borderRadius: '12px',
                                        backgroundColor: colors.tooltipBg,
                                        border: isDark ? '1px solid #1e293b' : 'none',
                                        boxShadow: `0 10px 15px -3px ${colors.tooltipShadow}`
                                    }}
                                    itemStyle={{ color: isDark ? '#e2e8f0' : '#1e293b' }}
                                    labelStyle={{ color: isDark ? '#94a3b8' : '#64748b' }}
                                />
                                <Area type="monotone" dataKey="value" stroke={colors.stroke} strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* User Activity Chart */}
                <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm shadow-slate-200/50 dark:shadow-none overflow-hidden min-w-0 transition-colors">
                    <div className="mb-6">
                        <h3 className="font-bold text-slate-900 dark:text-white text-lg">User Activity</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Weekly user engagement</p>
                    </div>
                    <div className="h-80 w-full min-w-0">
                        <ResponsiveContainer width="100%" height="100%" minWidth={0}>
                            <BarChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={colors.grid} />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: colors.tick, fontSize: 12 }} dy={10} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: colors.tick, fontSize: 12 }} />
                                <Tooltip
                                    cursor={{ fill: colors.barHover }}
                                    contentStyle={{
                                        borderRadius: '12px',
                                        backgroundColor: colors.tooltipBg,
                                        border: isDark ? '1px solid #1e293b' : 'none',
                                        boxShadow: `0 10px 15px -3px ${colors.tooltipShadow}`
                                    }}
                                    itemStyle={{ color: isDark ? '#e2e8f0' : '#1e293b' }}
                                    labelStyle={{ color: isDark ? '#94a3b8' : '#64748b' }}
                                />
                                <Bar dataKey="value" fill={colors.stroke} radius={[6, 6, 0, 0]} barSize={32} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;
