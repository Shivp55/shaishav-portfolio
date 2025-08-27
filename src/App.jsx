
import React from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Briefcase, GraduationCap, Code2, CheckCircle2, ExternalLink, Sparkles, ArrowUp, Download } from "lucide-react";

const RESUME_DL = "https://drive.google.com/uc?export=download&id=1oUCvUeqeZ04nhb6V2YcOqzUc6v8Whdti";
const DATA = {
  name: "Shaishav Deepeshkumar Parekh",
  shortName: "Shaishav Parekh",
  title: "Full Stack Java Developer",
  location: "Dublin, Ireland",
  email: "shaishavparekh23@gmail.com",
  phone: "+353899636097",
  photo: "/profile.jpg",
  socials: [
    { label: "GitHub", href: "https://github.com/Shivp55", icon: Github },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/shaishav-parekh/", icon: Linkedin },
  ],
};

const Section = ({ id, title, kicker="Section", children }) => (
  <section id={id} className="py-10 sm:py-16">
    <div className="mx-auto max-w-6xl px-4">
      <p className="text-[12px] uppercase tracking-[.22em]" style={{color:"var(--c-mint)"}}>{kicker}</p>
      <h2 className="text-2xl sm:text-3xl font-semibold mt-1">{title}</h2>
      <div className="mt-6">{children}</div>
    </div>
  </section>
);

