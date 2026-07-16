import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  ChevronRight,
  Code2,
  Download,
  GraduationCap,
  Layers3,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Smartphone,
  Sparkles,
  X,
  Zap,
} from "lucide-react";

function LinkedInIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path d="M6.5 8.25H3.25V20H6.5V8.25Z" fill="currentColor" />
      <path
        d="M4.87 3A1.88 1.88 0 1 0 4.9 6.76 1.88 1.88 0 0 0 4.87 3Z"
        fill="currentColor"
      />
      <path
        d="M10 8.25h3.11v1.6h.04c.44-.82 1.5-1.98 3.55-1.98 3.8 0 4.5 2.5 4.5 5.75V20h-3.24v-5.66c0-1.35-.03-3.08-1.88-3.08-1.88 0-2.17 1.47-2.17 2.98V20H10V8.25Z"
        fill="currentColor"
      />
    </svg>
  );
}

function GitHubIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M12 2C6.48 2 2 6.59 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-1.05-.01-1.91-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.12 2.91.86.09-.66.35-1.12.64-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05A9.33 9.33 0 0 1 12 7.09c.85 0 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.64 1.03 2.76 0 3.94-2.34 4.8-4.57 5.06.36.32.68.95.68 1.92 0 1.39-.01 2.51-.01 2.85 0 .27.18.59.69.49A10.27 10.27 0 0 0 22 12.25C22 6.59 17.52 2 12 2Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const contact = {
  email: "Sumitkumarbhagat987@gmail.com",
  phone: "+91 7742462885",
  linkedin: "https://linkedin.com/in/bhagat987",
  github: "https://github.com/bhagat272",
};

const skills = [
  {
    title: "Mobile Engineering",
    icon: Smartphone,
    items: ["React Native", "TypeScript", "Redux", "Android Studio", "Xcode"],
  },
  {
    title: "Frontend Development",
    icon: Layers3,
    items: ["React.js", "JavaScript", "HTML", "CSS", "Tailwind", "Material UI"],
  },
  {
    title: "Backend & Realtime",
    icon: Code2,
    items: ["Node.js", "Express.js", "MongoDB", "REST APIs", "Socket.io"],
  },
  {
    title: "Integrations & Tools",
    icon: Zap,
    items: ["Stripe", "Firebase", "CallKit", "Git", "Postman"],
  },
];

const experience = [
  {
    company: "The NineHertz",
    role: "Associate Software Engineer",
    period: "Aug 2024 — Present",
    location: "Jaipur, India",
    summary:
      "Building production-ready cross-platform applications with a focus on performance, reusable architecture, and reliable API integration.",
    achievements: [
      "Developed scalable React Native features for cross-platform mobile products.",
      "Improved frontend-backend data flow through robust REST API integrations.",
      "Created reusable UI components that remain consistent across devices.",
      "Collaborated with product, design, QA, and backend teams to ship features.",
    ],
  },
  {
    company: "Global IT Providers",
    role: "Full Stack Developer Trainee",
    period: "Feb 2024 — Jul 2024",
    location: "Jaipur, India",
    summary:
      "Delivered full-stack MERN applications, responsive interfaces, RESTful APIs, and efficient MongoDB-backed workflows.",
    achievements: [
      "Built MERN applications with maintainable backend architecture.",
      "Designed RESTful APIs to improve system integration and performance.",
      "Created responsive interfaces with React and Tailwind CSS.",
      "Managed MongoDB data models and optimized common query flows.",
    ],
  },
];

