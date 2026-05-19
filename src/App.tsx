import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import DoctorDashboard from './pages/DoctorDashboard'
import PatientHome from './pages/PatientHome'
import HospitalDashboard from './pages/HospitalDashboard'
import ConsultationRoom from './pages/ConsultationRoom'
import Appointments from './pages/Appointments'
import EHR from './pages/EHR'
import Mentorship from './pages/Mentorship'
import Incentives from './pages/Incentives'
import Onboarding from './pages/Onboarding'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
      <Route path="/patient" element={<PatientHome />} />
      <Route path="/hospital" element={<HospitalDashboard />} />
      <Route path="/consultation" element={<ConsultationRoom />} />
      <Route path="/appointments" element={<Appointments />} />
      <Route path="/ehr" element={<EHR />} />
      <Route path="/mentorship" element={<Mentorship />} />
      <Route path="/incentives" element={<Incentives />} />
      <Route path="/onboarding" element={<Onboarding />} />
    </Routes>
  )
}
