import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import Logo from '../components/Logo'
import { Sun, Moon, ArrowRight, Stethoscope, Search, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const allSpecialties = [
  { name: 'Cardiology', icon: '🫀', doctors: 64, color: 'from-red-500 to-rose-600', available: 8, desc: 'Heart and cardiovascular system specialists treating conditions from hypertension to complex arrhythmias.' },
  { name: 'Pediatrics', icon: '👶', doctors: 52, color: 'from-blue-500 to-blue-600', available: 6, desc: 'Child healthcare experts covering newborn care, developmental milestones, and childhood diseases.' },
  { name: 'Internal Medicine', icon: '🩺', doctors: 78, color: 'from-primary-500 to-primary-600', available: 12, desc: 'General adult medicine covering diagnosis and treatment of complex multi-system conditions.' },
  { name: 'Surgery', icon: '⚕️', doctors: 41, color: 'from-purple-500 to-purple-600', available: 4, desc: 'Surgical consultation, pre-operative assessments, and post-operative follow-up guidance.' },
  { name: 'OB/GYN', icon: '🤰', doctors: 38, color: 'from-pink-500 to-pink-600', available: 5, desc: 'Obstetrics and gynecology covering prenatal care, high-risk pregnancies, and reproductive health.' },
  { name: 'Orthopedics', icon: '🦴', doctors: 29, color: 'from-amber-500 to-amber-600', available: 3, desc: 'Musculoskeletal specialists for fractures, joint disorders, and sports injuries.' },
  { name: 'Dermatology', icon: '🧴', doctors: 23, color: 'from-emerald-500 to-emerald-600', available: 4, desc: 'Skin, hair, and nail specialists covering conditions from eczema to skin cancer screening.' },
  { name: 'Oncology', icon: '🎗️', doctors: 31, color: 'from-violet-500 to-violet-600', available: 3, desc: 'Cancer care specialists providing second opinions on diagnosis, staging, and treatment plans.' },
  { name: 'Neurology', icon: '🧠', doctors: 27, color: 'from-indigo-500 to-indigo-600', available: 2, desc: 'Brain and nervous system experts for stroke, epilepsy, headaches, and neurodegenerative disorders.' },
  { name: 'Endocrinology', icon: '💉', doctors: 19, color: 'from-teal-500 to-teal-600', available: 3, desc: 'Hormone and metabolic disorder specialists covering diabetes, thyroid, and adrenal conditions.' },
  { name: 'Pulmonology', icon: '🫁', doctors: 22, color: 'from-cyan-500 to-cyan-600', available: 4, desc: 'Respiratory system specialists for asthma, COPD, tuberculosis, and lung infections.' },
  { name: 'Psychiatry', icon: '🧘', doctors: 34, color: 'from-yellow-500 to-yellow-600', available: 5, desc: 'Mental health specialists covering depression, anxiety, PTSD, and substance use disorders.' },
  { name: 'Nephrology', icon: '🫘', doctors: 16, color: 'from-orange-500 to-orange-600', available: 2, desc: 'Kidney disease specialists managing chronic kidney disease, dialysis, and transplant care.' },
  { name: 'Gastroenterology', icon: '🔬', doctors: 20, color: 'from-lime-500 to-lime-600', available: 3, desc: 'Digestive system experts for liver disease, IBD, ulcers, and GI cancers.' },
  { name: 'Ophthalmology', icon: '👁️', doctors: 14, color: 'from-sky-500 to-sky-600', available: 2, desc: 'Eye care specialists for glaucoma, cataracts, diabetic retinopathy, and vision disorders.' },
  { name: 'Radiology', icon: '📡', doctors: 18, color: 'from-gray-500 to-gray-600', available: 3, desc: 'Medical imaging experts providing remote reads of X-rays, CT scans, MRIs, and ultrasounds.' },
]

export default function Specialties() {
  const { theme, toggleTheme } = useTheme()
  const [search, setSearch] = useState('')

  const filtered = allSpecialties.filter(s =>
    search === '' || s.name.toLowerCase().includes(search.toLowerCase()) || s.desc.toLowerCase().includes(search.toLowerCase())
  )

  const totalDoctors = allSpecialties.reduce((sum, s) => sum + s.doctors, 0)
  const totalOnline = allSpecialties.reduce((sum, s) => sum + s.available, 0)

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <Logo size={40} />
            <span className="text-lg font-bold text-gray-900 dark:text-white">CareMesh</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link to="/#features" className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Features</Link>
            <Link to="/impact" className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Impact</Link>
            <Link to="/specialties" className="text-sm font-bold text-primary-600 dark:text-primary-400">Specialties</Link>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={toggleTheme} className="p-2.5 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              {theme === 'light' ? <Moon className="w-5 h-5 text-gray-600" /> : <Sun className="w-5 h-5 text-yellow-400" />}
            </button>
            <Link to="/onboarding" className="hidden sm:inline-flex btn-outline text-sm !px-4 !py-2">Join as Doctor</Link>
            <Link to="/patient" className="btn-cta text-sm !px-4 !py-2">Patient Access</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-[0.03] dark:opacity-20" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-50 dark:bg-accent-900/20 text-accent-700 dark:text-accent-400 text-sm font-semibold mb-6 animate-fade-in">
            <Stethoscope className="w-4 h-4" /> {totalDoctors} Specialists • {totalOnline} Online Now
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 animate-slide-up">
            Expert Care Across<br /><span className="gradient-text">Every Specialty</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8 animate-slide-up" style={{ animationDelay: '100ms' }}>
            Access top Nigerian diaspora doctors across {allSpecialties.length} medical specialties, available for consultations, second opinions, and mentorship.
          </p>
          <div className="max-w-xl mx-auto relative animate-slide-up" style={{ animationDelay: '200ms' }}>
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input value={search} onChange={e => setSearch(e.target.value)} className="input-field !pl-12 !py-4 text-base" placeholder="Search specialties..." />
          </div>
        </div>
      </section>

      {/* Specialty Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((spec, i) => (
              <Link key={i} to="/appointments" className="card-base p-6 group hover:-translate-y-1 cursor-pointer animate-slide-up" style={{ animationDelay: `${i * 50}ms` }}>
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl">{spec.icon}</span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-nigerian-500 rounded-full animate-pulse-soft" />
                    <span className="text-xs text-nigerian-600 dark:text-nigerian-400 font-semibold">{spec.available} online</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">{spec.name}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-3">{spec.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">{spec.doctors} specialists</span>
                  <span className="text-xs text-gray-400 group-hover:text-primary-500 transition-colors flex items-center gap-1">Book now <ArrowRight className="w-3 h-3" /></span>
                </div>
                <div className="mt-3 h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                  <div className={`h-full bg-gradient-to-r ${spec.color} rounded-full transition-all`} style={{ width: `${Math.min((spec.available / spec.doctors) * 100 * 8, 100)}%` }} />
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg text-gray-500 dark:text-gray-400">No specialties match your search.</p>
              <button onClick={() => setSearch('')} className="text-primary-600 dark:text-primary-400 font-semibold mt-2">Clear search</button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative rounded-3xl overflow-hidden p-10 md:p-16 text-center gradient-hero">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Ready to Consult a Specialist?</h2>
              <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">Book an appointment with a diaspora doctor in minutes.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/appointments" className="btn-cta text-base !px-8 !py-4">Book Appointment <ChevronRight className="w-5 h-5" /></Link>
                <Link to="/patient" className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl backdrop-blur transition-all">Talk to a Doctor Now</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Logo size={32} />
            <span className="font-bold text-gray-900 dark:text-white">CareMesh — Diaspora Doctor Virtual Care</span>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">© 2026 CareMesh. Expertise Without Borders. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
