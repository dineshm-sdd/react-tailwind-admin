import React, { useState } from 'react';
import {
    ChevronLeft,
    ChevronRight,
    Plus,
    Calendar as CalendarIcon,
    Clock,
    MapPin,
    Users,
    Video,
    X
} from 'lucide-react';
import { cn } from '../../utils/cn';

const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [view, setView] = useState('month'); // month, week, day
    const [showEventModal, setShowEventModal] = useState(false);

    // Sample events data
    const events = [
        { id: 1, title: 'Team Meeting', date: new Date(2026, 1, 5), time: '10:00 AM', type: 'meeting', color: 'indigo' },
        { id: 2, title: 'Project Deadline', date: new Date(2026, 1, 8), time: '5:00 PM', type: 'deadline', color: 'rose' },
        { id: 3, title: 'Client Call', date: new Date(2026, 1, 10), time: '2:00 PM', type: 'call', color: 'emerald' },
        { id: 4, title: 'Workshop', date: new Date(2026, 1, 15), time: '9:00 AM', type: 'event', color: 'purple' },
        { id: 5, title: 'Code Review', date: new Date(2026, 1, 3), time: '11:00 AM', type: 'meeting', color: 'blue' },
    ];

    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const getDaysInMonth = (date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const daysInMonth = lastDay.getDate();
        const startingDayOfWeek = firstDay.getDay();

        const days = [];

        // Previous month days
        const prevMonthLastDay = new Date(year, month, 0).getDate();
        for (let i = startingDayOfWeek - 1; i >= 0; i--) {
            days.push({
                day: prevMonthLastDay - i,
                isCurrentMonth: false,
                date: new Date(year, month - 1, prevMonthLastDay - i)
            });
        }

        // Current month days
        for (let i = 1; i <= daysInMonth; i++) {
            days.push({
                day: i,
                isCurrentMonth: true,
                date: new Date(year, month, i)
            });
        }

        // Next month days
        const remainingDays = 42 - days.length; // 6 rows * 7 days
        for (let i = 1; i <= remainingDays; i++) {
            days.push({
                day: i,
                isCurrentMonth: false,
                date: new Date(year, month + 1, i)
            });
        }

        return days;
    };

    const navigateMonth = (direction) => {
        const newDate = new Date(currentDate);
        newDate.setMonth(currentDate.getMonth() + direction);
        setCurrentDate(newDate);
    };

    const isToday = (date) => {
        const today = new Date();
        return date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear();
    };

    const isSelected = (date) => {
        return date.getDate() === selectedDate.getDate() &&
            date.getMonth() === selectedDate.getMonth() &&
            date.getFullYear() === selectedDate.getFullYear();
    };

    const getEventsForDate = (date) => {
        return events.filter(event =>
            event.date.getDate() === date.getDate() &&
            event.date.getMonth() === date.getMonth() &&
            event.date.getFullYear() === date.getFullYear()
        );
    };

    const goToToday = () => {
        const today = new Date();
        setCurrentDate(today);
        setSelectedDate(today);
    };

    const days = getDaysInMonth(currentDate);
    const selectedDateEvents = getEventsForDate(selectedDate);

    return (
        <div className="max-w-7xl mx-auto space-y-6 pb-12">
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">Calendar</h1>
                    <p className="text-slate-500 dark:text-slate-400 font-medium text-sm">
                        Manage your schedule and events
                    </p>
                </div>
                <button
                    onClick={() => setShowEventModal(true)}
                    className="flex items-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold rounded-xl transition-all shadow-lg shadow-indigo-100 dark:shadow-none"
                >
                    <Plus className="h-4 w-4" />
                    Add Event
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Calendar Section */}
                <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                    {/* Calendar Header */}
                    <div className="p-6 border-b border-slate-200 dark:border-slate-800">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                                {months[currentDate.getMonth()]} {currentDate.getFullYear()}
                            </h2>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={goToToday}
                                    className="px-3 py-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded-lg transition-all"
                                >
                                    Today
                                </button>
                                <div className="flex items-center gap-1">
                                    <button
                                        onClick={() => navigateMonth(-1)}
                                        className="p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all"
                                    >
                                        <ChevronLeft className="h-4 w-4" />
                                    </button>
                                    <button
                                        onClick={() => navigateMonth(1)}
                                        className="p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all"
                                    >
                                        <ChevronRight className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Days of Week */}
                        <div className="grid grid-cols-7 gap-2">
                            {daysOfWeek.map((day) => (
                                <div key={day} className="text-center text-xs font-bold text-slate-500 dark:text-slate-400 uppercase py-2">
                                    {day}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Calendar Grid */}
                    <div className="p-4">
                        <div className="grid grid-cols-7 gap-2">
                            {days.map((dayInfo, index) => {
                                const dayEvents = getEventsForDate(dayInfo.date);
                                const isCurrentDay = isToday(dayInfo.date);
                                const isSelectedDay = isSelected(dayInfo.date);

                                return (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedDate(dayInfo.date)}
                                        className={cn(
                                            "aspect-square p-2 rounded-xl transition-all relative group",
                                            dayInfo.isCurrentMonth
                                                ? "text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800"
                                                : "text-slate-400 dark:text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800/50",
                                            isCurrentDay && "bg-indigo-50 dark:bg-indigo-900/20 font-bold",
                                            isSelectedDay && "bg-indigo-600 text-white hover:bg-indigo-700 dark:hover:bg-indigo-700"
                                        )}
                                    >
                                        <span className="text-sm font-semibold">{dayInfo.day}</span>
                                        {dayEvents.length > 0 && (
                                            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-0.5">
                                                {dayEvents.slice(0, 3).map((event, i) => (
                                                    <div
                                                        key={i}
                                                        className={cn(
                                                            "w-1 h-1 rounded-full",
                                                            isSelectedDay ? "bg-white" : `bg-${event.color}-500`
                                                        )}
                                                    />
                                                ))}
                                            </div>
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Events Sidebar */}
                <div className="space-y-4">
                    {/* Selected Date Info */}
                    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/40 rounded-xl flex items-center justify-center">
                                <CalendarIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Selected Date</p>
                                <p className="text-lg font-bold text-slate-900 dark:text-white">
                                    {selectedDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                </p>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-slate-600 dark:text-slate-400">Events</span>
                                <span className="font-bold text-slate-900 dark:text-white">{selectedDateEvents.length}</span>
                            </div>
                        </div>
                    </div>

                    {/* Events List */}
                    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                        <div className="p-4 border-b border-slate-200 dark:border-slate-800">
                            <h3 className="font-bold text-slate-900 dark:text-white">Events</h3>
                        </div>
                        <div className="max-h-96 overflow-y-auto">
                            {selectedDateEvents.length > 0 ? (
                                <div className="p-4 space-y-3">
                                    {selectedDateEvents.map((event) => (
                                        <div
                                            key={event.id}
                                            className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all"
                                        >
                                            <div className="flex items-start gap-3">
                                                <div className={cn(
                                                    "w-1 h-full rounded-full",
                                                    `bg-${event.color}-500`
                                                )} />
                                                <div className="flex-1 min-w-0">
                                                    <p className="font-bold text-slate-900 dark:text-white text-sm mb-1">
                                                        {event.title}
                                                    </p>
                                                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                                                        <Clock className="h-3 w-3" />
                                                        <span>{event.time}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="p-8 text-center">
                                    <CalendarIcon className="h-12 w-12 text-slate-300 dark:text-slate-700 mx-auto mb-3" />
                                    <p className="text-sm text-slate-500 dark:text-slate-400">No events scheduled</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Upcoming Events */}
                    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                        <div className="p-4 border-b border-slate-200 dark:border-slate-800">
                            <h3 className="font-bold text-slate-900 dark:text-white">Upcoming</h3>
                        </div>
                        <div className="p-4 space-y-2">
                            {events.slice(0, 3).map((event) => (
                                <div
                                    key={event.id}
                                    className="flex items-center gap-3 p-2 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-lg transition-all"
                                >
                                    <div className={cn(
                                        "w-2 h-2 rounded-full",
                                        `bg-${event.color}-500`
                                    )} />
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-slate-900 dark:text-white truncate">
                                            {event.title}
                                        </p>
                                        <p className="text-xs text-slate-500 dark:text-slate-400">
                                            {event.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Add Event Modal */}
            {showEventModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 dark:bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 animate-in zoom-in-95 duration-200">
                        <div className="p-6 border-b border-slate-200 dark:border-slate-800">
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Add New Event</h3>
                                <button
                                    onClick={() => setShowEventModal(false)}
                                    className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                                >
                                    <X className="h-5 w-5" />
                                </button>
                            </div>
                        </div>
                        <div className="p-6 space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Event Title</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm dark:text-slate-200"
                                    placeholder="Team Meeting"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Date</label>
                                    <input
                                        type="date"
                                        className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm dark:text-slate-200"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Time</label>
                                    <input
                                        type="time"
                                        className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm dark:text-slate-200"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Event Type</label>
                                <select className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm dark:text-slate-200">
                                    <option>Meeting</option>
                                    <option>Deadline</option>
                                    <option>Call</option>
                                    <option>Event</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Description</label>
                                <textarea
                                    rows={3}
                                    className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm resize-none dark:text-slate-200"
                                    placeholder="Add event description..."
                                />
                            </div>
                        </div>
                        <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/50 rounded-b-2xl flex gap-3 justify-end">
                            <button
                                onClick={() => setShowEventModal(false)}
                                className="px-4 py-2 text-sm font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => setShowEventModal(false)}
                                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold rounded-lg transition-all shadow-lg shadow-indigo-100 dark:shadow-none"
                            >
                                Add Event
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Calendar;
