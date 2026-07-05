import React, { useState } from 'react';
import { 
    LayoutDashboard, Users, BookOpen, Settings, LogOut, Menu, 
    Bell, Plus, ChevronDown, ChevronUp, Edit2, Trash2, HelpCircle, Mail, Phone
} from 'lucide-react';

interface AdminHelpSupportProps {
    navigate: (route: string) => void;
}

export default function AdminHelpSupport({ navigate }: AdminHelpSupportProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState<number | null>(1);

    const sidebarNavItems = [
        { icon: LayoutDashboard, label: 'Dashboard', route: 'admin_dashboard' },
        { icon: Users, label: 'Directory', route: 'admin_students' },
        { icon: BookOpen, label: 'Academics', route: 'admin_classes' },
        { icon: HelpCircle, label: 'Help & Support', route: 'admin_help_support', active: true },
        { icon: Settings, label: 'Settings', route: 'admin_school_profile' },
    ];

    const faqs = [
        { 
            id: 1, 
            question: 'How do parents link their accounts to their children?', 
            answer: 'Parents can link their accounts using the unique Student ID and the secure PIN provided by the school administration at the beginning of the academic year. They must enter these details during the registration process or from their Parent Dashboard.'
        },
        { 
            id: 2, 
            question: 'How do I reset a teacher\'s password?', 
            answer: 'As an admin, navigate to the Directory > Teachers list, select the specific teacher, and click "Reset Password". The teacher will receive a temporary password via their registered email address.'
        },
        { 
            id: 3, 
            question: 'Can I export attendance reports to Excel?', 
            answer: 'Yes. Go to the "Export / Download Center" under Academics. Select the "Attendance Report", choose your date range and class, and click "Export to CSV/Excel".'
        },
        { 
            id: 4, 
            question: 'What should I do if a student\'s grade is entered incorrectly?', 
            answer: 'Teachers can edit grades directly from the "Grade Entry" portal before the term is closed. If the term is already closed, an Admin must unlock the gradebook for that specific subject temporarily so the teacher can make the correction.'
        }
    ];

    const toggleFaq = (id: number) => {
        if (expandedFaq === id) {
            setExpandedFaq(null);
        } else {
            setExpandedFaq(id);
        }
    };

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
                    <h1 className="text-2xl font-bold text-[#1F3864]">Help & Support Management</h1>
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
                    <div className="max-w-4xl mx-auto space-y-8">

                        {/* Support Contact Info */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                            <div className="p-6 border-b border-gray-100 bg-[#DCE6F1]/20">
                                <h2 className="text-lg font-bold text-[#1F3864]">Support Contact Information</h2>
                                <p className="text-sm text-gray-500 mt-1">This information will be displayed to parents and teachers when they need help.</p>
                            </div>
                            <div className="p-6 space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Support Email Address</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <Mail className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <input 
                                                type="email" 
                                                defaultValue="support@schoollink.edu.gh" 
                                                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1F3864] focus:border-[#1F3864]" 
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Support Phone Number</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <Phone className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <input 
                                                type="tel" 
                                                defaultValue="+233 24 123 4567" 
                                                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1F3864] focus:border-[#1F3864]" 
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-2 flex justify-end">
                                    <button onClick={() => navigate('admin_dashboard')} className="px-6 py-2.5 bg-[#1F3864] text-white rounded-lg font-medium hover:bg-[#152643] transition-colors">
                                        Save Contact Info
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* FAQs Section */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                            <div className="p-6 border-b border-gray-100 bg-[#DCE6F1]/20 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                <div>
                                    <h2 className="text-lg font-bold text-[#1F3864]">Frequently Asked Questions (FAQs)</h2>
                                    <p className="text-sm text-gray-500 mt-1">Manage the help articles available to users.</p>
                                </div>
                                <button onClick={() => navigate('empty_state')} className="flex items-center gap-2 px-4 py-2 bg-[#1F3864] text-white rounded-lg font-medium hover:bg-[#152643] transition-colors whitespace-nowrap">
                                    <Plus className="w-4 h-4" />
                                    Add FAQ
                                </button>
                            </div>
                            
                            <div className="divide-y divide-gray-100">
                                {faqs.map((faq) => (
                                    <div key={faq.id} className="group">
                                        <button 
                                            onClick={() => toggleFaq(faq.id)}
                                            className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 focus:outline-none transition-colors"
                                        >
                                            <span className="font-semibold text-gray-900 pr-8">{faq.question}</span>
                                            {expandedFaq === faq.id ? (
                                                <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                                            ) : (
                                                <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                                            )}
                                        </button>
                                        
                                        {expandedFaq === faq.id && (
                                            <div className="px-6 pb-6 pt-2 bg-gray-50 border-t border-gray-100">
                                                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                                    {faq.answer}
                                                </p>
                                                <div className="flex justify-end gap-3">
                                                    <button onClick={() => navigate('empty_state')} className="flex items-center gap-2 px-3 py-1.5 border border-gray-300 text-gray-700 rounded hover:bg-gray-100 font-medium text-sm transition-colors">
                                                        <Edit2 className="w-4 h-4" />
                                                        Edit
                                                    </button>
                                                    <button onClick={() => navigate('empty_state')} className="flex items-center gap-2 px-3 py-1.5 border border-red-200 text-red-600 rounded hover:bg-red-50 font-medium text-sm transition-colors">
                                                        <Trash2 className="w-4 h-4" />
                                                        Delete
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                            
                            {faqs.length === 0 && (
                                <div className="p-8 text-center text-gray-500">
                                    <HelpCircle className="w-12 h-12 mx-auto text-gray-300 mb-3" />
                                    <p>No FAQs added yet.</p>
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