const projects = [
  {
    name: "GamerMeet",
    type: "Gaming Community Platform",
    description:
      "A community product for gamer discovery, swipe-based matching, group formation, and synchronized real-time conversations.",
    tags: ["React Native", "Socket.io", "REST API", "Matching"],
    number: "01",
    featured: true,
  },
  {
    name: "MediDoctor",
    type: "Healthcare & Teleconsultation",
    description:
      "Appointment scheduling, doctor-patient interaction, secure Stripe payments, biometric authentication, and in-app audio/video communication.",
    tags: ["React Native", "Stripe", "CallKit", "Biometrics"],
    number: "02",
    featured: true,
  },
  {
    name: "Business Card Network",
    type: "Professional Networking",
    description:
      "A digital networking solution with automated card scanning, structured data extraction, contact management, and PDF/CSV export.",
    tags: ["OCR Workflow", "PDF", "CSV", "Mobile UI"],
    number: "03",
    featured: true,
  },
  {
    name: "StoryTimeAdventure",
    type: "Interactive Storytelling",
    description:
      "A collaborative storytelling experience enhanced with gamification and text-to-speech functionality for engaging user journeys.",
    tags: ["Gamification", "Text-to-Speech", "Collaboration"],
    number: "04",
    featured: true,
  },
  {
    name: "HERS",
    type: "Service Marketplace",
    description:
      "A role-based marketplace with tailored workflows, booking management, scheduling, and service coordination.",
    tags: ["Role-based Access", "Booking", "Scheduling"],
    number: "05",
    featured: true,
  },

  {
    name: "PocketAttorney",
    type: "Legal Networking",
    description:
      "A networking platform for legal professionals built around scalable, reusable interface components.",
    tags: ["React Native", "Reusable UI"],

    number: "06",
    featured: true,
  },
  {
    name: "BestBathroomStops",
    type: "Location-based Utility",
    description:
      "A geolocation-based product for discovering reliable restroom facilities with current location data and live updates.",
    tags: ["Geolocation", "Maps", "Realtime Data"],
    number: "07",
  },
  {
    name: "FindLiveEntertainment",
    type: "Event Management Platform",
    description:
      "A cross-platform platform for discovering, booking, scheduling, and managing events and venue listings across multiple user roles.",
    tags: ["React Native", "Realtime Scheduling", "Multi-Role"],
    number: "08",
  },
  {
    name: "SoulMate",
    type: "Matchmaking Platform",
    description:
      "A swipe-led matchmaking experience with recommendation logic and real-time chat.",
    tags: ["Matching", "Realtime Chat"],
    number: "09",
  },
  {
    name: "RESCUlink",
    type: "Emergency Safety Platform",
    description:
      "A real-time safety app for sending location-based distress alerts to venue security and medical response teams.",
    tags: ["React Native", "Geolocation", "Realtime Alerts"],
    number: "10",
  },
  {
    name: "Bookify",
    type: "Reservation System",
    description:
      "A reservation product with secure authentication, admin controls, and scalable booking workflows.",
    tags: ["Authentication", "Admin", "Booking"],
    number: "11",
  },
  {
    name: "Feedin",
    type: "Feedback Platform",
    description:
      "A dynamic form and feedback system backed by scalable APIs for structured data collection.",
    tags: ["Dynamic Forms", "REST API"],
    number: "12",
  },
  {
  name: "VenueNear",
  type: "Event Venue Marketplace",
  description:
    "A web and mobile-friendly platform for discovering, comparing availability, and booking nearby venues for different events and occasions.",
  tags: ["Venue Booking", "Availability", "Marketplace"],
  number: "13",
},
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading reveal">
      <p className="eyebrow">{eyebrow}</p>
      <div className="section-heading-grid">
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <a
          className="brand"
          href="#top"
          aria-label="Go to top"
          onClick={closeMenu}
        >
          <span className="brand-mark">SB</span>
          <span className="brand-copy">
            <strong>Sumit Bhagat</strong>
            <small>Software Engineer</small>
          </span>
        </a>

        <nav
          className={`main-nav ${menuOpen ? "is-open" : ""}`}
          aria-label="Main navigation"
        >
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <a href="#experience" onClick={closeMenu}>
            Experience
          </a>
          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
          <a
            className="nav-resume"
            href="./Sumit_Kumar_Bhagat_Resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Resume <ArrowUpRight size={16} />
          </a>
        </nav>

        <button
          className="menu-button"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-copy reveal">
            <div className="availability-pill">
              <span className="pulse-dot" />
              Open to meaningful software opportunities
            </div>
            <p className="hero-kicker">React Native · React.js · MERN Stack</p>
            <h1>
              I build mobile products that feel{" "}
              <span>fast, intuitive, and ready to scale.</span>
            </h1>
            <p className="hero-description">
              I’m Sumit Kumar Bhagat, a Software Engineer focused on React
              Native development, complemented by full-stack MERN experience
              across APIs, databases, payments, realtime systems, and production
              application delivery.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my work <ArrowDownRight size={18} />
              </a>
              <a
                className="button button-secondary"
                href="./Sumit_Kumar_Bhagat_Resume.pdf"
                download
              >
                <Download size={18} /> Download resume
              </a>
            </div>
            <div className="hero-links" aria-label="Social profiles">
              <a href={contact.linkedin} target="_blank" rel="noreferrer">
                <LinkedInIcon size={18} /> LinkedIn
              </a>
              <a href={contact.github} target="_blank" rel="noreferrer">
                <GitHubIcon size={18} /> GitHub
              </a>
              <a href={`mailto:${contact.email}`}>
                <Mail size={18} /> Email
              </a>
            </div>
          </div>

          <div
            className="hero-visual reveal"
            aria-label="Professional summary card"
          >
            <div className="code-window">
              <div className="window-bar">
                <span />
                <span />
                <span />
                <small>sumit.profile.ts</small>
              </div>
              <pre aria-hidden="true">
                <code>{`const engineer = {
  name: "Sumit Bhagat",
  role: "Software Engineer",
  focus: [
    "React Native",
    "Scalable UI",
    "Realtime Products"
  ],
  mindset: "Build. Improve. Ship."
};`}</code>
              </pre>
            </div>
            <div className="profile-orbit orbit-one">
              <Smartphone size={19} />
            </div>
            <div className="profile-orbit orbit-two">
              <Code2 size={19} />
            </div>
            <div className="profile-orbit orbit-three">
              <Sparkles size={19} />
            </div>
            <div className="experience-badge">
              <strong>10+</strong>
              <span>Products & platforms</span>
            </div>
          </div>
        </section>

        <section className="metrics" aria-label="Career highlights">
          <article className="metric reveal">
            <strong>React Native</strong>
            <span>Primary engineering focus</span>
          </article>
          <article className="metric reveal">
            <strong>End-to-end</strong>
            <span>Frontend, APIs, database</span>
          </article>
          <article className="metric reveal">
            <strong>Realtime</strong>
            <span>Chat, calls, live workflows</span>
          </article>
          <article className="metric reveal">
            <strong>8.56 CGPA</strong>
            <span>B.Tech, RTU</span>
          </article>
        </section>

        <section className="section about-section" id="about">
          <SectionHeading
            eyebrow="01 / About"
            title="Engineering with a product mindset."
            description="I combine mobile-first execution with full-stack understanding, helping me reason beyond a single screen and build features that work reliably across the complete product flow."
          />

          <div className="about-grid">
            <article className="about-main reveal">
              <p className="large-copy">
                My work sits at the intersection of{" "}
                <strong>clean interface engineering</strong>,{" "}
                <strong>reliable data flow</strong>, and{" "}
                <strong>practical user experience</strong>.
              </p>
              <p>
                I enjoy converting product requirements into maintainable
                components, integrating complex services, and collaborating
                across teams to move features from idea to production. My
                project exposure includes social products, healthcare,
                marketplaces, reservations, location-based utilities, and
                professional networking.
              </p>
              <div className="about-details">
                <div>
                  <MapPin size={18} />
                  <span>
                    <small>Based in</small>Jaipur, India
                  </span>
                </div>
                <div>
                  <BriefcaseBusiness size={18} />
                  <span>
                    <small>Current role</small>Associate Software Engineer
                  </span>
                </div>
                <div>
                  <GraduationCap size={18} />
                  <span>
                    <small>Education</small>B.Tech, RTU
                  </span>
                </div>
              </div>
            </article>

            <aside className="about-sidebar reveal">
              <p className="eyebrow">What I bring</p>
              {[
                "Cross-platform mobile application development",
                "Reusable component architecture and design consistency",
                "REST API, payment, realtime, and Firebase integrations",
                "Full-stack understanding of Node, Express, and MongoDB",
              ].map((item) => (
                <div className="value-item" key={item}>
                  <span>
                    <Check size={15} />
                  </span>
                  <p>{item}</p>
                </div>
              ))}
            </aside>
          </div>
        </section>

        <section className="section skills-section">
          <SectionHeading
            eyebrow="02 / Capabilities"
            title="A focused stack for shipping complete products."
            description="Tools are selected around the problem: responsive interfaces, maintainable state, secure data exchange, and realtime user experiences."
          />
          <div className="skills-grid">
            {skills.map(({ title, icon: Icon, items }) => (
              <article className="skill-card reveal" key={title}>
                <div className="skill-icon">
                  <Icon size={22} />
                </div>
                <h3>{title}</h3>
                <div className="skill-tags">
                  {items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section experience-section" id="experience">
          <SectionHeading
            eyebrow="03 / Experience"
            title="Building, collaborating, and shipping."
            description="Professional experience across mobile engineering and full-stack product development in Jaipur-based software teams."
          />

          <div className="timeline">
            {experience.map((item, index) => (
              <article className="timeline-item reveal" key={item.company}>
                <div className="timeline-marker">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="timeline-content">
                  <div className="timeline-topline">
                    <div>
                      <p className="company">{item.company}</p>
                      <h3>{item.role}</h3>
                    </div>
                    <div className="timeline-meta">
                      <span>
                        <CalendarDays size={15} />
                        {item.period}
                      </span>
                      <span>
                        <MapPin size={15} />
                        {item.location}
                      </span>
                    </div>
                  </div>
                  <p className="timeline-summary">{item.summary}</p>
                  <div className="achievement-grid">
                    {item.achievements.map((achievement) => (
                      <div key={achievement}>
                        <ChevronRight size={16} />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <SectionHeading
            eyebrow="04 / Selected Work"
            title="Products across communities, healthcare, services, and utilities."
            description="A selection of projects that reflect my experience with mobile workflows, realtime features, integrations, role-based systems, and scalable product architecture."
          />

          <div className="featured-projects">
            {projects
              .filter((project) => project.featured)
              .map((project) => (
                <article className="project-card reveal" key={project.name}>
                  <div className="project-card-top">
                    <span className="project-number">{project.number}</span>
                    <ArrowUpRight size={21} />
                  </div>
                  <p className="project-type">{project.type}</p>
                  <h3>{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </article>
              ))}
          </div>

          <div className="more-projects reveal">
            <div className="more-projects-heading">
              <div>
                <p className="eyebrow">More products</p>
                <h3>Additional project experience</h3>
              </div>
              <span>
                {projects.filter((project) => !project.featured).length}{" "}
                projects
              </span>
            </div>
            <div className="more-project-list">
              {projects
                .filter((project) => !project.featured)
                .map((project) => (
                  <article key={project.name}>
                    <span className="project-number">{project.number}</span>
                    <div>
                      <h4>{project.name}</h4>
                      <p>{project.description}</p>
                    </div>
                    <div className="compact-tags">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </article>
                ))}
            </div>
          </div>
        </section>

        <section className="section education-section">
          <SectionHeading
            eyebrow="05 / Education"
            title="A strong analytical foundation."
            description="My engineering education developed structured problem-solving habits that now support my work in software architecture, debugging, and product development."
          />
          <article className="education-card reveal">
            <div className="education-icon">
              <GraduationCap size={29} />
            </div>
            <div>
              <p>2019 — 2023</p>
              <h3>Bachelor of Technology in Mechanical Engineering</h3>
              <span>Rajasthan Technical University</span>
            </div>
            <div className="cgpa">
              <strong>8.56</strong>
              <span>CGPA</span>
            </div>
          </article>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-copy reveal">
            <p className="eyebrow">06 / Contact</p>
            <h2>Let’s build something users enjoy coming back to.</h2>
            <p>
              I’m interested in React Native, frontend, and full-stack
              opportunities where quality engineering, learning, and real
              product ownership matter.
            </p>
            <a
              className="button button-primary"
              href={`mailto:${contact.email}`}
            >
              Start a conversation <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="contact-card reveal">
            <a href={`mailto:${contact.email}`}>
              <span>
                <Mail size={19} />
              </span>
              <div>
                <small>Email</small>
                <strong>{contact.email}</strong>
              </div>
              <ArrowUpRight size={18} />
            </a>
            <a href={`tel:${contact.phone.replace(/\s/g, "")}`}>
              <span>
                <Phone size={19} />
              </span>
              <div>
                <small>Phone</small>
                <strong>{contact.phone}</strong>
              </div>
              <ArrowUpRight size={18} />
            </a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer">
              <span>
                <LinkedInIcon size={19} />
              </span>
              <div>
                <small>LinkedIn</small>
                <strong>linkedin.com/in/bhagat987</strong>
              </div>
              <ArrowUpRight size={18} />
            </a>
            <a href={contact.github} target="_blank" rel="noreferrer">
              <span>
                <GitHubIcon size={19} />
              </span>
              <div>
                <small>GitHub</small>
                <strong>github.com/bhagat272</strong>
              </div>
              <ArrowUpRight size={18} />
            </a>
          </div>
        </section>
      </main>

      <footer>
        <a className="brand footer-brand" href="#top">
          <span className="brand-mark">SB</span>
          <span className="brand-copy">
            <strong>Sumit Bhagat</strong>
            <small>Software Engineer</small>
          </span>
        </a>
        <p>Designed and built with React.</p>
        <div>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedInIcon size={18} />
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <GitHubIcon size={18} />
          </a>
          <a href={`mailto:${contact.email}`} aria-label="Email">
            <MessageCircle size={18} />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
