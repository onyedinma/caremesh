export const doctors = [
  { id: 1, name: 'Dr. Chukwuma Okafor', specialty: 'Cardiology', experience: '15 years', rating: 4.9, reviews: 234, avatar: '', location: 'London, UK', available: true, languages: ['English', 'Igbo'], fee: '$75' },
  { id: 2, name: 'Dr. Amina Ibrahim', specialty: 'Pediatrics', experience: '12 years', rating: 4.8, reviews: 189, avatar: '', location: 'Toronto, Canada', available: true, languages: ['English', 'Hausa'], fee: '$65' },
  { id: 3, name: 'Dr. Folake Adeyemi', specialty: 'Obstetrics & Gynecology', experience: '18 years', rating: 4.9, reviews: 312, avatar: '', location: 'Houston, USA', available: false, languages: ['English', 'Yoruba'], fee: '$80' },
  { id: 4, name: 'Dr. Emeka Nwosu', specialty: 'Orthopedics', experience: '10 years', rating: 4.7, reviews: 156, avatar: '', location: 'Dublin, Ireland', available: true, languages: ['English', 'Igbo'], fee: '$70' },
  { id: 5, name: 'Dr. Ngozi Eze', specialty: 'Dermatology', experience: '8 years', rating: 4.6, reviews: 98, avatar: '', location: 'Manchester, UK', available: true, languages: ['English', 'Igbo'], fee: '$60' },
  { id: 6, name: 'Dr. Yusuf Bello', specialty: 'Internal Medicine', experience: '20 years', rating: 4.9, reviews: 445, avatar: '', location: 'New York, USA', available: true, languages: ['English', 'Hausa', 'Fulani'], fee: '$85' },
]

export const upcomingSessions = [
  { id: 1, patient: 'Adebayo Johnson', type: 'Follow-up', time: '10:00 AM', date: 'Today', status: 'confirmed', priority: 'normal' },
  { id: 2, patient: 'Fatima Suleiman', type: 'New Consultation', time: '11:30 AM', date: 'Today', status: 'confirmed', priority: 'urgent' },
  { id: 3, patient: 'Chidinma Obi', type: 'Second Opinion', time: '2:00 PM', date: 'Today', status: 'pending', priority: 'normal' },
  { id: 4, patient: 'Musa Abdullahi', type: 'Lab Review', time: '9:00 AM', date: 'Tomorrow', status: 'confirmed', priority: 'normal' },
]

export const dashboardStats = {
  patientsHelped: 1247,
  mentorshipHours: 386,
  earningsMonth: 12450,
  cmeCredits: 48,
}

export const patientRecords = {
  name: 'Adebayo Johnson',
  age: 45,
  gender: 'Male',
  bloodType: 'O+',
  allergies: ['Penicillin', 'Sulfa'],
  conditions: ['Hypertension', 'Type 2 Diabetes'],
  medications: [
    { name: 'Metformin', dosage: '500mg', frequency: 'Twice daily', status: 'active' },
    { name: 'Lisinopril', dosage: '10mg', frequency: 'Once daily', status: 'active' },
    { name: 'Aspirin', dosage: '81mg', frequency: 'Once daily', status: 'active' },
  ],
  vitals: { bp: '130/85', heartRate: 78, temp: '36.8°C', weight: '82kg', spo2: '98%' },
  labResults: [
    { test: 'HbA1c', value: '7.2%', range: '4.0-5.6%', status: 'high', date: '2026-05-10' },
    { test: 'Fasting Glucose', value: '142 mg/dL', range: '70-100 mg/dL', status: 'high', date: '2026-05-10' },
    { test: 'Creatinine', value: '1.0 mg/dL', range: '0.7-1.3 mg/dL', status: 'normal', date: '2026-05-10' },
    { test: 'Total Cholesterol', value: '195 mg/dL', range: '<200 mg/dL', status: 'normal', date: '2026-05-10' },
    { test: 'LDL', value: '128 mg/dL', range: '<100 mg/dL', status: 'high', date: '2026-05-10' },
    { test: 'HDL', value: '52 mg/dL', range: '>40 mg/dL', status: 'normal', date: '2026-05-10' },
  ],
  visits: [
    { date: '2026-05-10', doctor: 'Dr. Chukwuma Okafor', type: 'Follow-up', notes: 'Blood pressure slightly elevated. Adjusted medication dosage. Recommended dietary changes.' },
    { date: '2026-04-15', doctor: 'Dr. Amina Ibrahim', type: 'Consultation', notes: 'Initial diabetes management consultation. Started on Metformin.' },
    { date: '2026-03-20', doctor: 'Dr. Yusuf Bello', type: 'Lab Review', notes: 'Reviewed comprehensive blood panel. All values within acceptable range except glucose levels.' },
  ],
}

export const mentees = [
  { id: 1, name: 'Dr. Tunde Bakare', hospital: 'Lagos University Teaching Hospital', specialty: 'Cardiology Resident', progress: 75, sessions: 12 },
  { id: 2, name: 'Dr. Blessing Okonkwo', hospital: 'National Hospital Abuja', specialty: 'Pediatrics Resident', progress: 60, sessions: 8 },
  { id: 3, name: 'Dr. Ibrahim Musa', hospital: 'Ahmadu Bello University Hospital', specialty: 'Surgery Resident', progress: 45, sessions: 5 },
  { id: 4, name: 'Dr. Grace Adeola', hospital: 'UCH Ibadan', specialty: 'OB/GYN Resident', progress: 90, sessions: 18 },
]

export const hospitalQueue = [
  { id: 1, patient: 'Patient #4521', condition: 'Chest Pain', priority: 'urgent', waitTime: '5 min', department: 'Emergency' },
  { id: 2, patient: 'Patient #4522', condition: 'Fracture Review', priority: 'normal', waitTime: '15 min', department: 'Orthopedics' },
  { id: 3, patient: 'Patient #4523', condition: 'Prenatal Checkup', priority: 'normal', waitTime: '20 min', department: 'OB/GYN' },
  { id: 4, patient: 'Patient #4524', condition: 'Diabetic Follow-up', priority: 'normal', waitTime: '25 min', department: 'Internal Med' },
  { id: 5, patient: 'Patient #4525', condition: 'Pediatric Emergency', priority: 'urgent', waitTime: '3 min', department: 'Pediatrics' },
]

export const earnings = {
  totalEarnings: 87650,
  thisMonth: 12450,
  pendingPayout: 3200,
  cmeCredits: 48,
  taxSavings: 15400,
  consultations: 1247,
  history: [
    { month: 'Jan', amount: 9800 },
    { month: 'Feb', amount: 11200 },
    { month: 'Mar', amount: 10500 },
    { month: 'Apr', amount: 13100 },
    { month: 'May', amount: 12450 },
  ],
}

export const specialties = [
  'All Specialties', 'Cardiology', 'Pediatrics', 'Obstetrics & Gynecology', 'Orthopedics',
  'Dermatology', 'Internal Medicine', 'Neurology', 'Oncology', 'Ophthalmology', 'Surgery',
]
