import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { Sun, Moon, Phone, Calendar, FileText, User, Home, Clock, ChevronRight, Pill, Bell, Search, MapPin, Star, Video, Shield, Activity, Heart, Thermometer, Droplets, Wind, Edit3, LogOut, Settings, HelpCircle, ArrowRight } from 'lucide-react'
import Logo from '../components/Logo'
import { useState } from 'react'

type Tab = 'home' | 'appointments' | 'records' | 'profile'

function HomeTab() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1">Hello, Adebayo 👋</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">How are you feeling today?</p>
      </div>

      <button className="w-full relative overflow-hidden rounded-2xl p-6 text-left bg-gradient-to-br from-nigerian-500 to-nigerian-600 shadow-lg shadow-nigerian-500/25 hover:shadow-xl transition-all active:scale-[0.98] group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-8 translate-x-8" />
        <div className="relative z-10">
          <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Phone className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-xl font-bold text-white mb-1">Talk to a Doctor Now</h2>
          <p className="text-sm text-white/80">Connect with a specialist in minutes</p>
        </div>
      </button>

      <div className="card-base p-5">
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
          <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400"><Calendar className="w-3.5 h-3.5" /> Today</div>
          <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400"><Clock className="w-3.5 h-3.5" /> 10:00 AM</div>
          <button className="ml-auto text-xs font-semibold text-primary-600 dark:text-primary-400 flex items-center gap-1">Join <ChevronRight className="w-3.5 h-3.5" /></button>
        </div>
      </div>

      <div>
        <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-3">Health Summary</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: 'Blood Pressure', value: '130/85', unit: 'mmHg', color: 'text-cta-600 dark:text-cta-400', icon: <Activity className="w-4 h-4" /> },
            { label: 'Heart Rate', value: '78', unit: 'bpm', color: 'text-red-500', icon: <Heart className="w-4 h-4" /> },
            { label: 'Blood Sugar', value: '142', unit: 'mg/dL', color: 'text-yellow-600 dark:text-yellow-400', icon: <Droplets className="w-4 h-4" /> },
            { label: 'SpO2', value: '98', unit: '%', color: 'text-nigerian-600 dark:text-nigerian-400', icon: <Wind className="w-4 h-4" /> },
          ].map((v, i) => (
            <div key={i} className="card-base p-4">
              <div className="flex items-center gap-2 mb-2"><span className={v.color}>{v.icon}</span><p className="text-xs text-gray-500 dark:text-gray-400">{v.label}</p></div>
              <p className={`text-xl font-bold ${v.color}`}>{v.value}<span className="text-xs font-normal text-gray-400 ml-1">{v.unit}</span></p>
            </div>
          ))}
        </div>
      </div>

      <div>
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
    </div>
  )
}

