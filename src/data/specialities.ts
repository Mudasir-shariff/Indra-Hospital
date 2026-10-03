export interface SubSpeciality {
  slug: string;
  name: string;
  shortDesc: string;
  longDesc?: string;
  procedures: string[];
}

export interface Department {
  slug: string;
  title: string;
  headline: string;
  description: string;
  highlights: string[];
  subSpecialities: SubSpeciality[];
}

export const orthopaedicDepartment: Department = {
  slug: "orthopaedics",
  title: "Orthopaedic Surgeries",
  headline: "Advanced Orthopaedic Care with Precision, Expertise & Compassion",
  description: "At Indira Hospital – Super Speciality Ortho & Urology Center, we provide comprehensive orthopaedic care for patients of all ages, offering advanced surgical solutions for bone, joint, spine, sports injuries, and trauma. Our experienced orthopaedic surgeons utilize modern surgical techniques, advanced modular operation theatres, and evidence-based treatment protocols to help patients regain mobility, relieve pain, and return to an active lifestyle.",
  highlights: [
    "Experienced Orthopaedic Surgeons with 30+ years clinical excellence",
    "Two Advanced Modular Operation Theatres with laminar airflow",
    "Modern Digital C-Arm Imaging systems for intraoperative accuracy",
    "24/7 Digital Direct Radiography (DR) X-Ray & Comprehensive Trauma Care",
    "Specialized Joint Replacement, Arthroscopy & Spine Surgery units",
    "Dedicated In-house Physiotherapy & Post-surgical Rehabilitation Centre"
  ],
  subSpecialities: [
    {
      slug: "joint-replacement",
      name: "Joint Replacement Surgery",
      shortDesc: "Restore painless movement and improve quality of life through advanced joint replacement procedures.",
      longDesc: "Our joint replacement surgical unit provides state-of-the-art procedures designed to relieve chronic arthritis pain, correct joint deformities, and restore natural biomechanics for knees and hips.",
      procedures: [
        "Total Knee Replacement (TKR)",
        "Total Hip Replacement (THR)",
        "Partial Hip Replacement (Hemiarthroplasty)",
        "Revision Joint Replacement Surgery"
      ]
    },
    {
      slug: "trauma-fracture",
      name: "Trauma & Fracture Surgery",
      shortDesc: "Expert management of simple, complex, and high-energy fractures.",
      longDesc: "Round-the-clock emergency surgical care for fractures of all complexities, pelvic trauma, and non-healing bone injuries using modern fixation hardware.",
      procedures: [
        "Open & Closed Reduction with Internal Fixation (ORIF/CRIF)",
        "Interlocking Intramedullary Nailing",
        "Plate & Screw Fixation",
        "External Fixation for Open Fractures",
        "Pelvic & Acetabular Fracture Surgery",
        "Bone Grafting & Non-Union Surgery"
      ]
    },
    {
      slug: "arthroscopy",
      name: "Arthroscopic (Keyhole) Surgery",
      shortDesc: "Minimally invasive procedures for faster recovery and reduced postoperative pain.",
      longDesc: "Precision keyhole surgery for joint injuries allowing rapid rehabilitation, minimal tissue disturbance, and swift return to daily sports and activities.",
      procedures: [
        "ACL (Anterior Cruciate Ligament) Reconstruction",
        "PCL (Posterior Cruciate Ligament) Reconstruction",
        "Meniscus Repair & Meniscectomy",
        "Rotator Cuff Repair",
        "Shoulder Stabilization Surgery",
        "Diagnostic Knee & Shoulder Arthroscopy"
      ]
    },
    {
      slug: "spine-surgery",
      name: "Spine Surgery",
      shortDesc: "Comprehensive surgical treatment for spinal disorders and nerve compression.",
      longDesc: "Specialized spine care focused on relieving nerve impingement, stabilizing spinal instability, and resolving chronic disc conditions.",
      procedures: [
        "Microdiscectomy",
        "Laminectomy & Laminotomy",
        "Spinal Decompression",
        "Spinal Fusion",
        "Pedicle Screw Fixation"
      ]
    },
    {
      slug: "sports-injuries",
      name: "Sports Injury Surgery",
      shortDesc: "Specialized treatment for ligament, tendon, cartilage, and athletic injuries.",
      procedures: [
        "Ligament Reconstruction",
        "Tendon Repair",
        "Cartilage Restoration Procedures",
        "Shoulder Instability Surgery"
      ]
    },
    {
      slug: "hand-foot-ankle",
      name: "Hand, Wrist, Foot & Ankle Surgery",
      shortDesc: "Advanced surgical care for upper and lower limb conditions.",
      procedures: [
        "Carpal Tunnel Release",
        "Trigger Finger Release",
        "Tendon & Nerve Repair",
        "Hand & Wrist Fracture Surgery",
        "Achilles Tendon Repair",
        "Ankle Fracture Surgery",
        "Bunion (Hallux Valgus) Correction"
      ]
    },
    {
      slug: "infection-surgery",
      name: "Bone & Joint Infection Surgery",
      shortDesc: "Specialized treatment for musculoskeletal infections and complications.",
      procedures: [
        "Surgical Debridement",
        "Infected Implant Removal",
        "Osteomyelitis Surgery",
        "Septic Joint Washout"
      ]
    },
    {
      slug: "deformity-correction",
      name: "Deformity Correction Surgery",
      shortDesc: "Corrective procedures to restore anatomical alignment and function.",
      procedures: [
        "Corrective Osteotomy",
        "Limb Lengthening",
        "Congenital & Post-traumatic Limb Deformity Correction"
      ]
    },
    {
      slug: "day-care-ortho",
      name: "Day-Care Orthopaedic Procedures",
      shortDesc: "Selected procedures performed with same-day discharge.",
      procedures: [
        "Implant Removal",
        "K-Wire Removal",
        "Joint Aspiration & Corticosteroid/PRP Injection",
        "Closed Reduction of Fractures",
        "Minor Soft-Tissue Orthopaedic Procedures"
      ]
    }
  ]
};

