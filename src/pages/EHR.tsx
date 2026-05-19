import { useState } from 'react'
import DashboardLayout from '../components/DashboardLayout'
import { patientRecords } from '../data/mockData'
import { FileText, FlaskConical, Pill, StickyNote, ImageIcon, Activity, Share2, RefreshCw, AlertTriangle, Clock, Shield } from 'lucide-react'

const tabs = [
  { id: 'overview', label: 'Overview', icon: <Activity className="w-4 h-4" /> },
  { id: 'history', label: 'History', icon: <Clock className="w-4 h-4" /> },
  { id: 'medications', label: 'Medications', icon: <Pill className="w-4 h-4" /> },
  { id: 'labs', label: 'Labs', icon: <FlaskConical className="w-4 h-4" /> },
  { id: 'imaging', label: 'Imaging', icon: <ImageIcon className="w-4 h-4" /> },
  { id: 'notes', label: 'Notes', icon: <StickyNote className="w-4 h-4" /> },
]

export default function EHR() {
  const [activeTab, setActiveTab] = useState('overview')
  const p = patientRecords

  return (
    <DashboardLayout title="Electronic Health Records">
      {/* Patient header */}
      <div className="card-base p-6 mb-6 animate-fade-in">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-400 to-accent-500 flex items-center justify-center text-white text-xl font-bold">{p.name.split(' ').map(n => n[0]).join('')}</div>
          <div className="flex-1">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">{p.name}</h2>
            <div className="flex flex-wrap items-center gap-3 mt-1 text-sm text-gray-500 dark:text-gray-400">
              <span>{p.age}yo {p.gender}</span><span>•</span><span>Blood Type: {p.bloodType}</span><span>•</span>
              <span className="text-cta-600 dark:text-cta-400">Allergies: {p.allergies.join(', ')}</span>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {p.conditions.map(c => <span key={c} className="badge-warning">{c}</span>)}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="btn-secondary text-xs !px-4 !py-2.5"><Share2 className="w-3.5 h-3.5" /> Share with Local Doctor</button>
            <button className="btn-outline text-xs !px-4 !py-2.5"><RefreshCw className="w-3.5 h-3.5" /> Request Update</button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-1 mb-6 overflow-x-auto pb-1 animate-slide-up">
        {tabs.map(tab => (
          <button key={tab.id} onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
              activeTab === tab.id ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400 shadow-sm' : 'text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
            }`}>
            {tab.icon} {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="animate-fade-in">
        {activeTab === 'overview' && (
          <div className="grid md:grid-cols-2 gap-6">
            {/* Vitals */}
            <div className="card-base p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Current Vitals</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Blood Pressure', value: p.vitals.bp, unit: 'mmHg', color: 'text-cta-600 dark:text-cta-400' },
                  { label: 'Heart Rate', value: p.vitals.heartRate, unit: 'bpm', color: 'text-red-500' },
                  { label: 'Temperature', value: p.vitals.temp, unit: '', color: 'text-accent-600 dark:text-accent-400' },
                  { label: 'Weight', value: p.vitals.weight, unit: '', color: 'text-primary-600 dark:text-primary-400' },
                  { label: 'SpO2', value: p.vitals.spo2, unit: '', color: 'text-nigerian-600 dark:text-nigerian-400' },
                ].map((v, i) => (
                  <div key={i} className="p-3 rounded-xl bg-surface-50 dark:bg-gray-800/50">
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{v.label}</p>
                    <p className={`text-lg font-bold ${v.color}`}>{v.value} <span className="text-xs font-normal text-gray-400">{v.unit}</span></p>
                  </div>
                ))}
              </div>
            </div>
            {/* Conditions & Meds summary */}
            <div className="space-y-4">
              <div className="card-base p-6">
                <h3 className="font-bold text-gray-900 dark:text-white mb-3">Active Medications</h3>
                <div className="space-y-2">
                  {p.medications.map((m, i) => (
                    <div key={i} className="flex items-center gap-3 p-2.5 rounded-lg bg-surface-50 dark:bg-gray-800/50">
                      <Pill className="w-4 h-4 text-accent-500 shrink-0" />
                      <div className="flex-1"><span className="text-sm font-medium text-gray-900 dark:text-white">{m.name} {m.dosage}</span><p className="text-xs text-gray-500">{m.frequency}</p></div>
                      <span className="badge-success">Active</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="card-base p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="w-4 h-4 text-accent-500" />
                  <h3 className="font-bold text-gray-900 dark:text-white">Access Log</h3>
                </div>
                <div className="space-y-2 text-xs text-gray-500 dark:text-gray-400">
                  <p>Dr. Okafor accessed records — May 10, 10:05 AM</p>
                  <p>Dr. Ibrahim accessed records — Apr 15, 9:30 AM</p>
                  <p>Patient updated info — Apr 10, 3:15 PM</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'history' && (
          <div className="card-base p-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-5">Visit Timeline</h3>
            <div className="space-y-0">
              {p.visits.map((v, i) => (
                <div key={i} className="relative pl-8 pb-8 border-l-2 border-gray-200 dark:border-gray-700 last:border-0 last:pb-0">
                  <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-primary-500 -translate-x-[9px] border-2 border-white dark:border-gray-900" />
                  <div className="p-4 rounded-xl bg-surface-50 dark:bg-gray-800/50 hover:shadow-soft transition-shadow">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-bold text-gray-900 dark:text-white">{v.date}</span>
                      <span className="badge-info">{v.type}</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{v.doctor}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{v.notes}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'labs' && (
          <div className="card-base p-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Lab Results</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead><tr className="text-xs text-gray-500 dark:text-gray-400 border-b border-gray-100 dark:border-gray-800">
                  <th className="text-left pb-3 font-medium">Test</th><th className="text-left pb-3 font-medium">Result</th><th className="text-left pb-3 font-medium">Reference</th><th className="text-left pb-3 font-medium">Status</th><th className="text-left pb-3 font-medium">Date</th>
                </tr></thead>
                <tbody className="divide-y divide-gray-50 dark:divide-gray-800">
                  {p.labResults.map((l, i) => (
                    <tr key={i} className="hover:bg-surface-50 dark:hover:bg-gray-800/50">
                      <td className="py-3 text-sm font-medium text-gray-900 dark:text-white">{l.test}</td>
                      <td className="py-3 text-sm font-semibold text-gray-900 dark:text-white">{l.value}</td>
                      <td className="py-3 text-sm text-gray-500">{l.range}</td>
                      <td className="py-3">{l.status === 'high' ? <span className="badge-error flex items-center gap-1 w-fit"><AlertTriangle className="w-3 h-3" />High</span> : <span className="badge-success w-fit">Normal</span>}</td>
                      <td className="py-3 text-sm text-gray-500">{l.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'medications' && (
          <div className="card-base p-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Medications</h3>
            <div className="space-y-3">
              {p.medications.map((m, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-surface-50 dark:bg-gray-800/50">
                  <div className="w-12 h-12 rounded-xl bg-accent-50 dark:bg-accent-900/20 flex items-center justify-center"><Pill className="w-5 h-5 text-accent-600 dark:text-accent-400" /></div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 dark:text-white">{m.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{m.dosage} • {m.frequency}</p>
                  </div>
                  <span className="badge-success">Active</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'imaging' && (
          <div className="card-base p-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Imaging & Scans</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {['Chest X-Ray — May 2026', 'ECG Report — Apr 2026', 'Echocardiogram — Mar 2026'].map((s, i) => (
                <div key={i} className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-medium transition-shadow">
                  <div className="h-40 bg-gray-100 dark:bg-gray-800 flex items-center justify-center"><FileText className="w-12 h-12 text-gray-300 dark:text-gray-600" /></div>
                  <div className="p-4"><p className="text-sm font-medium text-gray-900 dark:text-white">{s}</p>
                    <button className="text-xs text-primary-600 dark:text-primary-400 font-semibold mt-1">View & Annotate →</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'notes' && (
          <div className="card-base p-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Consultation Notes</h3>
            <textarea className="input-field h-40 resize-none mb-4" placeholder="Add notes for this patient..." />
            <button className="btn-primary text-sm">Save Notes</button>
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}
