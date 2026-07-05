import React, { useState } from 'react';
import { 
    LayoutDashboard, Users, BookOpen, Settings, Shield, LogOut, Menu, 
    Bell, Mail, Phone, Laptop, Smartphone, Monitor 
} from 'lucide-react';

interface AdminProfileSecurityProps {
    navigate: (route: string) => void;
}

export default function AdminProfileSecurity({ navigate }: AdminProfileSecurityProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const sidebarNavItems = [
        { icon: LayoutDashboard, label: 'Dashboard', route: 'admin_dashboard' },
        { icon: Users, label: 'Directory', route: 'admin_students' },
        { icon: BookOpen, label: 'Academics', route: 'admin_classes' },
        { icon: Settings, label: 'Settings', route: 'admin_school_profile' },
        { icon: Shield, label: 'Profile & Security', route: 'admin_profile_security', active: true },
    ];

    const activeSessions = [
        { id: 1, device: 'MacBook Pro 16"', os: 'macOS', browser: 'Chrome', location: 'Accra, Ghana', lastActive: 'Active now', ip: '197.210.64.12', isCurrent: true, icon: Laptop },
        { id: 2, device: 'iPhone 13', os: 'iOS', browser: 'Safari', location: 'Accra, Ghana', lastActive: '2 hours ago', ip: '197.210.64.45', isCurrent: false, icon: Smartphone },
        { id: 3, device: 'Windows PC', os: 'Windows 11', browser: 'Edge', location: 'Kumasi, Ghana', lastActive: 'Yesterday, 14:30', ip: '154.160.12.8', isCurrent: false, icon: Monitor },
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
                        <span className="font-bold">AD</span>
                    </div>
                    <div>
                        <p className="font-semibold text-sm">Administrator</p>
                        <p className="text-xs text-white/70">System Admin</p>
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
                    <h1 className="text-2xl font-bold text-[#1F3864]">Profile & Security</h1>
                    <div className="hidden md:flex items-center gap-4">
                        <button onClick={() => navigate('notifications_inbox')} className="p-2 text-gray-400 hover:text-[#1F3864] transition-colors relative">
                            <Bell className="w-6 h-6" />
                        </button>
                        <div className="h-8 w-px bg-gray-200"></div>
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-[#1F3864] text-white flex items-center justify-center font-bold text-sm">
                                AD
                            </div>
                            <span className="font-medium text-gray-700">System Admin</span>
                        </div>
                    </div>
                </header>

                {/* Content Area */}
                <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
                    <div className="max-w-4xl mx-auto space-y-6">

                        {/* Profile Section */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                            <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[#DCE6F1]/20">
                                <div>
                                    <h2 className="text-lg font-bold text-[#1F3864]">Personal Information</h2>
                                    <p className="text-sm text-gray-500 mt-1">Manage your admin profile details.</p>
                                </div>
                                <button onClick={() => navigate('admin_profile_security')} className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors whitespace-nowrap">
                                    Edit Profile
                                </button>
                            </div>
                            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-500 mb-1">Full Name</label>
                                    <p className="text-gray-900 font-medium">System Admin (Mr. Osei)</p>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-500 mb-1">Role</label>
                                    <p className="text-gray-900 font-medium">Super Administrator</p>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-500 mb-1">Email Address</label>
                                    <div className="flex items-center gap-2 text-gray-900 font-medium">
                                        <Mail className="w-4 h-4 text-gray-400" />
                                        admin@schoollink.edu.gh
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-500 mb-1">Phone Number</label>
                                    <div className="flex items-center gap-2 text-gray-900 font-medium">
                                        <Phone className="w-4 h-4 text-gray-400" />
                                        +233 54 123 4567
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Password Section */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                            <div className="p-6 border-b border-gray-100 bg-[#DCE6F1]/20">
                                <h2 className="text-lg font-bold text-[#1F3864]">Change Password</h2>
                                <p className="text-sm text-gray-500 mt-1">Ensure your account is using a strong, unique password to stay secure.</p>
                            </div>
                            <div className="p-6 space-y-4">
                                <div className="max-w-md">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                                    <input 
                                        type="password" 
                                        placeholder="••••••••" 
                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1F3864] focus:border-[#1F3864]" 
                                    />
                                </div>
                                <div className="max-w-md">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                                    <input 
                                        type="password" 
                                        placeholder="••••••••" 
                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1F3864] focus:border-[#1F3864]" 
                                    />
                                </div>
                                <div className="max-w-md">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
                                    <input 
                                        type="password" 
                                        placeholder="••••••••" 
                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1F3864] focus:border-[#1F3864]" 
                                    />
                                </div>
                                <div className="pt-2">
                                    <button onClick={() => navigate('reset_password')} className="px-6 py-2.5 bg-[#1F3864] text-white rounded-lg font-medium hover:bg-[#152643] transition-colors">
                                        Update Password
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Active Sessions */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                            <div className="p-6 border-b border-gray-100 bg-[#DCE6F1]/20">
                                <h2 className="text-lg font-bold text-[#1F3864]">Active Sessions</h2>
                                <p className="text-sm text-gray-500 mt-1">Manage and log out of your active sessions on other browsers and devices.</p>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-[#1F3864] text-white">
                                            <th className="p-4 font-semibold text-sm">Device</th>
                                            <th className="p-4 font-semibold text-sm">Location / IP</th>
                                            <th className="p-4 font-semibold text-sm">Last Active</th>
                                            <th className="p-4 font-semibold text-sm text-right">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 text-sm">
                                        {activeSessions.map((session, index) => (
                                            <tr key={session.id} className={index % 2 === 0 ? 'bg-white hover:bg-gray-50' : 'bg-[#DCE6F1]/30 hover:bg-[#DCE6F1]/50'}>
                                                <td className="p-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 flex-shrink-0">
                                                            <session.icon className="w-5 h-5" />
                                                        </div>
                                                        <div>
                                                            <div className="font-medium text-gray-900 flex items-center gap-2">
                                                                {session.device}
                                                                {session.isCurrent && (
                                                                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-green-100 text-green-800 uppercase tracking-wider">This Device</span>
                                                                )}
                                                            </div>
                                                            <div className="text-xs text-gray-500">{session.browser} on {session.os}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="p-4">
                                                    <div className="font-medium text-gray-900">{session.location}</div>
                                                    <div className="text-xs text-gray-500">{session.ip}</div>
                                                </td>
                                                <td className="p-4">
                                                    <div className={`font-medium ${session.isCurrent ? 'text-green-600' : 'text-gray-900'}`}>{session.lastActive}</div>
                                                </td>
                                                <td className="p-4 text-right">
                                                    {!session.isCurrent ? (
                                                        <button onClick={() => navigate('logout_confirmation')} className="px-3 py-1.5 border border-red-200 text-red-600 rounded hover:bg-red-50 font-medium transition-colors">
                                                            Log Out
                                                        </button>
                                                    ) : (
                                                        <span className="text-gray-400 font-medium px-3 py-1.5">Current</span>
                                                    )}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
