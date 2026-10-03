export interface JourneyStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  actionPoint?: string;
}

export const patientJourneySteps: JourneyStep[] = [
  {
    step: "01",
    title: "Patient Registration",
    subtitle: "Welcoming & Quick Check-in",
    description: "Patients check in at reception with valid identification, where our administrative staff registers vital contact and preliminary health details.",
    actionPoint: "Please carry Aadhaar or Government Photo ID"
  },
  {
    step: "02",
    title: "Specialist Consultation",
    subtitle: "In-depth Clinical Evaluation",
    description: "Comprehensive physical assessment and review of past medical histories, imaging scans, and laboratory reports by our senior consultants.",
    actionPoint: "Diagnostic X-ray & lab reports reviewed on-site"
  },
  {
    step: "03",
    title: "Hospital Admission",
    subtitle: "Smooth Transition to Room",
    description: "When surgical or inpatient care is indicated, our front desk coordinates room allocation, pre-authorization with TPAs, and pre-op clearance.",
    actionPoint: "Cashless insurance desk assistance available"
  },
  {
    step: "04",
    title: "Treatment & Advanced Surgery",
    subtitle: "Precision Care in Modular OTs",
    description: "Surgical execution inside our high-sterility modular theatres utilizing digital C-Arm guidance, laser instruments, and monitored anaesthesia.",
    actionPoint: "Continuous vital monitoring & 24/7 nursing"
  },
  {
    step: "05",
    title: "Discharge & Rehabilitation",
    subtitle: "Guided Recovery at Home",
    description: "Physician clearance, medication guidance, personalized physiotherapy exercises, and scheduled follow-up appointments ensure lasting outcomes.",
    actionPoint: "Complete discharge summary & home recovery guide"
  }
];
