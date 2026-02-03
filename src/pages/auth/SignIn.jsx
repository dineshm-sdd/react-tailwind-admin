import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, Loader2 } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { cn } from '../../utils/cn';

const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validate = () => {
        const newErrors = {};
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;

        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            navigate('/admin/dashboard');
        }, 1500);
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
        // Clear error when user types
        if (errors[id]) {
            setErrors(prev => ({ ...prev, [id]: null }));
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 p-4 transition-colors duration-300">
            <div className="w-full max-w-md">
                <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl shadow-slate-200/60 dark:shadow-none p-8 border border-slate-100 dark:border-slate-800 transition-colors">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Welcome Back</h1>
                        <p className="text-slate-500 dark:text-slate-400 font-medium">Please enter your details to sign in</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 dark:text-slate-300" htmlFor="email">
                                Email Address
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className={cn("h-5 w-5", errors.email ? "text-rose-400" : "text-slate-400")} />
                                </div>
                                <input
                                    id="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={cn(
                                        "block w-full pl-10 pr-3 py-2.5 border rounded-xl focus:ring-2 transition-all font-medium text-sm",
                                        errors.email
                                            ? "border-rose-300 focus:ring-rose-500/20 focus:border-rose-500 bg-rose-50/30 dark:bg-rose-900/10"
                                            : "border-slate-200 dark:border-slate-700 focus:ring-indigo-500/20 focus:border-indigo-500 bg-white dark:bg-slate-800 dark:text-slate-200"
                                    )}
                                    placeholder="admin@example.com"
                                />
                            </div>
                            {errors.email && <p className="text-xs font-bold text-rose-500 ml-1">{errors.email}</p>}
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <label className="text-sm font-bold text-slate-700 dark:text-slate-300" htmlFor="password">
                                    Password
                                </label>
                                <Link
                                    to="/forgot-password"
                                    className="text-sm font-bold text-indigo-600 hover:text-indigo-500 transition-colors"
                                >
                                    Forgot password?
                                </Link>
                            </div>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className={cn("h-5 w-5", errors.password ? "text-rose-400" : "text-slate-400")} />
                                </div>
                                <input
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    value={formData.password}
                                    onChange={handleChange}
                                    className={cn(
                                        "block w-full pl-10 pr-10 py-2.5 border rounded-xl focus:ring-2 transition-all font-medium text-sm",
                                        errors.password
                                            ? "border-rose-300 focus:ring-rose-500/20 focus:border-rose-500 bg-rose-50/30 dark:bg-rose-900/10"
                                            : "border-slate-200 dark:border-slate-700 focus:ring-indigo-500/20 focus:border-indigo-500 bg-white dark:bg-slate-800 dark:text-slate-200"
                                    )}
                                    placeholder="••••••••"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                >
                                    {showPassword ? (
                                        <EyeOff className="h-5 w-5 text-slate-400 hover:text-slate-600" />
                                    ) : (
                                        <Eye className="h-5 w-5 text-slate-400 hover:text-slate-600" />
                                    )}
                                </button>
                            </div>
                            {errors.password && <p className="text-xs font-bold text-rose-500 ml-1">{errors.password}</p>}
                        </div>

                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-slate-300 dark:border-slate-700 rounded cursor-pointer dark:bg-slate-800"
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm font-medium text-slate-600 dark:text-slate-400 cursor-pointer">
                                Remember me
                            </label>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-xl shadow-lg shadow-indigo-100 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all disabled:opacity-70 disabled:cursor-not-allowed dark:shadow-none dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-500 dark:focus:ring-offset-slate-900"
                        >
                            {isLoading ? (
                                <Loader2 className="h-5 w-5 animate-spin" />
                            ) : (
                                'Sign In'
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;

