import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { Sun, Moon, Phone, Calendar, FileText, User, Home, Clock, ChevronRight, Pill, Bell } from 'lucide-react'
import Logo from '../components/Logo'

export default function PatientHome() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="min-h-screen bg-surface-50 dark:bg-gray-950 max-w-md mx-auto relative">
      {/* Top bar */}
      <header className="sticky top-0 z-30 flex items-center justify-between px-5 py-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-100 dark:border-gray-800">
        <div className="flex items-center gap-2">
          <Logo size={32} />
          <span className="font-bold text-gray-900 dark:text-white text-sm">CareMesh</span>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={toggleTheme} className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800">
            {theme === 'light' ? <Moon className="w-4 h-4 text-gray-600" /> : <Sun className="w-4 h-4 text-yellow-400" />}
          </button>
          <button className="relative p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800">
            <Bell className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-cta-500 rounded-full" />
          </button>
        </div>
      </header>

      <main className="px-5 py-6 pb-24 space-y-6">
        {/* Greeting */}
        <div className="animate-fade-in">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Hello, Adebayo 👋</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">How are you feeling today?</p>
        </div>

        {/* Main CTA */}
        <button className="w-full relative overflow-hidden rounded-2xl p-6 text-left bg-gradient-to-br from-nigerian-500 to-nigerian-600 shadow-lg shadow-nigerian-500/25 hover:shadow-xl hover:shadow-nigerian-500/30 transition-all active:scale-[0.98] animate-slide-up group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-8 translate-x-8" />
          <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/5 rounded-full translate-y-6 -translate-x-6" />
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Phone className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-xl font-bold text-white mb-1">Talk to a Doctor Now</h2>
            <p className="text-sm text-white/80">Connect with a specialist in minutes</p>
          </div>
        </button>

        {/* Upcoming appointment */}
        <div className="card-base p-5 animate-slide-up" style={{ animationDelay: '100ms' }}>
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-gray-900 dark:text-white text-sm">Upcoming Appointment</h3>
            <span className="badge-success">Confirmed</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-bold">CO</div>
            <div className="flex-1">
              <p className="font-semibold text-gray-900 dark:text-white text-sm">Dr. Chukwuma Okafor</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Cardiology • Follow-up</p>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-4 pt-3 border-t border-gray-100 dark:border-gray-800">
            <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
              <Calendar className="w-3.5 h-3.5" /> Today
            </div>
            <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
              <Clock className="w-3.5 h-3.5" /> 10:00 AM
            </div>
            <button className="ml-auto text-xs font-semibold text-primary-600 dark:text-primary-400 flex items-center gap-1">
              Join <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Health Summary */}
        <div className="animate-slide-up" style={{ animationDelay: '200ms' }}>
          <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-3">Health Summary</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: 'Blood Pressure', value: '130/85', unit: 'mmHg', color: 'text-cta-600 dark:text-cta-400' },
              { label: 'Heart Rate', value: '78', unit: 'bpm', color: 'text-red-500' },
              { label: 'Blood Sugar', value: '142', unit: 'mg/dL', color: 'text-yellow-600 dark:text-yellow-400' },
              { label: 'SpO2', value: '98', unit: '%', color: 'text-nigerian-600 dark:text-nigerian-400' },
            ].map((v, i) => (
              <div key={i} className="card-base p-4">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{v.label}</p>
                <p className={`text-xl font-bold ${v.color}`}>{v.value}<span className="text-xs font-normal text-gray-400 ml-1">{v.unit}</span></p>
              </div>
            ))}
          </div>
        </div>

        {/* Medication Reminders */}
        <div className="animate-slide-up" style={{ animationDelay: '300ms' }}>
          <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-3">Medication Reminders</h3>
          <div className="space-y-2">
            {[
              { name: 'Metformin 500mg', time: '8:00 AM', taken: true },
              { name: 'Lisinopril 10mg', time: '8:00 AM', taken: true },
              { name: 'Metformin 500mg', time: '8:00 PM', taken: false },
            ].map((med, i) => (
              <div key={i} className="card-base p-3.5 flex items-center gap-3">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${med.taken ? 'bg-nigerian-50 dark:bg-nigerian-900/20' : 'bg-cta-50 dark:bg-cta-900/20'}`}>
                  <Pill className={`w-4 h-4 ${med.taken ? 'text-nigerian-600 dark:text-nigerian-400' : 'text-cta-600 dark:text-cta-400'}`} />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">{med.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{med.time}</p>
                </div>
                <span className={med.taken ? 'badge-success' : 'badge-warning'}>{med.taken ? 'Taken' : 'Pending'}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Consultations */}
        <div className="animate-slide-up" style={{ animationDelay: '400ms' }}>
          <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-3">Recent Consultations</h3>
          <div className="space-y-2">
            {[
              { doctor: 'Dr. Amina Ibrahim', specialty: 'Pediatrics', date: 'May 10, 2026' },
              { doctor: 'Dr. Yusuf Bello', specialty: 'Internal Medicine', date: 'Apr 15, 2026' },
            ].map((c, i) => (
              <div key={i} className="card-base p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-400 to-nigerian-500 flex items-center justify-center text-white text-xs font-bold">
                  {c.doctor.split(' ').slice(1).map(n => n[0]).join('')}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">{c.doctor}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{c.specialty} • {c.date}</p>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border-t border-gray-100 dark:border-gray-800 z-40">
        <div className="flex items-center justify-around py-2">
          {[
            { icon: <Home className="w-5 h-5" />, label: 'Home', active: true },
            { icon: <Calendar className="w-5 h-5" />, label: 'Appointments', active: false },
            { icon: <FileText className="w-5 h-5" />, label: 'Records', active: false },
            { icon: <User className="w-5 h-5" />, label: 'Profile', active: false },
          ].map((item, i) => (
            <button key={i} className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-colors ${item.active ? 'text-primary-600 dark:text-primary-400' : 'text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300'}`}>
              {item.icon}
              <span className="text-[10px] font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  )
}
