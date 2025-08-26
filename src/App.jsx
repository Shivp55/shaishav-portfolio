
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Mail, Phone, MapPin, Github, Linkedin, Briefcase, GraduationCap,
  Code2, CheckCircle2, ExternalLink, Sparkles, ArrowUp, Download,
} from "lucide-react";
import HeroCanvas from "./HeroCanvas.jsx";

const RESUME_DL = "https://docs.google.com/document/d/1EkShj-2UB4ZMnpACiDsLJZ5cIrIT6SAx/export?format=pdf";

const DATA = {
  name: "Shaishav Deepeshkumar Parekh",
  shortName: "Shaishav Parekh",
  title: "Full Stack Java Developer",
  location: "Dublin, Ireland",
  email: "shaishavparekh23@gmail.com",
  phone: "+353899636097",
  summary:
    "Full-stack developer focused on modern Java + Spring Boot back ends, clean APIs, and crisp, responsive UIs. Experienced with JWT auth, MySQL/MongoDB, and agile delivery.",
  socials: [
    { label: "GitHub", href: "https://github.com/Shivp55", icon: Github },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/shaishav-parekh/", icon: Linkedin },
  ],
  photo: "/shaishav.jpg",
  skills: {
    languages: [
      "Java","Python","PHP","JavaScript","TypeScript","SQL","MySQL","MongoDB","HTML","CSS","Golang (in progress)",
    ],
    frameworks: ["Spring Boot","Laravel","Bootstrap","REST APIs","JWT"],
    other: ["Cloud-based Solutions","Scalable Back-End Services","Agile / Scrum","AI & Data Science","Computer Vision"],
  },
  experience: [
    { role: "PHP Full Stack Developer", company: "GreySlate Technologies", location: "Gujarat, India", start: "Feb 2023", end: "Dec 2023",
      bullets: [
        "Built and maintained end-to-end apps with Laravel + modern JS (Vue/React).",
        "Integrated RESTful APIs with secure data exchange across services.",
        "Used MySQL + MongoDB; wrote optimized queries and aggregation pipelines.",
        "Implemented JWT auth and role-based access control.",
        "Translated UX wireframes into pixel-perfect, responsive interfaces.",
      ],
    },
    { role: "Junior Java Developer", company: "TatvaSoft", location: "Ahmedabad, India", start: "Mar 2022", end: "Feb 2023",
      bullets: [
        "Developed Java web apps with Spring Boot.",
        "Designed and optimized REST APIs for performance and reliability.",
        "Shipped UI with HTML5, CSS3, JavaScript, and jQuery.",
        "Implemented robust database solutions on MySQL and MongoDB.",
      ],
    },
  ],
  education: [
    { degree: "M.Eng. Electronic & Computer Engineering", school: "Dublin City University (DCU)", location: "Dublin, Ireland",
      start: "Jan 2024", end: "Jun 2025",
      details: ["Specialization: Computer Vision, Image Processing & Analysis","Full-Stack Web Development (Spring Boot)","3D Interface Technologies"],
    },
    { degree: "B.E. Computer Engineering", school: "LJ Institute of Engineering & Technology", location: "Ahmedabad, India", start: "—", end: "—",
      details: ["Focus: Web Development, Data Analysis & Visualization, ML/AI","Core: Java, JavaScript"],
    },
  ],
  projects: [
    { name: "Pedestrian Collision Detection for Cyclists (Deep Learning)", tag: "Master's Project",
      description: "Computer vision pipeline for real-time hazard detection to improve cyclist safety.",
      tech: ["Python","OpenCV","Deep Learning"], links: [] },
    { name: "Accounting System Admin Panel", tag: "Industry (Private)",
      description: "Admin dashboard with role-based access, analytics, and secure CRUD flows.",
      tech: ["Laravel","MySQL","JWT"], links: [] },
    { name: "Library Management System", tag: "Open Source",
      description: "Full-stack CRUD app with auth, catalog search, and user management.",
      tech: ["PHP","MySQL","Bootstrap","JS"], links: [{ label: "Code (GitHub)", href: "https://github.com/Shivp55" }] },
    { name: "Citibank Internet Banking (Demo)", tag: "DCU Project",
      description: "Spring Boot demo of secure banking features: auth, accounts, transfers.",
      tech: ["Java","Spring Boot","MySQL","JS"], links: [] },
  ],
  interests: ["New tech in AI & NLP","Building useful software","Football, Cricket, Badminton","Networking and teamwork"],
};

