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
        title: "Cyber Secuirty Analyst (Part-Time)",
        period: "Jun 2024 - Oct 2024",
        brief: "Borderless CS, Melbourne, VIC",
        details: [
          `Configured and Customised SIEM Platforms, including deploying agents on client devices and setting up custom branding.`,
          `Developed SIEM Detection rules to detect and respond to suspicious activities.`,
          `Assisted in migrating devices from on-premises infrastructure to Microsoft's cloud platform.`,
          `Helped migrate security policies from Sophos to Microsoft Defender for streamlined protection and management.`,
          `Managed Active Directory Group Policies and implement Microsoft Intune configurations for security enforcement.`,
          `Essential knowledge: SIEM Rules Creation, SIEM Platform Setup, Active Directory, Group Policy Management, Microsoft Intune, Microsoft Entra ID, Microsoft Defender for Endpoint, cloud migration.`,
        ],
      },
      {
        id: 2,
        title: "Cyber Security Consultant GRC (Part-Time)",
        period: "Jul 2024 - Sep 2024",
        brief: "Intrix, Melbourne, VIC (Remote)",
        details: [
          `Designed compliance questionnaires to evaluate adherence to the Essential Eight and general Cyber Risk Management.`,
          `Assist in conducting assessment and generated Essential Eight and general Cyber Risk Assessment compliance reports for clients.`,
          `ISO27001:2022 and ISO27002 Compliance Evaluation.`,
          `Essential knowledge: Essential Eight, ISO27001:2022, ISO27002, Cyber Risk Assessment, Compliance Evaluation, Communication Skill.`,
        ],
      },
      {
        id: 3,
        title: "IT Analyst (Part-Time)",
        period: "Apr 2023 - Mar 2024",
        brief: "Wintermar Offshore Marine Tbk, Jakarta, Indonesia (Remote)",
        details: [
          `Identified and presented vulnerabilities on current external infrastructure to IT team and directors.`,
          `Improved organization's backup, response, and recovery plan following BIMCO Guidelines (Cyber Security Onboard Ship) and ISO/IEC 27031:2011.`,
          `Conducted cyber security training for employees and vessel crews to enhance awareness of cyber hygiene and potential cyber-attacks.`,
          `Participated in testing the security of the web application project under development, leveraging AWS Services, and engaging in continuous security probing.`,
          `Essential knowledge: AWS Services (S3, EC2, CloudFront), Kali Linux, OSINT, OWASP ZAP, Burp Suite, Google Fu.`,
        ],
      },
      {
        id: 4,
        title: "SOC Analyst Intern",
        period: "Apr 2022 - Jul 2022",
        brief: "Vigilant Asia (M) Sdn Bhd, Shah Alam, Malaysia",
        details: [
          `Contributed to the creation of an alert escalation report, including evidence from SIEM and EDR tools, for the client.`,
          `Participated in official training from TrendMicro to become more familiar with and utilise TrendMicro Vision One for threat detection.`,
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
          `Practiced strong attention to detail when preparing ingredients and meals, ensuring accuracy and consistency under time pressure.`,
          `Followed strict hygiene and safety procedures, developing a disciplined approach to operational standards and compliance.`,
          `Collaborated effectively with a fast-paced team, enhancing communication and coordination skills essential for high-stakes environments.`,
        ],
      },
      {
        id: 2,
        title: "Junior High School Private Math Tutor",
        period: "Jan 2022 - Feb 2023",
        brief: "Self-employed, Surabaya, Indonesia (Remote)",
        details: [
          `Prepared and organised materials for each tutoring session in accordance with the school's academic curriculum.`,
          `Maintained monthly student reports for students' guardian.`,
        ],
      },
    ],
  },
];