function AppointmentsTab() {
  const [filter, setFilter] = useState<'upcoming' | 'past'>('upcoming')
  const upcoming = [
    { doctor: 'Dr. Chukwuma Okafor', specialty: 'Cardiology', type: 'Follow-up', date: 'Today', time: '10:00 AM', status: 'confirmed' as const },
    { doctor: 'Dr. Amina Ibrahim', specialty: 'Pediatrics', type: 'Consultation', date: 'May 22, 2026', time: '2:00 PM', status: 'confirmed' as const },
    { doctor: 'Dr. Emeka Nwosu', specialty: 'Orthopedics', type: 'New Visit', date: 'May 25, 2026', time: '11:00 AM', status: 'pending' as const },
  ]
  const past = [
    { doctor: 'Dr. Amina Ibrahim', specialty: 'Pediatrics', type: 'Vaccination', date: 'May 10, 2026', time: '3:00 PM', status: 'completed' as const },
    { doctor: 'Dr. Yusuf Bello', specialty: 'Internal Medicine', type: 'Lab Review', date: 'Apr 15, 2026', time: '9:00 AM', status: 'completed' as const },
    { doctor: 'Dr. Folake Adeyemi', specialty: 'OB/GYN', type: 'Check-up', date: 'Mar 28, 2026', time: '1:00 PM', status: 'completed' as const },
  ]
  const list = filter === 'upcoming' ? upcoming : past

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Appointments</h1>
        <Link to="/appointments" className="btn-primary text-sm !px-4 !py-2">Book New</Link>
      </div>

      <div className="flex gap-2">
        {(['upcoming', 'past'] as const).map(f => (
          <button key={f} onClick={() => setFilter(f)} className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${filter === f ? 'bg-primary-600 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'}`}>
            {f === 'upcoming' ? 'Upcoming' : 'Past'}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {list.map((apt, i) => (
          <div key={i} className="card-base p-5">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-400 to-accent-500 flex items-center justify-center text-white font-bold text-sm">
                {apt.doctor.split(' ').slice(1).map(n => n[0]).join('')}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <p className="font-bold text-gray-900 dark:text-white text-sm">{apt.doctor}</p>
                  <span className={apt.status === 'confirmed' ? 'badge-success' : apt.status === 'pending' ? 'badge-warning' : 'text-xs text-gray-400 font-medium'}>{apt.status === 'completed' ? 'Completed' : apt.status === 'confirmed' ? 'Confirmed' : 'Pending'}</span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">{apt.specialty} • {apt.type}</p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400"><Calendar className="w-3.5 h-3.5" /> {apt.date}</div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400"><Clock className="w-3.5 h-3.5" /> {apt.time}</div>
                </div>
              </div>
            </div>
            {filter === 'upcoming' && (
              <div className="flex gap-2 mt-4 pt-3 border-t border-gray-100 dark:border-gray-800">
                {apt.date === 'Today' && <button className="btn-primary text-xs !px-4 !py-2 flex-1"><Video className="w-3.5 h-3.5" /> Join Now</button>}
                <button className="flex-1 px-4 py-2 rounded-xl text-xs font-semibold bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">Reschedule</button>
                <button className="px-4 py-2 rounded-xl text-xs font-semibold text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">Cancel</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function RecordsTab() {
  const [activeSection, setActiveSection] = useState<'overview' | 'history' | 'labs' | 'medications'>('overview')
  return (
    <div className="space-y-6 animate-fade-in">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Health Records</h1>

      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
        {(['overview', 'history', 'labs', 'medications'] as const).map(s => (
          <button key={s} onClick={() => setActiveSection(s)} className={`px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap transition-all ${activeSection === s ? 'bg-primary-600 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'}`}>
            {s === 'overview' ? 'Overview' : s === 'history' ? 'Visit History' : s === 'labs' ? 'Lab Results' : 'Medications'}
          </button>
        ))}
      </div>

      {activeSection === 'overview' && (
        <div className="space-y-6">
          <div className="card-base p-5">
            <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-4 flex items-center gap-2"><Shield className="w-4 h-4 text-primary-500" /> Personal Information</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              {[
                { label: 'Full Name', value: 'Adebayo Johnson' },
                { label: 'Date of Birth', value: 'March 15, 1985' },
                { label: 'Blood Type', value: 'O+' },
                { label: 'Genotype', value: 'AA' },
                { label: 'Allergies', value: 'Penicillin' },
                { label: 'Emergency Contact', value: '+234 801 234 5678' },
              ].map((item, i) => (
                <div key={i}><p className="text-xs text-gray-500 dark:text-gray-400 mb-0.5">{item.label}</p><p className="font-semibold text-gray-900 dark:text-white">{item.value}</p></div>
              ))}
            </div>
          </div>

          <div className="card-base p-5">
            <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-4">Current Conditions</h3>
            <div className="space-y-2">
              {[
                { condition: 'Type 2 Diabetes', since: 'Diagnosed 2020', severity: 'Managed' },
                { condition: 'Hypertension', since: 'Diagnosed 2019', severity: 'Controlled' },
              ].map((c, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-surface-50 dark:bg-gray-800/50">
                  <div><p className="text-sm font-semibold text-gray-900 dark:text-white">{c.condition}</p><p className="text-xs text-gray-500 dark:text-gray-400">{c.since}</p></div>
                  <span className="badge-success">{c.severity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeSection === 'history' && (
        <div className="space-y-3">
          {[
            { date: 'May 10, 2026', doctor: 'Dr. Amina Ibrahim', type: 'Vaccination', notes: 'Routine immunization administered. No adverse reaction.' },
            { date: 'Apr 15, 2026', doctor: 'Dr. Yusuf Bello', type: 'Lab Review', notes: 'HbA1c improved to 6.8%. Continue current medication.' },
            { date: 'Mar 28, 2026', doctor: 'Dr. Folake Adeyemi', type: 'Check-up', notes: 'Blood pressure stable at 128/82. Weight loss noted.' },
            { date: 'Feb 12, 2026', doctor: 'Dr. Chukwuma Okafor', type: 'Cardiology', notes: 'ECG normal. Continue Lisinopril 10mg.' },
          ].map((v, i) => (
            <div key={i} className="card-base p-5">
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs text-gray-500 dark:text-gray-400">{v.date}</p>
                <span className="text-xs font-semibold text-primary-600 dark:text-primary-400">{v.type}</span>
              </div>
              <p className="font-bold text-gray-900 dark:text-white text-sm mb-1">{v.doctor}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{v.notes}</p>
            </div>
          ))}
        </div>
      )}

      {activeSection === 'labs' && (
        <div className="card-base overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead><tr className="border-b border-gray-100 dark:border-gray-800">
                <th className="text-left p-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">Test</th>
                <th className="text-left p-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">Result</th>
                <th className="text-left p-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">Range</th>
                <th className="text-left p-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">Date</th>
              </tr></thead>
              <tbody>
                {[
                  { test: 'HbA1c', result: '6.8%', range: '< 7.0%', date: 'Apr 15', flag: false },
                  { test: 'Fasting Glucose', result: '142 mg/dL', range: '70-100', date: 'Apr 15', flag: true },
                  { test: 'Total Cholesterol', result: '195 mg/dL', range: '< 200', date: 'Apr 15', flag: false },
                  { test: 'Creatinine', result: '1.0 mg/dL', range: '0.7-1.3', date: 'Apr 15', flag: false },
                  { test: 'Blood Pressure', result: '128/82', range: '< 130/80', date: 'Mar 28', flag: false },
                ].map((lab, i) => (
                  <tr key={i} className="border-b border-gray-50 dark:border-gray-800/50">
                    <td className="p-4 font-semibold text-gray-900 dark:text-white">{lab.test}</td>
                    <td className={`p-4 font-semibold ${lab.flag ? 'text-cta-600 dark:text-cta-400' : 'text-nigerian-600 dark:text-nigerian-400'}`}>{lab.result}</td>
                    <td className="p-4 text-gray-500 dark:text-gray-400">{lab.range}</td>
                    <td className="p-4 text-gray-500 dark:text-gray-400">{lab.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeSection === 'medications' && (
        <div className="space-y-3">
          {[
            { name: 'Metformin 500mg', dosage: 'Twice daily with meals', prescriber: 'Dr. Yusuf Bello', refills: 3, active: true },
            { name: 'Lisinopril 10mg', dosage: 'Once daily in the morning', prescriber: 'Dr. Chukwuma Okafor', refills: 5, active: true },
            { name: 'Atorvastatin 20mg', dosage: 'Once daily at bedtime', prescriber: 'Dr. Yusuf Bello', refills: 2, active: true },
          ].map((med, i) => (
            <div key={i} className="card-base p-5">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-bold text-gray-900 dark:text-white">{med.name}</h4>
                <span className="badge-success">Active</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{med.dosage}</p>
              <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                <span>Prescribed by {med.prescriber}</span>
                <span>{med.refills} refills remaining</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function ProfileTab() {
  return (
    <div className="space-y-6 animate-fade-in">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Profile</h1>

      <div className="card-base p-6 text-center">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-400 to-accent-500 flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">AJ</div>
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">Adebayo Johnson</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">adebayo.johnson@email.com</p>
        <button className="btn-outline text-sm !px-4 !py-2"><Edit3 className="w-3.5 h-3.5" /> Edit Profile</button>
      </div>

      <div className="card-base overflow-hidden">
        {[
          { icon: <User className="w-5 h-5" />, label: 'Personal Details', desc: 'Name, DOB, contact info' },
          { icon: <Shield className="w-5 h-5" />, label: 'Insurance', desc: 'HMO & coverage details' },
          { icon: <MapPin className="w-5 h-5" />, label: 'Address', desc: 'Lagos, Nigeria' },
          { icon: <Bell className="w-5 h-5" />, label: 'Notifications', desc: 'Push, email, SMS' },
          { icon: <Settings className="w-5 h-5" />, label: 'Settings', desc: 'Language, theme, privacy' },
          { icon: <HelpCircle className="w-5 h-5" />, label: 'Help & Support', desc: 'FAQ, contact us' },
        ].map((item, i) => (
          <button key={i} className="w-full flex items-center gap-4 px-5 py-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors border-b border-gray-50 dark:border-gray-800/50 last:border-0">
            <span className="text-gray-500 dark:text-gray-400">{item.icon}</span>
            <div className="flex-1 text-left">
              <p className="text-sm font-semibold text-gray-900 dark:text-white">{item.label}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{item.desc}</p>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-300 dark:text-gray-600" />
          </button>
        ))}
      </div>

      <button className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 font-semibold text-sm transition-colors">
        <LogOut className="w-4 h-4" /> Sign Out
      </button>
    </div>
  )
}

export default function PatientHome() {
  const { theme, toggleTheme } = useTheme()
  const [activeTab, setActiveTab] = useState<Tab>('home')

  const tabs: { id: Tab; icon: JSX.Element; label: string }[] = [
    { id: 'home', icon: <Home className="w-5 h-5" />, label: 'Home' },
    { id: 'appointments', icon: <Calendar className="w-5 h-5" />, label: 'Appointments' },
    { id: 'records', icon: <FileText className="w-5 h-5" />, label: 'Records' },
    { id: 'profile', icon: <User className="w-5 h-5" />, label: 'Profile' },
  ]

  return (
    <div className="min-h-screen bg-surface-50 dark:bg-gray-950">
      <header className="sticky top-0 z-30 flex items-center justify-between px-5 md:px-8 py-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-100 dark:border-gray-800">
        <Link to="/" className="flex items-center gap-2">
          <Logo size={32} />
          <span className="font-bold text-gray-900 dark:text-white text-sm">CareMesh</span>
        </Link>
        {/* Desktop tabs */}
        <div className="hidden md:flex items-center gap-1">
          {tabs.map(tab => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${activeTab === tab.id ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400' : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'}`}>
              {tab.icon} {tab.label}
            </button>
          ))}
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

      <main className="max-w-4xl mx-auto px-5 md:px-8 py-6 pb-24 md:pb-8">
        {activeTab === 'home' && <HomeTab />}
        {activeTab === 'appointments' && <AppointmentsTab />}
        {activeTab === 'records' && <RecordsTab />}
        {activeTab === 'profile' && <ProfileTab />}
      </main>

      {/* Mobile bottom nav */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border-t border-gray-100 dark:border-gray-800 z-40">
        <div className="flex items-center justify-around py-2">
          {tabs.map(tab => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-colors ${activeTab === tab.id ? 'text-primary-600 dark:text-primary-400' : 'text-gray-400 dark:text-gray-500'}`}>
              {tab.icon}
              <span className="text-[10px] font-medium">{tab.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  )
}