const Section = ({ id, title, icon: Icon, children }) => (
  <section id={id} className="scroll-mt-24 py-16 sm:py-24">
    <div className="mx-auto max-w-6xl px-4">
      <div className="mb-10 flex items-center gap-3">
        {Icon && (
          <div className="rounded-2xl border bg-white/60 p-2 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
            <Icon className="h-5 w-5" />
          </div>
        )}
        <h2 className="text-2xl font-semibold sm:text-3xl">{title}</h2>
      </div>
      {children}
    </div>
  </section>
);

const Badge = ({ children }) => (
  <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium backdrop-blur transition hover:shadow-sm dark:border-white/10">
    {children}
  </span>
);

const Card = ({ children, className = "" }) => (
  <div className={`group rounded-2xl border bg-white/60 p-6 shadow-sm backdrop-blur transition hover:shadow-md dark:border-white/10 dark:bg-white/5 ${className}`}>
    {children}
  </div>
);

const useScrollSpy = (ids) => {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.2, 1] }
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, [ids]);
  return active;
};

const GradientBG = () => (
  <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
    <div className="absolute left-[-10%] top-[-10%] h-[50vmax] w-[50vmax] rounded-full bg-[conic-gradient(at_20%_30%,#60a5fa_0%,#a78bfa_20%,#34d399_40%,#f59e0b_60%,#ef4444_80%,#60a5fa_100%)] opacity-30 blur-3xl dark:opacity-20" />
    <div className="absolute bottom-[-10%] right-[-10%] h-[55vmax] w-[55vmax] rounded-full bg-[conic-gradient(at_80%_70%,#c084fc_0%,#22d3ee_25%,#f472b6_50%,#facc15_75%,#4ade80_100%)] opacity-30 blur-3xl dark:opacity-20" />
  </div>
);

