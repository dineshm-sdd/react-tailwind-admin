import React, { useState, useMemo } from 'react';
import {
    Plus,
    Search,
    Filter,
    ChevronLeft,
    ChevronRight,
    Download,
    Trash2,
    Edit2,
    Eye,
    X,
    User,
    Mail,
    Shield,
    Clock,
    Calendar,
    AlertTriangle
} from 'lucide-react';
import { cn } from '../../utils/cn';

const initialUsers = [
    { id: 1, name: 'Dinesh Mamgain', email: 'dinesh@example.com', role: 'Super Admin', status: 'Active', joined: 'Jan 12, 2026' },
    { id: 2, name: 'John Doe', email: 'john@example.com', role: 'Editor', status: 'Active', joined: 'Jan 15, 2026' },
    { id: 3, name: 'Sarah Wilson', email: 'sarah@example.com', role: 'Viewer', status: 'Inactive', joined: 'Jan 20, 2026' },
    { id: 4, name: 'Michael Brown', email: 'michael@example.com', role: 'Admin', status: 'Active', joined: 'Jan 22, 2026' },
    { id: 5, name: 'Emily Davis', email: 'emily@example.com', role: 'Editor', status: 'Pending', joined: 'Jan 25, 2026' },
    { id: 6, name: 'David Miller', email: 'david@example.com', role: 'Viewer', status: 'Active', joined: 'Jan 28, 2026' },
    { id: 7, name: 'Anna Lee', email: 'anna@example.com', role: 'Admin', status: 'Active', joined: 'Feb 01, 2026' },
    { id: 8, name: 'Robert Fox', email: 'robert@example.com', role: 'Editor', status: 'Inactive', joined: 'Feb 03, 2026' },
    { id: 9, name: 'Lucy Chen', email: 'lucy@example.com', role: 'Viewer', status: 'Active', joined: 'Feb 05, 2026' },
    { id: 10, name: 'Kevin Hart', email: 'kevin@example.com', role: 'Admin', status: 'Pending', joined: 'Feb 07, 2026' },
];

