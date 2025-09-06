
const person = {
  firstName: "Kaushik",
  lastName: "S",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer",
  avatar: "/images/avatar.jpg",
  email: "kaushikssaravanan@gmail.com",
  location: "Asia/Kolkata",
  languages: [],
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I write about AI/ML, cloud technologies, and building scalable software systems.
    </>
  ),
};

const social = [
  { name: "GitHub", icon: "github", link: "https://github.com/Kaushiksaravanan" },
  { name: "LinkedIn", icon: "linkedin", link: "https://www.linkedin.com/in/kaushik-ss/" },
  { name: "LeetCode", icon: "leetcode", link: "https://leetcode.com/u/kaushiksaravanan" },
  { name: "Email", icon: "email", link: `mailto:${person.email}` },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio showcasing my work as a ${person.role}`,
  headline: <>Engineering AI-driven and cloud-powered solutions</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Privacy-Focused RAG Chatbot</strong></>,
    href: "/work/privacy-focused-rag-chatbot",
  },
  subline: (
    <>
      I'm Kaushik, a software engineer at <strong>SAP Labs India</strong> specializing in automation, 
      AI/ML, and scalable system design. My work spans server optimization, privacy-first AI chatbots, 
      and enterprise cloud solutions.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from Bengaluru, India`,
  tableOfContent: { display: true, subItems: false },
  avatar: { display: true },
  calendar: { display: true, link: "https://cal.com" },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Kaushik is a Bengaluru-based software engineer with expertise in cloud automation, AI/ML, and 
        system optimization. He has delivered impactful solutions such as $88K/year cost savings from 
        server consolidation and sub-2s retrieval pipelines for millions of enterprise records.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "SAP Labs India",
        timeframe: "Jul 2024 – Present",
        role: "Software Engineer",
        achievements: [
          <>Automated consolidation of 350+ servers across GCP, Azure, and OpenStack, cutting instances by 40% and saving $88K/year.</>,
          <>Built a privacy-focused RAG chatbot querying 5K+ docs, reducing retrieval from 180s to 2s with BERT + Presidio + ChromaDB optimizations.</>,
          <>Deployed CI/CD pipelines to SAP BTP with zero-downtime rolling updates, reclaiming 6+ hrs/month.</>,
        ],
        images: [],
      },
      {
        company: "SAP Labs India",
        timeframe: "Jan 2024 – Jul 2024",
        role: "Spring Intern",
        achievements: [
          <>Created FastAPI service aggregating metrics from multi-cloud APIs, reducing API calls 40% and query time 15s→2s.</>,
        ],
        images: [],
      },
      {
        company: "Samsung R&D Institute India",
        timeframe: "Jan 2023 – Sep 2023",
        role: "PRISM Project Intern",
        achievements: [
          <>Developed PyQt5/OpenCV GUI for real-time noise injection in images/videos with async batch processing.</>,
          <>Awarded Excellence Performance Award + $900 prize.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      { name: "PSG College of Technology", description: <>B.Tech in Information Technology – CGPA 9.54 (2020–2024)</> },
      { name: "Google Quantum AI & The Coding School", description: <>Quantum Computing Certificate – 100%</> },
      { name: "Paavai Vidhyashram Global School", description: <>HSC – 92.8%</> },
      { name: "Emerald Valley Public School", description: <>SSC – 90.4%</> },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      { title: "AI/ML", description: <>BERT, TensorFlow, PyTorch, Langchain, Presidio, Scikit-learn, MediaPipe</> },
      { title: "Cloud & DevOps", description: <>GCP, Azure, AWS, Docker, Jenkins, Git, Grafana</> },
      { title: "Programming", description: <>Python, Java, C, Bash, SQL, PHP</> },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing on AI, cloud, and software engineering",
  description: `Insights and updates from ${person.name}`,
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design, AI, and cloud projects by ${person.name}`,
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Gallery – ${person.name}`,
  description: `Snapshots from projects and events involving ${person.name}`,
  images: [],
};

export { about, blog, gallery, home, newsletter, person, social, work };

