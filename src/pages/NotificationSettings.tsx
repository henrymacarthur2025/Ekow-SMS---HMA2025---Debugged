import React, { useState } from 'react';
import { Bell, BookOpen, Calendar, Settings, LogOut, Menu, User, Check, X, BellRing, ClipboardList, Megaphone } from 'lucide-react';

interface NotificationSettingsProps {
    navigate: (route: string) => void;
}

export default function NotificationSettings({ navigate }: NotificationSettingsProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
    // State for notification toggles
    const [settings, setSettings] = useState({
        newGrade: true,
        newHomework: true,
        newAnnouncement: true,
        attendanceAlerts: false,
        feeReminders: true,
    });

    const handleToggle = (key: keyof typeof settings) => {
        setSettings(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    const sidebarNavItems = [
        { icon: BookOpen, label: 'Dashboard', route: 'parent_dashboard' },
        { icon: ClipboardList, label: 'Grades', route: 'grades_parent' },
        { icon: Calendar, label: 'Attendance', route: 'attendance_parent' },
        { icon: Bell, label: 'Announcements', route: 'announcements_parent' },
        { icon: Settings, label: 'Settings', route: 'notification_settings', active: true },
    ];

    return (
        <div className="min-h-screen bg-[#F7F8FA] flex flex-col md:flex-row font-sans">
            {/* Mobile Header */}
            <div className="md:hidden bg-[#1F3864] text-white p-4 flex justify-between items-center sticky top-0 z-50">
                <div className="flex items-center gap-2">
                    <BookOpen className="w-6 h-6" />
                    <span className="text-xl font-bold tracking-tight">SchoolLink</span>
                </div>
                <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-1">
                    <Menu className="w-6 h-6" />
                </button>
            </div>

            {/* Sidebar Navigation */}
            <aside className={`
                fixed md:static inset-y-0 left-0 z-40 w-64 bg-[#1F3864] text-white
                transform transition-transform duration-300 ease-in-out
                ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
                flex flex-col
            `}>
                <div className="hidden md:flex p-6 items-center gap-3 border-b border-white/10">
                    <BookOpen className="w-8 h-8 text-white" />
                    <span className="text-2xl font-bold tracking-tight">SchoolLink</span>
                </div>

                <div className="p-4 border-b border-white/10 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                        <User className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <p className="font-semibold text-sm">Parent Portal</p>
                        <p className="text-xs text-white/70">Mr. Mensah</p>
                    </div>
                </div>

                <nav className="flex-1 py-4 flex flex-col gap-1 px-3 overflow-y-auto">
                    {sidebarNavItems.map((item) => (
                        <button
                            key={item.label}
                            onClick={() => {
                                setIsMobileMenuOpen(false);
                                navigate(item.route);
                            }}
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                                item.active 
                                ? 'bg-white/10 font-medium' 
                                : 'text-white/80 hover:bg-white/5 hover:text-white'
                            }`}
                        >
                            <item.icon className={`w-5 h-5 ${item.active ? 'text-white' : ''}`} />
                            {item.label}
                        </button>
                    ))}
                </nav>

                <div className="p-4 border-t border-white/10">
                    <button 
                        onClick={() => navigate('splash')}
                        className="flex items-center gap-3 px-4 py-3 w-full text-left rounded-lg text-white/80 hover:bg-white/5 hover:text-white transition-colors"
                    >
                        <LogOut className="w-5 h-5" />
                        Sign Out
                    </button>
                </div>
            </aside>

            {/* Overlay for mobile sidebar */}
            {isMobileMenuOpen && (
                <div 
                    className="fixed inset-0 bg-black/50 z-30 md:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}

            {/* Main Content */}
            <main className="flex-1 flex flex-col min-h-0 overflow-hidden">
                {/* Top Bar */}
                <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-0 z-20">
                    <h1 className="text-2xl font-bold text-[#1F3864]">Notification Settings</h1>
                    <div className="hidden md:flex items-center gap-4">
                        <button onClick={() => navigate('notifications_inbox')} className="p-2 text-gray-400 hover:text-[#1F3864] transition-colors relative">
                            <Bell className="w-6 h-6" />
                        </button>
                        <div className="h-8 w-px bg-gray-200"></div>
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-[#1F3864] text-white flex items-center justify-center font-bold text-sm">
                                M
                            </div>
                            <span className="font-medium text-gray-700">Mr. Mensah</span>
                        </div>
                    </div>
                </header>

                {/* Content Area */}
                <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
                    <div className="max-w-3xl mx-auto space-y-6">
                        
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                            <div className="p-6 border-b border-gray-100">
                                <h2 className="text-lg font-bold text-[#1F3864]">Email & Push Notifications</h2>
                                <p className="text-gray-500 text-sm mt-1">Choose which alerts you want to receive about your child's progress.</p>
                            </div>
                            
                            <div className="divide-y divide-gray-100">
                                {/* Setting Item 1 */}
                                <div className="p-4 sm:p-6 flex items-center justify-between hover:bg-[#F7F8FA] transition-colors">
                                    <div className="flex items-start gap-4">
                                        <div className="p-2 bg-[#DCE6F1] rounded-lg text-[#1F3864]">
                                            <ClipboardList className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">New Grades Posted</h3>
                                            <p className="text-sm text-gray-500 mt-0.5">Get notified when a teacher publishes a new grade or exam result.</p>
                                        </div>
                                    </div>
                                    <button 
                                        onClick={() => handleToggle('newGrade')}
                                        className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#1F3864] focus:ring-offset-2 ${settings.newGrade ? 'bg-[#1F3864]' : 'bg-gray-200'}`}
                                        role="switch"
                                        aria-checked={settings.newGrade}
                                    >
                                        <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${settings.newGrade ? 'translate-x-5' : 'translate-x-0'}`} />
                                    </button>
                                </div>

                                {/* Setting Item 2 */}
                                <div className="p-4 sm:p-6 flex items-center justify-between hover:bg-[#F7F8FA] transition-colors">
                                    <div className="flex items-start gap-4">
                                        <div className="p-2 bg-[#DCE6F1] rounded-lg text-[#1F3864]">
                                            <BookOpen className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">New Homework Assignments</h3>
                                            <p className="text-sm text-gray-500 mt-0.5">Receive alerts when new homework is assigned or due soon.</p>
                                        </div>
                                    </div>
                                    <button 
                                        onClick={() => handleToggle('newHomework')}
                                        className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#1F3864] focus:ring-offset-2 ${settings.newHomework ? 'bg-[#1F3864]' : 'bg-gray-200'}`}
                                        role="switch"
                                        aria-checked={settings.newHomework}
                                    >
                                        <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${settings.newHomework ? 'translate-x-5' : 'translate-x-0'}`} />
                                    </button>
                                </div>

                                {/* Setting Item 3 */}
                                <div className="p-4 sm:p-6 flex items-center justify-between hover:bg-[#F7F8FA] transition-colors">
                                    <div className="flex items-start gap-4">
                                        <div className="p-2 bg-[#DCE6F1] rounded-lg text-[#1F3864]">
                                            <Megaphone className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">School Announcements</h3>
                                            <p className="text-sm text-gray-500 mt-0.5">Important updates, event reminders, and general school news.</p>
                                        </div>
                                    </div>
                                    <button 
                                        onClick={() => handleToggle('newAnnouncement')}
                                        className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#1F3864] focus:ring-offset-2 ${settings.newAnnouncement ? 'bg-[#1F3864]' : 'bg-gray-200'}`}
                                        role="switch"
                                        aria-checked={settings.newAnnouncement}
                                    >
                                        <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${settings.newAnnouncement ? 'translate-x-5' : 'translate-x-0'}`} />
                                    </button>
                                </div>

                                {/* Setting Item 4 */}
                                <div className="p-4 sm:p-6 flex items-center justify-between hover:bg-[#F7F8FA] transition-colors">
                                    <div className="flex items-start gap-4">
                                        <div className="p-2 bg-[#DCE6F1] rounded-lg text-[#1F3864]">
                                            <Calendar className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">Attendance Alerts</h3>
                                            <p className="text-sm text-gray-500 mt-0.5">Get notified immediately if your child is marked absent or late.</p>
                                        </div>
                                    </div>
                                    <button 
                                        onClick={() => handleToggle('attendanceAlerts')}
                                        className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#1F3864] focus:ring-offset-2 ${settings.attendanceAlerts ? 'bg-[#1F3864]' : 'bg-gray-200'}`}
                                        role="switch"
                                        aria-checked={settings.attendanceAlerts}
                                    >
                                        <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${settings.attendanceAlerts ? 'translate-x-5' : 'translate-x-0'}`} />
                                    </button>
                                </div>
                            </div>
                            
                            <div className="p-6 bg-gray-50 border-t border-gray-100 flex justify-end">
                                <button onClick={() => navigate('notification_settings')} className="px-6 py-2.5 bg-[#1F3864] text-white rounded-lg font-medium hover:bg-[#152643] transition-colors">
                                    Save Preferences
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
