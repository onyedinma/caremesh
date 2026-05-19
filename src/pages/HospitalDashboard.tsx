import DashboardLayout from '../components/DashboardLayout'
import { hospitalQueue, doctors } from '../data/mockData'
import { AlertCircle, Phone, Clock, Users, Activity, ArrowUpRight, Wifi, FileQuestion } from 'lucide-react'

export default function HospitalDashboard() {
  return (
    <DashboardLayout title="Hospital Dashboard">
      <div className="mb-6 animate-fade-in">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Lagos University Teaching Hospital</h2>
        <p className="text-gray-500 dark:text-gray-400">Real-time hospital management overview</p>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Patients in Queue', value: '12', icon: <Users className="w-5 h-5" />, color: 'text-primary-600 dark:text-primary-400', bg: 'bg-primary-50 dark:bg-primary-900/20' },
          { label: 'Active Consultations', value: '3', icon: <Activity className="w-5 h-5" />, color: 'text-nigerian-600 dark:text-nigerian-400', bg: 'bg-nigerian-50 dark:bg-nigerian-900/20' },
          { label: 'Avg Wait Time', value: '14m', icon: <Clock className="w-5 h-5" />, color: 'text-accent-600 dark:text-accent-400', bg: 'bg-accent-50 dark:bg-accent-900/20' },
          { label: 'Diaspora Doctors Online', value: '8', icon: <Wifi className="w-5 h-5" />, color: 'text-cta-600 dark:text-cta-400', bg: 'bg-cta-50 dark:bg-cta-900/20' },
        ].map((s, i) => (
          <div key={i} className="stat-card animate-slide-up" style={{ animationDelay: `${i * 80}ms` }}>
            <div className={`p-2.5 rounded-xl ${s.bg} w-fit`}><span className={s.color}>{s.icon}</span></div>
            <div className={`text-2xl font-extrabold ${s.color}`}>{s.value}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Request Specialist CTA */}
      <button className="w-full mb-8 relative overflow-hidden rounded-2xl p-6 text-left bg-gradient-to-r from-primary-600 to-accent-500 shadow-lg hover:shadow-xl transition-all active:scale-[0.99] group animate-slide-up" style={{ animationDelay: '300ms' }}>
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-12 translate-x-12" />
        <div className="relative z-10 flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Phone className="w-7 h-7 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Request Diaspora Specialist</h3>
            <p className="text-sm text-white/80">Get expert second opinion from specialists abroad</p>
          </div>
          <ArrowUpRight className="w-6 h-6 text-white/80 ml-auto" />
        </div>
      </button>

      <div className="grid lg:grid-cols-3 gap-6 mb-6">
        {/* Patient Queue */}
        <div className="lg:col-span-2 card-base p-6 animate-slide-up" style={{ animationDelay: '400ms' }}>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Live Patient Queue</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-xs text-gray-500 dark:text-gray-400 border-b border-gray-100 dark:border-gray-800">
                  <th className="text-left pb-3 font-medium">Patient</th>
                  <th className="text-left pb-3 font-medium">Condition</th>
                  <th className="text-left pb-3 font-medium">Department</th>
                  <th className="text-left pb-3 font-medium">Wait</th>
                  <th className="text-left pb-3 font-medium">Priority</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50 dark:divide-gray-800">
                {hospitalQueue.map(q => (
                  <tr key={q.id} className="hover:bg-surface-50 dark:hover:bg-gray-800/50 transition-colors">
                    <td className="py-3 text-sm font-medium text-gray-900 dark:text-white">{q.patient}</td>
                    <td className="py-3 text-sm text-gray-600 dark:text-gray-400">{q.condition}</td>
                    <td className="py-3 text-sm text-gray-600 dark:text-gray-400">{q.department}</td>
                    <td className="py-3 text-sm text-gray-600 dark:text-gray-400">{q.waitTime}</td>
                    <td className="py-3">
                      <span className={q.priority === 'urgent' ? 'badge-error' : 'badge-info'}>
                        {q.priority === 'urgent' && <AlertCircle className="w-3 h-3" />}
                        {q.priority}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Available Diaspora Doctors */}
        <div className="card-base p-6 animate-slide-up" style={{ animationDelay: '500ms' }}>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Available Specialists</h3>
          <div className="space-y-3">
            {doctors.filter(d => d.available).slice(0, 4).map(doc => (
              <div key={doc.id} className="flex items-center gap-3 p-3 rounded-xl bg-surface-50 dark:bg-gray-800/50 hover:bg-surface-100 dark:hover:bg-gray-800 transition-colors">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-accent-500 flex items-center justify-center text-white text-xs font-bold">
                    {doc.name.split(' ').slice(1, 3).map(n => n[0]).join('')}
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-nigerian-500 rounded-full border-2 border-white dark:border-gray-900 animate-pulse-soft" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">{doc.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{doc.specialty}</p>
                </div>
                <button className="text-xs font-semibold text-primary-600 dark:text-primary-400 hover:underline">Request</button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pending Second Opinions + Usage Statistics */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="card-base p-6 animate-slide-up" style={{ animationDelay: '600ms' }}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Pending Second Opinions</h3>
            <span className="badge-warning">3 pending</span>
          </div>
          <div className="space-y-3">
            {[
              { patient: 'Patient #4501', condition: 'Complex Cardiac Arrhythmia', requestedSpec: 'Cardiology', urgency: 'urgent', requestDate: '2 hours ago' },
              { patient: 'Patient #4498', condition: 'Suspicious Lung Mass', requestedSpec: 'Oncology', urgency: 'urgent', requestDate: '5 hours ago' },
              { patient: 'Patient #4495', condition: 'Refractory Hypertension', requestedSpec: 'Internal Medicine', urgency: 'normal', requestDate: '1 day ago' },
            ].map((op, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-surface-50 dark:bg-gray-800/50 hover:shadow-soft transition-all">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${op.urgency === 'urgent' ? 'bg-red-50 dark:bg-red-900/20' : 'bg-blue-50 dark:bg-blue-900/20'}`}>
                  <FileQuestion className={`w-5 h-5 ${op.urgency === 'urgent' ? 'text-red-500' : 'text-blue-500'}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm">{op.condition}</h4>
                    {op.urgency === 'urgent' && <span className="badge-error text-[10px]">Urgent</span>}
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{op.patient} • Needs {op.requestedSpec} • {op.requestDate}</p>
                </div>
                <button className="btn-outline text-xs !px-3 !py-1.5">Assign</button>
              </div>
            ))}
          </div>
        </div>

        {/* Usage Statistics */}
        <div className="card-base p-6 animate-slide-up" style={{ animationDelay: '700ms' }}>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Monthly Usage Statistics</h3>
          <div className="space-y-4">
            {[
              { label: 'Diaspora Consultations', val: 87, max: 100, color: 'from-primary-500 to-accent-500' },
              { label: 'Second Opinions Resolved', val: 34, max: 40, color: 'from-nigerian-500 to-accent-500' },
              { label: 'Average Rating', val: 96, max: 100, color: 'from-cta-500 to-yellow-500' },
              { label: 'Patient Satisfaction', val: 92, max: 100, color: 'from-accent-500 to-nigerian-500' },
            ].map((item, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-gray-600 dark:text-gray-400">{item.label}</span>
                  <span className="font-semibold text-gray-900 dark:text-white">{item.val}{item.max === 100 ? '%' : `/${item.max}`}</span>
                </div>
                <div className="h-2.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                  <div className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-1000`} style={{ width: `${(item.val / item.max) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-3 mt-6 pt-4 border-t border-gray-100 dark:border-gray-800">
            <div className="text-center">
              <div className="text-2xl font-extrabold text-primary-600 dark:text-primary-400">₦2.4M</div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Cost Savings</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-extrabold text-nigerian-600 dark:text-nigerian-400">142</div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Lives Impacted</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
