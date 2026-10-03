export interface PatientInfoData {
  opdTimings: {
    department: string;
    timings: string;
    details?: string;
  }[];
  visitingHours: {
    slot: string;
    hours: string;
  }[];
  whatToBring: string[];
  admissionSteps: string[];
  inHospitalStay: string[];
  dischargeSteps: string[];
  visitorGuidelines: string[];
  patientRights: string[];
  patientResponsibilities: string[];
}

export const patientInfoData: PatientInfoData = {
  opdTimings: [
    {
      department: "Orthopaedic OPD",
      timings: "Morning: 10:30 AM – 3:00 PM | Evening: 5:30 PM – 8:30 PM",
      details: "Available Monday through Saturday. Emergency orthopaedic casualty open 24/7."
    },
    {
      department: "Urology OPD",
      timings: "Monday – Saturday: 10:30 AM – 3:00 PM | Sunday: 10:30 AM – 8:30 PM",
      details: "Please confirm urology schedule with reception prior to arrival."
    },
    {
      department: "24/7 Emergency & Casualty",
      timings: "24 Hours a Day / 7 Days a Week",
      details: "Direct phone line: 08154-405616 for immediate trauma response."
    }
  ],
  visitingHours: [
    { slot: "Morning Visiting Hours", hours: "8:00 AM – 9:00 AM" },
    { slot: "Afternoon Visiting Hours", hours: "1:00 PM – 2:00 PM" },
    { slot: "Evening Visiting Hours", hours: "7:00 PM – 8:00 PM" }
  ],
  whatToBring: [
    "Aadhaar Card or any valid Government-issued Photo ID",
    "Previous Medical Records, Discharge Summaries & Prescriptions",
    "Recent Laboratory Investigation Reports",
    "X-Ray, CT Scan, MRI, or Ultrasound Films & CD Reports",
    "Current Prescription Medications currently being consumed",
    "Health Insurance / TPA Card (for cashless admission)"
  ],
  admissionSteps: [
    "Patient Registration at Reception Desk",
    "Consultation with the Specialist Surgeon",
    "Clinical Recommendation for Admission",
    "Completion of Admission & Billing / TPA Formalities",
    "Allocation of Room or Ward according to preference"
  ],
  inHospitalStay: [
    "24/7 Dedicated Clinical Nursing Care & Monitoring",
    "Daily Morning & Evening Consultant Doctor Rounds",
    "Integrated In-House Pharmacy & Diagnostic Laboratory Support",
    "Bedside Physiotherapy & Mobility Rehabilitation as advised",
    "Attendant Counselling and Nutritional Advice",
    "Sanitized, Safe, and Quiet Recovery Environment"
  ],
  dischargeSteps: [
    "Medical Clearance granted by treating consultant",
    "Completion of billing formalities at accounts desk",
    "Handover of detailed Discharge Summary and Operative Notes",
    "Clear explanation of medication dosage & follow-up appointment date",
    "Home care instructions and rehabilitation exercise guide"
  ],
  visitorGuidelines: [
    "Only one attendant is permitted to stay overnight with the patient.",
    "A maximum of two visitors are permitted at the bedside during visiting hours.",
    "Children under 12 and visitors exhibiting cough or fever are requested to refrain from inpatient areas.",
    "Kindly maintain silence and silence mobile phones inside wards."
  ],
  patientRights: [
    "Receive respectful, dignified, and compassionate healthcare irrespective of background",
    "Be fully informed regarding diagnosis, planned procedures, risks, and expected recovery",
    "Strict privacy and confidentiality of personal medical data and reports",
    "Give informed voluntary consent before undergoing surgery or procedures",
    "Ask clarifying questions and actively participate in clinical treatment decisions"
  ],
  patientResponsibilities: [
    "Provide accurate and complete medical history including allergies and previous surgeries",
    "Follow post-surgical instructions and medication regimens advised by physicians",
    "Treat medical staff, nursing personnel, and fellow patients with courtesy and respect",
    "Adhere strictly to infection control, hygiene, and hospital visitor policies",
    "Settle hospital billing and administrative requirements in a timely manner"
  ]
};
