import React, { useState } from 'react';
import { Mail, ArrowLeft, Loader2, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';

const ForgotPassword = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const validate = () => {
        if (!email) {
            setError('Email is required');
            return false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setError('Email is invalid');
            return false;
        }
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;

        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            setIsSent(true);
        }, 1500);
    };

    const handleChange = (e) => {
        setEmail(e.target.value);
        if (error) setError('');
    };

    if (isSent) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
                <div className="w-full max-w-md">
                    <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/60 p-8 border border-slate-100 text-center">
                        <div className="flex justify-center mb-6">
                            <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center">
                                <CheckCircle2 className="h-10 w-10 text-emerald-500" />
                            </div>
                        </div>
                        <h1 className="text-2xl font-bold text-slate-900 mb-2">Check your email</h1>
                        <p className="text-slate-500 mb-8 font-medium">
                            We've sent a password reset link to <span className="font-bold text-slate-700">{email}</span>
                        </p>
                        <Link
                            to="/"
                            className="inline-flex items-center text-sm font-bold text-indigo-600 hover:text-indigo-500 transition-colors"
                        >
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Back to Sign In
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
            <div className="w-full max-w-md">
                <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/60 p-8 border border-slate-100">
                    <div className="mb-8">
                        <Link
                            to="/"
                            className="inline-flex items-center text-sm font-bold text-slate-500 hover:text-slate-700 transition-colors mb-6"
                        >
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Back
                        </Link>
                        <h1 className="text-3xl font-bold text-slate-900 mb-2">Forgot Password?</h1>
                        <p className="text-slate-500 font-medium">No worries, we'll send you reset instructions.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700" htmlFor="email">
                                Email Address
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className={cn("h-5 w-5", error ? "text-rose-400" : "text-slate-400")} />
                                </div>
                                <input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={handleChange}
                                    className={cn(
                                        "block w-full pl-10 pr-3 py-2.5 border rounded-xl focus:ring-2 transition-all font-medium text-sm",
                                        error
                                            ? "border-rose-300 focus:ring-rose-500/20 focus:border-rose-500 bg-rose-50/30"
                                            : "border-slate-200 focus:ring-indigo-500/20 focus:border-indigo-500"
                                    )}
                                    placeholder="admin@example.com"
                                />
                            </div>
                            {error && <p className="text-xs font-bold text-rose-500 ml-1">{error}</p>}
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-xl shadow-lg shadow-indigo-100 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isLoading ? (
                                <Loader2 className="h-5 w-5 animate-spin" />
                            ) : (
                                'Reset Password'
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;

