import React, { useState } from 'react';
import {
    BarChart3,
    Users,
    Settings,
    CardSimIcon,
    LayoutDashboard,
    Table as TableIcon,
    FileEdit,
    LogOut,
    Menu,
    X,
    ChevronRight,
    Bell,
    Search,
    User,
    Activity
} from 'lucide-react';
import { Link, useLocation, Outlet, useNavigate } from 'react-router-dom';
import { cn } from '../utils/cn';
import ThemeToggle from '../components/ThemeToggle';


const SidebarItem = ({ icon: Icon, label, to, active, isCollapsed }) => (
    <Link
        to={to}
        className={cn(
            "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group relative",
            active
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200 dark:shadow-indigo-900/20"
                : "text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-slate-200",
            isCollapsed && "justify-center px-0"
        )}
        title={isCollapsed ? label : ""}
    >
        <Icon className={cn("h-5 w-5 shrink-0", active ? "text-white" : "text-slate-400 group-hover:text-slate-600")} />
        {!isCollapsed && <span className="font-semibold whitespace-nowrap overflow-hidden transition-all duration-300">{label}</span>}
        {!isCollapsed && active && <ChevronRight className="ml-auto h-4 w-4" />}

        {/* Tooltip for collapsed state */}
        {isCollapsed && (
            <div className="absolute left-full ml-2 px-2 py-1 bg-slate-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50 whitespace-nowrap">
                {label}
            </div>
        )}
    </Link>
);

const notifications = [
    { id: 1, title: 'New User Registered', message: 'John Doe joined the team', time: '2 mins ago', type: 'user', unread: true },
    { id: 2, title: 'System Update', message: 'Version 2.4.0 is now live', time: '1 hour ago', type: 'system', unread: true },
    { id: 3, title: 'Server Alert', message: 'High memory usage detected', time: '5 hours ago', type: 'alert', unread: false },
];

const AdminLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Mobile visibility
    const [isCollapsed, setIsCollapsed] = useState(false); // Desktop icons-only
    const [isNotifOpen, setIsNotifOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    const menuItems = [
        { icon: LayoutDashboard, label: 'Dashboard', to: '/admin/dashboard' },
        { icon: TableIcon, label: 'Listing', to: '/admin/listing' },
        { icon: FileEdit, label: 'Forms', to: '/admin/forms' },
        { icon: Users, label: 'Users', to: '/admin/users' },
        { icon: BarChart3, label: 'Analytics', to: '/admin/analytics' },
        { icon: CardSimIcon, label: 'Cards', to: '/admin/cards' },
        { icon: Settings, label: 'Settings', to: '/admin/settings' },
    ];

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex transition-colors duration-300">
            {/* Sidebar Overlay for Mobile */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-slate-900/50 dark:bg-slate-950/70 backdrop-blur-sm z-30 lg:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={cn(
                "fixed inset-y-0 left-0 z-40 bg-white dark:bg-slate-900 border-r border-slate-100 dark:border-slate-800 transition-all duration-300 transform lg:relative lg:translate-x-0",
                isSidebarOpen ? "translate-x-0 w-64" : "-translate-x-full lg:translate-x-0",
                isCollapsed ? "lg:w-20" : "lg:w-64"
            )}>
                <div className="h-full flex flex-col p-4">
                    <div className="flex items-center gap-3 px-2 mb-8 h-10">
                        <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200 dark:shadow-indigo-900/20 shrink-0">
                            <span className="text-white font-bold text-xl uppercase italic">TA</span>
                        </div>
                        {!isCollapsed && <span className="text-xl font-bold text-slate-900 dark:text-white tracking-tight whitespace-nowrap overflow-hidden">Tailwind App</span>}
                    </div>

                    <nav className="flex-1 space-y-1">
                        {menuItems.map((item) => (
                            <SidebarItem
                                key={item.to}
                                {...item}
                                active={location.pathname === item.to}
                                isCollapsed={isCollapsed}
                            />
                        ))}
                    </nav>

                    <div className="mt-auto pt-6 border-t border-slate-100 space-y-1">
                        <button
                            onClick={() => setIsCollapsed(!isCollapsed)}
                            className="hidden lg:flex items-center gap-3 px-4 py-3 w-full rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-slate-200 transition-all duration-200 group"
                        >
                            <Menu className="h-5 w-5 text-slate-400 group-hover:text-slate-600 shrink-0" />
                            {!isCollapsed && <span className="font-semibold text-left">Collapse</span>}
                        </button>
                        <button
                            onClick={() => navigate('/')}
                            className={cn(
                                "flex items-center gap-3 px-4 py-3 w-full rounded-xl text-slate-500 dark:text-slate-400 hover:bg-rose-50 dark:hover:bg-rose-900/20 hover:text-rose-600 dark:hover:text-rose-400 transition-all duration-200 group",
                                isCollapsed && "justify-center px-0"
                            )}
                        >
                            <LogOut className="h-5 w-5 text-slate-400 group-hover:text-rose-500 shrink-0" />
                            {!isCollapsed && <span className="font-semibold text-left">Logout</span>}
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
                {/* Navbar */}
                <header className="h-16 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between px-4 lg:px-8 z-20 transition-colors duration-300">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                            className="p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors lg:hidden"
                        >
                            <Menu className="h-6 w-6" />
                        </button>
                        <button
                            onClick={() => setIsCollapsed(!isCollapsed)}
                            className="p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors hidden lg:block"
                        >
                            <Menu className="h-6 w-6" />
                        </button>
                        <div className="flex-1 max-w-xl hidden md:block border-l border-slate-100 dark:border-slate-800 pl-4">
                            <div className="relative w-64">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                                <input
                                    type="text"
                                    placeholder="Search anything..."
                                    className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm dark:text-slate-200"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 lg:gap-4">
                        <ThemeToggle />
                        <div className="relative">
                            <button
                                onClick={() => { setIsNotifOpen(!isNotifOpen); setIsUserMenuOpen(false); }}
                                className={cn(
                                    "p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg relative transition-colors",
                                    isNotifOpen && "bg-slate-100 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400"
                                )}
                            >
                                <Bell className="h-5 w-5" />
                                <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 border-2 border-white rounded-full"></span>
                            </button>

                            {isNotifOpen && (
                                <>
                                    <div className="fixed inset-0 z-10" onClick={() => setIsNotifOpen(false)} />
                                    <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-800 py-2 z-20 animate-in fade-in slide-in-from-top-5 duration-200">
                                        <div className="px-4 py-2 border-b border-slate-50 dark:border-slate-800 flex items-center justify-between">
                                            <h3 className="font-bold text-slate-900 dark:text-white">Notifications</h3>
                                            <button className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300">Mark all as read</button>
                                        </div>
                                        <div className="max-h-[400px] overflow-y-auto">
                                            {notifications.map((notif) => (
                                                <button key={notif.id} className="w-full px-4 py-3 flex gap-3 hover:bg-slate-50 transition-colors text-left border-b border-slate-50 last:border-0">
                                                    <div className={cn(
                                                        "w-10 h-10 rounded-xl flex items-center justify-center shrink-0",
                                                        notif.type === 'alert' ? "bg-rose-50 text-rose-500" :
                                                            notif.type === 'user' ? "bg-indigo-50 text-indigo-500" : "bg-emerald-50 text-emerald-500"
                                                    )}>
                                                        {notif.type === 'alert' ? <Activity className="h-5 w-5" /> :
                                                            notif.type === 'user' ? <User className="h-5 w-5" /> : <BarChart3 className="h-5 w-5" />}
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <div className="flex items-center justify-between gap-2 mb-0.5">
                                                            <p className="text-sm font-bold text-slate-900 truncate">{notif.title}</p>
                                                            {notif.unread && <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full shrink-0" />}
                                                        </div>
                                                        <p className="text-xs text-slate-500 truncate">{notif.message}</p>
                                                        <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase">{notif.time}</p>
                                                    </div>
                                                </button>
                                            ))}
                                        </div>
                                        <div className="px-4 py-2 border-t border-slate-50 dark:border-slate-800 text-center">
                                            <button className="text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors">See all notifications</button>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>

                        <div className="h-8 w-[1px] bg-slate-100 dark:bg-slate-800 mx-2"></div>

                        <div className="relative">
                            <button
                                onClick={() => { setIsUserMenuOpen(!isUserMenuOpen); setIsNotifOpen(false); }}
                                className={cn(
                                    "flex items-center gap-3 pl-2 pr-1 py-1 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-colors",
                                    isUserMenuOpen && "bg-slate-50 dark:bg-slate-800"
                                )}
                            >
                                <div className="text-right hidden sm:block">
                                    <p className="text-sm font-bold text-slate-900 dark:text-white">Alex Johnson</p>
                                    <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Administrator</p>
                                </div>
                                <div className="w-9 h-9 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center border border-slate-200 dark:border-slate-700">
                                    <User className="h-5 w-5 text-slate-600" />
                                </div>
                            </button>

                            {isUserMenuOpen && (
                                <>
                                    <div className="fixed inset-0 z-10" onClick={() => setIsUserMenuOpen(false)} />
                                    <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-800 py-2 z-20 animate-in fade-in slide-in-from-top-5 duration-200">
                                        <div className="px-4 py-2 border-b border-slate-50 dark:border-slate-800 mb-1 lg:hidden">
                                            <p className="text-sm font-bold text-slate-900 dark:text-white line-clamp-1">Alex Johnson</p>
                                            <p className="text-xs font-medium text-slate-500 dark:text-slate-400 truncate">alex@example.com</p>
                                        </div>
                                        <div className="px-2 space-y-0.5">
                                            <button className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-all">
                                                <User className="h-4 w-4" />
                                                My Profile
                                            </button>
                                            <button onClick={() => navigate('/admin/forms')} className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-all">
                                                <Settings className="h-4 w-4" />
                                                Settings
                                            </button>
                                        </div>
                                        <div className="h-[1px] bg-slate-100 dark:bg-slate-800 my-2 mx-2"></div>
                                        <div className="px-2">
                                            <button
                                                onClick={() => navigate('/')}
                                                className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-bold text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-900/20 transition-all"
                                            >
                                                <LogOut className="h-4 w-4" />
                                                Logout
                                            </button>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 overflow-y-auto p-4 lg:p-8">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};


export default AdminLayout;
