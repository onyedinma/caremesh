import DashboardLayout from '../components/DashboardLayout'
import { dashboardStats, upcomingSessions } from '../data/mockData'
import { TrendingUp, Users, Clock, Award, Phone, Calendar, ArrowUpRight, AlertCircle } from 'lucide-react'
import { useEffect, useState } from 'react'

function AnimatedStat({ target, prefix = '' }: { target: number; prefix?: string }) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    let s = 0; const step = target / 40
    const t = setInterval(() => { s += step; if (s >= target) { setVal(target); clearInterval(t) } else setVal(Math.floor(s)) }, 25)
    return () => clearInterval(t)
  }, [target])
  return <>{prefix}{val.toLocaleString()}</>
}

export default function DoctorDashboard() {
  const stats = [
    { label: 'Patients Helped', value: dashboardStats.patientsHelped, icon: <Users className="w-5 h-5" />, color: 'text-primary-600 dark:text-primary-400', bg: 'bg-primary-50 dark:bg-primary-900/20', change: '+12%' },
    { label: 'Mentorship Hours', value: dashboardStats.mentorshipHours, icon: <Clock className="w-5 h-5" />, color: 'text-accent-600 dark:text-accent-400', bg: 'bg-accent-50 dark:bg-accent-900/20', change: '+8%' },
    { label: 'Earnings This Month', value: dashboardStats.earningsMonth, icon: <TrendingUp className="w-5 h-5" />, color: 'text-nigerian-600 dark:text-nigerian-400', bg: 'bg-nigerian-50 dark:bg-nigerian-900/20', prefix: '$', change: '+15%' },
    { label: 'CME Credits', value: dashboardStats.cmeCredits, icon: <Award className="w-5 h-5" />, color: 'text-cta-600 dark:text-cta-400', bg: 'bg-cta-50 dark:bg-cta-900/20', change: '+5' },
  ]

  return (
    <DashboardLayout title="Dashboard">
      {/* Welcome */}
      <div className="mb-8 animate-fade-in">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Welcome back, Dr. Chukwuma 👋</h2>
        <p className="text-gray-500 dark:text-gray-400">Here's your practice overview for today.</p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((s, i) => (
          <div key={i} className="stat-card animate-slide-up" style={{ animationDelay: `${i * 80}ms` }}>
            <div className="flex items-center justify-between">
              <div className={`p-2.5 rounded-xl ${s.bg}`}>
                <span className={s.color}>{s.icon}</span>
              </div>
              <span className="badge-success text-xs">{s.change}</span>
            </div>
            <div className={`text-2xl font-extrabold ${s.color}`}>
              <AnimatedStat target={s.value} prefix={s.prefix || ''} />
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Two-column layout */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Upcoming Sessions */}
        <div className="lg:col-span-2 card-base p-6 animate-slide-up" style={{ animationDelay: '300ms' }}>
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Upcoming Sessions</h3>
            <button className="text-sm text-primary-600 dark:text-primary-400 font-semibold hover:underline flex items-center gap-1">
              View All <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
          <div className="space-y-3">
            {upcomingSessions.map((session, i) => (
              <div key={session.id} className="flex items-center gap-4 p-4 rounded-xl bg-surface-50 dark:bg-gray-800/50 hover:bg-surface-100 dark:hover:bg-gray-800 transition-colors group">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold ${session.priority === 'urgent' ? 'bg-gradient-to-br from-red-500 to-red-600' : 'bg-gradient-to-br from-primary-400 to-accent-500'}`}>
                  {session.patient.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-gray-900 dark:text-white text-sm">{session.patient}</span>
                    {session.priority === 'urgent' && <span className="badge-error text-[10px]"><AlertCircle className="w-3 h-3" /> Urgent</span>}
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{session.type}</span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold text-gray-900 dark:text-white">{session.time}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{session.date}</div>
                </div>
                <span className={`badge ${session.status === 'confirmed' ? 'badge-success' : 'badge-warning'}`}>
                  {session.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick actions + Impact */}
        <div className="space-y-6">
          <div className="card-base p-6 animate-slide-up" style={{ animationDelay: '400ms' }}>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full btn-cta !py-3.5 text-sm">
                <Phone className="w-4 h-4" /> Start On-Demand Consultation
              </button>
              <button className="w-full btn-secondary !py-3.5 text-sm">
                <Calendar className="w-4 h-4" /> Schedule Session
              </button>
              <button className="w-full btn-outline !py-3.5 text-sm">
                <Users className="w-4 h-4" /> View Mentees
              </button>
            </div>
          </div>

          <div className="card-base p-6 animate-slide-up" style={{ animationDelay: '500ms' }}>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Your Impact</h3>
            <div className="space-y-4">
              {[
                { label: 'Consultations This Week', val: 24, max: 30 },
                { label: 'Patient Satisfaction', val: 98, max: 100 },
                { label: 'Mentorship Goal', val: 75, max: 100 },
              ].map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-gray-600 dark:text-gray-400">{item.label}</span>
                    <span className="font-semibold text-gray-900 dark:text-white">{item.val}/{item.max}</span>
                  </div>
                  <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full transition-all duration-1000" style={{ width: `${(item.val / item.max) * 100}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
