const siteData = {
  profile: {
    initials: "SA",
    photoUrl: "assets/img/profile.jpg",
    name: "Shahid Abbas",
    title: "PhD Researcher in Computing",
    location: "Edinburgh Napier University · Vienna / Edinburgh",
    headline: "Blockchain, IoT Security, and Trustworthy AI",
    summary:
      "I am a PhD researcher developing secure, privacy-aware, and intelligent distributed systems. ",
    keywords: [
      "Blockchain",
      "IoT Security",
      "Trustworthy AI",
      "Cybersecurity",
      "Distributed Systems"
    ]
  },

  contact: [
    {
      label: "Email",
      icon: "bi bi-envelope-fill",
      html: '<a href="mailto:shahidabbas1260@gmail.com">shahidabbas1260@gmail.com</a><br><a href="mailto:shahid.abbas@napier.ac.uk">shahid.abbas@napier.ac.uk</a>'
    },
    {
      label: "Phone",
      icon: "bi bi-telephone-fill",
      html: "(+43) 6601436945"
    },
    {
      label: "Location",
      icon: "bi bi-geo-alt-fill",
      html: "Vienna, Austria"
    }
  ],

  profiles: [
    {
      name: "Google Scholar",
      icon: "bi bi-mortarboard",
      url: "https://scholar.google.com/citations?user=GNBCGxUAAAAJ"
    },
    {
      name: "ORCID",
      icon: "bi bi-patch-check-fill",
      url: "https://orcid.org/"
    },
    {
      name: "LinkedIn",
      icon: "bi bi-linkedin",
      url: "https://www.linkedin.com/in/shahidabbas76/"
    },
    {
      name: "ResearchGate",
      icon: "bi bi-search",
      url: "https://www.researchgate.net/profile/Shahid-Abbas-5"
    },
    {
      name: "GitHub",
      icon: "bi bi-github",
      url: "https://github.com/abbasshahid"
    },
    {
      name: "CV",
      icon: "bi bi-file-earmark-person-fill",
      url: "Shahid_CV.pdf"
    }
  ],

  sections: [
    {
      id: "about",
      navLabel: "About",
      title: "About",
      subtitle: "Profile",
      type: "text",
      paragraphs: [
        "My research focuses on how decentralised and intelligent systems can be made secure, accountable, and practical for real-world use. I work on blockchain-enabled architectures, privacy-preserving authentication, trust management, and learning-based defence mechanisms for connected environments.",
        "I hold an MSc in Computer Science and a BS in Telecommunication and Networking from COMSATS University Islamabad, and I am currently pursuing a PhD in Computing at Edinburgh Napier University. My academic direction is shaped by a strong interest in both high-quality research and future university teaching.",
        "Alongside doctoral study, I have contributed to applied research projects involving secure voting, blockchain-supported supply chains, ESG-compliant digital workflows, and token-based citizen science systems. This combination of theory and implementation gives my work a practical and interdisciplinary character."
      ],
      // metrics: [
      //   "Research profile oriented toward lecturer / professor-track roles",
      //   "Publications in IEEE Access, Sensors, Computer Networks, and IEEE SmartData",
      //   "Applied experience with Polygon and Hyperledger Fabric",
      //   "Cross-disciplinary work across blockchain, AI, and cybersecurity",
      //   "Languages: English (C1), German (A2), Urdu (Native)"
      // ]
    },
    {
      id: "experience",
      navLabel: "Experience",
      title: "Experience",
      subtitle: "Academic & Professional",
      type: "timeline",
      items: [
        {
          role: "Junior Researcher",
          org: "Austrian Blockchain Center (ABC Research GmbH)",
          meta: "Oct 2022 - Dec 2023 · Vienna, Austria",
          description:
            "Contributed to applied blockchain research and prototype development, including a Polygon-based secure voting module, Hyperledger Fabric supply-chain workflows, ESG-compliant document management, and a UNICEF-linked token incentive model for citizen science. This role strengthened my ability to translate research concepts into collaborative, impact-oriented systems.",
          pills: ["Blockchain", "Polygon", "Hyperledger Fabric", "IoT", "ESG", "Smart contracts"]
        },
        {
          role: "Research Assistant",
          org: "ComSens Research Lab, COMSATS University Islamabad",
          meta: "Feb 2019 - Feb 2022 · Islamabad, Pakistan",
          description:
            "Designed blockchain-based privacy-preserving authentication approaches for IoT using attribute-based access control and zero-knowledge techniques. I also developed optimisation-based routing frameworks for blockchain-enabled IoT networks and evaluated them for latency, throughput, energy efficiency, and network resilience.",
          pills: ["IoT security", "Genetic algorithms", "Blockchain authentication", "Privacy"]
        }
      ]
    },
    {
      id: "education",
      navLabel: "Education",
      title: "Education",
      subtitle: "Degrees & Training",
      type: "timeline",
      items: [
        {
          role: "PhD in Computing",
          org: "Edinburgh Napier University, UK",
          meta: "Oct 2025 - Expected 2028",
          description:
            "Doctoral research on blockchain, machine learning, and security for IoT and distributed systems, with a long-term focus on producing research and teaching suitable for academic career progression."
        },
        {
          role: "MSc in Computer Science",
          org: "COMSATS University Islamabad, Pakistan",
          meta: "Feb 2019 - Aug 2021",
          description:
            "Focused on blockchain, IoT security, machine learning, and optimisation-based network design."
        },
        {
          role: "BS in Telecommunication & Networking",
          org: "COMSATS University Islamabad, Attock Campus, Pakistan",
          meta: "Sep 2013 - Aug 2017",
          description:
            "Undergraduate training in networking, wireless communications, and distributed systems."
        }
      ]
    },
    {
      id: "research",
      navLabel: "Research",
      title: "Research",
      subtitle: "Interests & Highlights",
      type: "text",
      paragraphs: [
        "My research sits at the intersection of blockchain, IoT, and machine learning, with emphasis on security, privacy, trust, and system performance. I am particularly interested in authentication protocols, intrusion detection, optimisation for distributed networks, and dependable architectures for next-generation connected systems.",
        "I aim to build an academic profile that combines rigorous publication output, interdisciplinary collaboration, and teaching capability. My work is shaped by problems that are both scientifically interesting and societally relevant, especially where trustworthy digital infrastructure is required."
      ],
      pills: [
        "Blockchain & distributed systems",
        "IoT security & privacy",
        "Machine learning",
        "Deep learning",
        "Network optimisation",
        "Trust management",
        "Intrusion detection systems",
        "Smart contracts",
        "Higher education and supervision"
      ]
    },
    {
      id: "publications",
      navLabel: "Publications",
      title: "Selected Publications",
      subtitle: "Recent & Representative",
      type: "publications",
      intro:
        'These are selected works from my publication record. For a broader list, please visit my <a href="https://scholar.google.com/citations?user=GNBCGxUAAAAJ" target="_blank" rel="noreferrer">Google Scholar profile</a>.',
      maxItem: 4
    },
    {
      id: "teaching",
      navLabel: "Teaching",
      title: "Teaching Vision",
      subtitle: "Academic trajectory",
      type: "cards",
      items: [
        {
          title: "Teaching Areas",
          text: "I am preparing for future teaching roles in cybersecurity, blockchain systems, computer networks, IoT, and applied artificial intelligence."
        },
        {
          title: "Approach",
          text: "My preferred teaching style connects theory with implementation, helping students understand core concepts through research-informed examples, case studies, and technical projects."
        },
        {
          title: "Academic Goal",
          text: "I am building toward lecturer and professor-track positions where I can combine research, curriculum development, student supervision, and international collaboration."
        }
      ]
    },
    {
      id: "contact",
      navLabel: "Overview",
      title: "Professional Overview",
      subtitle: "Academic positioning",
      type: "cards",
      items: [
        {
          title: "Research Identity",
          text: "An early-career academic profile centred on trustworthy distributed systems, with a research agenda spanning blockchain, IoT security, and AI-enabled cyber defence."
        },
        {
          title: "Professional Strength",
          text: "Experience across academic and applied research environments, with the ability to move from conceptual modelling to prototype-oriented system design."
        },
        {
          title: "Future Direction",
          text: "Focused on growing into a faculty role that balances publication output, student engagement, interdisciplinary collaboration, and contribution to departmental teaching."
        },
        {
          title: "Collaboration",
          text: "Open to research collaboration, invited talks, doctoral networking, and conversations around teaching, supervision, and funded academic partnerships."
        }
      ]
    }
  ]
};
