import { useState } from 'react'
import DashboardLayout from '../components/DashboardLayout'
import { earnings } from '../data/mockData'
import { DollarSign, Award, FileText, Trophy, TrendingUp, ArrowUpRight, Download, Star } from 'lucide-react'

const tabs = ['Earnings & Payouts', 'CME Credits', 'Tax Incentives', 'Recognition', 'Leaderboard']

export default function Incentives() {
  const [activeTab, setActiveTab] = useState(tabs[0])

  return (
    <DashboardLayout title="Incentives & Impact">
      {/* Hero impact */}
      <div className="relative rounded-2xl overflow-hidden p-8 mb-8 bg-gradient-to-r from-primary-600 via-primary-700 to-accent-600 animate-fade-in">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-20 translate-x-20" />
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full translate-y-10 -translate-x-10" />
        <div className="relative z-10">
          <h2 className="text-2xl font-bold text-white mb-6">Your Impact Summary</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Total Earnings', value: `$${earnings.totalEarnings.toLocaleString()}`, icon: <DollarSign className="w-5 h-5" /> },
              { label: 'Consultations', value: earnings.consultations.toLocaleString(), icon: <TrendingUp className="w-5 h-5" /> },
              { label: 'CME Credits', value: earnings.cmeCredits.toString(), icon: <Award className="w-5 h-5" /> },
              { label: 'Tax Savings', value: `$${earnings.taxSavings.toLocaleString()}`, icon: <FileText className="w-5 h-5" /> },
            ].map((s, i) => (
              <div key={i} className="bg-white/10 backdrop-blur rounded-xl p-4">
                <div className="text-white/60 mb-2">{s.icon}</div>
                <div className="text-2xl font-extrabold text-white">{s.value}</div>
                <div className="text-xs text-white/70 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-1 mb-6 overflow-x-auto pb-1">
        {tabs.map(tab => (
          <button key={tab} onClick={() => setActiveTab(tab)}
            className={`px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
              activeTab === tab ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400 shadow-sm' : 'text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
            }`}>
            {tab}
          </button>
        ))}
      </div>

      <div className="animate-fade-in">
        {activeTab === 'Earnings & Payouts' && (
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 card-base p-6">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Earnings Overview</h3>
                <button className="text-sm text-primary-600 dark:text-primary-400 font-semibold flex items-center gap-1"><Download className="w-4 h-4" /> Export</button>
              </div>
              {/* Simple bar chart */}
              <div className="flex items-end gap-4 h-48 mb-4">
                {earnings.history.map((m, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2">
                    <span className="text-xs font-semibold text-gray-900 dark:text-white">${(m.amount / 1000).toFixed(1)}k</span>
                    <div className="w-full bg-gradient-to-t from-primary-500 to-accent-500 rounded-t-lg transition-all hover:opacity-80" style={{ height: `${(m.amount / 15000) * 100}%` }} />
                    <span className="text-xs text-gray-500">{m.month}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-100 dark:border-gray-800 pt-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-sm">Recent Transactions</h4>
                <div className="space-y-2">
                  {[
                    { desc: 'Consultation — Adebayo J.', amount: '+$75.00', date: 'May 19' },
                    { desc: 'Second Opinion — LUTH', amount: '+$120.00', date: 'May 18' },
                    { desc: 'Mentorship Session', amount: '+$50.00', date: 'May 17' },
                    { desc: 'Payout to Bank', amount: '-$3,200.00', date: 'May 15' },
                  ].map((t, i) => (
                    <div key={i} className="flex items-center justify-between py-2.5 text-sm">
                      <div><span className="font-medium text-gray-900 dark:text-white">{t.desc}</span><p className="text-xs text-gray-500">{t.date}</p></div>
                      <span className={`font-semibold ${t.amount.startsWith('+') ? 'text-nigerian-600 dark:text-nigerian-400' : 'text-gray-500'}`}>{t.amount}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="card-base p-6">
                <h4 className="font-bold text-gray-900 dark:text-white mb-3">This Month</h4>
                <div className="text-3xl font-extrabold text-nigerian-600 dark:text-nigerian-400 mb-1">${earnings.thisMonth.toLocaleString()}</div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">+15% from last month</p>
                <button className="w-full btn-secondary text-sm !py-3">Request Payout</button>
              </div>
              <div className="card-base p-6">
                <h4 className="font-bold text-gray-900 dark:text-white mb-3">Pending Payout</h4>
                <div className="text-2xl font-extrabold text-cta-600 dark:text-cta-400">${earnings.pendingPayout.toLocaleString()}</div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Processing in 2-3 business days</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'CME Credits' && (
          <div className="card-base p-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">CME Credits Earned</h3>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="p-4 rounded-xl bg-accent-50 dark:bg-accent-900/20 text-center">
                <div className="text-3xl font-extrabold text-accent-600 dark:text-accent-400">48</div><p className="text-xs text-gray-500 mt-1">Total Credits</p>
              </div>
              <div className="p-4 rounded-xl bg-nigerian-50 dark:bg-nigerian-900/20 text-center">
                <div className="text-3xl font-extrabold text-nigerian-600 dark:text-nigerian-400">12</div><p className="text-xs text-gray-500 mt-1">This Quarter</p>
              </div>
              <div className="p-4 rounded-xl bg-primary-50 dark:bg-primary-900/20 text-center">
                <div className="text-3xl font-extrabold text-primary-600 dark:text-primary-400">2</div><p className="text-xs text-gray-500 mt-1">Certificates</p>
              </div>
            </div>
            <div className="space-y-3">
              {['Cardiology Case Studies (8 credits)', 'Telemedicine Best Practices (4 credits)', 'Diabetes Management Workshop (6 credits)'].map((c, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-surface-50 dark:bg-gray-800/50">
                  <Award className="w-5 h-5 text-accent-500" />
                  <span className="text-sm text-gray-900 dark:text-white flex-1">{c}</span>
                  <span className="badge-success">Completed</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'Tax Incentives' && (
          <div className="card-base p-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Tax Benefits</h3>
            <div className="p-6 rounded-xl bg-nigerian-50 dark:bg-nigerian-900/20 mb-6">
              <div className="text-3xl font-extrabold text-nigerian-600 dark:text-nigerian-400 mb-1">${earnings.taxSavings.toLocaleString()}</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Estimated tax savings through diaspora medical service deductions</p>
            </div>
            <div className="space-y-3">
              {['Charitable medical service deduction', 'Cross-border telemedicine credits', 'Professional development expenses', 'Technology equipment deductions'].map((b, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-surface-50 dark:bg-gray-800/50">
                  <FileText className="w-4 h-4 text-nigerian-500" /><span className="text-sm text-gray-700 dark:text-gray-300">{b}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'Recognition' && (
          <div className="card-base p-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Recognition & Awards</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: 'Top Contributor 2026', desc: 'Awarded for 1000+ consultations', icon: '🏆' },
                { title: 'Mentorship Excellence', desc: '4 mentees successfully graduated', icon: '🎓' },
                { title: 'Patient Champion', desc: '98% satisfaction rating', icon: '❤️' },
                { title: 'Pioneer Doctor', desc: 'Early adopter of CareMesh platform', icon: '🌟' },
              ].map((a, i) => (
                <div key={i} className="p-5 rounded-xl bg-surface-50 dark:bg-gray-800/50 hover:shadow-soft transition-all text-center">
                  <div className="text-4xl mb-3">{a.icon}</div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">{a.title}</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'Leaderboard' && (
          <div className="card-base p-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Top Contributors</h3>
            <div className="space-y-3">
              {[
                { rank: 1, name: 'Dr. Yusuf Bello', pts: '15,240', you: false },
                { rank: 2, name: 'Dr. Chukwuma Okafor', pts: '12,890', you: true },
                { rank: 3, name: 'Dr. Folake Adeyemi', pts: '11,650', you: false },
                { rank: 4, name: 'Dr. Amina Ibrahim', pts: '10,320', you: false },
                { rank: 5, name: 'Dr. Emeka Nwosu', pts: '9,180', you: false },
              ].map((l, i) => (
                <div key={i} className={`flex items-center gap-4 p-4 rounded-xl transition-all ${l.you ? 'bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800' : 'bg-surface-50 dark:bg-gray-800/50'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${l.rank <= 3 ? 'bg-gradient-to-br from-yellow-400 to-yellow-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'}`}>
                    {l.rank}
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-accent-500 flex items-center justify-center text-white text-sm font-bold">
                    {l.name.split(' ').slice(1, 3).map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1">
                    <span className="font-semibold text-gray-900 dark:text-white text-sm">{l.name}</span>
                    {l.you && <span className="ml-2 badge-info">You</span>}
                  </div>
                  <div className="flex items-center gap-1"><Star className="w-4 h-4 text-yellow-500 fill-yellow-500" /><span className="font-bold text-gray-900 dark:text-white text-sm">{l.pts}</span></div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}
