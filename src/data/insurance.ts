export interface InsuranceData {
  title: string;
  subtitle: string;
  description: string;
  executive: {
    name: string;
    role: string;
    phone: string;
  };
  cashlessSteps: string[];
  reimbursementDocs: string[];
  requiredAdmissionDocs: string[];
}

export const insuranceData: InsuranceData = {
  title: "Insurance & Cashless TPA Services",
  subtitle: "Hassle-Free Medical Financing & Cashless Hospitalization",
  description: "At Indira Hospital – Super Speciality Ortho & Urology Center, we are committed to making quality healthcare affordable, convenient, and stress-free. We provide assistance for cashless hospitalization and medical reimbursement through empanelled insurance companies and Third-Party Administrators (TPAs), subject to policy terms, eligibility, and prior authorization.",
  executive: {
    name: "Mr. Raju Singh",
    role: "Insurance & TPA Executive",
    phone: "+91 99805 65420"
  },
  cashlessSteps: [
    "Present a valid Health Insurance Card / e-Card and Government Photo ID at the time of admission.",
    "Submit the treating doctor's admission advice and preliminary diagnostic reports to the Insurance Help Desk.",
    "Our executive immediately files the pre-authorization request with your TPA / insurance company.",
    "Upon initial approval, cashless treatment proceeds up to the sanctioned limit without requiring patient deposit.",
    "During discharge, final bill enhancement is submitted to the insurer for seamless clearance."
  ],
  reimbursementDocs: [
    "Final Detailed Hospital Bill & Payment Receipts",
    "Comprehensive Discharge Summary signed by treating surgeon",
    "Original Diagnostic Investigation Reports (Blood, X-Ray, etc.)",
    "Detailed Operative Notes (where surgery is performed)",
    "Doctor's Prescriptions and Pharmacy Invoices",
    "Pre-authorization denial letter (if applicable) and claim form"
  ],
  requiredAdmissionDocs: [
    "Health Insurance Card or e-Card with Policy Number",
    "Government-issued Photo ID (Aadhaar Card / Voter ID / Passport)",
    "Primary Insured Person's KYC Documents (if different from patient)",
    "Previous Medical & Surgical History Records"
  ]
};
