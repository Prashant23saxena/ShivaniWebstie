"use client";

import {
  ArrowDownToLine,
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Boxes,
  CircleDollarSign,
  CircleUserRound,
  Cuboid,
  FileText,
  Github,
  GraduationCap,
  HeartHandshake,
  Linkedin,
  Mail,
  Menu,
  MessageCircle,
  Network,
  Route,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { label: "Home", id: "home" },
  { label: "Strategy", id: "strategy" },
  { label: "Work", id: "work" },
  { label: "About Me", id: "about-me" },
];

const capabilities = [
  { label: "Supply Chain Strategy", description: "End-to-end choices that connect service, cost, resilience and growth.", icon: Route },
  { label: "Network Design & Optimization", description: "Footprint, flow and capacity decisions grounded in real operating constraints.", icon: Network },
  { label: "Cost Transformation & Efficiency", description: "Fact-based levers that turn cost ambition into measurable, owned action.", icon: CircleDollarSign },
  { label: "Market & Competitive Intelligence", description: "Clear market signals that reveal where to play and how to win.", icon: Boxes },
  { label: "Business Strategy & Growth", description: "Focused growth choices supported by economics, capabilities and decision gates.", icon: TrendingUp },
  { label: "Stakeholder Management", description: "Shared facts, forums and narratives that help complex organizations move.", icon: Users },
];

const strategicCapabilities = [
  {
    title: "Frame the real problem",
    summary: "Turn ambiguity into a precise question, evidence base and decision path.",
  },
  {
    title: "Read the operating system",
    summary: "Connect network, supplier, inventory and execution constraints to business outcomes.",
  },
  {
    title: "Make the strategic choice",
    summary: "Move from market and internal evidence to a clear view on where and how to compete.",
  },
  {
    title: "Align the organization",
    summary: "Create the facts, forums and narratives that let complex organizations decide and move.",
  },
  {
    title: "Build execution momentum",
    summary: "Use decision tools and routines that keep progress, risk and ownership visible.",
  },
  {
    title: "Make the change stick",
    summary: "Embed ownership, capabilities and feedback loops so impact lasts beyond the initial program.",
  },
];

const selectedWork = [
  {
    year: "2018–22",
    client: "Industry foundation",
    title: "Operating from the ground up",
    short: "Built practical depth across logistics, warehousing and execution.",
    metric: "4+ years",
    context: "An operating role close to day-to-day supply chain realities.",
    work: "Owned analyses and improvement efforts spanning logistics and production operations.",
    outcome: "A durable operator’s lens that now sharpens strategy work.",
  },
  {
    year: "2024",
    client: "Client A · Logistics",
    title: "Warehouse productivity",
    short: "Diagnosed productivity and automation opportunities across operations.",
    metric: "₹XX Cr",
    context: "A national logistics player wanted to reset a major cost base.",
    work: "Combined site observation, activity analysis and leadership interviews.",
    outcome: "Created a quantified pipeline and a practical sequence for execution.",
  },
  {
    year: "2024–25",
    client: "Client B · Financial services",
    title: "Growth engine redesign",
    short: "Built a repeatable growth and adoption mechanism across branches.",
    metric: "XXX+ sites",
    context: "Growth was constrained by inconsistent sourcing and process discipline.",
    work: "Designed the pilot, reporting logic, field routines and scale-up playbook.",
    outcome: "Secured leadership alignment for a broader rollout.",
  },
  {
    year: "2025",
    client: "Client C · Manufacturing",
    title: "Procurement acceleration",
    short: "Converted scattered initiatives into an owned savings program.",
    metric: "₹X Cr",
    context: "Savings ideas existed, but lacked pace, evidence and accountability.",
    work: "Structured levers, validated economics and installed governance.",
    outcome: "Fast-tracked delivery and improved visibility of the pipeline.",
  },
  {
    year: "2025–26",
    client: "Client D · Aerospace",
    title: "Supply chain recovery",
    short: "Coordinated a multi-site recovery plan for a complex program.",
    metric: "XXK units",
    context: "Fragmented bottlenecks were threatening delivery assurance.",
    work: "Synthesized hundreds of issues into priorities, owners and a burn-down plan.",
    outcome: "Created one leadership view and an execution-ready recovery mechanism.",
  },
];

