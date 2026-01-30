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
    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm shadow-slate-200/50">
        <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-xl ${color} bg-opacity-10`}>
                <Icon className={`h-6 w-6 ${color.replace('bg-', 'text-')}`} />
            </div>
            <div className={`flex items-center gap-1 text-sm font-semibold ${trend === 'up' ? 'text-emerald-500' : 'text-rose-500'}`}>
                {trend === 'up' ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
                {change}%
            </div>
        </div>
        <h3 className="text-slate-500 text-sm font-medium mb-1">{title}</h3>
        <p className="text-2xl font-bold text-slate-900">{value}</p>
    </div>
);

const DashboardHome = () => {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-2xl font-bold text-slate-900 mb-2">Dashboard Overview</h1>
                <p className="text-slate-500 font-medium">Welcome back, here's what's happening today.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                <StatCard
                    title="Total Users"
                    value="2,543"
                    change="12.5"
                    trend="up"
                    icon={Users}
                    color="bg-indigo-500"
                />
                <StatCard
                    title="Total Sales"
                    value="$45,231"
                    change="8.2"
                    trend="up"
                    icon={DollarSign}
                    color="bg-emerald-500"
                />
                <StatCard
                    title="Active Projects"
                    value="12"
                    change="2.4"
                    trend="down"
                    icon={Activity}
                    color="bg-amber-500"
                />
                <StatCard
                    title="Growth"
                    value="+18.7%"
                    change="5.1"
                    trend="up"
                    icon={TrendingUp}
                    color="bg-rose-500"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 min-w-0">
                {/* Sales Chart */}
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm shadow-slate-200/50 overflow-hidden min-w-0">
                    <div className="mb-6">
                        <h3 className="font-bold text-slate-900 text-lg">Sales Performance</h3>
                        <p className="text-sm text-slate-500">Monthly overview of sales</p>
                    </div>
                    <div className="h-80 w-full min-w-0">
                        <ResponsiveContainer width="100%" height="100%" minWidth={0}>
                            <AreaChart data={data}>
                                <defs>
                                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#6366f1" stopOpacity={0.1} />
                                        <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} dy={10} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                                <Tooltip
                                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                                />
                                <Area type="monotone" dataKey="value" stroke="#6366f1" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* User Activity Chart */}
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm shadow-slate-200/50 overflow-hidden min-w-0">
                    <div className="mb-6">
                        <h3 className="font-bold text-slate-900 text-lg">User Activity</h3>
                        <p className="text-sm text-slate-500">Weekly user engagement</p>
                    </div>
                    <div className="h-80 w-full min-w-0">
                        <ResponsiveContainer width="100%" height="100%" minWidth={0}>
                            <BarChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} dy={10} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                                <Tooltip
                                    cursor={{ fill: '#f8fafc' }}
                                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                                />
                                <Bar dataKey="value" fill="#6366f1" radius={[6, 6, 0, 0]} barSize={32} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;