const UserModal = ({ user, onClose }) => {
    if (!user) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-slate-900/40 dark:bg-slate-950/60 backdrop-blur-sm" onClick={onClose} />
            <div className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-200 border border-transparent dark:border-slate-800">
                <div className="h-32 bg-indigo-600 relative">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                    >
                        <X className="h-5 w-5" />
                    </button>
                    <div className="absolute -bottom-12 left-8 p-1 bg-white dark:bg-slate-900 rounded-2xl shadow-xl">
                        <div className="w-24 h-24 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-3xl font-bold text-indigo-600 dark:text-indigo-400 border border-slate-100 dark:border-slate-700 uppercase">
                            {user.name.split(' ').map(n => n[0]).join('')}
                        </div>
                    </div>
                </div>

                <div className="pt-16 pb-8 px-8 space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{user.name}</h2>
                        <p className="text-slate-500 dark:text-slate-400 font-medium">{user.role}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700">
                            <div className="flex items-center gap-2 text-slate-400 dark:text-slate-500 mb-1">
                                <Mail className="h-4 w-4" />
                                <span className="text-xs font-bold uppercase tracking-wider">Email</span>
                            </div>
                            <p className="text-sm font-bold text-slate-700 dark:text-slate-300 truncate">{user.email}</p>
                        </div>
                        <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700">
                            <div className="flex items-center gap-2 text-slate-400 dark:text-slate-500 mb-1">
                                <Shield className="h-4 w-4" />
                                <span className="text-xs font-bold uppercase tracking-wider">Status</span>
                            </div>
                            <span className={cn(
                                "inline-flex items-center px-2 py-0.5 rounded-lg text-xs font-bold",
                                user.status === 'Active' ? "bg-emerald-100 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400" :
                                    user.status === 'Inactive' ? "bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300" :
                                        "bg-amber-100 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400"
                            )}>
                                {user.status}
                            </span>
                        </div>
                        <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700">
                            <div className="flex items-center gap-2 text-slate-400 dark:text-slate-500 mb-1">
                                <Calendar className="h-4 w-4" />
                                <span className="text-xs font-bold uppercase tracking-wider">Joined</span>
                            </div>
                            <p className="text-sm font-bold text-slate-700 dark:text-slate-300">{user.joined}</p>
                        </div>
                        <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700">
                            <div className="flex items-center gap-2 text-slate-400 dark:text-slate-500 mb-1">
                                <Clock className="h-4 w-4" />
                                <span className="text-xs font-bold uppercase tracking-wider">Last Activity</span>
                            </div>
                            <p className="text-sm font-bold text-slate-700 dark:text-slate-300 italic">Just now</p>
                        </div>
                    </div>

                    <div className="flex gap-3 pt-4">
                        <button className="flex-1 py-3 bg-indigo-600 text-white rounded-xl text-sm font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 dark:shadow-none">
                            Edit Profile
                        </button>
                        <button
                            onClick={onClose}
                            className="flex-1 py-3 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-xl text-sm font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const AddUserModal = ({ isOpen, onClose, onAdd }) => {
    const [formData, setFormData] = useState({ name: '', email: '', role: 'Editor', status: 'Active' });

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd({ ...formData, id: Date.now(), joined: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }) });
        setFormData({ name: '', email: '', role: 'Editor', status: 'Active' });
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-slate-900/40 dark:bg-slate-950/60 backdrop-blur-sm" onClick={onClose} />
            <div className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200 border border-transparent dark:border-slate-800">
                <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">Add New User</h2>
                    <button onClick={onClose} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
                        <X className="h-5 w-5 text-slate-400 dark:text-slate-500" />
                    </button>
                </div>
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Full Name</label>
                        <input
                            required
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all text-sm font-medium dark:text-slate-200"
                            placeholder="John Doe"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Email Address</label>
                        <input
                            required
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all text-sm font-medium dark:text-slate-200"
                            placeholder="john@example.com"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Role</label>
                            <select
                                value={formData.role}
                                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all text-sm font-medium appearance-none dark:text-slate-200"
                            >
                                <option>Admin</option>
                                <option>Editor</option>
                                <option>Viewer</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Status</label>
                            <select
                                value={formData.status}
                                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                                className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all text-sm font-medium appearance-none dark:text-slate-200"
                            >
                                <option>Active</option>
                                <option>Inactive</option>
                                <option>Pending</option>
                            </select>
                        </div>
                    </div>
                    <div className="pt-4 flex gap-3">
                        <button type="button" onClick={onClose} className="flex-1 py-3 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-xl text-sm font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-all">
                            Cancel
                        </button>
                        <button type="submit" className="flex-1 py-3 bg-indigo-600 text-white rounded-xl text-sm font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 dark:shadow-none">
                            Create User
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

