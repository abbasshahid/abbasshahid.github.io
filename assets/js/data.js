// assets/js/data.js

const siteData = {
  profile: {
    initials: "SA",
    photoUrl: "assets/img/profile.jpg",   // <-- NEW
    name: "Shahid Abbas",
    title: "PhD Scholar,",
    location: "Edinburgh Napier University, UK",
    keywords: [
      
      "Blockchain",
      "AI/ML/DL/LLM",
      "Cybersecurity",
      "IoT"
    ]
  },

contact: [
  {
    label: "Email",
    icon: "bi bi-envelope-fill",
    html: '<a href="mailto:shahidabbas1260@gmail.com">shahidabbas1260@gmail.com</a> <br> <a href="mailto:shahid.abbas@napier.ac.uk">shahid.abbas@napier.ac.uk</a>'
  },
  {
    label: "Phone (ES)",
    icon: "bi bi-telephone-fill",
    html: "(+43) 6601436945"
  },
  {
    label: "Location",
    icon: "bi bi-geo-alt-fill",
    html: "Vienna, Austria."
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
      "I am a junior researcher and PhD candidate specialising in blockchain-based systems, IoT security, and machine learning-driven network optimisation. My work focuses on privacy-preserving authentication, trust management, and decentralised digital ecosystems.",
      "I hold an MSc in Computer Science and a BS in Telecommunication and Networking from COMSATS University Islamabad, and I am currently pursuing a PhD in Computing at Edinburgh Napier University. My research combines blockchain, machine/deep learning, and optimisation techniques for secure IoT and distributed systems.",
      "I have hands-on experience in applied blockchain research through academic and industry-oriented projects, including secure voting systems, supply-chain platforms, ESG-compliant document workflows, and token-based incentive mechanisms for citizen science."
    ],
    metrics: [
      "Peer-reviewed publications (IEEE Access, Sensors, SmartData)",
      "Blockchain & IoT security research",
      "Polygon & Hyperledger Fabric projects",
      "Austrian Rot-Weiß-Rot Plus work permit",
      "Multilingual: English (C1), German (A2), Urdu (Native)"
    ]
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
        meta: "Oct 2022 – Dec 2023 · Vienna, Austria",
        description:
          "Conducted applied blockchain research including a Polygon-based secure voting module, Hyperledger Fabric supply-chain solutions, ESG-compliant document workflows, and a UNICEF-linked token-based incentive mechanism for citizen science. Published peer-reviewed research on blockchain–IoT connection patterns.",
        pills: ["Blockchain", "Polygon", "Hyperledger Fabric", "IoT", "ESG", "Smart contracts"]
      },
      {
        role: "Research Assistant",
        org: "ComSens Research Lab, COMSATS University Islamabad",
        meta: "Feb 2019 – Feb 2022 · Islamabad, Pakistan",
        description:
          "Designed blockchain-based privacy-preserving authentication protocols for IoT using attribute-based access control and zero-knowledge proofs. Developed genetic-algorithm-based routing frameworks for blockchain-enabled IoT networks and evaluated performance in terms of latency, throughput, and energy efficiency.",
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
        meta: "Oct 2025 – Expected 2028",
        description:
          "Doctoral research focusing on machine learning, blockchain, and security for IoT and distributed systems."
      },
      {
        role: "MSc in Computer Science",
        org: "COMSATS University Islamabad, Pakistan",
        meta: "Feb 2019 – Aug 2021",
        description:
          "Focused on blockchain, IoT security, machine learning, and optimisation-based network design."
      },
      {
        role: "BS in Telecommunication & Networking",
        org: "COMSATS University Islamabad, Attock Campus, Pakistan",
        meta: "Sep 2013 – Aug 2017",
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
      "My research interests lie at the intersection of blockchain, IoT, and machine learning, with a strong emphasis on security, privacy, and trust in decentralised systems. I work on authentication protocols, intrusion detection, routing optimisation, and trust management for IoT environments.",
      "I have published in IEEE Access, MDPI Sensors, Elsevier Computer Networks, and IEEE SmartData, and I actively contribute to research on blockchain-enabled IoT, genetic algorithms, and deep learning-based intrusion detection systems."
    ],
    pills: [
      "Blockchain & distributed systems",
      "IoT security & privacy",
      "Machine & deep learning",
      "Genetic algorithms",
      "Trust management",
      "Intrusion detection systems",
      "Smart contracts"
    ]
  },

  {
    id: "publications",
    navLabel: "Publications",
    title: "Selected Publications",
    subtitle: "Recent & Representative",
    type: "publications",
    intro:
      'These are selected works from my publication record. For links, please refer to my <a href="https://scholar.google.com" target="_blank">Google Scholar</a> profile.',
    maxItem: 4
  },

  {
    id: "contact",
    navLabel: "Contact",
    title: "Research & Teaching at a Glance",
    subtitle: "Visual overview",
    type: "diagrams",
    boxes: [
      {
        heading: "Blockchain & Web3 Systems",
        text: "Secure voting, smart contracts, ESG-compliant workflows, and token-based incentive mechanisms.",
        img: "assets/img/blockchain.png"
      },
      {
        heading: "IoT Security & Privacy",
        text: "Authentication protocols, malicious node detection, trust management, and secure routing.",
        img: "assets/img/iot.png"
      },
      {
        heading: "Machine & Deep Learning",
        text: "Stacked ML/DL models, intrusion detection, and optimisation-driven learning frameworks.",
        img: "assets/img/ml.png"
      },
      {
        heading: "Research & Supervision",
        text: "Academic research, publications, and collaborative projects across blockchain, IoT, and AI.",
        img: null
      }
    ]
  }
]
};
