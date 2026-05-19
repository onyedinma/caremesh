import DashboardLayout from '../components/DashboardLayout'
import { mentees } from '../data/mockData'
import { Users, Calendar, MessageSquare, TrendingUp, Clock, ArrowUpRight, BookOpen } from 'lucide-react'

export default function Mentorship() {
  return (
    <DashboardLayout title="Mentorship">
      <div className="mb-6 animate-fade-in">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Mentorship Dashboard</h2>
        <p className="text-gray-500 dark:text-gray-400">Guide the next generation of Nigerian healthcare professionals</p>
      </div>

      {/* Impact stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Active Mentees', value: '4', icon: <Users className="w-5 h-5" />, color: 'text-primary-600 dark:text-primary-400', bg: 'bg-primary-50 dark:bg-primary-900/20' },
          { label: 'Sessions This Month', value: '12', icon: <Calendar className="w-5 h-5" />, color: 'text-nigerian-600 dark:text-nigerian-400', bg: 'bg-nigerian-50 dark:bg-nigerian-900/20' },
          { label: 'Total Hours', value: '386', icon: <Clock className="w-5 h-5" />, color: 'text-accent-600 dark:text-accent-400', bg: 'bg-accent-50 dark:bg-accent-900/20' },
          { label: 'Case Discussions', value: '28', icon: <MessageSquare className="w-5 h-5" />, color: 'text-cta-600 dark:text-cta-400', bg: 'bg-cta-50 dark:bg-cta-900/20' },
        ].map((s, i) => (
          <div key={i} className="stat-card animate-slide-up" style={{ animationDelay: `${i * 80}ms` }}>
            <div className={`p-2.5 rounded-xl ${s.bg} w-fit`}><span className={s.color}>{s.icon}</span></div>
            <div className={`text-2xl font-extrabold ${s.color}`}>{s.value}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Mentees */}
        <div className="lg:col-span-2 space-y-6">
          <div className="card-base p-6 animate-slide-up" style={{ animationDelay: '300ms' }}>
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">My Mentees</h3>
              <button className="text-sm text-primary-600 dark:text-primary-400 font-semibold hover:underline flex items-center gap-1">View All <ArrowUpRight className="w-4 h-4" /></button>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {mentees.map((m, i) => (
                <div key={m.id} className="p-4 rounded-xl bg-surface-50 dark:bg-gray-800/50 hover:shadow-soft transition-all group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary-400 to-accent-500 flex items-center justify-center text-white text-sm font-bold">
                      {m.name.split(' ').slice(1).map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm">{m.name}</h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{m.specialty}</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">{m.hospital}</p>
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="text-gray-500 dark:text-gray-400">Progress</span>
                    <span className="font-semibold text-gray-900 dark:text-white">{m.progress}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full transition-all duration-1000" style={{ width: `${m.progress}%` }} />
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-xs text-gray-500 dark:text-gray-400">{m.sessions} sessions completed</span>
                    <button className="text-xs font-semibold text-primary-600 dark:text-primary-400">Schedule →</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Open Case Discussions */}
          <div className="card-base p-6 animate-slide-up" style={{ animationDelay: '400ms' }}>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Open Case Discussions</h3>
            <div className="space-y-3">
              {[
                { title: 'Complex Cardiac Case — 62yo Male', mentee: 'Dr. Tunde Bakare', priority: 'urgent', department: 'Cardiology' },
                { title: 'Pediatric Respiratory Distress', mentee: 'Dr. Blessing Okonkwo', priority: 'normal', department: 'Pediatrics' },
                { title: 'Post-operative Infection Management', mentee: 'Dr. Ibrahim Musa', priority: 'normal', department: 'Surgery' },
              ].map((c, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-surface-50 dark:bg-gray-800/50 hover:shadow-soft transition-all">
                  <div className="w-10 h-10 rounded-xl bg-cta-50 dark:bg-cta-900/20 flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-cta-600 dark:text-cta-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm">{c.title}</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Raised by {c.mentee} • {c.department}</p>
                  </div>
                  {c.priority === 'urgent' && <span className="badge-error">Urgent</span>}
                  <button className="btn-outline text-xs !px-3 !py-1.5">Review & Advise</button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scheduled Sessions & Analytics */}
        <div className="space-y-6">
          <div className="card-base p-6 animate-slide-up" style={{ animationDelay: '350ms' }}>
            <h3 className="font-bold text-gray-900 dark:text-white mb-4">Upcoming Sessions</h3>
            <div className="space-y-3">
              {[
                { mentee: 'Dr. Bakare', topic: 'Cardiac Case Review', time: '2:00 PM Today' },
                { mentee: 'Dr. Okonkwo', topic: 'Pediatric Assessment', time: '10:00 AM Tomorrow' },
                { mentee: 'Dr. Adeola', topic: 'Final Evaluation', time: 'Wed, 3:00 PM' },
              ].map((s, i) => (
                <div key={i} className="p-3 rounded-xl bg-surface-50 dark:bg-gray-800/50">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">{s.mentee}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{s.topic}</p>
                  <p className="text-xs text-primary-600 dark:text-primary-400 font-medium mt-1">{s.time}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card-base p-6 animate-slide-up" style={{ animationDelay: '450ms' }}>
            <h3 className="font-bold text-gray-900 dark:text-white mb-4">Impact Analytics</h3>
            <div className="space-y-4">
              {[
                { label: 'Junior Doctor Growth', val: 85, color: 'from-primary-500 to-accent-500' },
                { label: 'Case Resolution Rate', val: 92, color: 'from-nigerian-500 to-accent-500' },
                { label: 'Mentee Satisfaction', val: 98, color: 'from-cta-500 to-yellow-500' },
              ].map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-gray-500 dark:text-gray-400">{item.label}</span>
                    <span className="font-semibold text-gray-900 dark:text-white">{item.val}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                    <div className={`h-full bg-gradient-to-r ${item.color} rounded-full`} style={{ width: `${item.val}%` }} />
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
