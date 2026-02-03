import React, { useState, useEffect } from 'react';
import {
    X,
    AlertTriangle,
    CheckCircle2,
    Info,
    Trash2,
    Save,
    Mail,
    User,
    Bell,
    Settings,
    Download,
    Share2,
    Heart
} from 'lucide-react';
import { cn } from '../../utils/cn';

const Modals = () => {
    const [modals, setModals] = useState({
        confirmation: false,
        delete: false,
        success: false,
        warning: false,
        info: false,
        form: false,
        large: false,
        small: false,
        centered: false,
        newsletter: false,
        share: false,
        settings: false
    });

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const openModal = (modalName) => {
        setModals(prev => ({ ...prev, [modalName]: true }));
    };

    const closeModal = (modalName) => {
        setModals(prev => ({ ...prev, [modalName]: false }));
    };

    const closeAllModals = () => {
        setModals({
            confirmation: false,
            delete: false,
            success: false,
            warning: false,
            info: false,
            form: false,
            large: false,
            small: false,
            centered: false,
            newsletter: false,
            share: false,
            settings: false
        });
    };

    // Close modal on Escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                closeAllModals();
            }
        };
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, []);

    // Modal Backdrop Component
    const ModalBackdrop = ({ isOpen, onClose, children }) => {
        if (!isOpen) return null;

        return (
            <div
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 dark:bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200"
                onClick={onClose}
            >
                <div
                    className="relative w-full max-h-[90vh] overflow-y-auto"
                    onClick={(e) => e.stopPropagation()}
                >
                    {children}
                </div>
            </div>
        );
    };

    return (
        <div className="max-w-6xl mx-auto space-y-8 pb-12">
            <div>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">Modal Components</h1>
                <p className="text-slate-500 dark:text-slate-400 font-medium text-sm">
                    Comprehensive collection of modal dialogs and overlays
                </p>
            </div>

            {/* Modal Trigger Buttons Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Confirmation Modal */}
                <button
                    onClick={() => openModal('confirmation')}
                    className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-indigo-300 dark:hover:border-indigo-700 transition-all text-left group"
                >
                    <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/40 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                        <CheckCircle2 className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-white mb-1">Confirmation</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Standard confirmation dialog</p>
                </button>

                {/* Delete Modal */}
                <button
                    onClick={() => openModal('delete')}
                    className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-rose-300 dark:hover:border-rose-700 transition-all text-left group"
                >
                    <div className="w-10 h-10 bg-rose-100 dark:bg-rose-900/40 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                        <Trash2 className="h-5 w-5 text-rose-600 dark:text-rose-400" />
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-white mb-1">Delete Warning</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Destructive action confirmation</p>
                </button>

                {/* Success Modal */}
                <button
                    onClick={() => openModal('success')}
                    className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-emerald-300 dark:hover:border-emerald-700 transition-all text-left group"
                >
                    <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/40 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                        <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-white mb-1">Success</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Success notification modal</p>
                </button>

                {/* Warning Modal */}
                <button
                    onClick={() => openModal('warning')}
                    className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-amber-300 dark:hover:border-amber-700 transition-all text-left group"
                >
                    <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/40 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                        <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-white mb-1">Warning</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Warning alert modal</p>
                </button>

                {/* Info Modal */}
                <button
                    onClick={() => openModal('info')}
                    className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-blue-300 dark:hover:border-blue-700 transition-all text-left group"
                >
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/40 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                        <Info className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-white mb-1">Information</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Informational modal</p>
                </button>

                {/* Form Modal */}
                <button
                    onClick={() => openModal('form')}
                    className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-indigo-300 dark:hover:border-indigo-700 transition-all text-left group"
                >
                    <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/40 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                        <User className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-white mb-1">Form Modal</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Modal with form inputs</p>
                </button>

                {/* Newsletter Modal */}
                <button
                    onClick={() => openModal('newsletter')}
                    className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-purple-300 dark:hover:border-purple-700 transition-all text-left group"
                >
                    <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/40 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                        <Mail className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-white mb-1">Newsletter</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Newsletter subscription</p>
                </button>

                {/* Share Modal */}
                <button
                    onClick={() => openModal('share')}
                    className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-cyan-300 dark:hover:border-cyan-700 transition-all text-left group"
                >
                    <div className="w-10 h-10 bg-cyan-100 dark:bg-cyan-900/40 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                        <Share2 className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-white mb-1">Share</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Share content modal</p>
                </button>

                {/* Settings Modal */}
                <button
                    onClick={() => openModal('settings')}
                    className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-slate-400 dark:hover:border-slate-600 transition-all text-left group"
                >
                    <div className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                        <Settings className="h-5 w-5 text-slate-600 dark:text-slate-400" />
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-white mb-1">Settings</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Settings configuration</p>
                </button>

                {/* Large Modal */}
                <button
                    onClick={() => openModal('large')}
                    className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-indigo-300 dark:hover:border-indigo-700 transition-all text-left group"
                >
                    <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/40 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                        <Download className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-white mb-1">Large Modal</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Full-width large modal</p>
                </button>

                {/* Small Modal */}
                <button
                    onClick={() => openModal('small')}
                    className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-pink-300 dark:hover:border-pink-700 transition-all text-left group"
                >
                    <div className="w-10 h-10 bg-pink-100 dark:bg-pink-900/40 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                        <Bell className="h-5 w-5 text-pink-600 dark:text-pink-400" />
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-white mb-1">Small Modal</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Compact notification</p>
                </button>

                {/* Centered Modal */}
                <button
                    onClick={() => openModal('centered')}
                    className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-violet-300 dark:hover:border-violet-700 transition-all text-left group"
                >
                    <div className="w-10 h-10 bg-violet-100 dark:bg-violet-900/40 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                        <Heart className="h-5 w-5 text-violet-600 dark:text-violet-400" />
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-white mb-1">Centered</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Vertically centered modal</p>
                </button>
            </div>

            {/* MODAL IMPLEMENTATIONS */}

            {/* 1. Confirmation Modal */}
            <ModalBackdrop isOpen={modals.confirmation} onClose={() => closeModal('confirmation')}>
                <div className="max-w-md mx-auto bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 animate-in zoom-in-95 duration-200">
                    <div className="p-6">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/40 rounded-xl flex items-center justify-center flex-shrink-0">
                                <CheckCircle2 className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Confirm Action</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    Are you sure you want to proceed with this action? This will update your settings.
                                </p>
                            </div>
                            <button
                                onClick={() => closeModal('confirmation')}
                                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                    <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/50 rounded-b-2xl flex gap-3 justify-end">
                        <button
                            onClick={() => closeModal('confirmation')}
                            className="px-4 py-2 text-sm font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={() => closeModal('confirmation')}
                            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold rounded-lg transition-all shadow-lg shadow-indigo-100 dark:shadow-none"
                        >
                            Confirm
                        </button>
                    </div>
                </div>
            </ModalBackdrop>

            {/* 2. Delete Warning Modal */}
            <ModalBackdrop isOpen={modals.delete} onClose={() => closeModal('delete')}>
                <div className="max-w-md mx-auto bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 animate-in zoom-in-95 duration-200">
                    <div className="p-6">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-rose-100 dark:bg-rose-900/40 rounded-xl flex items-center justify-center flex-shrink-0">
                                <Trash2 className="h-6 w-6 text-rose-600 dark:text-rose-400" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Delete Item</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                                    Are you sure you want to delete this item? This action cannot be undone.
                                </p>
                                <div className="p-3 bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800 rounded-lg">
                                    <p className="text-xs font-bold text-rose-700 dark:text-rose-400">
                                        ⚠️ Warning: This is a permanent action
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => closeModal('delete')}
                                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                    <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/50 rounded-b-2xl flex gap-3 justify-end">
                        <button
                            onClick={() => closeModal('delete')}
                            className="px-4 py-2 text-sm font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={() => closeModal('delete')}
                            className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white text-sm font-bold rounded-lg transition-all shadow-lg shadow-rose-100 dark:shadow-none"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </ModalBackdrop>

            {/* 3. Success Modal */}
            <ModalBackdrop isOpen={modals.success} onClose={() => closeModal('success')}>
                <div className="max-w-md mx-auto bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 animate-in zoom-in-95 duration-200">
                    <div className="p-8 text-center">
                        <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/40 rounded-full flex items-center justify-center mx-auto mb-4">
                            <CheckCircle2 className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Success!</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
                            Your changes have been saved successfully. All updates are now live.
                        </p>
                        <button
                            onClick={() => closeModal('success')}
                            className="w-full px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold rounded-xl transition-all shadow-lg shadow-emerald-100 dark:shadow-none"
                        >
                            Got it!
                        </button>
                    </div>
                </div>
            </ModalBackdrop>

            {/* 4. Warning Modal */}
            <ModalBackdrop isOpen={modals.warning} onClose={() => closeModal('warning')}>
                <div className="max-w-md mx-auto bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 animate-in zoom-in-95 duration-200">
                    <div className="p-6">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/40 rounded-xl flex items-center justify-center flex-shrink-0">
                                <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Warning</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    Your session is about to expire in 5 minutes. Please save your work to avoid losing any changes.
                                </p>
                            </div>
                            <button
                                onClick={() => closeModal('warning')}
                                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                    <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/50 rounded-b-2xl flex gap-3 justify-end">
                        <button
                            onClick={() => closeModal('warning')}
                            className="px-4 py-2 text-sm font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all"
                        >
                            Dismiss
                        </button>
                        <button
                            onClick={() => closeModal('warning')}
                            className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white text-sm font-bold rounded-lg transition-all shadow-lg shadow-amber-100 dark:shadow-none"
                        >
                            Extend Session
                        </button>
                    </div>
                </div>
            </ModalBackdrop>

            {/* 5. Info Modal */}
            <ModalBackdrop isOpen={modals.info} onClose={() => closeModal('info')}>
                <div className="max-w-md mx-auto bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 animate-in zoom-in-95 duration-200">
                    <div className="p-6">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 rounded-xl flex items-center justify-center flex-shrink-0">
                                <Info className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Information</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                                    We've updated our privacy policy. Please review the changes to understand how we protect your data.
                                </p>
                                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-600 dark:text-blue-400 mt-0.5">•</span>
                                        <span>Enhanced data encryption</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-600 dark:text-blue-400 mt-0.5">•</span>
                                        <span>Improved user controls</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-600 dark:text-blue-400 mt-0.5">•</span>
                                        <span>GDPR compliance updates</span>
                                    </li>
                                </ul>
                            </div>
                            <button
                                onClick={() => closeModal('info')}
                                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                    <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/50 rounded-b-2xl flex gap-3 justify-end">
                        <button
                            onClick={() => closeModal('info')}
                            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-lg transition-all shadow-lg shadow-blue-100 dark:shadow-none"
                        >
                            Understood
                        </button>
                    </div>
                </div>
            </ModalBackdrop>

            {/* 6. Form Modal */}
            <ModalBackdrop isOpen={modals.form} onClose={() => closeModal('form')}>
                <div className="max-w-lg mx-auto bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 animate-in zoom-in-95 duration-200">
                    <div className="p-6 border-b border-slate-200 dark:border-slate-800">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Contact Us</h3>
                            <button
                                onClick={() => closeModal('form')}
                                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                    <div className="p-6 space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Name</label>
                            <input
                                type="text"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm dark:text-slate-200"
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Email</label>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm dark:text-slate-200"
                                placeholder="john@example.com"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Message</label>
                            <textarea
                                rows={4}
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm resize-none dark:text-slate-200"
                                placeholder="Your message..."
                            />
                        </div>
                    </div>
                    <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/50 rounded-b-2xl flex gap-3 justify-end">
                        <button
                            onClick={() => closeModal('form')}
                            className="px-4 py-2 text-sm font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={() => closeModal('form')}
                            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold rounded-lg transition-all shadow-lg shadow-indigo-100 dark:shadow-none flex items-center gap-2"
                        >
                            <Save className="h-4 w-4" />
                            Send Message
                        </button>
                    </div>
                </div>
            </ModalBackdrop>

            {/* 7. Newsletter Modal */}
            <ModalBackdrop isOpen={modals.newsletter} onClose={() => closeModal('newsletter')}>
                <div className="max-w-md mx-auto bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
                    <div className="p-8 text-center text-white">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                            <Mail className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Stay Updated!</h3>
                        <p className="text-purple-100 mb-6">
                            Subscribe to our newsletter and get the latest updates delivered to your inbox.
                        </p>
                        <div className="space-y-3">
                            <input
                                type="email"
                                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 transition-all text-sm text-white placeholder-purple-200"
                                placeholder="Enter your email"
                            />
                            <button className="w-full px-4 py-3 bg-white text-purple-600 font-bold rounded-xl hover:bg-purple-50 transition-all shadow-lg">
                                Subscribe Now
                            </button>
                        </div>
                        <button
                            onClick={() => closeModal('newsletter')}
                            className="mt-4 text-sm text-purple-200 hover:text-white transition-colors"
                        >
                            Maybe later
                        </button>
                    </div>
                </div>
            </ModalBackdrop>

            {/* 8. Share Modal */}
            <ModalBackdrop isOpen={modals.share} onClose={() => closeModal('share')}>
                <div className="max-w-md mx-auto bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 animate-in zoom-in-95 duration-200">
                    <div className="p-6 border-b border-slate-200 dark:border-slate-800">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Share this content</h3>
                            <button
                                onClick={() => closeModal('share')}
                                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                    <div className="p-6">
                        <div className="grid grid-cols-4 gap-4 mb-6">
                            <button className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all group">
                                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Share2 className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                                </div>
                                <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Twitter</span>
                            </button>
                            <button className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all group">
                                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/40 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Share2 className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                                </div>
                                <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Facebook</span>
                            </button>
                            <button className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all group">
                                <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900/40 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Share2 className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
                                </div>
                                <span className="text-xs font-medium text-slate-600 dark:text-slate-400">LinkedIn</span>
                            </button>
                            <button className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all group">
                                <div className="w-12 h-12 bg-rose-100 dark:bg-rose-900/40 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Mail className="h-5 w-5 text-rose-600 dark:text-rose-400" />
                                </div>
                                <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Email</span>
                            </button>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Share Link</label>
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    readOnly
                                    value="https://example.com/share/abc123"
                                    className="flex-1 px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm dark:text-slate-200"
                                />
                                <button className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold rounded-xl transition-all">
                                    Copy
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </ModalBackdrop>

            {/* 9. Settings Modal */}
            <ModalBackdrop isOpen={modals.settings} onClose={() => closeModal('settings')}>
                <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 animate-in zoom-in-95 duration-200">
                    <div className="p-6 border-b border-slate-200 dark:border-slate-800">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Settings</h3>
                            <button
                                onClick={() => closeModal('settings')}
                                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                    <div className="p-6 space-y-4">
                        <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                            <div>
                                <p className="font-bold text-slate-900 dark:text-white text-sm">Email Notifications</p>
                                <p className="text-xs text-slate-500 dark:text-slate-400">Receive email updates</p>
                            </div>
                            <button className="w-11 h-6 bg-indigo-600 rounded-full relative">
                                <span className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></span>
                            </button>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                            <div>
                                <p className="font-bold text-slate-900 dark:text-white text-sm">Push Notifications</p>
                                <p className="text-xs text-slate-500 dark:text-slate-400">Get push notifications</p>
                            </div>
                            <button className="w-11 h-6 bg-slate-200 dark:bg-slate-700 rounded-full relative">
                                <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full"></span>
                            </button>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                            <div>
                                <p className="font-bold text-slate-900 dark:text-white text-sm">Marketing Emails</p>
                                <p className="text-xs text-slate-500 dark:text-slate-400">Promotional content</p>
                            </div>
                            <button className="w-11 h-6 bg-slate-200 dark:bg-slate-700 rounded-full relative">
                                <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full"></span>
                            </button>
                        </div>
                    </div>
                    <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/50 rounded-b-2xl flex gap-3 justify-end">
                        <button
                            onClick={() => closeModal('settings')}
                            className="px-4 py-2 text-sm font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={() => closeModal('settings')}
                            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold rounded-lg transition-all shadow-lg shadow-indigo-100 dark:shadow-none"
                        >
                            Save Changes
                        </button>
                    </div>
                </div>
            </ModalBackdrop>

            {/* 10. Large Modal */}
            <ModalBackdrop isOpen={modals.large} onClose={() => closeModal('large')}>
                <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 animate-in zoom-in-95 duration-200">
                    <div className="p-6 border-b border-slate-200 dark:border-slate-800">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Large Content Modal</h3>
                            <button
                                onClick={() => closeModal('large')}
                                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                    <div className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <h4 className="font-bold text-slate-900 dark:text-white">Section 1</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    This is a large modal that can contain extensive content. It's perfect for displaying detailed information, forms, or complex layouts.
                                </p>
                                <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                                    <p className="text-xs text-slate-500 dark:text-slate-400">Additional content block</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <h4 className="font-bold text-slate-900 dark:text-white">Section 2</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    The modal automatically adjusts to different screen sizes and maintains readability across all devices.
                                </p>
                                <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                                    <p className="text-xs text-slate-500 dark:text-slate-400">Additional content block</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/50 rounded-b-2xl flex gap-3 justify-end">
                        <button
                            onClick={() => closeModal('large')}
                            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold rounded-lg transition-all shadow-lg shadow-indigo-100 dark:shadow-none"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </ModalBackdrop>

            {/* 11. Small Modal */}
            <ModalBackdrop isOpen={modals.small} onClose={() => closeModal('small')}>
                <div className="max-w-sm mx-auto bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 animate-in zoom-in-95 duration-200">
                    <div className="p-6 text-center">
                        <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/40 rounded-full flex items-center justify-center mx-auto mb-3">
                            <Bell className="h-6 w-6 text-pink-600 dark:text-pink-400" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">New Notification</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                            You have 3 new messages waiting for you.
                        </p>
                        <button
                            onClick={() => closeModal('small')}
                            className="w-full px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white text-sm font-bold rounded-xl transition-all shadow-lg shadow-pink-100 dark:shadow-none"
                        >
                            View Messages
                        </button>
                    </div>
                </div>
            </ModalBackdrop>

            {/* 12. Centered Modal */}
            <ModalBackdrop isOpen={modals.centered} onClose={() => closeModal('centered')}>
                <div className="max-w-md mx-auto bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 animate-in zoom-in-95 duration-200">
                    <div className="p-8 text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Heart className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Thank You!</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
                            We appreciate your support. Your feedback helps us improve our service every day.
                        </p>
                        <div className="flex gap-3">
                            <button
                                onClick={() => closeModal('centered')}
                                className="flex-1 px-4 py-2.5 text-sm font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all border border-slate-200 dark:border-slate-700"
                            >
                                Close
                            </button>
                            <button
                                onClick={() => closeModal('centered')}
                                className="flex-1 px-4 py-2.5 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white text-sm font-bold rounded-xl transition-all shadow-lg shadow-violet-100 dark:shadow-none"
                            >
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </ModalBackdrop>
        </div>
    );
};

export default Modals;
