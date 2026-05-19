import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import { Link } from 'react-router-dom'
import { Mic, MicOff, Video, VideoOff, Monitor, MessageSquare, Upload, Phone, Shield, Wifi, Clock, ChevronLeft, PenTool, FileText, Pill, FlaskConical, X, Send, Activity, Sun, Moon } from 'lucide-react'

const ehrTabs = ['History', 'Labs', 'Medications', 'Notes', 'Scans']

export default function ConsultationRoom() {
  const { theme, toggleTheme } = useTheme()
  const [micOn, setMicOn] = useState(true)
  const [camOn, setCamOn] = useState(true)
  const [chatOpen, setChatOpen] = useState(false)
  const [ehrTab, setEhrTab] = useState('History')
  const [showEHR, setShowEHR] = useState(true)
  const [elapsed, setElapsed] = useState('12:34')

  return (
    <div className="h-screen flex flex-col bg-gray-950 text-white overflow-hidden">
      {/* Top bar */}
      <header className="flex items-center justify-between px-4 py-2.5 bg-gray-900 border-b border-gray-800 z-20">
        <div className="flex items-center gap-3">
          <Link to="/doctor-dashboard" className="p-1.5 rounded-lg hover:bg-gray-800 transition-colors">
            <ChevronLeft className="w-5 h-5 text-gray-400" />
          </Link>
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-400 to-accent-500 flex items-center justify-center text-xs font-bold">AJ</div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold">Adebayo Johnson</span>
              <span className="text-xs text-gray-400">• 45yo Male</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-gray-500">
              <span>Cardiology Follow-up</span>
              <span>ID: #PAT-4521</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-800 text-xs">
            <Clock className="w-3.5 h-3.5 text-accent-400" />
            <span className="font-mono text-accent-400">{elapsed}</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-nigerian-900/40 text-xs">
            <Wifi className="w-3.5 h-3.5 text-nigerian-400" />
            <span className="text-nigerian-400 font-medium">Excellent</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-800 text-xs">
            <Shield className="w-3.5 h-3.5 text-accent-400" />
            <span className="text-gray-400">E2E Encrypted</span>
          </div>
          <button onClick={toggleTheme} className="p-1.5 rounded-lg hover:bg-gray-800">
            {theme === 'light' ? <Moon className="w-4 h-4 text-gray-400" /> : <Sun className="w-4 h-4 text-yellow-400" />}
          </button>
        </div>
      </header>

      {/* Main content */}
      <div className="flex-1 flex min-h-0">
        {/* EHR Sidebar */}
        {showEHR && (
          <aside className="w-80 bg-gray-900 border-r border-gray-800 flex flex-col animate-slide-in-right">
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800">
              <h3 className="text-sm font-bold">Patient EHR</h3>
              <button onClick={() => setShowEHR(false)} className="p-1 hover:bg-gray-800 rounded"><X className="w-4 h-4 text-gray-500" /></button>
            </div>
            <div className="flex border-b border-gray-800 overflow-x-auto">
              {ehrTabs.map(tab => (
                <button key={tab} onClick={() => setEhrTab(tab)}
                  className={`px-3 py-2.5 text-xs font-medium whitespace-nowrap transition-colors ${ehrTab === tab ? 'text-accent-400 border-b-2 border-accent-400' : 'text-gray-500 hover:text-gray-300'}`}>
                  {tab}
                </button>
              ))}
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {ehrTab === 'History' && (
                <>
                  <div className="text-xs text-gray-500 font-medium mb-2">VISIT TIMELINE</div>
                  {['May 10 — Follow-up: BP slightly elevated, adjusted meds', 'Apr 15 — Consultation: Started Metformin for diabetes', 'Mar 20 — Lab Review: Glucose levels above normal'].map((v, i) => (
                    <div key={i} className="relative pl-4 pb-4 border-l border-gray-700 last:border-0">
                      <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-accent-500 -translate-x-[5px]" />
                      <p className="text-xs text-gray-300 leading-relaxed">{v}</p>
                    </div>
                  ))}
                </>
              )}
              {ehrTab === 'Labs' && (
                <div className="space-y-2">
                  {[
                    { test: 'HbA1c', value: '7.2%', status: 'high' },
                    { test: 'Fasting Glucose', value: '142 mg/dL', status: 'high' },
                    { test: 'Creatinine', value: '1.0 mg/dL', status: 'normal' },
                    { test: 'Cholesterol', value: '195 mg/dL', status: 'normal' },
                    { test: 'LDL', value: '128 mg/dL', status: 'high' },
                  ].map((l, i) => (
                    <div key={i} className="flex items-center justify-between p-2.5 rounded-lg bg-gray-800/50 text-xs">
                      <span className="text-gray-300">{l.test}</span>
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-white">{l.value}</span>
                        <span className={`w-1.5 h-1.5 rounded-full ${l.status === 'high' ? 'bg-cta-500' : 'bg-nigerian-500'}`} />
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {ehrTab === 'Medications' && (
                <div className="space-y-2">
                  {['Metformin 500mg — Twice daily', 'Lisinopril 10mg — Once daily', 'Aspirin 81mg — Once daily'].map((m, i) => (
                    <div key={i} className="flex items-center gap-2 p-2.5 rounded-lg bg-gray-800/50 text-xs">
                      <Pill className="w-3.5 h-3.5 text-accent-400" />
                      <span className="text-gray-300">{m}</span>
                    </div>
                  ))}
                </div>
              )}
              {ehrTab === 'Notes' && (
                <div className="space-y-2">
                  <textarea className="w-full h-32 bg-gray-800 border border-gray-700 rounded-lg p-3 text-xs text-gray-300 placeholder:text-gray-600 focus:outline-none focus:border-accent-500 resize-none" placeholder="Add consultation notes..." />
                  <button className="w-full py-2 bg-accent-600 hover:bg-accent-500 rounded-lg text-xs font-semibold transition-colors">Save Notes</button>
                </div>
              )}
              {ehrTab === 'Scans' && (
                <div className="space-y-3">
                  {['Chest X-Ray — May 2026', 'ECG Report — Apr 2026'].map((s, i) => (
                    <div key={i} className="p-3 rounded-lg bg-gray-800/50 text-xs">
                      <div className="w-full h-24 bg-gray-700 rounded-lg mb-2 flex items-center justify-center text-gray-500">
                        <FileText className="w-8 h-8" />
                      </div>
                      <span className="text-gray-300">{s}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </aside>
        )}

        {/* Video area */}
        <div className="flex-1 relative bg-gray-950">
          {/* Main video (patient) */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary-400 to-accent-500 flex items-center justify-center text-3xl font-bold mx-auto mb-4">AJ</div>
                <p className="text-lg font-semibold">Adebayo Johnson</p>
                <p className="text-sm text-gray-500">Patient • Lagos, Nigeria</p>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <Activity className="w-4 h-4 text-nigerian-400" />
                  <span className="text-xs text-nigerian-400">Connected</span>
                </div>
              </div>
            </div>
          </div>

          {/* Self view (PiP) */}
          <div className="absolute bottom-24 right-4 w-48 h-36 rounded-xl overflow-hidden bg-gray-800 border-2 border-gray-700 shadow-xl cursor-move hover:border-accent-500 transition-colors z-10">
            <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-accent-500 flex items-center justify-center text-sm font-bold mx-auto mb-1">CO</div>
                <p className="text-xs text-gray-400">You</p>
              </div>
            </div>
            {!camOn && (
              <div className="absolute inset-0 bg-gray-900/90 flex items-center justify-center">
                <VideoOff className="w-6 h-6 text-gray-500" />
              </div>
            )}
          </div>

          {/* Low bandwidth indicator */}
          <div className="absolute top-4 left-4 z-10">
            {!showEHR && (
              <button onClick={() => setShowEHR(true)} className="px-3 py-2 bg-gray-800/80 backdrop-blur rounded-lg text-xs font-medium text-gray-300 hover:bg-gray-700 transition-colors flex items-center gap-2">
                <FileText className="w-3.5 h-3.5" /> Show EHR
              </button>
            )}
          </div>
        </div>

        {/* Chat panel */}
        {chatOpen && (
          <aside className="w-80 bg-gray-900 border-l border-gray-800 flex flex-col animate-slide-in-right">
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800">
              <h3 className="text-sm font-bold">Chat</h3>
              <button onClick={() => setChatOpen(false)} className="p-1 hover:bg-gray-800 rounded"><X className="w-4 h-4 text-gray-500" /></button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              <div className="flex gap-2">
                <div className="w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">AJ</div>
                <div className="bg-gray-800 rounded-xl rounded-tl-sm px-3 py-2 text-xs text-gray-300 max-w-[80%]">
                  Good morning Doctor, I've been feeling better since the last visit.
                </div>
              </div>
              <div className="flex gap-2 justify-end">
                <div className="bg-primary-600 rounded-xl rounded-tr-sm px-3 py-2 text-xs max-w-[80%]">
                  That's great to hear! Let's review your latest lab results together.
                </div>
              </div>
            </div>
            <div className="p-3 border-t border-gray-800">
              <div className="flex items-center gap-2">
                <input className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-xs text-gray-300 placeholder:text-gray-600 focus:outline-none focus:border-accent-500" placeholder="Type a message..." />
                <button className="p-2 bg-primary-600 hover:bg-primary-500 rounded-lg transition-colors">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </aside>
        )}
      </div>

      {/* Bottom toolbar */}
      <div className="flex items-center justify-center gap-3 px-4 py-3 bg-gray-900 border-t border-gray-800 z-20">
        <button onClick={() => setMicOn(!micOn)} className={`p-3 rounded-xl transition-all ${micOn ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-red-500/20 text-red-400 hover:bg-red-500/30'}`}>
          {micOn ? <Mic className="w-5 h-5" /> : <MicOff className="w-5 h-5" />}
        </button>
        <button onClick={() => setCamOn(!camOn)} className={`p-3 rounded-xl transition-all ${camOn ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-red-500/20 text-red-400 hover:bg-red-500/30'}`}>
          {camOn ? <Video className="w-5 h-5" /> : <VideoOff className="w-5 h-5" />}
        </button>
        <button className="p-3 rounded-xl bg-gray-800 hover:bg-gray-700 text-white transition-all">
          <Monitor className="w-5 h-5" />
        </button>
        <button className="p-3 rounded-xl bg-gray-800 hover:bg-gray-700 text-white transition-all">
          <PenTool className="w-5 h-5" />
        </button>
        <button className="p-3 rounded-xl bg-gray-800 hover:bg-gray-700 text-white transition-all">
          <Upload className="w-5 h-5" />
        </button>
        <button onClick={() => setChatOpen(!chatOpen)} className={`p-3 rounded-xl transition-all ${chatOpen ? 'bg-primary-600 text-white' : 'bg-gray-800 hover:bg-gray-700 text-white'}`}>
          <MessageSquare className="w-5 h-5" />
        </button>
        <div className="w-px h-8 bg-gray-700 mx-1" />
        <Link to="/doctor-dashboard" className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-semibold text-sm transition-all flex items-center gap-2">
          <Phone className="w-4 h-4 rotate-[135deg]" /> End Call
        </Link>
      </div>
    </div>
  )
}
