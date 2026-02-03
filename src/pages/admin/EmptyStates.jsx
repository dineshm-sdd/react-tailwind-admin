import React from 'react';
import {
    Inbox,
    Search,
    FileText,
    Users,
    ShoppingCart,
    Mail,
    Image,
    AlertCircle,
    Plus,
    Upload,
    FolderOpen,
    Database
} from 'lucide-react';

const EmptyStates = () => {
    return (
        <div className="max-w-7xl mx-auto space-y-6 pb-12">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">Empty States</h1>
                <p className="text-slate-500 dark:text-slate-400 font-medium text-sm">
                    Empty state components for various scenarios
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* No Data */}
                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-8">
                    <div className="text-center">
                        <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <Inbox className="h-8 w-8 text-slate-400 dark:text-slate-600" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">No data yet</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 max-w-sm mx-auto">
                            Get started by creating your first item. It only takes a few seconds.
                        </p>
                        <button className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold rounded-xl transition-all shadow-lg shadow-indigo-100 dark:shadow-none">
                            <Plus className="h-4 w-4 inline mr-2" />
                            Create New
                        </button>
                    </div>
                </div>

                {/* No Search Results */}
                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-8">
                    <div className="text-center">
                        <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <Search className="h-8 w-8 text-slate-400 dark:text-slate-600" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">No results found</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 max-w-sm mx-auto">
                            We couldn't find what you're looking for. Try adjusting your search.
                        </p>
                        <button className="px-4 py-2 text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded-lg transition-all">
                            Clear filters
                        </button>
                    </div>
                </div>

                {/* No Documents */}
                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-8">
                    <div className="text-center">
                        <div className="w-16 h-16 bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <FileText className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">No documents</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 max-w-sm mx-auto">
                            Upload your first document to get started with file management.
                        </p>
                        <div className="flex gap-3 justify-center">
                            <button className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold rounded-xl transition-all">
                                <Upload className="h-4 w-4 inline mr-2" />
                                Upload
                            </button>
                            <button className="px-4 py-2.5 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-bold rounded-xl transition-all">
                                Learn more
                            </button>
                        </div>
                    </div>
                </div>

                {/* No Users */}
                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-8">
                    <div className="text-center">
                        <div className="w-16 h-16 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <Users className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">No team members</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 max-w-sm mx-auto">
                            Invite your team members to collaborate on projects together.
                        </p>
                        <button className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold rounded-xl transition-all">
                            <Plus className="h-4 w-4 inline mr-2" />
                            Invite Team
                        </button>
                    </div>
                </div>

                {/* Empty Cart */}
                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-8">
                    <div className="text-center">
                        <div className="w-16 h-16 bg-rose-50 dark:bg-rose-900/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <ShoppingCart className="h-8 w-8 text-rose-600 dark:text-rose-400" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Your cart is empty</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 max-w-sm mx-auto">
                            Looks like you haven't added any items to your cart yet.
                        </p>
                        <button className="px-4 py-2.5 bg-rose-600 hover:bg-rose-700 text-white text-sm font-bold rounded-xl transition-all">
                            Start Shopping
                        </button>
                    </div>
                </div>

                {/* No Messages */}
                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-8">
                    <div className="text-center">
                        <div className="w-16 h-16 bg-purple-50 dark:bg-purple-900/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <Mail className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">No messages</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 max-w-sm mx-auto">
                            Your inbox is empty. When you receive messages, they'll appear here.
                        </p>
                    </div>
                </div>

                {/* No Images */}
                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-8">
                    <div className="text-center">
                        <div className="w-16 h-16 bg-amber-50 dark:bg-amber-900/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <Image className="h-8 w-8 text-amber-600 dark:text-amber-400" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">No images uploaded</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 max-w-sm mx-auto">
                            Upload images to create a beautiful gallery for your content.
                        </p>
                        <button className="px-4 py-2.5 bg-amber-600 hover:bg-amber-700 text-white text-sm font-bold rounded-xl transition-all">
                            <Upload className="h-4 w-4 inline mr-2" />
                            Upload Images
                        </button>
                    </div>
                </div>

                {/* Error State */}
                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-8">
                    <div className="text-center">
                        <div className="w-16 h-16 bg-red-50 dark:bg-red-900/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <AlertCircle className="h-8 w-8 text-red-600 dark:text-red-400" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Something went wrong</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 max-w-sm mx-auto">
                            We encountered an error while loading your data. Please try again.
                        </p>
                        <button className="px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white text-sm font-bold rounded-xl transition-all">
                            Try Again
                        </button>
                    </div>
                </div>

                {/* No Folders - Large */}
                <div className="md:col-span-2 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-12">
                    <div className="text-center max-w-2xl mx-auto">
                        <div className="w-20 h-20 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <FolderOpen className="h-10 w-10 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">No folders yet</h3>
                        <p className="text-base text-slate-500 dark:text-slate-400 mb-8 max-w-lg mx-auto">
                            Organize your files by creating folders. Keep everything tidy and easy to find.
                        </p>
                        <div className="flex gap-3 justify-center flex-wrap">
                            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl transition-all shadow-lg shadow-blue-100 dark:shadow-none">
                                <Plus className="h-4 w-4 inline mr-2" />
                                Create Folder
                            </button>
                            <button className="px-6 py-3 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-bold rounded-xl transition-all">
                                Import Files
                            </button>
                            <button className="px-6 py-3 text-sm font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-all">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>

                {/* No Database Connection */}
                <div className="md:col-span-2 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm p-12">
                    <div className="text-center max-w-2xl mx-auto">
                        <div className="w-20 h-20 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                            <Database className="h-10 w-10 text-slate-400 dark:text-slate-500" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">No database connected</h3>
                        <p className="text-base text-slate-600 dark:text-slate-400 mb-8 max-w-lg mx-auto">
                            Connect your database to start managing your data. We support PostgreSQL, MySQL, MongoDB, and more.
                        </p>
                        <div className="flex gap-3 justify-center flex-wrap">
                            <button className="px-6 py-3 bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-100 text-white dark:text-slate-900 text-sm font-bold rounded-xl transition-all shadow-lg">
                                Connect Database
                            </button>
                            <button className="px-6 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm font-bold rounded-xl transition-all">
                                View Documentation
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmptyStates;
