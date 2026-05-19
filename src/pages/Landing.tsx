import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { Sun, Moon, Shield, Video, Heart, Users, Globe, ArrowRight, Star, ChevronRight } from 'lucide-react'
import Logo from '../components/Logo'
import { useEffect, useRef, useState } from 'react'

function CountUp({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        let start = 0
        const step = target / 60
        const timer = setInterval(() => {
          start += step
          if (start >= target) { setCount(target); clearInterval(timer) }
          else setCount(Math.floor(start))
        }, 16)
        observer.disconnect()
      }
    })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])
  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
}

export default function Landing() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Logo size={40} />
            <span className="text-lg font-bold text-gray-900 dark:text-white">CareMesh</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Features</a>
            <a href="#impact" className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Impact</a>
            <a href="#specialties" className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Specialties</a>
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
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-[0.03] dark:opacity-20" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400 text-sm font-semibold mb-8 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-nigerian-500 animate-pulse-soft" />
              Trusted by 500+ Diaspora Doctors
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6 animate-slide-up">
              <span className="text-gray-900 dark:text-white">Expertise</span>{' '}
              <span className="gradient-text">Without</span>{' '}
              <span className="text-gray-900 dark:text-white">Borders</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-10 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '100ms' }}>
              Connecting Nigerian diaspora doctors abroad with hospitals, doctors, and patients in Nigeria through secure, premium telemedicine.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '200ms' }}>
              <Link to="/doctor-dashboard" className="btn-primary text-base !px-8 !py-4 w-full sm:w-auto">
                Explore Doctor Dashboard <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/patient" className="btn-cta text-base !px-8 !py-4 w-full sm:w-auto">
                Talk to a Doctor Now
              </Link>
            </div>
          </div>

          {/* Stats bar */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { value: 1247, label: 'Patients Helped', suffix: '+' },
              { value: 500, label: 'Diaspora Doctors', suffix: '+' },
              { value: 98, label: 'Satisfaction Rate', suffix: '%' },
              { value: 15, label: 'Countries Covered', suffix: '' },
            ].map((stat, i) => (
              <div key={i} className="card-base p-5 text-center animate-slide-up" style={{ animationDelay: `${300 + i * 100}ms` }}>
                <div className="text-3xl md:text-4xl font-extrabold text-primary-600 dark:text-primary-400 mb-1">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-surface-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">Premium Healthcare, Reimagined</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Everything you need to deliver world-class care across borders.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Video className="w-6 h-6" />, title: 'HD Video Consultations', desc: 'Crystal-clear video calls with low-bandwidth optimization for reliable connections across Nigeria.', color: 'from-primary-500 to-primary-600' },
              { icon: <Shield className="w-6 h-6" />, title: 'Secure Health Records', desc: 'End-to-end encrypted EHR system with timeline views, lab results, and imaging — all HIPAA compliant.', color: 'from-nigerian-500 to-nigerian-600' },
              { icon: <Users className="w-6 h-6" />, title: 'Mentorship Program', desc: 'Senior diaspora doctors mentor junior Nigerian doctors, building capacity and sharing expertise.', color: 'from-accent-500 to-accent-600' },
              { icon: <Heart className="w-6 h-6" />, title: 'Patient-First Design', desc: 'Accessible interface designed for varied literacy levels, with warm and approachable interactions.', color: 'from-cta-500 to-cta-600' },
              { icon: <Star className="w-6 h-6" />, title: 'Impact & Incentives', desc: 'Track your impact, earn CME credits, tax incentives, and recognition for your contributions.', color: 'from-yellow-500 to-yellow-600' },
              { icon: <Globe className="w-6 h-6" />, title: 'Multi-Language Support', desc: 'Consultations in English, Yoruba, Igbo, Hausa, and more — culturally respectful care.', color: 'from-purple-500 to-purple-600' },
            ].map((feature, i) => (
              <div key={i} className="card-base p-6 group hover:-translate-y-1">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{feature.desc}</p>
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
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Ready to Make an Impact?</h2>
              <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">Join hundreds of diaspora doctors already transforming healthcare in Nigeria.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/onboarding" className="btn-cta text-base !px-8 !py-4">Start Onboarding <ChevronRight className="w-5 h-5" /></Link>
                <Link to="/doctor-dashboard" className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl backdrop-blur transition-all">
                  View Demo Dashboard
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Logo size={32} />
              <span className="font-bold text-gray-900 dark:text-white">CareMesh — Diaspora Doctor Virtual Care</span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">© 2026 CareMesh. Expertise Without Borders. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
