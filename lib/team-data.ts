export interface TeamMember {
    role: string
    bio: string
    github: string
    linkedin: string
    twitter: string
    about: string
    experience: {
      company: string
      role: string
      period: string
    }[]
    skills: string[]
    education: {
      institution: string
      degree: string
      period: string
    }[]
  }
  
  export const memberInfo: Record<string, TeamMember> = {
    ambrose: {
      role: "Lead Developer",
      bio: "Expert in IoT systems and architecture.",
      github: "https://github.com/Aurits",
      linkedin: "https://www.linkedin.com/in/ambrose-alanda-b938b0243",
      twitter: "#",
      about: "Ambrose is a passionate developer with over 10 years of experience in building IoT solutions.",
      experience: [
        { company: "Tech Innovations", role: "Senior Developer", period: "2018-Present" },
        { company: "Smart Systems Inc.", role: "IoT Specialist", period: "2014-2018" },
      ],
      skills: ["JavaScript", "IoT", "Python", "Node.js", "React", "Next.js", "MongoDB"],
      education: [
        {
          institution: "University of Tech",
          degree: "B.Sc. in Computer Science",
          period: "2010-2014",
        },
      ],
    },
    cynthia: {
      role: "UI Designer & ML Engineer",
      bio: "Expert in Machine Learning and front-end development.",
      github: "https://github.com/Cynthia2000boop",
      linkedin: "https://www.linkedin.com/in/cynthia-nakayiza",
      twitter: "https://twitter.com/CynthiaNakayiza",
      about:
        "Cynthia is a software engineer passionate about creating intuitive user interfaces and implementing machine learning solutions. She combines her expertise in UI/UX design with ML capabilities to create intelligent and user-friendly applications.",
      experience: [
        {
          company: "UCAA",
          role: "IT Intern",
          period: "June 2024 - July 2024",
        },
        {
          company: "DataMinds AI",
          role: "Machine Learning Research Assistant",
          period: "2023-2024",
        },
        {
          company: "TechHub Uganda",
          role: "UI/UX Design Intern",
          period: "2022-2023",
        },
      ],
      skills: [
        "Python",
        "TensorFlow",
        "scikit-learn",
        "React",
        "Figma",
        "UI/UX Design",
        "Data Analysis",
        "Machine Learning",
      ],
      education: [
        {
          institution: "Makerere University",
          degree: "Bachelor of Science in Software Engineering",
          period: "2021-2025",
        },
        {
          institution: "Google Machine Learning Bootcamp",
          degree: "ML Certification",
          period: "2023",
        },
      ],
    },
    jelly: {
      role: "Project Manager & Backend Developer",
      bio: "Experienced in project management and backend development.",
      github: "https://github.com/Rollingsl",
      linkedin: "https://www.linkedin.com/in/jelly-nahabwe",
      twitter: "https://twitter.com/JellyNahabwe",
      about:
        "Jelly is a skilled project manager with a strong background in backend development. She excels at coordinating team efforts while contributing to the technical implementation of solutions.",
      experience: [
        {
          company: "MEMD",
          role: "IT Intern",
          period: "May 2024 - July 2024",
        },
        {
          company: "Tech4Dev",
          role: "Project Coordinator",
          period: "2023-2024",
        },
        {
          company: "CodeQuest Academy",
          role: "Teaching Assistant",
          period: "2022-2023",
        },
      ],
      skills: [
        "Project Management",
        "JavaScript",
        "Python",
        "PHP",
        "Java",
        "SQL",
        "Agile Methodologies",
        "Team Leadership",
      ],
      education: [
        {
          institution: "Makerere University",
          degree: "B.Sc. of Science in Software Engineering",
          period: "2022-2026",
        },
        {
          institution: "Project Management Institute",
          degree: "Project Management Professional (PMP)",
          period: "2023",
        },
      ],
    },
    kevin: {
      role: "IoT Specialist & Spring Developer",
      bio: "Specialized in IoT solutions and enterprise Java development.",
      github: "https://github.com/mkb2001",
      linkedin: "https://www.linkedin.com/in/kevin-mugarura-b3a621229/",
      twitter: "https://x.com/KevinMugarura",
      about:
        "Kevin is an innovative IoT specialist with expertise in Spring framework and enterprise solutions. He focuses on building scalable and efficient IoT systems that drive business value.",
      experience: [
        {
          company: "NSSF",
          role: "Technology and Enterprise Solutions Intern",
          period: "Jun 2024 - Aug 2024",
        },
        {
          company: "Afrilearn",
          role: "Backend Developer",
          period: "2022-Present",
        },
        {
          company: "IoT Solutions Hub",
          role: "IoT Developer",
          period: "2021-2022",
        },
      ],
      skills: ["Java", "Spring Boot", "IoT Development", "Python", "Node.js", "Microservices", "AWS", "Docker"],
      education: [
        {
          institution: "Makerere University",
          degree: "B.Sc. in Software Engineering",
          period: "2021-2026",
        },
        {
          institution: "Oracle",
          degree: "Java Certified Professional",
          period: "2023",
        },
        {
          institution: "AWS",
          degree: "AWS Certified IoT Specialist",
          period: "2024",
        },
      ],
    },
  }
  
  