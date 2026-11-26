const eventLogo = `${process.env.PUBLIC_URL}/hackkshetra-3-logo.png`;

export const event = {
  edition: "3.0",
  name: "HACKKSHETRA 3.0",
  eventType: "24-Hour National-Level Hackathon",
  tagline: "From Intelligence to Impact",
  taglineAction: "Forge, Fight, Flourish",
  registration: "Registrations are free for everyone",
  dates: "11–12 December 2026",
  venue: "VVCE Sports Complex, Mysuru, Karnataka",
  organizedBy:
    "Department of Computer Science and Engineering, Vidyavardhaka College of Engineering",
  association: "In association with IBM CSRBOX",
  prizePool: "₹66,000 total cash prizes",
  teamSize: "3–4 members",
  participationMode: "Offline",
  duration: "24 hours",
  startDateTime: "2026-12-11T10:30:00+05:30",
  endDateTime: "2026-12-12T10:30:00+05:30",
  registrationUrl: "",
  ideaSubmissionUrl: "https://forms.gle/wYkMfAuDQH4y7p8NA",
  ideaTemplate: `${process.env.PUBLIC_URL}/idea_template.pptx`,
  logo: eventLogo,
};

export const Bio = {
  name: "",
  roles: [
    event.eventType,
    event.dates,
    "Forge. Fight. Flourish.",
  ],
  description:
    `${event.name} brings innovators together for a ${event.duration} offline hackathon at ${event.venue}. Registrations are free for everyone. Teams of ${event.teamSize} will identify their own problem statements within one of three AI domains and build practical solutions. ${event.prizePool} across all domains, with exciting goodies and rewards. ${event.association}`,
  github: event.ideaTemplate,
  resume: event.registrationUrl,
  linkedin: "https://www.linkedin.com/in/hack-kshetra-775a73330/",
  insta: "https://www.instagram.com/hack_kshetra",
};

export const skills = [
  {
    title: "AI for FinTech",
    preview: "Financial systems and financial data.",
    description: "Artificial intelligence in financial services, including the interpretation of financial data, transactions and risk.",
    focusAreas: ["Financial data", "Transactions", "Risk and fraud"],
  },
  {
    title: "AI for IoT",
    preview: "Connected devices and sensor data.",
    description: "The intersection of artificial intelligence and the Internet of Things, where connected devices collect and interpret real-time data.",
    focusAreas: ["Connected devices", "Sensor data", "Real-time insights"],
  },
  {
    title: "AI for Precision Agriculture / Healthcare",
    preview: "Data in agricultural and clinical settings.",
    description: "A combined domain covering artificial intelligence in precision agriculture and healthcare, with an emphasis on interpreting agricultural or clinical data.",
    focusAreas: ["Precision agriculture", "Healthcare data", "Decision support"],
  },
];

export const experiences = [
  {
    id: "check-in",
    role: "Participant Check-in",
    company: "08:00–09:30 AM",
    date: "Friday, 11 December 2026",
  },
  {
    id: "inaugural",
    role: "Inaugural Ceremony",
    company: "09:30–10:30 AM",
    date: "Friday, 11 December 2026",
  },
  {
    id: "hackathon-starts",
    role: "Hackathon Starts",
    company: "10:30 AM",
    date: "Friday, 11 December 2026",
  },
  {
    id: "lunch",
    role: "Lunch",
    company: "01:00–02:00 PM",
    date: "Friday, 11 December 2026",
  },
  {
    id: "mentoring",
    role: "Mentoring Session",
    company: "02:30–03:30 PM",
    date: "Friday, 11 December 2026",
  },
  {
    id: "tea-break",
    role: "Tea Break",
    company: "04:30–05:00 PM",
    date: "Friday, 11 December 2026",
  },
  {
    id: "first-checkpoint",
    role: "First Checkpoint",
    company: "05:00 PM",
    date: "Friday, 11 December 2026",
  },
  {
    id: "swara",
    role: "Swara",
    company: "07:30–08:00 PM",
    date: "Friday, 11 December 2026",
  },
  {
    id: "dinner",
    role: "Dinner",
    company: "08:00–09:00 PM",
    date: "Friday, 11 December 2026",
  },
  {
    id: "natya",
    role: "Natya",
    company: "10:00 PM",
    date: "Friday, 11 December 2026",
  },
  {
    id: "snacks",
    role: "Snacks Break",
    company: "12:00 AM",
    date: "Saturday, 12 December 2026",
  },
  {
    id: "jamming",
    role: "Jamming Session",
    company: "01:00 AM",
    date: "Saturday, 12 December 2026",
  },
  {
    id: "breakfast",
    role: "Breakfast",
    company: "07:30–08:30 AM",
    date: "Saturday, 12 December 2026",
  },
  {
    id: "second-checkpoint",
    role: "Second Checkpoint",
    company: "08:30 AM",
    date: "Saturday, 12 December 2026",
  },
  {
    id: "hackathon-ends",
    role: "Hackathon Ends",
    company: "10:30 AM",
    date: "Saturday, 12 December 2026",
  },
  {
    id: "valedictory",
    role: "Valedictory Function",
    company: "11:00 AM",
    date: "Saturday, 12 December 2026",
  },
];

