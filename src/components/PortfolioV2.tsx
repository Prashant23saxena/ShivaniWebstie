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
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import styles from "./PortfolioV2.module.css";

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
  { title: "Frame the real problem", summary: "Turn ambiguity into a precise question, evidence base and decision path." },
  { title: "Read the operating system", summary: "Connect network, supplier, inventory and execution constraints to business outcomes." },
  { title: "Make the strategic choice", summary: "Move from market and internal evidence to a clear view on where and how to compete." },
  { title: "Align the organization", summary: "Create the facts, forums and narratives that let complex organizations decide and move." },
  { title: "Build execution momentum", summary: "Use decision tools and routines that keep progress, risk and ownership visible." },
  { title: "Make the change stick", summary: "Embed ownership, capabilities and feedback loops so impact lasts beyond the initial program." },
];

const selectedWork = [
  { year: "2018–22", client: "Industry foundation", title: "Operating from the ground up", short: "Built practical depth across logistics, warehousing and execution.", metric: "4+ years", context: "An operating role close to day-to-day supply chain realities.", work: "Owned analyses and improvement efforts spanning logistics and production operations.", outcome: "A durable operator’s lens that now sharpens strategy work." },
  { year: "2024", client: "Client A · Logistics", title: "Warehouse productivity", short: "Diagnosed productivity and automation opportunities across operations.", metric: "₹XX Cr", context: "A national logistics player wanted to reset a major cost base.", work: "Combined site observation, activity analysis and leadership interviews.", outcome: "Created a quantified pipeline and a practical sequence for execution." },
  { year: "2024–25", client: "Client B · Financial services", title: "Growth engine redesign", short: "Built a repeatable growth and adoption mechanism across branches.", metric: "XXX+ sites", context: "Growth was constrained by inconsistent sourcing and process discipline.", work: "Designed the pilot, reporting logic, field routines and scale-up playbook.", outcome: "Secured leadership alignment for a broader rollout." },
  { year: "2025", client: "Client C · Manufacturing", title: "Procurement acceleration", short: "Converted scattered initiatives into an owned savings program.", metric: "₹X Cr", context: "Savings ideas existed, but lacked pace, evidence and accountability.", work: "Structured levers, validated economics and installed governance.", outcome: "Fast-tracked delivery and improved visibility of the pipeline." },
  { year: "2025–26", client: "Client D · Aerospace", title: "Supply chain recovery", short: "Coordinated a multi-site recovery plan for a complex program.", metric: "XXK units", context: "Fragmented bottlenecks were threatening delivery assurance.", work: "Synthesized hundreds of issues into priorities, owners and a burn-down plan.", outcome: "Created one leadership view and an execution-ready recovery mechanism." },
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
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function PortfolioV2() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState("Home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [workIndex, setWorkIndex] = useState(0);
  const [aboutTab, setAboutTab] = useState("Education");
  const workTrackRef = useRef<HTMLDivElement>(null);

  // Reading progress bar
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

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
    document.getElementById(id)?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
    setMobileOpen(false);
  };

  const scrollTrack = (ref: React.RefObject<HTMLDivElement | null>, direction: number) => {
    ref.current?.scrollBy({ left: direction * Math.min(ref.current.clientWidth * 0.72, 620), behavior: reduce ? "auto" : "smooth" });
  };

  const openResume = () => {
    setAboutTab("Resume");
    scrollTo("about-me");
  };

  return (
    <main className={styles.root}>
      <a className={styles.compareChip} href="/">v2 · refined → <b>back to v1</b></a>
      <motion.div className={styles.progress} style={{ scaleX: progress }} aria-hidden />

      <header className={styles.header}>
        <button className={styles.monogram} onClick={() => scrollTo("home")} aria-label="Go home">
          AR.
        </button>
        <nav className={styles.desktopNav}>
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`${styles.navBtn} ${active === item.label ? styles.navActive : ""}`}
              onClick={() => scrollTo(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
        <button className={`${styles.btn} ${styles.btnGhost} ${styles.resumeBtn}`} onClick={openResume}>
          Resume
        </button>
        <button className={styles.menuButton} onClick={() => setMobileOpen((value) => !value)} aria-label="Toggle menu" aria-expanded={mobileOpen}>
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            className={styles.mobileNav}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`${styles.mobileNavBtn} ${active === item.label ? styles.navActive : ""}`}
                onClick={() => scrollTo(item.id)}
              >
                {item.label}
              </button>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>

      <section id="home" data-nav="Home" className={styles.sectionHome}>
        <div className={styles.homeGrid}>
          <Reveal className={styles.heroCopy}>
            <p className={styles.eyebrow}>Hello, I&apos;m</p>
            <h1>Anirudh<br />Rastogi</h1>
            <p className={styles.intro}>
              Turning complex supply-chain and operating problems into clear decisions, aligned action and measurable results.
            </p>
          </Reveal>

          <Reveal delay={0.12} className={styles.portraitWrap}>
            <div className={styles.portraitPlaceholder}>
              <CircleUserRound size={72} strokeWidth={0.8} />
              <span>Portrait placeholder</span>
            </div>
          </Reveal>

          <Reveal delay={0.22} className={styles.profilePoints}>
            {[
              [BriefcaseBusiness, "2+", "Years at McKinsey & Company"],
              [Cuboid, "Supply Chain Strategy", "Domain Expertise"],
              [Target, "Strategy Consulting", "Core Focus"],
              [CircleUserRound, "Problem Solver\nStrategic Thinker\nImpact Driven", "My Approach"],
            ].map(([Icon, title, subtitle]) => {
              const PointIcon = Icon as typeof Target;
              return (
                <motion.div className={styles.profilePoint} whileHover={reduce ? undefined : { x: 6 }} key={String(title)}>
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

        <Reveal className={styles.capabilityArea}>
          <p className={styles.eyebrow}>Core skills & capabilities</p>
          <div className={styles.capabilityGrid}>
            {capabilities.map(({ label, description, icon: Icon }, index) => (
              <motion.button
                key={label}
                className={styles.capability}
                whileHover={reduce ? undefined : { scale: 1.04, zIndex: 8 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
              >
                <Icon size={20} strokeWidth={1.25} />
                <span className={styles.capabilityCopy}>
                  <strong>{label}</strong>
                  <small>{description}</small>
                </span>
                <i>{String(index + 1).padStart(2, "0")}</i>
              </motion.button>
            ))}
          </div>
          <p className={styles.hoverNote}>Hover on a skill to learn more <Route size={18} /></p>
        </Reveal>
      </section>

      <section id="strategy" data-nav="Strategy" className={`${styles.section} ${styles.editorialSection}`}>
        <Reveal className={styles.editorialHeading}>
          <span className={styles.sectionNumber}>01 / Strategic traction</span>
          <div>
            <h2>Six moves I use to turn strategy into action.</h2>
            <p>A practical operating system for moving from ambiguity to decisions, organizational alignment and sustained execution.</p>
          </div>
        </Reveal>

        <Reveal delay={0.08} className={styles.strategyMatrix}>
          {strategicCapabilities.map((item, index) => (
            <motion.article
              key={item.title}
              className={styles.strategyCard}
              whileHover={reduce ? undefined : { y: -5 }}
            >
              <span>0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
            </motion.article>
          ))}
        </Reveal>
      </section>

      <section id="work" data-nav="Work" className={`${styles.section} ${styles.editorialSection}`}>
        <Reveal className={styles.editorialHeading}>
          <span className={styles.sectionNumber}>02 / Selected work</span>
          <div>
            <h2>Complex mandates. Clearer choices. Measurable movement.</h2>
            <p>Explore selected work from operating foundations through transformation delivery. Client identities and exact figures remain masked.</p>
          </div>
        </Reveal>

        <Reveal delay={0.08} className={styles.scrollInterface}>
          <div className={styles.scrollControls}>
            <span>Scroll selected work</span>
            <div>
              <button aria-label="Scroll work left" onClick={() => scrollTrack(workTrackRef, -1)}><ArrowLeft size={17} /></button>
              <button aria-label="Scroll work right" onClick={() => scrollTrack(workTrackRef, 1)}><ArrowRight size={17} /></button>
            </div>
          </div>
          <div className={styles.workTimelineTrack} ref={workTrackRef}>
            {selectedWork.map((project, index) => (
              <button
                key={project.title}
                className={`${styles.workChapter} ${workIndex === index ? styles.chapterSelected : ""}`}
                onClick={() => setWorkIndex(index)}
                aria-pressed={workIndex === index}
              >
                <span className={styles.chapterYear}>{project.year}</span>
                <i />
                <small>{project.client}</small>
                <h3>{project.title}</h3>
                <p>{project.short}</p>
                <b>View case study +</b>
              </button>
            ))}
          </div>
        </Reveal>

        <AnimatePresence mode="wait">
          <motion.div
            className={styles.workDetail}
            key={workIndex}
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -10 }}
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

      <section id="about-me" data-nav="About Me" className={`${styles.section} ${styles.aboutSection}`}>
        <div className={styles.aboutSidebar}>
          <Reveal>
            <p className={styles.eyebrow}>About me</p>
            <h2>Education, certifications,<br />skills and everything<br />that shapes me.</h2>
          </Reveal>
          <Reveal delay={0.1} className={styles.aboutTabs}>
            {aboutTabs.map(({ label, icon: Icon }) => (
              <button key={label} className={`${styles.aboutTab} ${aboutTab === label ? styles.aboutActive : ""}`} onClick={() => setAboutTab(label)}>
                <Icon size={18} strokeWidth={1.25} /> {label}
              </button>
            ))}
          </Reveal>
        </div>

        <div className={styles.aboutDetail}>
          <AnimatePresence mode="wait">
            {aboutTab === "Education" ? (
              <motion.div
                key="education"
                className={styles.educationTimeline}
                initial={reduce ? false : { opacity: 0, x: 18 }}
                animate={reduce ? undefined : { opacity: 1, x: 0 }}
                exit={reduce ? undefined : { opacity: 0, x: -18 }}
              >
                {education.map(([year, degree, school, detail, score]) => (
                  <div className={styles.educationItem} key={degree}>
                    <i />
                    <span className={styles.educationYear}>{year}</span>
                    <div>
                      <h3>{degree}</h3>
                      <strong>{school}</strong>
                      <p>{detail}</p>
                    </div>
                    <span className={styles.score}>{score}</span>
                  </div>
                ))}
              </motion.div>
            ) : aboutTab === "Resume" ? (
              <motion.div
                key="resume"
                className={styles.resumePanel}
                initial={reduce ? false : { opacity: 0, x: 18 }}
                animate={reduce ? undefined : { opacity: 1, x: 0 }}
                exit={reduce ? undefined : { opacity: 0, x: -18 }}
              >
                <div className={styles.resumePanelHeading}>
                  <div>
                    <p className={styles.eyebrow}>Resume</p>
                    <h3>Experience at a glance.</h3>
                    <p>Preview the current resume draft here. The final document can replace this placeholder later.</p>
                  </div>
                  <a className={`${styles.btn} ${styles.btnSolid}`} href="/anirudh-rastogi-resume.html" download>
                    Download Resume <ArrowDownToLine size={16} />
                  </a>
                </div>
                <iframe title="Anirudh Rastogi resume preview" src="/anirudh-rastogi-resume.html" loading="lazy" />
              </motion.div>
            ) : aboutTab === "Contact Me" ? (
              <motion.div
                key="contact"
                className={styles.contactPanel}
                initial={reduce ? false : { opacity: 0, x: 18 }}
                animate={reduce ? undefined : { opacity: 1, x: 0 }}
                exit={reduce ? undefined : { opacity: 0, x: -18 }}
              >
                <p className={styles.eyebrow}>Contact me</p>
                <h3>Let&apos;s start a thoughtful conversation.</h3>
                <p>For strategy, transformation, supply chain or collaboration opportunities, reach out through any of the channels below.</p>
                <div className={styles.contactOptions}>
                  <a href="mailto:hello@example.com"><Mail size={19} /><span><small>Email</small>hello@example.com</span><ArrowRight size={17} /></a>
                  <a href="#" onClick={(event) => event.preventDefault()} aria-disabled="true"><Linkedin size={19} /><span><small>LinkedIn</small>Connect professionally</span><ArrowRight size={17} /></a>
                  <a href="#" onClick={(event) => event.preventDefault()} aria-disabled="true"><MessageCircle size={19} /><span><small>Availability</small>Open to conversations</span><ArrowRight size={17} /></a>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={aboutTab}
                className={styles.aboutList}
                initial={reduce ? false : { opacity: 0, x: 18 }}
                animate={reduce ? undefined : { opacity: 1, x: 0 }}
                exit={reduce ? undefined : { opacity: 0, x: -18 }}
              >
                <p className={styles.eyebrow}>{aboutTab}</p>
                <h3>A little more of the picture.</h3>
                {aboutContent[aboutTab].map((item, index) => (
                  <motion.article
                    key={item.title}
                    initial={reduce ? false : { opacity: 0, y: 12 }}
                    animate={reduce ? undefined : { opacity: 1, y: 0 }}
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

      <footer className={styles.footer}>
        <p>Designed with purpose. Built to create impact.</p>
        <div>
          <a href="#" aria-label="LinkedIn" onClick={(e) => e.preventDefault()} aria-disabled="true"><Linkedin size={20} /></a>
          <a href="mailto:hello@example.com" aria-label="Email"><Mail size={20} /></a>
          <a href="#" aria-label="Github" onClick={(e) => e.preventDefault()} aria-disabled="true"><Github size={20} /></a>
        </div>
      </footer>
    </main>
  );
}
