// DATA ABOUT THE NAVIGATION COMPONENT= WHAT SHOULD BE IN THE NAVIGATION COMPONENTS
export const navs = [
  {
    id: 1,
    name: "Home",
    target: "hero",
    icon: "bx bx-home",
    active: true, //active means the icon willhave the blue colow while the rest is white
  },
  {
    id: 2,
    name: "Resume",
    target: "resume",
    icon: "bx bx-file-blank",
    active: false,
  },
  {
    id: 3,
    name: "Portfolio",
    target: "portfolio",
    icon: "bx bx-book-content",
    active: false,
  },
  {
    id: 4,
    name: "Contact",
    target: "contact",
    icon: "bx bx-envelope",
    active: false,
  },
];

/*---------------------------------------
RESUME DATA
---------------------------------------*/

export const resume = [
  {
    id: 1,
    category: "Summary",
    content: [
      {
        id: 1,
        title: "Anne Elvira Maria",
        period: "",
        brief: `Cybersecurity professional with ~2 years of experience in security operations,
        web application penetration testing, SIEM/EDR, and compliance frameworks such as
        Essential Eight and ISO 27001, with a strong personal interest in low-level programming,
        malware analysis, and digital forensics.`,
        details: [`South Yarra, VIC, 3141`, `anneelvira.lauw@gmail.com`],
      },
    ],
  },
  {
    id: 2,
    category: "Education",
    content: [
      {
        id: 1,
        title: " Master of Cyber Security",
        period: "2023 -2024",
        brief: "RMIT University, Melbourne, VIC",
        details: [
          `Master of Cyber Security with Distinction, achieving CGPA 3.5/4.0.`,
          `Completed the Apple Foundation Program at RMIT in September 2023.`,
          `Volunteered at the Australian Cyber Conference in Melbourne in 2023 and 2024.`,
          `Key Areas of Study: IT Infrastructure and Security, Cryptography, Discrete Math, Swift, Digital Strategy, Information System Risk Management, Ethical Hacking.`,
        ],
      },
      {
        id: 2,
        title: "Bachelor of Computer Science (Hons)",
        period: "2019-2022",
        brief: "Taylor's University, Petaling Jaya, Malaysia",
        details: [
          `Bachelor of Computer Science (Hons) with a Specialisation in Cyber Security and Extension in Data Science, achieving CGPA 3.96/4.00.`,
          `Awarded First-Class Honours Degree Award and consecutive Dean's List Awards.`,
          `National Finalist at the Alibaba GET Global Challenge 2020 in Malaysia.`,
          `Key Areas of Study: Computer Architecture, Database Systems, Machine Learning and Data Mining with Python, Computer Crime and Digital Evidence, Computer Intrusion and Detection, Computer and Network Security.`,
        ],
      },
    ],
  },
  {
    id: 3,
    category: "Professional Experiences",
    content: [
      {
        id: 1,
        title: "Cyber Security Analyst (Part-Time)",
        period: "Jun 2024 - Oct 2024",
        brief: "Borderless CS, Melbourne, VIC",
        details: [
          `SIEM Configuration and Customization: deployed agents on client devices and customized platform branding to align with client requirements.`,
          `SIEM Detection Rules Development: created custom detection rules to identify and respond to suspicious activities.`,
          `Cloud Migration Support: assisted in transitioning client infrastructure from on-premises to Microsoft's cloud platform.`,
          `Security Policy Migration: migrated endpoint protection from Sophos to Microsoft Defender to improve manageability and security posture.`,
          `Endpoint and Policy Management: managed Active Directory Group Policies and implemented Microsoft Intune configurations to enforce security baselines.`,
          `Essential knowledge: SIEM Rules Creation, SIEM Platform Setup, Active Directory, Group Policy Management, Microsoft Intune, Microsoft Entra ID, Microsoft Defender for Endpoint, cloud migration.`,
        ],
      },
      {
        id: 2,
        title: "Cyber Security Consultant GRC (Part-Time)",
        period: "Jul 2024 - Sep 2024",
        brief: "Intrix, Melbourne, VIC (Remote)",
        details: [
          `Compliance Questionnaire Design: created structured assessments to evaluate client adherence to the Essential Eight and cyber risk practices.`,
          `Risk Assessment Reporting: supported the assessment process and generated client-facing reports for Essential Eight and Cyber Risk Management.`,
          `ISO Compliance Evaluation: participated in evaluating client compliance with ISO27001:2022 and ISO27002 standards.`,
          `Essential knowledge: Essential Eight, ISO27001:2022, ISO27002, Cyber Risk Assessment, Compliance Evaluation, Communication Skill.`,
        ],
      },
      {
        id: 3,
        title: "IT Analyst (Part-Time)",
        period: "Apr 2023 - Mar 2024",
        brief: "Wintermar Offshore Marine Tbk, Jakarta, Indonesia (Remote)",
        details: [
          `Vulnerability Identification: assessed external infrastructure and reported findings to the IT team and directors.`,
          `Cyber Resilience Improvement: enhanced backup, response, and recovery plans in accordance with BIMCO and ISO/IEC 27031:2011 standards.`,
          `Security Awareness Training: delivered cybersecurity training sessions to employees and vessel crews to raise awareness and promote best practices.`,
          `Web Application Security Testing: tested in-development applications using AWS and various security tools to identify weaknesses.`,
          `Essential knowledge: AWS Services (S3, EC2, CloudFront), Kali Linux, OSINT, OWASP ZAP, Burp Suite, Google Fu.`,
        ],
      },
      {
        id: 4,
        title: "SOC Analyst Intern",
        period: "Apr 2022 - Jul 2022",
        brief: "Vigilant Asia (M) Sdn Bhd, Shah Alam, Malaysia",
        details: [
          `Alert Escalation Reporting: contributed to alert reporting by compiling evidence from SIEM and EDR tools for client review.`,
          `Threat Detection Training: completed official TrendMicro training to enhance proficiency with Vision One for identifying threats.`,
          `Essential knowledge: LogRhythm, SentinelOne, BitDefender, AlienVault USM, TrendMicro, MITRE ATT&CK, YARA rules.`,
        ],
      },
    ],
  },
  {
    id: 4,
    category: "Other Experiences",
    content: [
      {
        id: 1,
        title: "Kitchen Staff",
        period: "Jan 2025 - Present",
        brief: "Hakata Gensuke, Melbourne, VIC",
        details: [
          `Attention to Detail: ensured ingredient accuracy and meal consistency while working efficiently under time constraints.`,
          `Hygiene and Safety Compliance: followed strict food safety standards, fostering discipline and operational reliability.`,
          `Team Collaboration: worked closely with a fast-paced kitchen team, strengthening communication and coordination in high-pressure settings.`,
          `Adaptability and Fast Learning: quickly learned new tasks, tools, and recipes to keep up with evolving demands and maintain workflow efficiency`,
        ],
      },
      {
        id: 2,
        title: "Junior High School Private Math Tutor",
        period: "Jan 2022 - Feb 2023",
        brief: "Self-employed, Surabaya, Indonesia (Remote)",
        details: [
          `Lesson Preparation: organized and tailored tutoring materials to align with the school's academic curriculum.`,
          `Progress Reporting: maintained detailed monthly reports to keep guardians informed of student development and performance.`,
        ],
      },
    ],
  },
];

