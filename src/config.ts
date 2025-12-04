export const siteConfig = {
  name: "Gustav Kift",
  title: "Aspiring Penetration Tester & Security Learner",
  description: "Portfolio website of Gustav Kift",
  accentColor: "#A855F7", //#2a3b24 //#1d4ed8

  social: {
    email: "contact@example.com",
    linkedin: "https://linkedin.com/in/gustav-kift",
    twitter: "https://x.com",
    github: "https://github.com/gustav-kift",
  },

  aboutMe:
    "I'm an aspiring penetration tester and self-taught developer currently learning cybersecurity, networking, and Python-based tooling. I'm especially interested in offensive security, CTF challenges, and building practical automation systems. I enjoy creating software that solves real problems — including AI-powered productivity tools and backend pipelines. I'm working toward beginner pentesting certifications and building hands-on experience through projects, labs, and writeups.",

  skills: [
    "Python",
    "JavaScript",
    "Astro",
    "Linux",
    "Git",
    "Networking Basics",
    "Web Security Fundamentals",
    "API Development"
  ],

  projects: [
    {
      name: "Nornir – AI Productivity Pipeline",
      description:
        "A full workflow automation system that connects Canvas exports, AI-powered homework extraction, Google Calendar context gathering, task breakdown, time estimation, and scheduling. Built as a modular, inspectable backend using Python.",
      link: "https://github.com/gustav-kift/Nornir",
      skills: ["Python", "APIs", "LLMs", "OAuth", "Automation"],
    },
    {
      name: "LLM Cognitive Architecture Experiments",
      description:
        "A collection of early-stage prototypes exploring planning, task decomposition, reasoning loops, and structured pipelines using multiple LLM providers.",
      link: "https://github.com/gustav-kift", // replace with repo
      skills: ["Python", "Prompt Engineering", "System Design"],
    },
    {
      name: "Portfolio Website",
      description:
        "This portfolio built with Astro and deployed via Vercel. Includes modular configuration and custom components for showcasing projects and cybersecurity work.",
      link: "https://gustav-kift.vercel.app", // or your domain
      skills: ["Astro", "HTML/CSS", "GitHub", "Vercel"],
    },
    {
      name: "Beginner Pentesting Labs & Writeups",
      description:
        "A growing collection of writeups from TryHackMe, HackTheBox (retired boxes), and local vulnerable labs. Focused on enumeration, privilege escalation, and methodology.",
      link: "https://gustav-kift.github.io/writeups", // adjust
      skills: ["Linux", "Networking", "Web Security", "Documentation"],
    },
  ],

  experience: [
    {
      company: "Independent Learning",
      title: "Self-Taught Developer & Cybersecurity Learner",
      dateRange: "Ongoing",
      bullets: [
        "Building practical tools in Python, including automation pipelines and basic security scripts.",
        "Studying networking, web technologies, Linux, and beginner penetration testing techniques.",
        "Practicing hands-on skills in platforms like TryHackMe and HackTheBox.",
        "Writing beginner-friendly notes and summaries to track learning progress.",
      ],
    },
  ],

  education: [
    {
      school: "Self-Directed",
      degree: "Cybersecurity & Programming Learning Path",
      dateRange: "Current",
      achievements: [
        "Completed multiple foundational courses in cybersecurity and Python development.",
        "Actively practicing hands-on labs in web security, enumeration, and CTF challenges.",
        "Working toward entry-level pentesting certifications.",
      ],
    },
    {
      school: "Online Platforms",
      degree: "Programming & AI Coursework",
      dateRange: "2023 - Present",
      achievements: [
        "Built several open-source Python projects using APIs and LLMs.",
        "Studied Python, JavaScript, backend development, and AI tooling.",
        "Exploring AI-assisted automation and cognitive architecture concepts.",
      ],
    },
  ],
};