export default function App(){
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-black/60 backdrop-blur border-b border-[#1a1a1f]">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#home" className="font-semibold flex items-center gap-2"><Sparkles className="h-5 w-5"/> {DATA.shortName}</a>
          <div className="flex items-center gap-2">
            <a className="btn ghost" href={RESUME_DL}>CV</a>
            <a className="badge" href="https://github.com/Shivp55" target="_blank" rel="noreferrer">GitHub</a>
            <a className="badge" href="https://www.linkedin.com/in/shaishav-parekh/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header id="home" className="py-12">
        <div className="mx-auto max-w-6xl px-4 grid gap-8 sm:grid-cols-12 items-center">
          <div className="sm:col-span-7">
            <p className="text-[12px] uppercase tracking-[.22em]" style={{color:"var(--c-mint)"}}>Full Stack Java Developer</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold mt-1"><span style={{color:"var(--c-mint)"}}>Shaishav</span> Parekh</h1>
            <p className="mt-4 opacity-90 max-w-2xl">
              Full‑stack developer focused on modern Java + Spring Boot back ends, clean APIs, and crisp, responsive UIs.
              Experienced with JWT auth, MySQL/MongoDB, and agile delivery.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="btn" href={`mailto:${DATA.email}`}><Mail className="h-4 w-4"/> Email</a>
              <a className="btn secondary" href={`tel:${DATA.phone}`}><Phone className="h-4 w-4"/> Call</a>
              <a className="btn ghost" href={RESUME_DL}><Download className="h-4 w-4"/> Download CV</a>
              <span className="badge"><MapPin className="h-4 w-4"/> {DATA.location}</span>
            </div>
          </div>
          <div className="sm:col-span-5">
            <div className="card border-gradient overflow-hidden w-64 sm:w-80 mx-auto">
              <img src={DATA.photo} alt="Shaishav Parekh" className="rounded-2xl w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </header>

      {/* Marquee */}
      <div className="marquee">
        <div className="marquee-row">
          <span className="badge">Java</span><span className="badge">Spring Boot</span><span className="badge">REST APIs</span><span className="badge">SQL</span><span className="badge">MySQL</span>
          <span className="badge">MongoDB</span><span className="badge">JWT Auth</span><span className="badge">Python</span><span className="badge">PHP</span><span className="badge">Laravel</span>
          <span className="badge">JavaScript</span><span className="badge">TypeScript</span><span className="badge">HTML</span><span className="badge">CSS</span><span className="badge">Bootstrap</span>
          <span className="badge">Agile</span><span className="badge">Computer Vision</span>
          <span className="badge">Java</span><span className="badge">Spring Boot</span><span className="badge">REST APIs</span><span className="badge">SQL</span><span className="badge">MySQL</span>
          <span className="badge">MongoDB</span><span className="badge">JWT Auth</span><span className="badge">Python</span><span className="badge">PHP</span><span className="badge">Laravel</span>
          <span className="badge">JavaScript</span><span className="badge">TypeScript</span><span className="badge">HTML</span><span className="badge">CSS</span><span className="badge">Bootstrap</span>
          <span className="badge">Agile</span><span className="badge">Computer Vision</span>
        </div>
      </div>

      {/* Highlights */}
      <Section id="highlights" title="What I focus on" kicker="Highlights">
        <div className="grid gap-6" style={{gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))'}}>
          <div className="card border-gradient"><h3 className="text-lg font-semibold">Back‑end APIs</h3><p>Spring Boot services with clean interfaces, JWT security, and tests.</p></div>
          <div className="card border-gradient"><h3 className="text-lg font-semibold">Databases</h3><p>MySQL and MongoDB with pragmatic schemas and efficient queries.</p></div>
          <div className="card border-gradient"><h3 className="text-lg font-semibold">Front‑end</h3><p>Responsive UI with modern JS and accessible, performance‑minded CSS.</p></div>
          <div className="card border-gradient"><h3 className="text-lg font-semibold">Delivery</h3><p>Incremental releases, Git branching, and lightweight CI.</p></div>
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" title="Core toolset" kicker="Skills">
        <div className="grid gap-6" style={{gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))'}}>
          <div className="card border-gradient"><h3 className="text-lg font-semibold">Languages & Databases</h3><p className="opacity-90 text-sm">Java, Python, PHP, JavaScript, TypeScript, SQL, MySQL, MongoDB, HTML, CSS, Golang (learning)</p></div>
          <div className="card border-gradient"><h3 className="text-lg font-semibold">Frameworks & APIs</h3><p className="opacity-90 text-sm">Spring Boot, Laravel, Bootstrap, REST APIs, JWT</p></div>
          <div className="card border-gradient"><h3 className="text-lg font-semibold">Other</h3><p className="opacity-90 text-sm">Cloud solutions, scalable services, Agile/Scrum, AI/Data, Computer Vision</p></div>
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" title="Where I've worked" kicker="Experience">
        <div className="timeline grid gap-4">
          <div className="timeline-item card border-gradient">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div><h3 className="font-semibold">PHP Full Stack Developer</h3><p className="text-sm opacity-80">GreySlate Technologies • Gujarat, India</p></div>
              <p className="text-sm opacity-70">Feb 2023 – Dec 2023</p>
            </div>
            <ul className="mt-3 space-y-1 text-sm">
              <li className="flex gap-2"><CheckCircle2 className="h-4 w-4" style={{color:"var(--c-mint)"}}/> Built end‑to‑end apps with Laravel + modern JS.</li>
              <li className="flex gap-2"><CheckCircle2 className="h-4 w-4" style={{color:"var(--c-mint)"}}/> RESTful API integrations.</li>
              <li className="flex gap-2"><CheckCircle2 className="h-4 w-4" style={{color:"var(--c-mint)"}}/> MySQL + MongoDB performance tuning.</li>
              <li className="flex gap-2"><CheckCircle2 className="h-4 w-4" style={{color:"var(--c-mint)"}}/> JWT auth and RBAC.</li>
              <li className="flex gap-2"><CheckCircle2 className="h-4 w-4" style={{color:"var(--c-mint)"}}/> Responsive UI implementation.</li>
            </ul>
          </div>
          <div className="timeline-item card border-gradient">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div><h3 className="font-semibold">Junior Java Developer</h3><p className="text-sm opacity-80">TatvaSoft • Ahmedabad, India</p></div>
              <p className="text-sm opacity-70">Mar 2022 – Feb 2023</p>
            </div>
            <ul className="mt-3 space-y-1 text-sm">
              <li className="flex gap-2"><CheckCircle2 className="h-4 w-4" style={{color:"var(--c-mint)"}}/> Java web apps with Spring Boot.</li>
              <li className="flex gap-2"><CheckCircle2 className="h-4 w-4" style={{color:"var(--c-mint)"}}/> Designed performant REST APIs.</li>
              <li className="flex gap-2"><CheckCircle2 className="h-4 w-4" style={{color:"var(--c-mint)"}}/> UI with HTML5, CSS3, JS, jQuery.</li>
              <li className="flex gap-2"><CheckCircle2 className="h-4 w-4" style={{color:"var(--c-mint)"}}/> MySQL / MongoDB schemas and queries.</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Education */}
      <Section id="education" title="Timeline" kicker="Education">
        <div className="timeline grid gap-4">
          <div className="timeline-item card border-gradient">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div><h3 className="font-semibold">M.Eng. Electronic & Computer Engineering</h3><p className="text-sm opacity-80">Dublin City University (DCU) • Dublin, Ireland</p></div>
              <p className="text-sm opacity-70">Jan 2024 – Jun 2025</p>
            </div>
            <ul className="mt-2 text-sm opacity-90 list-disc list-inside">
              <li>Computer Vision, Image Processing & Analysis</li>
              <li>Full‑Stack Web Development (Spring Boot)</li>
              <li>3D Interface Technologies</li>
            </ul>
          </div>
          <div className="timeline-item card border-gradient">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div><h3 className="font-semibold">B.E. Computer Engineering</h3><p className="text-sm opacity-80">LJ Institute of Engineering & Technology • Ahmedabad, India</p></div>
              <p className="text-sm opacity-70">2019 – 2023</p>
            </div>
            <ul className="mt-2 text-sm opacity-90 list-disc list-inside">
              <li>Web Development, Data Visualization, ML/AI</li>
              <li>Core: Java, JavaScript</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Things I've built" kicker="Projects">
        <div className="grid gap-6" style={{gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))'}}>
          <div className="card border-gradient"><h3 className="text-lg font-semibold">Pedestrian Collision Detection</h3><p>Real‑time hazard detection to improve cyclist safety.</p><div className="mt-2 flex flex-wrap gap-2"><span className="badge">Python</span><span className="badge">OpenCV</span><span className="badge">Deep Learning</span></div></div>
          <div className="card border-gradient"><h3 className="text-lg font-semibold">Accounting Admin Panel</h3><p>RBAC admin with analytics and secure CRUD flows.</p><div className="mt-2 flex flex-wrap gap-2"><span className="badge">Laravel</span><span className="badge">MySQL</span><span className="badge">JWT</span></div></div>
          <div className="card border-gradient"><h3 className="text-lg font-semibold">Library Management System</h3><p>Full‑stack CRUD with auth, search, and user management.</p><div className="mt-2 flex flex-wrap gap-2"><span className="badge">PHP</span><span className="badge">MySQL</span><span className="badge">Bootstrap</span><span className="badge">JS</span></div><p className="mt-2"><a className="badge" href="https://github.com/Shivp55" target="_blank" rel="noreferrer"><ExternalLink className="h-4 w-4 mr-1"/>Code (GitHub)</a></p></div>
          <div className="card border-gradient"><h3 className="text-lg font-semibold">Citibank Internet Banking (Demo)</h3><p>Auth, accounts, and transfers demo built with Spring Boot.</p><div className="mt-2 flex flex-wrap gap-2"><span className="badge">Java</span><span className="badge">Spring Boot</span><span className="badge">MySQL</span><span className="badge">JS</span></div></div>
        </div>
      </Section>

      {/* Interests */}
      <Section id="interests" title="Beyond the code" kicker="Interests">
        <div className="flex flex-wrap gap-2">
          <span className="badge">AI & NLP</span><span className="badge">Building useful software</span><span className="badge">Football</span><span className="badge">Cricket</span><span className="badge">Badminton</span><span className="badge">Networking & teamwork</span>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Let’s build something" kicker="Contact">
        <div className="grid gap-6" style={{gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))'}}>
          <div className="card border-gradient">
            <p>Open to internships and full‑time roles in full‑stack development.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href={`mailto:${DATA.email}`} className="btn"><Mail className="h-4 w-4"/> Email</a>
              <a href={`tel:${DATA.phone}`} className="btn secondary"><Phone className="h-4 w-4"/> Call</a>
              <a href={RESUME_DL} className="btn ghost"><Download className="h-4 w-4"/> CV</a>
            </div>
          </div>
          <div className="card border-gradient">
            <h3 className="text-lg font-semibold mb-2">Links</h3>
            <p><a className="badge" href="https://github.com/Shivp55" target="_blank" rel="noreferrer">GitHub</a></p>
            <p className="mt-2"><a className="badge" href="https://www.linkedin.com/in/shaishav-parekh/" target="_blank" rel="noreferrer">LinkedIn</a></p>
            <p className="mt-2"><a className="badge" href={RESUME_DL}>Download CV (PDF)</a></p>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-10 text-center text-sm opacity-80 border-t border-[#1a1a1f]">
        <div className="mx-auto max-w-6xl px-4">
          <p>© {new Date().getFullYear()} {DATA.shortName} · <a className="underline" href={`mailto:${DATA.email}`}>{DATA.email}</a> · <a className="underline" href={RESUME_DL}>CV (PDF)</a></p>
        </div>
      </footer>
    </div>
  );
}
