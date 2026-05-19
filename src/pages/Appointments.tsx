import { useState } from 'react'
import DashboardLayout from '../components/DashboardLayout'
import { doctors, specialties } from '../data/mockData'
import { Search, Star, MapPin, Clock, Filter, Grid, List, ChevronDown, X, Calendar as CalIcon } from 'lucide-react'
import { useToast } from '../components/Toast'

export default function Appointments() {
  const [view, setView] = useState<'grid' | 'list'>('grid')
  const [specialty, setSpecialty] = useState('All Specialties')
  const [search, setSearch] = useState('')
  const [bookingDoc, setBookingDoc] = useState<number | null>(null)
  const { toast } = useToast()

  const filtered = doctors.filter(d =>
    (specialty === 'All Specialties' || d.specialty === specialty) &&
    (search === '' || d.name.toLowerCase().includes(search.toLowerCase()) || d.specialty.toLowerCase().includes(search.toLowerCase()))
  )

  return (
    <DashboardLayout title="Book Appointment">
      {/* Search & Filters */}
      <div className="mb-6 space-y-4 animate-fade-in">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input value={search} onChange={e => setSearch(e.target.value)} className="input-field !pl-12 !pr-4" placeholder="Search doctors by name, specialty..." />
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative">
            <select value={specialty} onChange={e => setSpecialty(e.target.value)} className="input-field !py-2.5 !pr-10 !pl-4 text-sm appearance-none cursor-pointer min-w-[180px]">
              {specialties.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
          {['On-Demand', 'Scheduled'].map(t => (
            <button key={t} className="px-4 py-2.5 rounded-xl text-sm font-medium border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400 hover:border-primary-200 dark:hover:border-primary-800 transition-all">
              {t}
            </button>
          ))}
          <div className="ml-auto flex items-center gap-1 bg-gray-100 dark:bg-gray-800 rounded-xl p-1">
            <button onClick={() => setView('grid')} className={`p-2 rounded-lg transition-all ${view === 'grid' ? 'bg-white dark:bg-gray-700 shadow-sm' : ''}`}>
              <Grid className="w-4 h-4" />
            </button>
            <button onClick={() => setView('list')} className={`p-2 rounded-lg transition-all ${view === 'list' ? 'bg-white dark:bg-gray-700 shadow-sm' : ''}`}>
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Doctor cards */}
      <div className={view === 'grid' ? 'grid md:grid-cols-2 xl:grid-cols-3 gap-4' : 'space-y-3'}>
        {filtered.map((doc, i) => (
          <div key={doc.id} className={`card-base overflow-hidden animate-slide-up ${view === 'list' ? 'flex items-center gap-5 p-5' : 'p-5'}`} style={{ animationDelay: `${i * 60}ms` }}>
            <div className={`flex ${view === 'list' ? 'items-center gap-4 flex-1' : 'items-start gap-4 mb-4'}`}>
              <div className="relative shrink-0">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-400 to-accent-500 flex items-center justify-center text-white font-bold text-lg">
                  {doc.name.split(' ').slice(1, 3).map(n => n[0]).join('')}
                </div>
                {doc.available && <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-nigerian-500 rounded-full border-2 border-white dark:border-gray-900 animate-pulse-soft" />}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-gray-900 dark:text-white text-sm">{doc.name}</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">{doc.specialty} • {doc.experience}</p>
                <div className="flex items-center gap-3 mt-1.5">
                  <div className="flex items-center gap-1 text-xs"><Star className="w-3 h-3 text-yellow-500 fill-yellow-500" /><span className="font-semibold text-gray-900 dark:text-white">{doc.rating}</span><span className="text-gray-400">({doc.reviews})</span></div>
                  <div className="flex items-center gap-1 text-xs text-gray-500"><MapPin className="w-3 h-3" />{doc.location}</div>
                </div>
              </div>
            </div>
            {view === 'grid' && (
              <div className="flex items-center gap-2 flex-wrap mb-4">
                {doc.languages.map(l => <span key={l} className="badge bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">{l}</span>)}
              </div>
            )}
            <div className={`flex items-center gap-3 ${view === 'grid' ? '' : ''}`}>
              <span className="text-lg font-bold text-primary-600 dark:text-primary-400">{doc.fee}</span>
              <span className="text-xs text-gray-400">per session</span>
              <button onClick={() => setBookingDoc(doc.id)} className={`ml-auto ${doc.available ? 'btn-cta' : 'btn-ghost'} text-xs !px-4 !py-2`} disabled={!doc.available}>
                {doc.available ? 'Book Now' : 'Unavailable'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Booking Modal */}
      {bookingDoc && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setBookingDoc(null)} />
          <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-6 w-full max-w-md animate-scale-in">
            <button onClick={() => setBookingDoc(null)} className="absolute top-4 right-4 p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
              <X className="w-5 h-5 text-gray-500" />
            </button>
            <div className="text-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-nigerian-500 to-accent-500 flex items-center justify-center text-white text-xl font-bold mx-auto mb-3">
                <CalIcon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Book Appointment</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">with {doctors.find(d => d.id === bookingDoc)?.name}</p>
            </div>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 block">Preferred Date</label>
                <input type="date" className="input-field" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 block">Preferred Time</label>
                <div className="grid grid-cols-3 gap-2">
                  {['9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM'].map(t => (
                    <button key={t} className="px-3 py-2 rounded-xl text-xs font-medium border border-gray-200 dark:border-gray-700 hover:border-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400 transition-all">
                      {t}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 block">Reason for Visit</label>
                <textarea className="input-field resize-none h-20" placeholder="Briefly describe your concern..." />
              </div>
              <button onClick={() => { toast('Appointment booked successfully!', 'success'); setBookingDoc(null) }} className="w-full btn-cta !py-3.5">Confirm Booking</button>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  )
}
