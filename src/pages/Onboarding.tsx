import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { ChevronRight, ChevronLeft, Upload, Globe, Award, Shield, Check, Sun, Moon } from 'lucide-react'
import Logo from '../components/Logo'

const steps = [
  { id: 1, title: 'Welcome', subtitle: 'Join the CareMesh community' },
  { id: 2, title: 'Role & Verification', subtitle: 'Tell us about yourself' },
  { id: 3, title: 'License Upload', subtitle: 'Verify your credentials' },
  { id: 4, title: 'Availability', subtitle: 'Set your schedule' },
  { id: 5, title: 'Incentives Preview', subtitle: 'See what you\'ll earn' },
]

export default function Onboarding() {
  const { theme, toggleTheme } = useTheme()
  const [step, setStep] = useState(1)

  const next = () => step < 5 && setStep(step + 1)
  const prev = () => step > 1 && setStep(step - 1)

  return (
    <div className="min-h-screen bg-surface-50 dark:bg-gray-950 flex">
      {/* Left panel — decorative */}
      <div className="hidden lg:flex lg:w-[45%] relative gradient-hero items-center justify-center p-12">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-accent-500/20" />
        <div className="relative z-10 text-center max-w-md">
          <Logo size={80} />
          <h1 className="text-4xl font-extrabold text-white mb-4">Expertise Without Borders</h1>
          <p className="text-lg text-white/70 leading-relaxed">Join hundreds of diaspora doctors making a real difference in Nigerian healthcare.</p>
          <div className="grid grid-cols-3 gap-4 mt-10">
            {[
              { val: '500+', label: 'Doctors' },
              { val: '1,247', label: 'Patients' },
              { val: '98%', label: 'Satisfaction' },
            ].map((s, i) => (
              <div key={i} className="bg-white/10 backdrop-blur rounded-xl p-4">
                <div className="text-2xl font-extrabold text-white">{s.val}</div>
                <div className="text-xs text-white/60 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right panel — form */}
      <div className="flex-1 flex flex-col">
        <header className="flex items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-gray-800">
          <Link to="/" className="flex items-center gap-2">
            <Logo size={32} className="lg:hidden" />
            <span className="font-bold text-gray-900 dark:text-white text-sm">CareMesh</span>
          </Link>
          <button onClick={toggleTheme} className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800">
            {theme === 'light' ? <Moon className="w-4 h-4 text-gray-600" /> : <Sun className="w-4 h-4 text-yellow-400" />}
          </button>
        </header>

        {/* Progress */}
        <div className="px-6 pt-6">
          <div className="flex items-center gap-2 mb-2">
            {steps.map((s, i) => (
              <div key={s.id} className="flex-1 flex items-center gap-2">
                <div className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${step >= s.id ? 'bg-gradient-to-r from-primary-500 to-accent-500' : 'bg-gray-200 dark:bg-gray-800'}`} />
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400">Step {step} of 5 — {steps[step - 1].title}</p>
        </div>

        {/* Step content */}
        <div className="flex-1 flex items-center justify-center p-6">
          <div className="w-full max-w-lg animate-fade-in" key={step}>
            {step === 1 && (
              <div className="text-center">
                <div className="text-6xl mb-6">👨‍⚕️</div>
                <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-3">Welcome, Doctor!</h2>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8 max-w-md mx-auto">
                  You're about to join a transformative program connecting Nigerian diaspora doctors with patients and hospitals back home. Let's set up your profile in just a few minutes.
                </p>
                <div className="grid grid-cols-3 gap-3 max-w-sm mx-auto">
                  {[
                    { icon: <Shield className="w-5 h-5" />, label: 'Secure & HIPAA' },
                    { icon: <Globe className="w-5 h-5" />, label: 'Global Reach' },
                    { icon: <Award className="w-5 h-5" />, label: 'Earn & Impact' },
                  ].map((f, i) => (
                    <div key={i} className="p-3 rounded-xl bg-primary-50 dark:bg-primary-900/20 text-center">
                      <div className="text-primary-600 dark:text-primary-400 flex justify-center mb-1">{f.icon}</div>
                      <p className="text-xs font-medium text-gray-600 dark:text-gray-400">{f.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-2">Role & Verification</h2>
                <p className="text-gray-500 dark:text-gray-400 mb-6">Tell us about your medical background.</p>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 block">Full Name</label>
                    <input className="input-field" placeholder="Dr. John Okafor" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 block">Email</label>
                    <input type="email" className="input-field" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 block">Primary Specialty</label>
                    <select className="input-field">
                      <option>Select specialty...</option>
                      <option>Cardiology</option><option>Pediatrics</option><option>Internal Medicine</option>
                      <option>Surgery</option><option>OB/GYN</option><option>Orthopedics</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 block">Country of Practice</label>
                    <input className="input-field" placeholder="e.g., United Kingdom" />
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-2">License Upload</h2>
                <p className="text-gray-500 dark:text-gray-400 mb-6">Upload your medical license for verification.</p>
                <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-2xl p-10 text-center hover:border-primary-400 dark:hover:border-primary-500 transition-colors cursor-pointer">
                  <Upload className="w-12 h-12 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
                  <p className="font-semibold text-gray-900 dark:text-white mb-1">Drop your license here</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">or click to browse files</p>
                  <p className="text-xs text-gray-400">Supports PDF, JPG, PNG (max 10MB)</p>
                </div>
                <div className="mt-4 p-4 rounded-xl bg-accent-50 dark:bg-accent-900/20 flex items-start gap-3">
                  <Shield className="w-5 h-5 text-accent-600 dark:text-accent-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Your documents are secure</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">End-to-end encrypted. Only used for verification purposes.</p>
                  </div>
                </div>
              </div>
            )}

            {step === 4 && (
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-2">Availability & Timezone</h2>
                <p className="text-gray-500 dark:text-gray-400 mb-6">Set when you're available for consultations.</p>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 block">Your Timezone</label>
                    <select className="input-field">
                      <option>GMT+0 (London)</option><option>GMT+1 (WAT)</option><option>EST (New York)</option><option>CST (Chicago)</option><option>PST (Los Angeles)</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 block">Available Days</label>
                    <div className="flex flex-wrap gap-2">
                      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((d, i) => (
                        <button key={d} className={`px-4 py-2.5 rounded-xl text-sm font-medium border transition-all ${i < 5 ? 'border-primary-300 dark:border-primary-700 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400' : 'border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:border-primary-300'}`}>
                          {d}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 block">Hours Per Week</label>
                    <input type="range" min="1" max="40" defaultValue="10" className="w-full accent-primary-500" />
                    <div className="flex justify-between text-xs text-gray-500 mt-1"><span>1 hour</span><span>10 hours</span><span>40 hours</span></div>
                  </div>
                </div>
              </div>
            )}

            {step === 5 && (
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-nigerian-50 dark:bg-nigerian-900/20 flex items-center justify-center mx-auto mb-6">
                  <Check className="w-10 h-10 text-nigerian-600 dark:text-nigerian-400" />
                </div>
                <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-3">You're All Set!</h2>
                <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-md mx-auto">Here's a preview of what you'll earn by joining CareMesh.</p>
                <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto mb-8">
                  {[
                    { label: 'Per Consultation', value: '$60-120' },
                    { label: 'Mentorship/hr', value: '$50' },
                    { label: 'CME Credits/yr', value: '50+' },
                    { label: 'Tax Savings', value: 'Up to $15k' },
                  ].map((e, i) => (
                    <div key={i} className="p-4 rounded-xl bg-nigerian-50 dark:bg-nigerian-900/20">
                      <div className="text-lg font-extrabold text-nigerian-600 dark:text-nigerian-400">{e.value}</div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{e.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <div className="px-6 py-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
          <button onClick={prev} disabled={step === 1} className={`btn-ghost text-sm ${step === 1 ? 'opacity-0 pointer-events-none' : ''}`}>
            <ChevronLeft className="w-4 h-4" /> Back
          </button>
          {step < 5 ? (
            <button onClick={next} className="btn-primary text-sm">Next <ChevronRight className="w-4 h-4" /></button>
          ) : (
            <Link to="/doctor-dashboard" className="btn-cta text-sm">Go to Dashboard <ChevronRight className="w-4 h-4" /></Link>
          )}
        </div>
      </div>
    </div>
  )
}