const Nav = ({ sections, active }) => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 border-b bg-white/70 backdrop-blur dark:border-white/10 dark:bg-black/40">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#home" className="flex items-center gap-2 font-semibold">
          <Sparkles className="h-5 w-5" /> {DATA.shortName}
        </a>
        <button className="sm:hidden" aria-label="Toggle menu" onClick={() => setOpen((s) => !s)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
        <ul className={`hidden gap-6 sm:flex`}>
          {sections.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className={`text-sm transition hover:opacity-100 ${active === s.id ? "opacity-100" : "opacity-70"}`}>{s.title}</a>
            </li>
          ))}
        </ul>
      </div>
      {open && (
        <ul className="border-t px-4 py-3 sm:hidden dark:border-white/10">
          {sections.map((s) => (
            <li key={s.id} className="py-2">
              <a href={`#${s.id}`} onClick={() => setOpen(false)}>{s.title}</a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

const Hero = () => (
  <section id="home" className="scroll-mt-24">
    <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-16 sm:grid-cols-12 sm:py-20">
      <div className="absolute inset-0 -z-10">
        <div className="h-[520px] w-full overflow-hidden rounded-b-[2.5rem] border-b backdrop-blur dark:border-white/10">
          <HeroCanvas />
        </div>
      </div>
      <div className="sm:col-span-7 mt-[280px] sm:mt-0">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl font-bold leading-tight sm:text-5xl">{DATA.shortName}</motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.05 }} className="mt-3 text-lg opacity-90">{DATA.title}</motion.p>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="mt-6 max-w-2xl text-base opacity-90">{DATA.summary}</motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }} className="mt-6 flex flex-wrap items-center gap-3">
          <a href={`mailto:${DATA.email}`} className="inline-flex items-center gap-2 rounded-2xl border bg-black px-4 py-2 text-white shadow-sm transition hover:shadow-md dark:border-white/10 dark:bg-white dark:text-black"><Mail className="h-4 w-4" /> Email me</a>
          <a href={`tel:${DATA.phone}`} className="inline-flex items-center gap-2 rounded-2xl border px-4 py-2 shadow-sm transition hover:shadow-md dark:border-white/10"><Phone className="h-4 w-4" /> Call</a>
          <a href={RESUME_DL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl border px-4 py-2 shadow-sm transition hover:shadow-md dark:border-white/10"><Download className="h-4 w-4" /> Download CV</a>
          <span className="inline-flex items-center gap-2 rounded-2xl border px-3 py-2 text-sm shadow-sm dark:border-white/10"><MapPin className="h-4 w-4" /> {DATA.location}</span>
        </motion.div>
        <div className="mt-6 flex flex-wrap gap-3">
          {DATA.socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm opacity-90 transition hover:opacity-100 hover:shadow-sm dark:border-white/10">
              <s.icon className="h-4 w-4" /> {s.label}
              <ExternalLink className="h-3 w-3 opacity-70" />
            </a>
          ))}
        </div>
      </div>
      <div className="sm:col-span-5">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="relative mx-auto w-64 overflow-hidden rounded-3xl border shadow-lg backdrop-blur sm:w-80 dark:border-white/10">
          <img src={DATA.photo} alt="Shaishav Parekh" className="h-full w-full object-cover" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/10 dark:to-white/5" />
        </motion.div>
      </div>
    </div>
  </section>
);

const Skills = () => (
  <Section id="skills" title="Skills" icon={Code2}>
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
      <Card>
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider opacity-70">Languages & Databases</h3>
        <div className="flex flex-wrap gap-2">{DATA.skills.languages.map((s) => (<Badge key={s}>{s}</Badge>))}</div>
      </Card>
      <Card>
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider opacity-70">Frameworks & APIs</h3>
        <div className="flex flex-wrap gap-2">{DATA.skills.frameworks.map((s) => (<Badge key={s}>{s}</Badge>))}</div>
      </Card>
      <Card>
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider opacity-70">Other</h3>
        <div className="flex flex-wrap gap-2">{DATA.skills.other.map((s) => (<Badge key={s}>{s}</Badge>))}</div>
      </Card>
    </div>
  </Section>
);

const Experience = () => (
  <Section id="experience" title="Experience" icon={Briefcase}>
    <div className="grid grid-cols-1 gap-6">
      {DATA.experience.map((job) => (
        <motion.div key={`${job.company}-${job.role}`} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-20% 0px" }} transition={{ duration: 0.5 }}>
          <Card>
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold">{job.role}</h3>
                <p className="text-sm opacity-80">{job.company} • {job.location}</p>
              </div>
              <p className="text-sm opacity-70">{job.start} – {job.end}</p>
            </div>
            <ul className="mt-4 space-y-2">
              {job.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none opacity-70" />
                  <span className="opacity-90">{b}</span>
                </li>
              ))}
            </ul>
          </Card>
        </motion.div>
      ))}
    </div>
  </Section>
);

const Education = () => (
  <Section id="education" title="Education" icon={GraduationCap}>
    <div className="grid grid-cols-1 gap-6">
      {DATA.education.map((e) => (
        <Card key={e.school}>
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 className="text-lg font-semibold">{e.degree}</h3>
              <p className="text-sm opacity-80">{e.school} • {e.location}</p>
            </div>
            <p className="text-sm opacity-70">{e.start} {e.end !== "—" && "–"} {e.end}</p>
          </div>
          <ul className="mt-3 list-inside list-disc space-y-1 text-sm opacity-90">
            {e.details.map((d, i) => (<li key={i}>{d}</li>))}
          </ul>
        </Card>
      ))}
    </div>
  </Section>
);

const Projects = () => (
  <Section id="projects" title="Projects" icon={Sparkles}>
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      {DATA.projects.map((p) => (
        <motion.div key={p.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-20% 0px" }} transition={{ duration: 0.5 }}>
          <Card className="h-full">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="text-xs uppercase tracking-wider opacity-60">{p.tag}</p>
              </div>
            </div>
            <p className="mt-3 text-sm opacity-90">{p.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">{p.tech.map((t) => (<Badge key={t}>{t}</Badge>))}</div>
            <div className="mt-5 flex flex-wrap gap-3">
              {p.links.length > 0 ? p.links.map((l) => (
                <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl border px-3 py-1 text-sm opacity-90 transition hover:opacity-100 dark:border-white/10">
                  <ExternalLink className="h-4 w-4" /> {l.label}
                </a>
              )) : (<span className="text-sm opacity-60">Links on request</span>)}
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  </Section>
);

const Interests = () => (
  <Section id="interests" title="Interests" icon={Sparkles}>
    <Card>
      <div className="flex flex-wrap gap-2">{DATA.interests.map((i) => (<Badge key={i}>{i}</Badge>))}</div>
    </Card>
  </Section>
);

const Footer = () => (
  <footer className="border-t py-10 text-center text-sm opacity-80 dark:border-white/10">
    <div className="mx-auto max-w-6xl px-4">
      <p>© {new Date().getFullYear()} {DATA.shortName}. Built with React, Three.js & Tailwind.</p>
      <p className="mt-2 flex items-center justify-center gap-3">
        <a href={`mailto:${DATA.email}`} className="inline-flex items-center gap-2 rounded-full border px-3 py-1 transition hover:shadow-sm dark:border-white/10"><Mail className="h-4 w-4" /> {DATA.email}</a>
        <a href={RESUME_DL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border px-3 py-1 transition hover:shadow-sm dark:border-white/10"><Download className="h-4 w-4" /> CV (PDF)</a>
      </p>
    </div>
  </footer>
);

const BackToTop = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="fixed bottom-6 right-6 inline-flex items-center gap-2 rounded-full border bg-white/70 px-3 py-2 shadow-lg backdrop-blur transition hover:shadow-xl dark:border-white/10 dark:bg-black/40" aria-label="Back to top">
      <ArrowUp className="h-4 w-4" />
    </button>
  );
};

const ThemeToggle = () => {
  const [dark, setDark] = useState(true);
  useEffect(() => {
    const cls = document.documentElement.classList;
    if (dark) cls.add("dark"); else cls.remove("dark");
  }, [dark]);
  return (
    <button onClick={() => setDark((d) => !d)} className="fixed bottom-6 left-6 rounded-full border bg-white/70 px-3 py-2 text-sm shadow-lg backdrop-blur transition hover:shadow-xl dark:border-white/10 dark:bg-black/40">
      {dark ? "Light" : "Dark"} mode
    </button>
  );
};

export default function App() {
  const sections = [
    { id: "home", title: "Home" },
    { id: "skills", title: "Skills" },
    { id: "experience", title: "Experience" },
    { id: "education", title: "Education" },
    { id: "projects", title: "Projects" },
    { id: "interests", title: "Interests" },
    { id: "contact", title: "Contact" },
  ];
  const active = useScrollSpy(sections.map((s) => s.id));

  return (
    <div className="min-h-screen scroll-smooth bg-gradient-to-b from-white to-white/60 text-gray-900 antialiased dark:from-black dark:to-black/60 dark:text-gray-100">
      <GradientBG />
      <Nav sections={sections} active={active} />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Section id="contact" title="Get in touch" icon={Mail}>
          <Card>
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold">Let’s build something great</h3>
                <p className="mt-1 text-sm opacity-90">I’m open to internships and full-time roles in full-stack development.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a href={`mailto:${DATA.email}`} className="inline-flex items-center gap-2 rounded-2xl border bg-black px-4 py-2 text-white shadow-sm transition hover:shadow-md dark:border-white/10 dark:bg-white dark:text-black"><Mail className="h-4 w-4" /> Email</a>
                <a href={`tel:${DATA.phone}`} className="inline-flex items-center gap-2 rounded-2xl border px-4 py-2 shadow-sm transition hover:shadow-md dark:border-white/10"><Phone className="h-4 w-4" /> Call</a>
                <a href={RESUME_DL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl border px-4 py-2 shadow-sm transition hover:shadow-md dark:border-white/10"><Download className="h-4 w-4" /> CV</a>
              </div>
            </div>
          </Card>
        </Section>
      </main>
      <Footer />
      <BackToTop />
      <ThemeToggle />
    </div>
  );
}
