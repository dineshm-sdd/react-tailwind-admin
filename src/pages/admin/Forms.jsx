import React, { useState } from 'react';
import {
    Save,
    X,
    Upload,
    Info,
    CheckCircle2,
    AlertCircle,
    Image,
    FileText
} from 'lucide-react';
import { cn } from '../../utils/cn';


const Forms = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        role: 'Editor',
        bio: '',
        adminPanel: true,
        notifications: true,
        acceptTerms: false,
        newsletter: true,
        updates: false,
        marketing: false
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [profilePhoto, setProfilePhoto] = useState(null);
    const [profilePhotoPreview, setProfilePhotoPreview] = useState(null);
    const [uploadedFile, setUploadedFile] = useState(null);
    const [isDragging, setIsDragging] = useState(false);

    const validate = () => {
        const newErrors = {};
        if (!formData.firstName.trim()) newErrors.firstName = 'First Name is required';
        if (!formData.lastName.trim()) newErrors.lastName = 'Last Name is required';
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (id, value) => {
        setFormData(prev => ({ ...prev, [id]: value }));
        if (errors[id]) {
            setErrors(prev => ({ ...prev, [id]: null }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;

        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            setTimeout(() => setIsSuccess(false), 3000);
        }, 1500);
    };

    const handlePhotoUpload = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
            setProfilePhoto(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfilePhotoPreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setUploadedFile(file);
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        const file = e.dataTransfer.files[0];
        if (file) {
            setUploadedFile(file);
        }
    };

    const removePhoto = () => {
        setProfilePhoto(null);
        setProfilePhotoPreview(null);
    };

    const removeFile = () => {
        setUploadedFile(null);
    };

    return (
        <div className="max-w-4xl mx-auto space-y-8 pb-12 transition-colors">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">Account Settings</h1>
                    <p className="text-slate-500 dark:text-slate-400 font-medium text-sm">Update your personal information and profile settings.</p>
                </div>
                <div className="flex items-center gap-2">
                    <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Live Preview</span>
                </div>
            </div>

            {isSuccess && (
                <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 px-4 py-3 rounded-xl flex items-center gap-3 animate-in fade-in slide-in-from-top-2 shadow-sm">
                    <CheckCircle2 className="h-5 w-5" />
                    <p className="text-sm font-bold">Settings updated successfully!</p>
                </div>
            )}

            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm shadow-slate-200/50 dark:shadow-none overflow-hidden transition-colors">
                <div className="p-6 border-b border-slate-50 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-800/20">
                    <h3 className="font-bold text-slate-900 dark:text-white">Profile Information</h3>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">This information will be displayed publicly.</p>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-6">
                    <div className="flex flex-col sm:flex-row gap-6">
                        <div className="space-y-2 flex-1">
                            <label className="text-sm font-bold text-slate-700 dark:text-slate-300">First Name</label>
                            <input
                                type="text"
                                value={formData.firstName}
                                onChange={(e) => handleChange('firstName', e.target.value)}
                                className={cn(
                                    "w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border rounded-xl focus:outline-none focus:ring-2 transition-all text-sm font-medium dark:text-slate-200",
                                    errors.firstName ? "border-rose-300 dark:border-rose-500 focus:ring-rose-500/10 focus:border-rose-500" : "border-slate-100 dark:border-slate-700 focus:ring-indigo-500/10 focus:border-indigo-500"
                                )}
                                placeholder="Dinesh"
                            />
                            {errors.firstName && <p className="text-xs font-bold text-rose-500">{errors.firstName}</p>}
                        </div>
                        <div className="space-y-2 flex-1">
                            <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Last Name</label>
                            <input
                                type="text"
                                value={formData.lastName}
                                onChange={(e) => handleChange('lastName', e.target.value)}
                                className={cn(
                                    "w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border rounded-xl focus:outline-none focus:ring-2 transition-all text-sm font-medium dark:text-slate-200",
                                    errors.lastName ? "border-rose-300 dark:border-rose-500 focus:ring-rose-500/10 focus:border-rose-500" : "border-slate-100 dark:border-slate-700 focus:ring-indigo-500/10 focus:border-indigo-500"
                                )}
                                placeholder="Mamgain"
                            />
                            {errors.lastName && <p className="text-xs font-bold text-rose-500">{errors.lastName}</p>}
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Email Address</label>
                        <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleChange('email', e.target.value)}
                            className={cn(
                                "w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border rounded-xl focus:outline-none focus:ring-2 transition-all text-sm font-medium dark:text-slate-200",
                                errors.email ? "border-rose-300 dark:border-rose-500 focus:ring-rose-500/10 focus:border-rose-500" : "border-slate-100 dark:border-slate-700 focus:ring-indigo-500/10 focus:border-indigo-500"
                            )}
                            placeholder="dinesh@example.com"
                        />
                        {errors.email && <p className="text-xs font-bold text-rose-500">{errors.email}</p>}
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Role</label>
                        <div className="relative">
                            <select
                                value={formData.role}
                                onChange={(e) => handleChange('role', e.target.value)}
                                className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all text-sm font-medium appearance-none cursor-pointer dark:text-slate-200"
                            >
                                <option>Super Admin</option>
                                <option>Admin</option>
                                <option>Editor</option>
                                <option>Viewer</option>
                            </select>
                            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                                <span className="text-slate-400 dark:text-slate-500">▼</span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Biography</label>
                        <textarea
                            rows={4}
                            value={formData.bio}
                            onChange={(e) => handleChange('bio', e.target.value)}
                            className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all text-sm font-medium resize-none shadow-inner dark:text-slate-200 dark:placeholder:text-slate-600"
                            placeholder="Write a few sentences about yourself..."
                        ></textarea>
                        <p className="text-xs font-medium text-slate-400 dark:text-slate-500">Brief description for your profile. URLs are allowed.</p>
                    </div>

                    {/* Profile Photo Upload */}
                    <div className="space-y-2 pt-4 border-t border-slate-50 dark:border-slate-800">
                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Profile Photo</label>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                            {profilePhotoPreview ? (
                                <div className="relative group">
                                    <img
                                        src={profilePhotoPreview}
                                        alt="Profile preview"
                                        className="w-24 h-24 rounded-xl object-cover border-2 border-slate-200 dark:border-slate-700 shadow-sm"
                                    />
                                    <button
                                        type="button"
                                        onClick={removePhoto}
                                        className="absolute -top-2 -right-2 p-1.5 bg-rose-500 hover:bg-rose-600 text-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all"
                                    >
                                        <X className="h-3 w-3" />
                                    </button>
                                </div>
                            ) : (
                                <div className="w-24 h-24 rounded-xl bg-slate-100 dark:bg-slate-800 border-2 border-dashed border-slate-300 dark:border-slate-600 flex items-center justify-center">
                                    <Image className="h-8 w-8 text-slate-400 dark:text-slate-500" />
                                </div>
                            )}
                            <div className="flex-1 space-y-3">
                                <div className="flex flex-wrap gap-2">
                                    <label className="cursor-pointer">
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={handlePhotoUpload}
                                            className="hidden"
                                        />
                                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold rounded-xl transition-all shadow-lg shadow-indigo-100 dark:shadow-none active:scale-95">
                                            <Upload className="h-4 w-4" />
                                            Upload Photo
                                        </span>
                                    </label>
                                    {profilePhoto && (
                                        <button
                                            type="button"
                                            onClick={removePhoto}
                                            className="px-4 py-2 text-sm font-bold text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-900/20 rounded-xl transition-all border border-transparent hover:border-rose-200 dark:hover:border-rose-800"
                                        >
                                            Remove
                                        </button>
                                    )}
                                </div>
                                <p className="text-xs font-medium text-slate-400 dark:text-slate-500">
                                    JPG, PNG or GIF. Max size 2MB. Recommended 400x400px.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* File Upload with Drag & Drop */}
                    <div className="space-y-2 pt-4 border-t border-slate-50 dark:border-slate-800">
                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Upload Document</label>
                        <div
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onDrop={handleDrop}
                            className={cn(
                                "relative border-2 border-dashed rounded-xl p-8 transition-all",
                                isDragging
                                    ? "border-indigo-400 dark:border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20"
                                    : "border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/20 hover:border-slate-300 dark:hover:border-slate-600"
                            )}
                        >
                            {uploadedFile ? (
                                <div className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                                    <div className="flex items-center gap-3 flex-1 min-w-0">
                                        <div className="p-2 bg-indigo-100 dark:bg-indigo-900/40 rounded-lg">
                                            <FileText className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-bold text-slate-700 dark:text-slate-300 truncate">
                                                {uploadedFile.name}
                                            </p>
                                            <p className="text-xs text-slate-500 dark:text-slate-400">
                                                {(uploadedFile.size / 1024).toFixed(2)} KB
                                            </p>
                                        </div>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={removeFile}
                                        className="ml-2 p-2 text-slate-400 hover:text-rose-500 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-900/20 rounded-lg transition-all"
                                    >
                                        <X className="h-4 w-4" />
                                    </button>
                                </div>
                            ) : (
                                <div className="text-center">
                                    <div className="mx-auto w-12 h-12 bg-indigo-100 dark:bg-indigo-900/40 rounded-xl flex items-center justify-center mb-4">
                                        <Upload className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                                    </div>
                                    <div className="mb-4">
                                        <label className="cursor-pointer">
                                            <input
                                                type="file"
                                                onChange={handleFileUpload}
                                                className="hidden"
                                            />
                                            <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300">
                                                Click to upload
                                            </span>
                                        </label>
                                        <span className="text-sm text-slate-500 dark:text-slate-400"> or drag and drop</span>
                                    </div>
                                    <p className="text-xs text-slate-400 dark:text-slate-500">
                                        PDF, DOC, DOCX, TXT up to 10MB
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="space-y-4 pt-4 border-t border-slate-50 dark:border-slate-800">
                        <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Checkbox Options</h4>

                        {/* Standard Checkbox */}
                        <div className="flex items-start gap-3 p-4 bg-slate-50/50 dark:bg-slate-800/20 rounded-xl border border-slate-100/50 dark:border-slate-700/50 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer"
                            onClick={() => handleChange('acceptTerms', !formData.acceptTerms)}
                        >
                            <div className="relative flex items-center justify-center mt-0.5">
                                <input
                                    type="checkbox"
                                    checked={formData.acceptTerms}
                                    onChange={(e) => handleChange('acceptTerms', e.target.checked)}
                                    className="peer h-5 w-5 cursor-pointer appearance-none rounded-md border-2 border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 transition-all checked:bg-indigo-600 checked:border-indigo-600 hover:border-indigo-400 dark:hover:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
                                    onClick={(e) => e.stopPropagation()}
                                />
                                <svg
                                    className="absolute w-3 h-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-bold text-slate-700 dark:text-slate-300">Accept Terms & Conditions</p>
                                <p className="text-xs font-medium text-slate-500 dark:text-slate-400">I agree to the terms and conditions and privacy policy.</p>
                            </div>
                        </div>

                        {/* Custom Styled Checkbox with Icon */}
                        <div className="flex items-start gap-3 p-4 bg-slate-50/50 dark:bg-slate-800/20 rounded-xl border border-slate-100/50 dark:border-slate-700/50 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer"
                            onClick={() => handleChange('newsletter', !formData.newsletter)}
                        >
                            <div className="relative flex items-center justify-center mt-0.5">
                                <input
                                    type="checkbox"
                                    checked={formData.newsletter}
                                    onChange={(e) => handleChange('newsletter', e.target.checked)}
                                    className="peer h-5 w-5 cursor-pointer appearance-none rounded-md border-2 border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 transition-all checked:bg-emerald-600 checked:border-emerald-600 hover:border-emerald-400 dark:hover:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
                                    onClick={(e) => e.stopPropagation()}
                                />
                                <CheckCircle2
                                    className="absolute w-3.5 h-3.5 text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity"
                                    strokeWidth={3}
                                />
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-bold text-slate-700 dark:text-slate-300">Newsletter Subscription</p>
                                <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Receive our weekly newsletter with updates and tips.</p>
                            </div>
                        </div>

                        {/* Compact Checkboxes */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 cursor-pointer group"
                                onClick={() => handleChange('updates', !formData.updates)}
                            >
                                <div className="relative flex items-center justify-center">
                                    <input
                                        type="checkbox"
                                        checked={formData.updates}
                                        onChange={(e) => handleChange('updates', e.target.checked)}
                                        className="peer h-4 w-4 cursor-pointer appearance-none rounded border-2 border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 transition-all checked:bg-indigo-600 checked:border-indigo-600 group-hover:border-indigo-400 dark:group-hover:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
                                        onClick={(e) => e.stopPropagation()}
                                    />
                                    <svg
                                        className="absolute w-2.5 h-2.5 text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </div>
                                <label className="text-sm font-medium text-slate-700 dark:text-slate-300 cursor-pointer">
                                    Product Updates
                                </label>
                            </div>

                            <div className="flex items-center gap-3 cursor-pointer group"
                                onClick={() => handleChange('marketing', !formData.marketing)}
                            >
                                <div className="relative flex items-center justify-center">
                                    <input
                                        type="checkbox"
                                        checked={formData.marketing}
                                        onChange={(e) => handleChange('marketing', e.target.checked)}
                                        className="peer h-4 w-4 cursor-pointer appearance-none rounded border-2 border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 transition-all checked:bg-indigo-600 checked:border-indigo-600 group-hover:border-indigo-400 dark:group-hover:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
                                        onClick={(e) => e.stopPropagation()}
                                    />
                                    <svg
                                        className="absolute w-2.5 h-2.5 text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </div>
                                <label className="text-sm font-medium text-slate-700 dark:text-slate-300 cursor-pointer">
                                    Marketing Communications
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4 pt-4 border-t border-slate-50 dark:border-slate-800">
                        <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Access</h4>
                        <div className="flex items-center justify-between p-4 bg-slate-50/50 dark:bg-slate-800/20 rounded-xl border border-slate-100/50 dark:border-slate-700/50 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer" onClick={() => handleChange('adminPanel', !formData.adminPanel)}>
                            <div>
                                <p className="text-sm font-bold text-slate-700 dark:text-slate-300">Admin Panel</p>
                                <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Access admin panel.</p>
                            </div>


                            <button type="button" className={cn("w-11 h-6 rounded-full relative transition-all focus:outline-none ring-offset-2 focus:ring-2 focus:ring-indigo-500 dark:ring-offset-slate-900", formData.adminPanel ? "bg-indigo-600" : "bg-slate-200 dark:bg-slate-700")}
                            >
                                <span className={cn(
                                    "absolute top-1 w-4 h-4 bg-white rounded-full transition-all shadow-sm",
                                    formData.adminPanel ? "right-1" : "left-1"
                                )}></span>
                            </button>
                        </div>
                    </div>

                    <div className="space-y-4 pt-4 border-t border-slate-50 dark:border-slate-800">
                        <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Preferences</h4>
                        <div className="flex items-center justify-between p-4 bg-slate-50/50 dark:bg-slate-800/20 rounded-xl border border-slate-100/50 dark:border-slate-700/50 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer" onClick={() => handleChange('notifications', !formData.notifications)}>
                            <div>
                                <p className="text-sm font-bold text-slate-700 dark:text-slate-300">Email Notifications</p>
                                <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Receive weekly digests and security alerts.</p>
                            </div>
                            <button type="button" className={cn("w-11 h-6 rounded-full relative transition-all focus:outline-none ring-offset-2 focus:ring-2 focus:ring-indigo-500 dark:ring-offset-slate-900", formData.notifications ? "bg-indigo-600" : "bg-slate-200 dark:bg-slate-700")}
                            >
                                <span className={cn(
                                    "absolute top-1 w-4 h-4 bg-white rounded-full transition-all shadow-sm",
                                    formData.notifications ? "right-1" : "left-1"
                                )}></span>
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center justify-end gap-3 pt-6 border-t border-slate-100 dark:border-slate-800">
                        <button
                            type="button"
                            className="px-6 py-2.5 text-sm font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-all border border-transparent hover:border-slate-100 dark:hover:border-slate-700"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="flex items-center gap-2 px-8 py-2.5 bg-indigo-600 rounded-xl text-sm font-bold text-white hover:bg-indigo-700 shadow-lg shadow-indigo-100 dark:shadow-none transition-all disabled:opacity-70 active:scale-95"
                        >
                            {isSubmitting ? (
                                <>
                                    <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                                    Saving...
                                </>
                            ) : (
                                <>
                                    <Save className="h-4 w-4" />
                                    Save Changes
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </div>


            <div className="bg-rose-50 dark:bg-rose-900/10 border border-rose-100 dark:border-rose-900/30 rounded-2xl p-6">
                <div className="flex gap-4">
                    <div className="p-2 bg-rose-100 dark:bg-rose-900/40 rounded-lg h-fit">
                        <AlertCircle className="h-5 w-5 text-rose-600 dark:text-rose-400" />
                    </div>
                    <div>
                        <h4 className="text-sm font-bold text-rose-900 dark:text-rose-300">Danger Zone</h4>
                        <p className="text-sm text-rose-700 dark:text-rose-400/80 mb-4">Once you delete your account, there is no going back. Please be certain.</p>
                        <button className="px-4 py-2 bg-rose-600 dark:bg-rose-700 text-white text-sm font-bold rounded-xl hover:bg-rose-700 dark:hover:bg-rose-600 transition-all shadow-lg shadow-rose-100 dark:shadow-none">
                            Delete Account
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Forms;