const aboutTabs = [
  { label: "Education", icon: GraduationCap },
  { label: "Certifications", icon: BadgeCheck },
  { label: "Skills", icon: Cuboid },
  { label: "Extracurriculars", icon: HeartHandshake },
  { label: "Interests", icon: Sparkles },
  { label: "Resume", icon: FileText },
  { label: "Contact Me", icon: MessageCircle },
];

const education = [
  ["2018 – 2020", "MBA", "Indian Institute of Management, Indore", "Major: Strategy & Operations", "Top 10%"],
  ["2014 – 2018", "B.Tech in Mechanical Engineering", "Indian Institute of Technology, Kanpur", "Major: Mechanical Engineering", "Top 15%"],
  ["2012 – 2014", "Senior Secondary (XII)", "Delhi Public School, R.K. Puram", "CBSE", "95.2%"],
  ["2010 – 2012", "Secondary (X)", "Delhi Public School, R.K. Puram", "CBSE", "95.6%"],
];

const aboutContent: Record<string, { title: string; subtitle: string }[]> = {
  Certifications: [
    { title: "Advanced Supply Chain Analytics", subtitle: "Applied analytics for planning and network decisions" },
    { title: "Lean Six Sigma", subtitle: "Process excellence and structured problem solving" },
    { title: "Design Thinking", subtitle: "Human-centered innovation and prototyping" },
  ],
  Skills: [
    { title: "Strategy & Transformation", subtitle: "Growth strategy, operating models, value delivery" },
    { title: "Supply Chain", subtitle: "Planning, logistics, network design, cost-to-serve" },
    { title: "Leadership", subtitle: "Executive communication, facilitation, team development" },
  ],
  Extracurriculars: [
    { title: "Mentorship", subtitle: "Supporting early-career consultants and students" },
    { title: "Case Competitions", subtitle: "Coaching teams on structured problem solving" },
    { title: "Community Initiatives", subtitle: "Volunteering on education and employability programs" },
  ],
  Interests: [
    { title: "Behavioral Economics", subtitle: "How people make decisions in complex systems" },
    { title: "Travel & Culture", subtitle: "Learning through places, food, and conversation" },
    { title: "Distance Running", subtitle: "Patience, rhythm, and the occasional questionable sunrise" },
  ],
};

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState("Home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [workIndex, setWorkIndex] = useState(0);
  const [aboutTab, setAboutTab] = useState("Education");
  const workTrackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          const label = visible.target.getAttribute("data-nav");
          if (label) setActive(label);
        }
      },
      { threshold: [0.3, 0.55, 0.75] }
    );
    document.querySelectorAll("[data-nav]").forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const scrollTrack = (ref: React.RefObject<HTMLDivElement | null>, direction: number) => {
    ref.current?.scrollBy({ left: direction * Math.min(ref.current.clientWidth * 0.72, 620), behavior: "smooth" });
  };

  const openResume = () => {
    setAboutTab("Resume");
    scrollTo("about-me");
  };

  return (
    <main>
      <header className="site-header">
        <button className="monogram" onClick={() => scrollTo("home")} aria-label="Go home">
          AR.
        </button>
        <nav className={mobileOpen ? "nav-open" : ""}>
          {navItems.map((item) => (
            <button
              key={item.id}
              className={active === item.label ? "nav-active" : ""}
              onClick={() => scrollTo(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
        <button className="resume-button" onClick={openResume}>
          Resume
        </button>
        <button className="menu-button" onClick={() => setMobileOpen((value) => !value)} aria-label="Toggle menu">
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </header>

      <section id="home" data-nav="Home" className="section home-section">
        <div className="home-grid">
          <Reveal className="hero-copy">
            <p className="eyebrow">Hello, I&apos;m</p>
            <h1>Anirudh<br />Rastogi</h1>
            <p className="intro">
              Management Consultant with a passion for solving complex problems in Supply Chain and driving impactful strategic decisions.
            </p>
          </Reveal>

          <Reveal delay={0.12} className="portrait-wrap">
            <div className="portrait-placeholder">
              <CircleUserRound size={72} strokeWidth={0.8} />
              <span>Portrait placeholder</span>
            </div>
          </Reveal>

          <Reveal delay={0.22} className="profile-points">
            {[
              [BriefcaseBusiness, "2+", "Years at McKinsey & Company"],
              [Cuboid, "Supply Chain Strategy", "Domain Expertise"],
              [Target, "Strategy Consulting", "Core Focus"],
              [CircleUserRound, "Problem Solver\nStrategic Thinker\nImpact Driven", "My Approach"],
            ].map(([Icon, title, subtitle]) => {
              const PointIcon = Icon as typeof Target;
              return (
                <motion.div className="profile-point" whileHover={{ x: 6 }} key={String(title)}>
                  <PointIcon size={25} strokeWidth={1.25} />
                  <div>
                    <strong>{String(title).split("\n").map((line) => <span key={line}>{line}</span>)}</strong>
                    <small>{String(subtitle)}</small>
                  </div>
                </motion.div>
              );
            })}
          </Reveal>
        </div>

        <Reveal className="capability-area">
          <p className="eyebrow">Core skills & capabilities</p>
          <div className="capability-grid">
            {capabilities.map(({ label, description, icon: Icon }, index) => (
              <motion.button
                key={label}
                className="capability"
                whileHover={{ scale: 1.22, zIndex: 8, borderColor: "#ad9474" }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <Icon size={20} strokeWidth={1.25} />
                <span className="capability-copy">
                  <strong>{label}</strong>
                  <small>{description}</small>
                </span>
                <i>{String(index + 1).padStart(2, "0")}</i>
              </motion.button>
            ))}
          </div>
          <p className="hover-note">Hover on a skill to learn more <Route size={18} /></p>
        </Reveal>
      </section>

      <section id="strategy" data-nav="Strategy" className="section editorial-section strategy-section">
        <Reveal className="editorial-heading">
          <span className="section-number">01 / Strategic traction</span>
          <div>
            <h2>Six ways I create strategic traction.</h2>
            <p>Six complementary moves that turn ambiguity into decisions, alignment and sustained execution.</p>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="strategy-matrix">
            {strategicCapabilities.map((item, index) => (
              <motion.article
                key={item.title}
                className="strategy-card"
                whileHover={{ y: -5, borderColor: "#a88c6a" }}
              >
                <span>0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
              </motion.article>
            ))}
        </Reveal>
      </section>

      <section id="work" data-nav="Work" className="section editorial-section selected-work-section">
        <Reveal className="editorial-heading">
          <span className="section-number">02 / Selected work</span>
          <div>
            <h2>A left-to-right journey through complex mandates.</h2>
            <p>Client identities and exact figures are masked for now. Select a chapter to expand the story below.</p>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="scroll-interface">
          <div className="scroll-controls">
            <span>Scroll selected work</span>
            <div>
              <button aria-label="Scroll work left" onClick={() => scrollTrack(workTrackRef, -1)}><ArrowLeft size={17} /></button>
              <button aria-label="Scroll work right" onClick={() => scrollTrack(workTrackRef, 1)}><ArrowRight size={17} /></button>
            </div>
          </div>
          <div className="work-timeline-track" ref={workTrackRef}>
            {selectedWork.map((project, index) => (
              <button
                key={project.title}
                className={workIndex === index ? "work-chapter chapter-selected" : "work-chapter"}
                onClick={() => setWorkIndex(index)}
                aria-pressed={workIndex === index}
              >
                <span className="chapter-year">{project.year}</span>
                <i />
                <small>{project.client}</small>
                <h3>{project.title}</h3>
                <p>{project.short}</p>
                <b>Open chapter +</b>
              </button>
            ))}
          </div>
        </Reveal>

        <AnimatePresence mode="wait">
          <motion.div
            className="work-detail"
            key={workIndex}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <div>
              <span>{selectedWork[workIndex].client} · {selectedWork[workIndex].year}</span>
              <strong>{selectedWork[workIndex].metric}</strong>
            </div>
            <div>
              <span>Mandate and my work</span>
              <p>{selectedWork[workIndex].context} {selectedWork[workIndex].work}</p>
            </div>
            <div>
              <span>What changed</span>
              <p>{selectedWork[workIndex].outcome}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      <section id="about-me" data-nav="About Me" className="section about-section">
        <div className="about-sidebar">
          <Reveal>
            <p className="eyebrow">About me</p>
            <h2>Education, certifications,<br />skills and everything<br />that shapes me.</h2>
          </Reveal>
          <Reveal delay={0.1} className="about-tabs">
            {aboutTabs.map(({ label, icon: Icon }) => (
              <button key={label} className={aboutTab === label ? "about-active" : ""} onClick={() => setAboutTab(label)}>
                <Icon size={18} strokeWidth={1.25} /> {label}
              </button>
            ))}
          </Reveal>
        </div>

        <div className="about-detail">
          <AnimatePresence mode="wait">
            {aboutTab === "Education" ? (
              <motion.div
                key="education"
                className="education-timeline"
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -18 }}
              >
                {education.map(([year, degree, school, detail, score]) => (
                  <div className="education-item" key={degree}>
                    <i />
                    <span className="education-year">{year}</span>
                    <div>
                      <h3>{degree}</h3>
                      <strong>{school}</strong>
                      <p>{detail}</p>
                    </div>
                    <span className="score">{score}</span>
                  </div>
                ))}
              </motion.div>
            ) : aboutTab === "Resume" ? (
              <motion.div
                key="resume"
                className="resume-panel"
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -18 }}
              >
                <div className="resume-panel-heading">
                  <div>
                    <p className="eyebrow">Resume</p>
                    <h3>Experience at a glance.</h3>
                    <p>Preview the current resume draft here. The final document can replace this placeholder later.</p>
                  </div>
                  <a href="/anirudh-rastogi-resume.html" download>
                    Download Resume <ArrowDownToLine size={16} />
                  </a>
                </div>
                <iframe title="Anirudh Rastogi resume preview" src="/anirudh-rastogi-resume.html" />
              </motion.div>
            ) : aboutTab === "Contact Me" ? (
              <motion.div
                key="contact"
                className="contact-panel"
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -18 }}
              >
                <p className="eyebrow">Contact me</p>
                <h3>Let&apos;s start a thoughtful conversation.</h3>
                <p>For strategy, transformation, supply chain or collaboration opportunities, reach out through any of the channels below.</p>
                <div className="contact-options">
                  <a href="mailto:hello@example.com"><Mail size={19} /><span><small>Email</small>hello@example.com</span><ArrowRight size={17} /></a>
                  <a href="#" onClick={(event) => event.preventDefault()}><Linkedin size={19} /><span><small>LinkedIn</small>Connect professionally</span><ArrowRight size={17} /></a>
                  <a href="#" onClick={(event) => event.preventDefault()}><MessageCircle size={19} /><span><small>Availability</small>Open to conversations</span><ArrowRight size={17} /></a>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={aboutTab}
                className="about-list"
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -18 }}
              >
                <p className="eyebrow">{aboutTab}</p>
                <h3>A little more of the picture.</h3>
                {aboutContent[aboutTab].map((item, index) => (
                  <motion.article
                    key={item.title}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                  >
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <div><h4>{item.title}</h4><p>{item.subtitle}</p></div>
                    <ArrowRight size={17} />
                  </motion.article>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <footer>
        <p>Designed with purpose. Built to create impact.</p>
        <div>
          <a href="#" aria-label="LinkedIn" onClick={(e) => e.preventDefault()}><Linkedin size={20} /></a>
          <a href="mailto:hello@example.com" aria-label="Email"><Mail size={20} /></a>
          <a href="#" aria-label="Github" onClick={(e) => e.preventDefault()}><Github size={20} /></a>
        </div>
      </footer>
    </main>
  );
}
