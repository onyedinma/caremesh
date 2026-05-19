import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { Sun, Moon, Menu, X } from 'lucide-react'
import Logo from './Logo'
import { useState } from 'react'

const navLinks = [
  { path: '/doctor-dashboard', label: 'Dashboard', icon: '🏠' },
  { path: '/appointments', label: 'Appointments', icon: '📅' },
  { path: '/consultation', label: 'Consultation', icon: '📹' },
  { path: '/ehr', label: 'Health Records', icon: '📋' },
  { path: '/mentorship', label: 'Mentorship', icon: '🎓' },
  { path: '/incentives', label: 'Incentives', icon: '🏆' },
  { path: '/hospital', label: 'Hospital View', icon: '🏥' },
  { path: '/patient', label: 'Patient View', icon: '👤' },
]

export default function DashboardLayout({ children, title }: { children: React.ReactNode; title: string }) {
  const { theme, toggleTheme } = useTheme()
  const location = useLocation()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isOnline, setIsOnline] = useState(true)

  return (
    <div className="flex h-screen overflow-hidden bg-surface-50 dark:bg-gray-950">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/40 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`fixed lg:static inset-y-0 left-0 z-50 w-[280px] flex flex-col bg-white dark:bg-gray-900 border-r border-gray-100 dark:border-gray-800 transform transition-transform duration-300 lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        {/* Logo */}
        <div className="flex items-center gap-3 px-6 py-5 border-b border-gray-100 dark:border-gray-800">
          <Logo size={40} />
          <div>
            <h1 className="text-base font-bold text-gray-900 dark:text-white">CareMesh</h1>
            <p className="text-xs text-gray-500 dark:text-gray-400">Virtual Care</p>
          </div>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden ml-auto p-1">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Availability toggle */}
        <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-800">
          <button onClick={() => setIsOnline(!isOnline)} className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-300 ${isOnline ? 'bg-nigerian-50 dark:bg-nigerian-900/20 border border-nigerian-200 dark:border-nigerian-800' : 'bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700'}`}>
            <span className={`w-3 h-3 rounded-full transition-all ${isOnline ? 'bg-nigerian-500 shadow-glow-accent animate-pulse-soft' : 'bg-gray-400'}`} />
            <span className={`text-sm font-semibold ${isOnline ? 'text-nigerian-700 dark:text-nigerian-400' : 'text-gray-500'}`}>
              {isOnline ? 'Online' : 'Offline'}
            </span>
            <div className={`ml-auto w-10 h-6 rounded-full p-0.5 transition-all ${isOnline ? 'bg-nigerian-500' : 'bg-gray-300 dark:bg-gray-600'}`}>
              <div className={`w-5 h-5 rounded-full bg-white shadow-sm transition-transform ${isOnline ? 'translate-x-4' : 'translate-x-0'}`} />
            </div>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
          {navLinks.map(link => (
            <Link key={link.path} to={link.path} onClick={() => setSidebarOpen(false)}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                location.pathname === link.path
                  ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400 shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'
              }`}>
              <span className="text-lg">{link.icon}</span>
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Bottom */}
        <div className="px-4 py-4 border-t border-gray-100 dark:border-gray-800">
          <Link to="/" className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800">
            ← Back to Home
          </Link>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="sticky top-0 z-30 flex items-center gap-4 px-6 py-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-100 dark:border-gray-800">
          <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800">
            <Menu className="w-5 h-5" />
          </button>
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">{title}</h2>
          <div className="ml-auto flex items-center gap-3">
            <button onClick={toggleTheme} className="p-2.5 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              {theme === 'light' ? <Moon className="w-5 h-5 text-gray-600" /> : <Sun className="w-5 h-5 text-yellow-400" />}
            </button>
            <div className="relative">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary-400 to-accent-500 flex items-center justify-center text-white text-sm font-bold">CO</div>
              <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-cta-500 rounded-full border-2 border-white dark:border-gray-900 text-[8px] text-white flex items-center justify-center font-bold">3</span>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