export const prizeAwards = [
  { place: "1st place", amount: "₹10,000" },
  { place: "2nd place", amount: "₹7,000" },
  { place: "3rd place", amount: "₹5,000" },
];

export const projects = [
  {
    id: "faculty-paramesha",
    title: "Dr. Paramesha",
    category: "faculty",
  },
  {
    id: "faculty-tanuja",
    title: "Dr. Tanuja K",
    category: "faculty",
  },
  {
    id: "faculty-shashank",
    title: "Prof. Shashank",
    category: "faculty",
  },
  {
    id: "faculty-harsha",
    title: "Prof. Harsha",
    category: "faculty",
  },
  {
    id: "faculty-aishwarya",
    title: "Prof. Aishwarya",
    category: "faculty",
  },
  {
    id: "faculty-harshitha-suresh",
    title: "Prof. Harshitha Suresh",
    category: "faculty",
  },
  {
    id: "patron",
    image:
      "https://vvce.ac.in/wp-content/uploads/2024/09/Dr.-B-Sadashivegowda-scaled-1-1024x681.jpg",
    title: "Dr. B. Sadashive Gowda\nPrincipal",
    category: "patron",
  },
  {
    id: "convenor",
    image:
      "https://vvce.ac.in/wp-content/uploads/2024/08/Photo_Dr.Pooja-M-R-1.jpg",
    title: "Dr. Pooja MR\nHOD, Department of CSE",
    category: "convenor",
  },
  {
    id: "student-vinitha",
    title: "Vinitha M",
    description: "+91 99865 46639",
    category: "student",
  },
  {
    id: "student-suhani",
    title: "Suhani A N",
    description: "+91 90089 64365",
    category: "student",
  },
  {
    id: "student-chiranthan",
    title: "Chiranthan M S",
    description: "+91 91083 13854",
    category: "student",
  },
  {
    id: "student-vyshanth",
    title: "Vyshanth S U",
    description: "+91 95910 38870",
    category: "student",
  },
  {
    id: "student-sujan",
    title: "Sujan S",
    description: "+91 88619 16200",
    category: "student",
  },
  {
    id: "perk-networking",
    title: "Networking with Innovators Nationwide",
    category: "Perks",
  },
  {
    id: "perk-recognition",
    title: "National-Level Recognition & Exposure",
    category: "Perks",
  },
  {
    id: "perk-mentorship",
    title: "Mentorship Sessions from Industry Experts",
    category: "Perks",
  },
  {
    id: "perk-certificate",
    title: "Participation Certificates",
    category: "Perks",
  },
  {
    id: "perk-experts",
    title: "Interaction with Experts",
    category: "Perks",
  },
  {
    id: "perk-shirts",
    title: "Branded T-shirts",
    category: "Perks",
  },
  {
    id: "perk-games",
    title: "Mini-games with Swags",
    category: "Perks",
  },
  {
    id: "perk-stickers",
    title: "Exclusive Sticker Collections",
    category: "Perks",
  },
  {
    id: "association-ibm-csrbox",
    title: "IBM CSRBOX",
    description: event.association,
    category: "association",
  },
];

export const collaborators = [
  {
    id: "bharat-cares",
    name: "BharatCares",
    role: "Collaborator",
    logo: "https://bharatcares.org/assets/img/logo/logo-png.png",
    website: "https://bharatcares.org/",
  },
  {
    id: "ibm-bob",
    name: "IBM Bob",
    role: "Collaborator",
    logo: "https://bob.ibm.com/icon.svg",
    website: "https://bob.ibm.com/",
  },
];

export const ideaSubmissionRules = [
  "Form a team of 3–4 members.",
  "Select one of the three event domains.",
  "Define your own problem statement.",
  "Explain existing solutions and limitations where applicable.",
  "Present the proposed solution, technology stack, feasibility, and expected impact.",
  "Use the provided presentation template and keep it to six slides including the title slide.",
  "Export the completed presentation to PDF and submit it through the official portal when available.",
];