const DeleteConfirmationModal = ({ isOpen, onClose, onConfirm, userName }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-slate-900/40 dark:bg-slate-950/60 backdrop-blur-sm" onClick={onClose} />
            <div className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden animate-in zoom-in-95 duration-200 border border-transparent dark:border-slate-800">
                <div className="p-6 text-center">
                    <div className="w-16 h-16 bg-rose-50 dark:bg-rose-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <AlertTriangle className="h-8 w-8 text-rose-500 dark:text-rose-400" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Delete User?</h2>
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium px-4">
                        Are you sure you want to delete <span className="font-bold text-slate-700 dark:text-slate-200">{userName}</span>? This action cannot be undone.
                    </p>
                </div>
                <div className="p-6 bg-slate-50 dark:bg-slate-800/50 flex gap-3">
                    <button
                        onClick={onClose}
                        className="flex-1 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 rounded-xl text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-sm"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className="flex-1 py-2.5 bg-rose-600 text-white rounded-xl text-sm font-bold hover:bg-rose-700 transition-all shadow-lg shadow-rose-100 dark:shadow-none"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

const Listing = () => {
    const [users, setUsers] = useState(initialUsers);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedUser, setSelectedUser] = useState(null);
    const [userToDelete, setUserToDelete] = useState(null);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [roleFilter, setRoleFilter] = useState('All');
    const [statusFilter, setStatusFilter] = useState('All');
    const [showFilters, setShowFilters] = useState(false);
    const itemsPerPage = 6;

    const filteredUsers = useMemo(() => {
        return users.filter(user => {
            const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                user.email.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesRole = roleFilter === 'All' || user.role === roleFilter;
            const matchesStatus = statusFilter === 'All' || user.status === statusFilter;
            return matchesSearch && matchesRole && matchesStatus;
        });
    }, [users, searchTerm, roleFilter, statusFilter]);

    const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
    const paginatedUsers = filteredUsers.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handleAddUser = (newUser) => {
        setUsers([newUser, ...users]);
    };

    const confirmDelete = () => {
        if (userToDelete) {
            setUsers(users.filter(u => u.id !== userToDelete.id));
            setUserToDelete(null);
        }
    };

    const handleResetFilters = () => {
        setSearchTerm('');
        setRoleFilter('All');
        setStatusFilter('All');
        setCurrentPage(1);
    };

    const activeFiltersCount = [
        roleFilter !== 'All',
        statusFilter !== 'All',
        searchTerm !== ''
    ].filter(Boolean).length;

    return (
        <div className="space-y-6 transition-colors">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">User Management</h1>
                    <p className="text-slate-500 dark:text-slate-400 font-medium text-sm">Manage your team members and their account permissions.</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-sm">
                        <Download className="h-4 w-4" />
                        Export
                    </button>
                    <button
                        onClick={() => setIsAddModalOpen(true)}
                        className="flex items-center gap-2 px-4 py-2.5 bg-indigo-600 rounded-xl text-sm font-bold text-white hover:bg-indigo-700 shadow-lg shadow-indigo-100 dark:shadow-none transition-all"
                    >
                        <Plus className="h-4 w-4" />
                        Add User
                    </button>
                </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm shadow-slate-200/50 dark:shadow-none overflow-hidden min-h-[500px] flex flex-col transition-colors">
                <div className="p-4 border-b border-slate-50 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-50/30 dark:bg-slate-800/20">
                    <div className="relative flex-1 max-w-md">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search by name or email..."
                            value={searchTerm}
                            onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
                            className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all text-sm font-medium dark:text-slate-200"
                        />
                        {searchTerm && (
                            <button
                                onClick={() => { setSearchTerm(''); setCurrentPage(1); }}
                                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full transition-colors"
                            >
                                <X className="h-3 w-3 text-slate-400 dark:text-slate-500" />
                            </button>
                        )}
                    </div>
                    <div className="flex items-center gap-2">
                        <select
                            value={roleFilter}
                            onChange={(e) => { setRoleFilter(e.target.value); setCurrentPage(1); }}
                            className="px-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-bold text-slate-600 dark:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all shadow-sm appearance-none min-w-[120px] cursor-pointer"
                        >
                            <option value="All">All Roles</option>
                            <option value="Admin">Admin</option>
                            <option value="Editor">Editor</option>
                            <option value="Viewer">Viewer</option>
                        </select>
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className={cn(
                                "flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all shadow-sm border",
                                showFilters || activeFiltersCount > 0
                                    ? "bg-indigo-50 dark:bg-indigo-900/20 border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400"
                                    : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700"
                            )}
                        >
                            <Filter className="h-4 w-4" />
                            More Filters
                            {activeFiltersCount > 0 && (
                                <span className="flex items-center justify-center w-5 h-5 bg-indigo-600 text-white text-[10px] rounded-full ml-1">
                                    {activeFiltersCount}
                                </span>
                            )}
                        </button>
                    </div>
                </div>

                {/* Advanced Filters Section */}
                {showFilters && (
                    <div className="p-4 bg-slate-50/50 dark:bg-slate-800/40 border-b border-slate-100 dark:border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-4 animate-in slide-in-from-top-2 duration-200">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider ml-1">Status Filter</label>
                            <select
                                value={statusFilter}
                                onChange={(e) => { setStatusFilter(e.target.value); setCurrentPage(1); }}
                                className="w-full px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-bold text-slate-600 dark:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all shadow-sm appearance-none cursor-pointer"
                            >
                                <option value="All">All Statuses</option>
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                                <option value="Pending">Pending</option>
                            </select>
                        </div>
                        <div className="flex items-end">
                            <button
                                onClick={handleResetFilters}
                                className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-900/20 rounded-xl transition-all cursor-pointer"
                            >
                                <X className="h-4 w-4" />
                                Reset All Filters
                            </button>
                        </div>
                    </div>
                )}

                <div className="overflow-x-auto flex-1">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50/50 dark:bg-slate-800/20 border-b border-slate-100 dark:border-slate-800">
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">User</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Role</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Status</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Joined</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                            {paginatedUsers.length > 0 ? (
                                paginatedUsers.map((user) => (
                                    <tr key={user.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors group">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-bold text-indigo-600 dark:text-indigo-400 text-sm border border-slate-100 dark:border-slate-700 uppercase">
                                                    {user.name.split(' ').map(n => n[0]).join('')}
                                                </div>
                                                <div>
                                                    <div className="text-sm font-bold text-slate-900 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors uppercase tracking-tight">{user.name}</div>
                                                    <div className="text-xs font-medium text-slate-500 dark:text-slate-500">{user.email}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="text-sm text-slate-600 dark:text-slate-400 font-bold">{user.role}</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={cn(
                                                "inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider",
                                                user.status === 'Active' ? "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400" :
                                                    user.status === 'Inactive' ? "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-500" :
                                                        "bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400"
                                            )}>
                                                {user.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 dark:text-slate-500 font-bold">
                                            {user.joined}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <button
                                                    onClick={() => setSelectedUser(user)}
                                                    className="p-2 text-slate-400 dark:text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 rounded-xl transition-all"
                                                    title="View Profile"
                                                >
                                                    <Eye className="h-4 w-4" />
                                                </button>
                                                <button onClick={() => setEditUser(user)} className="p-2 text-slate-400 dark:text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 rounded-xl transition-all" title="Edit User">
                                                    <Edit2 className="h-4 w-4" />
                                                </button>
                                                <button onClick={() => setUserToDelete(user)} className="p-2 text-slate-400 dark:text-slate-500 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-900/30 rounded-xl transition-all" title="Delete User">
                                                    <Trash2 className="h-4 w-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" className="px-6 py-12 text-center">
                                        <div className="flex flex-col items-center gap-3">
                                            <div className="w-12 h-12 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center">
                                                <Search className="h-6 w-6 text-slate-300 dark:text-slate-600" />
                                            </div>
                                            <p className="text-sm font-bold text-slate-400 text-center">
                                                No users found matching your criteria.
                                            </p>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                <div className="p-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/10 transition-colors">
                    <p className="text-sm text-slate-500 dark:text-slate-500 font-bold">
                        Showing {Math.min(filteredUsers.length, (currentPage - 1) * itemsPerPage + 1)} to {Math.min(filteredUsers.length, currentPage * itemsPerPage)} of {filteredUsers.length} users
                    </p>
                    <div className="flex items-center gap-2">
                        <button
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage(prev => prev - 1)}
                            className="p-2 text-slate-400 dark:text-slate-500 border border-slate-100 dark:border-slate-800 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-50 transition-all shadow-sm"
                        >
                            <ChevronLeft className="h-4 w-4" />
                        </button>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={cn(
                                    "h-9 w-9 flex items-center justify-center font-bold rounded-xl text-sm transition-all shadow-sm",
                                    currentPage === page
                                        ? "bg-indigo-600 text-white shadow-lg shadow-indigo-100 dark:shadow-none"
                                        : "text-slate-600 dark:text-slate-400 border border-transparent hover:border-slate-100 dark:hover:border-slate-700"
                                )}
                            >
                                {page}
                            </button>
                        ))}
                        <button
                            disabled={currentPage === totalPages || totalPages === 0}
                            onClick={() => setCurrentPage(prev => prev + 1)}
                            className="p-2 text-slate-400 dark:text-slate-500 border border-slate-100 dark:border-slate-800 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-50 transition-all shadow-sm"
                        >
                            <ChevronRight className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            </div>

            <UserModal user={selectedUser} onClose={() => setSelectedUser(null)} />
            <AddUserModal
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}
                onAdd={handleAddUser}
            />
            <DeleteConfirmationModal
                isOpen={!!userToDelete}
                onClose={() => setUserToDelete(null)}
                onConfirm={confirmDelete}
                userName={userToDelete?.name}
            />
        </div>
    );
};

export default Listing;