/*---------------------------------------
FILTERS
---------------------------------------*/
export const filters = [
  {
    id: 1,
    name: "All",
    category: "all",
    active: true,
  },
  {
    id: 2,
    name: "App",
    category: "app",
    active: false,
  },
  {
    id: 3,
    name: "Web App",
    category: "web-app",
    active: false,
  },
  {
    id: 4,
    name: "Others",
    category: "others",
    active: false,
  },
];

/*---------------------------------------
PORTFOLIO DATA
---------------------------------------*/
export const portfolioData = [
  {
    id: 1,
    img: "/assets/images/portfolio/BurritoKing/login-page.png",
    gallery: [
      "/assets/images/portfolio/BurritoKing/food-menu-page.png",
      "/assets/images/portfolio/BurritoKing/order-page.png",
      "/assets/images/portfolio/BurritoKing/checkout-page.png",
      "/assets/images/portfolio/BurritoKing/login-page.png",
    ],
    title: "Burrito King Desktop App",
    brief: "",
    category: "app",
  },
  {
    id: 2,
    img: "/assets/images/portfolio/BurritoKing/login-page.png",
    gallery: [
      "/assets/images/portfolio/BurritoKing/food-menu-page.png",
      "/assets/images/portfolio/BurritoKing/order-page.png",
      "/assets/images/portfolio/BurritoKing/checkout-page.png",
      "/assets/images/portfolio/BurritoKing/login-page.png",
    ],
    title: "Burrito King Desktop App",
    brief: "",
    category: "web-app",
  },
  {
    id: 3,
    img: "/assets/images/portfolio/BurritoKing/login-page.png",
    gallery: [
      "/assets/images/portfolio/BurritoKing/food-menu-page.png",
      "/assets/images/portfolio/BurritoKing/order-page.png",
      "/assets/images/portfolio/BurritoKing/checkout-page.png",
      "/assets/images/portfolio/BurritoKing/login-page.png",
    ],
    title: "Burrito King Desktop App",
    brief: "",
    category: "others",
  },
  {
    id: 4,
    img: "/assets/images/portfolio/BurritoKing/login-page.png",
    gallery: [
      "/assets/images/portfolio/BurritoKing/food-menu-page.png",
      "/assets/images/portfolio/BurritoKing/order-page.png",
      "/assets/images/portfolio/BurritoKing/checkout-page.png",
      "/assets/images/portfolio/BurritoKing/login-page.png",
    ],
    title: "Burrito King Desktop App",
    brief: "",
    category: "web-app",
  },
  {
    id: 5,
    img: "/assets/images/portfolio/BurritoKing/login-page.png",
    gallery: [
      "/assets/images/portfolio/BurritoKing/food-menu-page.png",
      "/assets/images/portfolio/BurritoKing/order-page.png",
      "/assets/images/portfolio/BurritoKing/checkout-page.png",
      "/assets/images/portfolio/BurritoKing/login-page.png",
    ],
    title: "Burrito King Desktop App",
    brief: "",
    category: "others",
  },
  {
    id: 6,
    img: "/assets/images/portfolio/BurritoKing/login-page.png",
    gallery: [
      "/assets/images/portfolio/BurritoKing/food-menu-page.png",
      "/assets/images/portfolio/BurritoKing/order-page.png",
      "/assets/images/portfolio/BurritoKing/checkout-page.png",
      "/assets/images/portfolio/BurritoKing/login-page.png",
    ],
    title: "Burrito King Desktop App",
    brief: "",
    category: "app",
  },
  {
    id: 7,
    img: "/assets/images/portfolio/BurritoKing/login-page.png",
    gallery: [
      "/assets/images/portfolio/BurritoKing/food-menu-page.png",
      "/assets/images/portfolio/BurritoKing/order-page.png",
      "/assets/images/portfolio/BurritoKing/checkout-page.png",
      "/assets/images/portfolio/BurritoKing/login-page.png",
    ],
    title: "Burrito King Desktop App",
    brief: "",
    category: "others",
  },
];

/*---------------------------------------
SAMPLE CONTACT DATA
---------------------------------------*/
export const contact = [
  {
    id: 1,
    details: {
      name: "Bob",
      email: "bob@example.com",
      subject: "Message",
      message: `Hello, this is Bob`,
    },
  },
];
