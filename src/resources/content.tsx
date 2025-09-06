<<<<<<< HEAD:src/resources/content.js

const person = {
  firstName: "Kaushik",
  lastName: "S",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer",
=======
import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Selene",
  lastName: "Yu",
  name: `Selene Yu`,
  role: "Design Engineer",
>>>>>>> da9dff96291a0a22b1a6242ac871f1293d91b226:src/resources/content.tsx
  avatar: "/images/avatar.jpg",
  email: "kaushikssaravanan@gmail.com",
  location: "Asia/Kolkata",
  languages: [],
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
<<<<<<< HEAD:src/resources/content.js
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
=======
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/once-ui-system",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/company/once-ui/",
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@once_ui",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
>>>>>>> da9dff96291a0a22b1a6242ac871f1293d91b226:src/resources/content.tsx
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio showcasing my work as a ${person.role}`,
  headline: <>Engineering AI-driven and cloud-powered solutions</>,
  featured: {
    display: true,
<<<<<<< HEAD:src/resources/content.js
    title: <>Recent project: <strong className="ml-4">Privacy-Focused RAG Chatbot</strong></>,
    href: "/work/privacy-focused-rag-chatbot",
  },
  subline: (
    <>
      I'm Kaushik, a software engineer at <strong>SAP Labs India</strong> specializing in automation, 
      AI/ML, and scalable system design. My work spans server optimization, privacy-first AI chatbots, 
      and enterprise cloud solutions.
=======
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Selene, a design engineer at{" "}
      <Logo
        dark
        icon="/trademarks/wordmark-dark.svg"
        style={{ display: "inline-flex", top: "0.25em", marginLeft: "-0.25em" }}
      />
      , where I craft intuitive
      <br /> user experiences. After hours, I build my own projects.
>>>>>>> da9dff96291a0a22b1a6242ac871f1293d91b226:src/resources/content.tsx
    </>
  ),
};

const about: About = {
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
<<<<<<< HEAD:src/resources/content.js
      { title: "AI/ML", description: <>BERT, TensorFlow, PyTorch, Langchain, Presidio, Scikit-learn, MediaPipe</> },
      { title: "Cloud & DevOps", description: <>GCP, Azure, AWS, Docker, Jenkins, Git, Grafana</> },
      { title: "Programming", description: <>Python, Java, C, Bash, SQL, PHP</> },
=======
      {
        title: "Figma",
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: (
          <>Building next gen apps with Next.js + Once UI + Supabase.</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Supabase",
            icon: "supabase",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },  
>>>>>>> da9dff96291a0a22b1a6242ac871f1293d91b226:src/resources/content.tsx
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing on AI, cloud, and software engineering",
  description: `Insights and updates from ${person.name}`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design, AI, and cloud projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
<<<<<<< HEAD:src/resources/content.js
  title: `Gallery – ${person.name}`,
  description: `Snapshots from projects and events involving ${person.name}`,
  images: [],
=======
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
>>>>>>> da9dff96291a0a22b1a6242ac871f1293d91b226:src/resources/content.tsx
};

export { about, blog, gallery, home, newsletter, person, social, work };

