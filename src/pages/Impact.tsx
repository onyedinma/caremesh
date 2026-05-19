import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import Logo from '../components/Logo'
import { Sun, Moon, Heart, ArrowRight, Star, Zap, TrendingUp, DollarSign, Users, Globe, ChevronRight, Award, Building2, Stethoscope } from 'lucide-react'

export default function Impact() {
  const { theme, toggleTheme } = useTheme()

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
            <Link to="/impact" className="text-sm font-bold text-primary-600 dark:text-primary-400">Impact</Link>
            <Link to="/specialties" className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Specialties</Link>
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
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-[0.03] dark:opacity-20" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-nigerian-500/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-nigerian-50 dark:bg-nigerian-900/20 text-nigerian-700 dark:text-nigerian-400 text-sm font-semibold mb-6 animate-fade-in">
            <Heart className="w-4 h-4" /> Real Stories, Real Impact
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 animate-slide-up">
            Transforming Healthcare<br /><span className="gradient-text">Across Borders</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '100ms' }}>
            See how diaspora doctors are making a measurable difference in Nigerian healthcare outcomes through CareMesh.
          </p>
        </div>
      </section>

      {/* Before/After Impact Stats */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { before: '72hrs', after: '< 30min', label: 'Specialist Access Time', desc: 'From days of waiting to instant connections with diaspora specialists', icon: <Zap className="w-6 h-6" /> },
              { before: '34%', after: '89%', label: 'Diagnostic Accuracy', desc: 'Second opinions from diaspora experts dramatically improve outcomes', icon: <TrendingUp className="w-6 h-6" /> },
              { before: '$2,400', after: '$75', label: 'Cost per Consultation', desc: 'Making specialist care affordable and accessible for all Nigerians', icon: <DollarSign className="w-6 h-6" /> },
            ].map((stat, i) => (
              <div key={i} className="card-base p-8 text-center group hover:-translate-y-1 animate-slide-up" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-nigerian-500 to-accent-500 flex items-center justify-center text-white mb-6 mx-auto group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-xl font-bold text-red-400 line-through opacity-60">{stat.before}</div>
                    <div className="text-[10px] text-gray-400 uppercase tracking-wider">Before</div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-nigerian-500" />
                  <div className="text-center">
                    <div className="text-3xl font-extrabold text-nigerian-600 dark:text-nigerian-400">{stat.after}</div>
                    <div className="text-[10px] text-nigerian-500 uppercase tracking-wider font-semibold">After</div>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{stat.label}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-surface-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white mb-10 text-center">Platform Impact Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '1,247', label: 'Patients Treated', icon: <Users className="w-6 h-6" />, color: 'text-primary-600 dark:text-primary-400', bg: 'bg-primary-50 dark:bg-primary-900/20' },
              { value: '500+', label: 'Diaspora Doctors', icon: <Stethoscope className="w-6 h-6" />, color: 'text-nigerian-600 dark:text-nigerian-400', bg: 'bg-nigerian-50 dark:bg-nigerian-900/20' },
              { value: '₦2.4B', label: 'Healthcare Costs Saved', icon: <DollarSign className="w-6 h-6" />, color: 'text-accent-600 dark:text-accent-400', bg: 'bg-accent-50 dark:bg-accent-900/20' },
              { value: '34', label: 'Partner Hospitals', icon: <Building2 className="w-6 h-6" />, color: 'text-cta-600 dark:text-cta-400', bg: 'bg-cta-50 dark:bg-cta-900/20' },
            ].map((s, i) => (
              <div key={i} className="card-base p-6 text-center animate-slide-up" style={{ animationDelay: `${i * 80}ms` }}>
                <div className={`w-12 h-12 rounded-xl ${s.bg} flex items-center justify-center mx-auto mb-3`}><span className={s.color}>{s.icon}</span></div>
                <div className={`text-3xl font-extrabold ${s.color} mb-1`}>{s.value}</div>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white mb-10 text-center">What Doctors & Hospitals Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "CareMesh allowed me to provide cardiology consultations to patients in Lagos from my practice in London. The EHR integration is seamless — I can review labs, imaging, and prescribe in real-time.",
                name: 'Dr. Adaeze Okonkwo', role: 'Cardiologist • London, UK', initials: 'AO',
              },
              {
                quote: "As a rural hospital administrator, getting a diaspora specialist's opinion used to take weeks. Now I can request one in minutes. We've saved 12 lives this quarter alone with timely second opinions.",
                name: 'Dr. Ibrahim Yusuf', role: 'Medical Director • Jos, Nigeria', initials: 'IY',
              },
              {
                quote: "The mentorship program is incredible. I'm a junior doctor in Enugu, and my CareMesh mentor in Houston reviews my cases weekly. My confidence and clinical skills have grown tremendously.",
                name: 'Dr. Blessing Eze', role: 'Resident • Enugu, Nigeria', initials: 'BE',
              },
            ].map((t, i) => (
              <div key={i} className="card-base p-8 relative overflow-hidden group hover:-translate-y-1 animate-slide-up" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="absolute top-4 right-6 text-7xl font-serif text-primary-100 dark:text-primary-900/30 leading-none select-none">"</div>
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 relative z-10 italic text-sm">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary-400 to-accent-500 flex items-center justify-center text-white font-bold text-sm">{t.initials}</div>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white text-sm">{t.name}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Diaspora Network */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative rounded-2xl overflow-hidden p-8 md:p-12 bg-gradient-to-br from-primary-900 to-gray-900">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-[20%] left-[15%] w-3 h-3 bg-accent-400 rounded-full animate-pulse-soft" />
              <div className="absolute top-[30%] left-[48%] w-4 h-4 bg-nigerian-400 rounded-full animate-pulse-soft" style={{ animationDelay: '500ms' }} />
              <div className="absolute top-[25%] left-[52%] w-2.5 h-2.5 bg-accent-400 rounded-full animate-pulse-soft" style={{ animationDelay: '1000ms' }} />
              <div className="absolute top-[35%] left-[45%] w-3 h-3 bg-nigerian-400 rounded-full animate-pulse-soft" style={{ animationDelay: '1500ms' }} />
              <div className="absolute top-[60%] left-[20%] w-2 h-2 bg-accent-400 rounded-full animate-pulse-soft" style={{ animationDelay: '700ms' }} />
              <div className="absolute top-[55%] left-[70%] w-2.5 h-2.5 bg-accent-400 rounded-full animate-pulse-soft" style={{ animationDelay: '1200ms' }} />
              <div className="absolute top-[40%] left-[80%] w-3 h-3 bg-nigerian-400 rounded-full animate-pulse-soft" style={{ animationDelay: '800ms' }} />
            </div>
            <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4">Global Diaspora Network</h3>
                <p className="text-white/70 leading-relaxed mb-6">Our doctors practice across 15 countries, providing round-the-clock coverage thanks to timezone diversity. When one doctor sleeps, another is available.</p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { flag: '🇬🇧', country: 'United Kingdom', count: '142 doctors' },
                    { flag: '🇺🇸', country: 'United States', count: '187 doctors' },
                    { flag: '🇨🇦', country: 'Canada', count: '89 doctors' },
                    { flag: '🇮🇪', country: 'Ireland', count: '43 doctors' },
                    { flag: '🇩🇪', country: 'Germany', count: '28 doctors' },
                    { flag: '🇦🇺', country: 'Australia', count: '18 doctors' },
                  ].map((c, i) => (
                    <div key={i} className="bg-white/10 backdrop-blur rounded-xl p-3 hover:bg-white/15 transition-colors">
                      <p className="text-sm font-semibold text-white">{c.flag} {c.country}</p>
                      <p className="text-xs text-white/60">{c.count}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { val: '24/7', label: 'Coverage', desc: 'Timezone diversity' },
                  { val: '15', label: 'Countries', desc: 'Global network' },
                  { val: '< 5min', label: 'Avg Response', desc: 'On-demand consults' },
                  { val: '₦2.4B', label: 'Saved', desc: 'In healthcare costs' },
                ].map((s, i) => (
                  <div key={i} className="bg-white/5 backdrop-blur rounded-xl p-6 text-center hover:bg-white/10 transition-colors">
                    <div className="text-3xl font-extrabold text-accent-400 mb-1">{s.val}</div>
                    <div className="text-sm font-semibold text-white">{s.label}</div>
                    <div className="text-xs text-white/50 mt-0.5">{s.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 bg-surface-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white mb-10 text-center">Awards & Recognition</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { icon: '🏆', title: 'WHO Innovation Award', year: '2026' },
              { icon: '🌍', title: 'African Health Tech Top 10', year: '2026' },
              { icon: '🏥', title: 'NMA Digital Health Partner', year: '2025' },
              { icon: '🎖️', title: 'Diaspora Impact Award', year: '2025' },
            ].map((a, i) => (
              <div key={i} className="card-base p-6 text-center hover:-translate-y-1 animate-slide-up" style={{ animationDelay: `${i * 80}ms` }}>
                <div className="text-4xl mb-3">{a.icon}</div>
                <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-1">{a.title}</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">{a.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative rounded-3xl overflow-hidden p-10 md:p-16 text-center gradient-hero">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Be Part of the Impact</h2>
              <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">Your expertise can save lives back home. Join CareMesh today.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/onboarding" className="btn-cta text-base !px-8 !py-4">Start Onboarding <ChevronRight className="w-5 h-5" /></Link>
                <Link to="/doctor-dashboard" className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl backdrop-blur transition-all">View Demo Dashboard</Link>
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
