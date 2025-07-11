    import { useState } from 'react'
    import { NavLink } from 'react-router-dom'
    import { 
    FaHome, 
    FaQuestion, 
    FaRocket, 
    FaCalendarAlt, 
    FaProjectDiagram, 
    FaBook,
    FaBars,
    FaTimes
    } from 'react-icons/fa'

    export default function Sidebar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    return (
        <>
        {/* Mobile menu button */}
        <button 
            className="md:hidden fixed top-4 right-4 z-50 p-2 rounded-md bg-[var(--card-bg)] border border-[var(--primary)] text-[var(--primary)]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
            {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>

        {/* Sidebar - Desktop */}
        <aside className="hidden md:flex md:flex-shrink-0">
            <div className="flex flex-col w-64 h-screen border-r border-[var(--glass)]">
            <div className="flex items-center justify-center h-16 border-b border-[var(--glass)]">
                <span className="text-xl font-semibold text-[var(--primary)]">GSoC Guide</span>
            </div>
            <div className="flex-grow overflow-y-auto">
                <nav className="p-4 space-y-1">
                <NavLink
                    to="/"
                    className={({ isActive }) => 
                    `flex items-center px-4 py-3 rounded-lg transition-colors ${isActive ? 'bg-[var(--glass)] text-[var(--primary)]' : 'text-[var(--text-dim)] hover:bg-[var(--glass)]'}`
                    }
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    <FaHome className="mr-3" />
                    <span>Home</span>
                </NavLink>
                <NavLink
                    to="/what-is-gsoc"
                    className={({ isActive }) => 
                    `flex items-center px-4 py-3 rounded-lg transition-colors ${isActive ? 'bg-[var(--glass)] text-[var(--primary)]' : 'text-[var(--text-dim)] hover:bg-[var(--glass)]'}`
                    }
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    <FaQuestion className="mr-3" />
                    <span>What is GSoC?</span>
                </NavLink>
                <NavLink
                    to="/getting-started"
                    className={({ isActive }) => 
                    `flex items-center px-4 py-3 rounded-lg transition-colors ${isActive ? 'bg-[var(--glass)] text-[var(--primary)]' : 'text-[var(--text-dim)] hover:bg-[var(--glass)]'}`
                    }
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    <FaRocket className="mr-3" />
                    <span>Getting Started</span>
                </NavLink>
                <NavLink
                    to="/timeline"
                    className={({ isActive }) => 
                    `flex items-center px-4 py-3 rounded-lg transition-colors ${isActive ? 'bg-[var(--glass)] text-[var(--primary)]' : 'text-[var(--text-dim)] hover:bg-[var(--glass)]'}`
                    }
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    <FaCalendarAlt className="mr-3" />
                    <span>Timeline</span>
                </NavLink>
                <NavLink
                    to="/projects"
                    className={({ isActive }) => 
                    `flex items-center px-4 py-3 rounded-lg transition-colors ${isActive ? 'bg-[var(--glass)] text-[var(--primary)]' : 'text-[var(--text-dim)] hover:bg-[var(--glass)]'}`
                    }
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    <FaProjectDiagram className="mr-3" />
                    <span>Project Archives</span>
                </NavLink>
                <NavLink
                    to="/glossary"
                    className={({ isActive }) => 
                    `flex items-center px-4 py-3 rounded-lg transition-colors ${isActive ? 'bg-[var(--glass)] text-[var(--primary)]' : 'text-[var(--text-dim)] hover:bg-[var(--glass)]'}`
                    }
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    <FaBook className="mr-3" />
                    <span>Glossary</span>
                </NavLink>
                <NavLink
                    to="/faq"
                    className={({ isActive }) => 
                    `flex items-center px-4 py-3 rounded-lg transition-colors ${isActive ? 'bg-[var(--glass)] text-[var(--primary)]' : 'text-[var(--text-dim)] hover:bg-[var(--glass)]'}`
                    }
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    <FaQuestion className="mr-3" />
                    <span>FAQs</span>
                </NavLink>
                </nav>
            </div>
            <div className="p-4 border-t border-[var(--glass)] text-[var(--text-dim)] text-sm">
                Made with 💚 for open-source students
            </div>
            </div>
        </aside>

        {/* Mobile sidebar overlay */}
        {isMobileMenuOpen && (
            <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
            ></div>
        )}

        {/* Mobile sidebar */}
        <aside 
            className={`fixed inset-y-0 left-0 z-50 w-64 bg-[var(--bg)] border-r border-[var(--glass)] transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}
        >
            <div className="flex flex-col h-full">
            <div className="flex items-center justify-center h-16 border-b border-[var(--glass)]">
                <span className="text-xl font-semibold text-[var(--primary)]">GSoC Guide</span>
            </div>
            <div className="flex-grow overflow-y-auto">
                <nav className="p-4 space-y-1">
                <NavLink
                    to="/"
                    className={({ isActive }) => 
                    `flex items-center px-4 py-3 rounded-lg transition-colors ${isActive ? 'bg-[var(--glass)] text-[var(--primary)]' : 'text-[var(--text-dim)] hover:bg-[var(--glass)]'}`
                    }
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    <FaHome className="mr-3" />
                    <span>Home</span>
                </NavLink>
                <NavLink
                    to="/what-is-gsoc"
                    className={({ isActive }) => 
                    `flex items-center px-4 py-3 rounded-lg transition-colors ${isActive ? 'bg-[var(--glass)] text-[var(--primary)]' : 'text-[var(--text-dim)] hover:bg-[var(--glass)]'}`
                    }
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    <FaQuestion className="mr-3" />
                    <span>What is GSoC?</span>
                </NavLink>
                <NavLink
                    to="/getting-started"
                    className={({ isActive }) => 
                    `flex items-center px-4 py-3 rounded-lg transition-colors ${isActive ? 'bg-[var(--glass)] text-[var(--primary)]' : 'text-[var(--text-dim)] hover:bg-[var(--glass)]'}`
                    }
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    <FaRocket className="mr-3" />
                    <span>Getting Started</span>
                </NavLink>
                <NavLink
                    to="/timeline"
                    className={({ isActive }) => 
                    `flex items-center px-4 py-3 rounded-lg transition-colors ${isActive ? 'bg-[var(--glass)] text-[var(--primary)]' : 'text-[var(--text-dim)] hover:bg-[var(--glass)]'}`
                    }
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    <FaCalendarAlt className="mr-3" />
                    <span>Timeline</span>
                </NavLink>
                <NavLink
                    to="/projects"
                    className={({ isActive }) => 
                    `flex items-center px-4 py-3 rounded-lg transition-colors ${isActive ? 'bg-[var(--glass)] text-[var(--primary)]' : 'text-[var(--text-dim)] hover:bg-[var(--glass)]'}`
                    }
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    <FaProjectDiagram className="mr-3" />
                    <span>Project Archives</span>
                </NavLink>
                <NavLink
                    to="/glossary"
                    className={({ isActive }) => 
                    `flex items-center px-4 py-3 rounded-lg transition-colors ${isActive ? 'bg-[var(--glass)] text-[var(--primary)]' : 'text-[var(--text-dim)] hover:bg-[var(--glass)]'}`
                    }
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    <FaBook className="mr-3" />
                    <span>Glossary</span>
                </NavLink>
                <NavLink
                    to="/faq"
                    className={({ isActive }) => 
                    `flex items-center px-4 py-3 rounded-lg transition-colors ${isActive ? 'bg-[var(--glass)] text-[var(--primary)]' : 'text-[var(--text-dim)] hover:bg-[var(--glass)]'}`
                    }
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    <FaQuestion className="mr-3" />
                    <span>FAQs</span>
                </NavLink>
                </nav>
            </div>
            <div className="p-4 border-t border-[var(--glass)] text-[var(--text-dim)] text-sm">
                Made with 💚 for open-source students
            </div>
            </div>
        </aside>
        </>
    )
    }