export const urologyDepartment: Department = {
  slug: "urology",
  title: "Urology Surgeries",
  headline: "Advanced Urological Care with Precision, Expertise & Compassion",
  description: "At Indira Hospital – Super Speciality Ortho & Urology Center, our Urology Department provides comprehensive diagnosis and advanced surgical treatment for conditions affecting the kidneys, ureters, bladder, prostate, urethra, and male reproductive system. Our experienced urologists utilize modern endoscopic, laser, and minimally invasive surgical techniques to deliver safe, effective treatment with reduced pain, minimal scarring, shorter hospital stays, and faster recovery.",
  highlights: [
    "Advanced minimally invasive endoscopic and laser urological procedures",
    "Specialized treatment for Kidney, Ureter, and Bladder Stones (RIRS, PCNL)",
    "Laser & endoscopic Prostate management (TURP, HoLEP)",
    "Uro-oncology & Reconstructive Urological surgeries",
    "Paediatric and Female Urology care",
    "24/7 dedicated Urology emergency & acute pain management"
  ],
  subSpecialities: [
    {
      slug: "kidney-stones",
      name: "Kidney Stone Surgery",
      shortDesc: "Advanced treatment for kidney, ureter, and bladder stones using minimally invasive and laser technology.",
      longDesc: "Comprehensive stone clinic utilizing laser fragmentation and high-definition endoscopes for painless, scarless removal of kidney and urinary tract stones.",
      procedures: [
        "Retrograde Intrarenal Surgery (RIRS)",
        "Percutaneous Nephrolithotomy (PCNL)",
        "Mini-PCNL (Minimally Invasive PCNL)",
        "Ureteroscopy (URS)",
        "Flexible Ureteroscopy (FURS)",
        "Holmium Laser Stone Fragmentation",
        "Cystolithotripsy (Bladder Stone Removal)",
        "Ureterolithotomy & Pyelolithotomy"
      ]
    },
    {
      slug: "prostate-surgery",
      name: "Prostate Surgery",
      shortDesc: "Comprehensive surgical management for enlarged prostate and related urinary outflow conditions.",
      longDesc: "Modern surgical solutions for Benign Prostatic Hyperplasia (BPH) to quickly restore smooth urinary flow with minimal hospital stay.",
      procedures: [
        "Transurethral Resection of the Prostate (TURP)",
        "Holmium Laser Enucleation of the Prostate (HoLEP)",
        "Open Prostatectomy",
        "Bladder Neck Incision (BNI)"
      ]
    },
    {
      slug: "uro-oncology",
      name: "Uro-Oncology (Urological Cancer Surgery)",
      shortDesc: "Specialized surgical treatment for cancers of the urinary tract and male reproductive organs.",
      procedures: [
        "Radical & Partial Nephrectomy (Kidney Cancer)",
        "Transurethral Resection of Bladder Tumour (TURBT)",
        "Radical Cystectomy (Bladder Cancer)",
        "Radical Prostatectomy (Prostate Cancer)",
        "Orchiectomy (Testicular Cancer)",
        "Penile Cancer Surgery"
      ]
    },
    {
      slug: "reconstructive-urology",
      name: "Reconstructive Urology",
      shortDesc: "Restorative procedures for congenital and acquired urinary tract anomalies.",
      procedures: [
        "Pyeloplasty for Pelvi-Ureteric Junction (PUJ) Obstruction",
        "Ureteral Reimplantation",
        "Bladder Augmentation",
        "Urinary Diversion"
      ]
    },
    {
      slug: "stricture-urethra",
      name: "Stricture Urethra Surgery",
      shortDesc: "Treatment for narrowing of the urinary passage.",
      procedures: [
        "Optical Internal Urethrotomy (OIU)",
        "Urethroplasty (Anastomotic & Buccal Mucosa Graft / BMG)",
        "Meating Plasties"
      ]
    },
    {
      slug: "paediatric-urology",
      name: "Paediatric Urology",
      shortDesc: "Specialized urological surgical care for infants and children.",
      procedures: [
        "Orchiopexy for Undescended Testis",
        "Hypospadias Repair",
        "Paediatric Hernia & Hydrocele Surgery",
        "Posterior Urethral Valve (PUV) Fulguration",
        "Paediatric Pyeloplasty"
      ]
    },
    {
      slug: "female-urology",
      name: "Female Urology & Incontinence",
      shortDesc: "Specialized surgical care for urinary issues in women.",
      procedures: [
        "Mid-Urethral Sling Procedures (TVT / TOT) for Stress Incontinence",
        "Vesicovaginal Fistula (VVF) Repair",
        "Urethral Caruncle Excision",
        "Pelvic Organ Prolapse Repair Support"
      ]
    },
    {
      slug: "andrology-infertility",
      name: "Andrology & Male Infertility",
      shortDesc: "Diagnostic and surgical care for male reproductive health.",
      procedures: [
        "Microscopic Varicocelectomy",
        "Testicular Biopsy (TESE / PESA)",
        "Vasoepididymostomy & Vasectomy Reversal",
        "Erectile Dysfunction Management & Penile Prosthesis Guidance"
      ]
    },
    {
      slug: "renal-transplant",
      name: "Renal Transplant Support Services",
      shortDesc: "Comprehensive pre-transplant workup, vascular access, and post-transplant urological care.",
      procedures: [
        "AV Fistula Creation for Dialysis",
        "Pre-Transplant Urological Evaluation",
        "Post-Transplant Urological Management",
        "Ureteral Stent Management"
      ]
    },
    {
      slug: "emergency-urology",
      name: "Emergency & Day-Care Urology Procedures",
      shortDesc: "Prompt surgical care for acute urological conditions and minor procedures.",
      procedures: [
        "Emergency DJ Stenting for Obstructive Uropathy",
        "Suprapubic Cystostomy (SPC) for Acute Urinary Retention",
        "Testicular Torsion Surgery (Detorsion & Orchidopexy)",
        "Genitourinary Trauma Management",
        "Circumcision & Frenuloplasty",
        "DJ Stent Removal (Local Anaesthesia / Day-care)"
      ]
    }
  ]
};

export const allDepartments = [orthopaedicDepartment, urologyDepartment];
