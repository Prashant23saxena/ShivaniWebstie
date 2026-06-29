"use client";

import {
  ArrowDownToLine,
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Boxes,
  CircleDollarSign,
  Cuboid,
  FileText,
  GraduationCap,
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
  WandSparkles,
  X,
} from "lucide-react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import styles from "./PortfolioV2.module.css";
import v4 from "./PortfolioV4.module.css";

const navItems = [
  { label: "Home", id: "home" },
  { label: "Strategy", id: "strategy" },
  { label: "Work", id: "work" },
  { label: "About Me", id: "about-me" },
];

const capabilities = [
  {
    label: "Structured Problem Solving",
    description: "Converts complex, dispersed information into a clear problem frame, decision tree and execution path.",
    icon: Route,
  },
  {
    label: "Stakeholder Alignment",
    description: "Builds shared facts, decision forums and communication rhythms across clients, leaders and cross-functional teams.",
    icon: Users,
  },
  {
    label: "Supply Chain Expertise",
    description: "Works across logistics, warehousing, sourcing, planning and manufacturing operations with an operator’s lens.",
    icon: Network,
  },
  {
    label: "AI-enabled Automation",
    description: "Uses analytics, dashboards and emerging technology to automate repetitive work and augment decision-making.",
    icon: WandSparkles,
  },
  {
    label: "Implementation Discipline",
    description: "Moves recommendations into action through initiative tracking, governance, ownership and cadence management.",
    icon: Target,
  },
  {
    label: "Cost & Productivity Transformation",
    description: "Identifies and delivers measurable levers across cost, productivity, process discipline and operating efficiency.",
    icon: CircleDollarSign,
  },
];

const strategicCapabilities = [
  { title: "Diagnose the operating reality", summary: "Start with Gemba walks, interviews, data cuts and process observation to see where work actually breaks." },
  { title: "Frame the decision problem", summary: "Turn ambiguity into a concise problem statement, fact base, hypotheses and prioritization logic." },
  { title: "Design the solution architecture", summary: "Translate the diagnosis into levers, business cases, operating routines and practical implementation choices." },
  { title: "Align decision makers", summary: "Create workshops, narratives and evidence-backed forums that help senior stakeholders choose and commit." },
  { title: "Run execution cadence", summary: "Install tracking, owners, dashboards and escalation routines so initiatives keep moving after the workshop." },
  { title: "Scale and embed impact", summary: "Convert pilots into repeatable playbooks, capability building and routines that sustain value over time." },
];

const selectedWork = [
  {
    year: "2018–22",
    company: "Mahindra Logistics",
    industry: "Logistics & supply chain operations",
    title: "Business excellence and automation foundation",
    short: "Built operating depth across productivity, cost-saving, automation and logistics transformation programs.",
    metric: "4+ years",
    problem: "Company-wide productivity and cost-saving ideas needed a structured mechanism for adoption, tracking and execution across business verticals.",
    role: "Designed and executed Idea Network, launched PULSE across seven verticals, supported emerging-tech opportunities across IoT, AI, UAV and AR/VR, and helped shape an automation fund framework.",
    impact: "Built a practical operator’s lens before consulting, with recognized work including a CII Gold Award for Industry 4.0 and successful AR/VR implementation for an e-commerce client.",
  },
  {
    year: "2024",
    company: "Jubilant Ingrevia",
    industry: "Chemicals manufacturing · procurement",
    title: "Procurement savings and execution acceleration",
    short: "Led procurement initiatives across logistics, warehousing and MRO with tight execution governance.",
    metric: "~₹4 Cr delivered",
    problem: "Savings levers existed across logistics, warehousing and MRO, but needed sharper sizing, ownership, PMO rhythm and implementation pace.",
    role: "Led 9+ Capex and non-Capex initiatives, built daily trackers, validated savings levers with business heads, and supported Steering Committee documents.",
    impact: "Created ₹9 Cr+ line of sight and delivered ~₹4 Cr savings within two months while strengthening PMO ownership and implementation governance.",
  },
  {
    year: "2024",
    company: "TVS SCS",
    industry: "3PL logistics · warehousing productivity",
    title: "Warehousing diagnostic and automation pipeline",
    short: "Diagnosed productivity, automation and subcontracted manpower opportunities across warehouse operations.",
    metric: "₹18–28 Cr pipeline",
    problem: "The India warehousing cost base needed a grounded diagnostic across lease rentals, subcontracted manpower and productivity bottlenecks.",
    role: "Led the warehousing workstream through Gemba walks, time-motion studies, stakeholder interviews and site assessments across two key locations.",
    impact: "Identified 10+ productivity initiatives, 5+ automation levers, 2–3% labor-cost optimization and a ₹18–28 Cr improvement pipeline.",
  },
  {
    year: "2024–25",
    company: "Karur Vysya Bank",
    industry: "Banking · SME growth and process redesign",
    title: "SME growth engine design and scale-up",
    short: "Designed and scaled an analytics-led SME leads pilot and renewal process redesign.",
    metric: "850+ branches",
    problem: "The bank needed a repeatable mechanism to generate quality SME leads, improve branch adoption and redesign renewal processes without weakening risk controls.",
    role: "Designed the SME Leads Pilot, co-defined qualification parameters, institutionalized the Lead Management Portal across 150+ branches, and built scale-up playbooks.",
    impact: "Generated ~4,500 quality leads, enabled ~₹80 Cr logged leads and ~₹20 Cr disbursals, with scale-up guidelines for 850+ branches.",
  },
  {
    year: "2025",
    company: "TASL",
    industry: "Aerospace manufacturing · delivery assurance",
    title: "Operational delivery diagnostic",
    short: "Identified execution bottlenecks across planning, engineering, supply chain, quality and shopfloor rhythms.",
    metric: "20+ initiatives",
    problem: "Delivery execution issues were fragmented across PPC, engineering, supply chain, quality and shopfloor review mechanisms.",
    role: "Conducted 10+ cross-functional stakeholder interviews, integrated into daily reviews and built macro-enabled dashboards for engineering visibility.",
    impact: "Identified 20+ initiatives and reduced report preparation from hours to minutes, freeing teams to focus on issue resolution.",
  },
  {
    year: "2025–26",
    company: "Mahindra Automotive Development",
    industry: "Automotive product development · launch risk",
    title: "Vehicle program risk management",
    short: "Translated component-level VES and software risks into vehicle-level launch readiness insights.",
    metric: "5 launches",
    problem: "Upcoming vehicle platform launches needed proactive visibility into cascading timeline, cost and performance risks across siloed component teams.",
    role: "Led VES and software risk management across five vehicle programs, independently coordinating 25–30+ stakeholders and leadership forums.",
    impact: "Improved visibility of cross-functional launch risks, supported faster joint resolution and strengthened leadership decision-making for launch readiness.",
  },
];

const aboutTabs = [
  { label: "Education", icon: GraduationCap },
  { label: "Certifications", icon: BadgeCheck },
  { label: "Skills", icon: Cuboid },
  { label: "Interests", icon: Sparkles },
  { label: "Resume", icon: FileText },
  { label: "Contact Me", icon: MessageCircle },
];

const education = [
  [
    "2022 – 2024",
    "MBA — International Business",
    "Indian Institute of Foreign Trade, Delhi",
    "Strategy, international business and cross-border commercial problem solving. Resume-confirmed; descriptive line to be refined.",
    "Review",
  ],
  [
    "2014 – 2018",
    "B.Tech — Production Engineering",
    "College of Engineering Pune, Pune",
    "Engineering foundation in production systems, manufacturing processes and operating discipline. Resume-confirmed; descriptive line to be refined.",
    "Review",
  ],
];

const aboutContent: Record<string, { title: string; subtitle: string; highlight?: boolean }[]> = {
  Certifications: [
    { title: "Lean / Six Sigma methodology exposure", subtitle: "Used in Mahindra Logistics’ Idea Network cost-savings initiative; exact certification name to confirm." },
    { title: "Industry 4.0 recognition", subtitle: "Gold Award at CII Championships Trophy for low-cost automation and digitization projects." },
    { title: "Additional certifications", subtitle: "Placeholder for certifications you want to add later from certificates or LinkedIn." },
  ],
  Skills: [
    { title: "Supply Chain Operations & Transformation", subtitle: "Logistics, warehousing, sourcing, MRO, planning and manufacturing operations." },
    { title: "Data-driven Problem Solving", subtitle: "Diagnostics, problem structuring, dashboarding, prioritization and business-case development." },
    { title: "Program & Change Management", subtitle: "Initiative tracking, governance, implementation cadence and cross-functional adoption." },
    { title: "Client Engagement & Workshop Facilitation", subtitle: "Stakeholder interviews, senior leadership workshops, CXO alignment and executive storytelling." },
  ],
  Interests: [
    { title: "Sports and swimming", subtitle: "Enthusiastic sports person; swimming achievements to be expanded once you share the exact details." },
    { title: "Photography", subtitle: "A creative lens for noticing composition, light and overlooked details." },
    { title: "Technology in operations", subtitle: "Interest in AI, automation and emerging tech that can make operating work sharper and faster." },
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

export default function PortfolioV4() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState("Home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [workIndex, setWorkIndex] = useState(0);
  const [aboutTab, setAboutTab] = useState("Education");
  const workTrackRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
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

  const scrollTrack = (direction: number) => {
    workTrackRef.current?.scrollBy({ left: direction * Math.min(workTrackRef.current.clientWidth * 0.72, 620), behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <main className={`${styles.root} ${v4.root}`}>
      <a className={`${styles.compareChip} ${v4.compareChip}`} href="/v3">v4 · content draft → <b>back to v3 fields</b></a>
      <motion.div className={styles.progress} style={{ scaleX: progress }} aria-hidden />

      <header className={styles.header}>
        <button className={styles.monogram} onClick={() => scrollTo("home")} aria-label="Go home">
          ST.
        </button>
        <nav className={styles.desktopNav}>
          {navItems.map((item) => (
            <button key={item.id} className={`${styles.navBtn} ${active === item.label ? styles.navActive : ""}`} onClick={() => scrollTo(item.id)}>
              {item.label}
            </button>
          ))}
        </nav>
        <button className={styles.menuButton} onClick={() => setMobileOpen((value) => !value)} aria-label="Toggle menu" aria-expanded={mobileOpen}>
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav className={styles.mobileNav} initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}>
            {navItems.map((item) => (
              <button key={item.id} className={`${styles.mobileNavBtn} ${active === item.label ? styles.navActive : ""}`} onClick={() => scrollTo(item.id)}>
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
            <h1>Shivani<br />Tidke</h1>
            <p className={styles.intro}>
              Strategy and operations professional specializing in supply chain transformation across the full journey — from diagnostic workshops and solution design to implementation, governance and measurable impact.
            </p>
          </Reveal>

          <Reveal delay={0.12} className={`${styles.portraitWrap} ${v4.portraitWrap}`}>
            <div className={`${styles.portraitPlaceholder} ${v4.portraitPhoto}`}>
              <img src="/shivani-profile-photo.jpeg" alt="Shivani Tidke" />
            </div>
          </Reveal>

          <Reveal delay={0.22} className={`${styles.profilePoints} ${v4.profilePoints}`}>
            {[
              [BriefcaseBusiness, "~6 years", "Strategy creation and execution"],
              [Cuboid, "Supply Chain", "Primary domain"],
              [Boxes, "Manufacturing & Logistics", "Operating context"],
            ].map(([Icon, title, subtitle]) => {
              const PointIcon = Icon as typeof Target;
              return (
                <motion.div className={styles.profilePoint} whileHover={reduce ? undefined : { x: 6 }} key={String(title)}>
                  <PointIcon size={25} strokeWidth={1.25} />
                  <div>
                    <strong>{String(title)}</strong>
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
              <motion.button key={label} className={styles.capability} whileHover={reduce ? undefined : { scale: 1.04, zIndex: 8 }} transition={{ type: "spring", stiffness: 260, damping: 22 }}>
                <Icon size={20} strokeWidth={1.25} />
                <span className={styles.capabilityCopy}>
                  <strong>{label}</strong>
                  <small>{description}</small>
                </span>
                <i>{String(index + 1).padStart(2, "0")}</i>
              </motion.button>
            ))}
          </div>
        </Reveal>
      </section>

      <section id="strategy" data-nav="Strategy" className={`${styles.section} ${styles.editorialSection}`}>
        <Reveal className={`${styles.editorialHeading} ${v4.noSideLabel}`}>
          <div>
            <h2>Six moves I use to turn complex work into execution.</h2>
            <p>A practical strategy-to-implementation rhythm for moving from messy inputs to aligned decisions, owned initiatives and durable operating change.</p>
          </div>
        </Reveal>

        <Reveal delay={0.08} className={styles.strategyMatrix}>
          {strategicCapabilities.map((item, index) => (
            <motion.article key={item.title} className={styles.strategyCard} whileHover={reduce ? undefined : { y: -5 }}>
              <span>0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
            </motion.article>
          ))}
        </Reveal>
      </section>

      <section id="work" data-nav="Work" className={`${styles.section} ${styles.editorialSection}`}>
        <Reveal className={`${styles.editorialHeading} ${v4.noSideLabel} ${v4.workHeading}`}>
          <div>
            <h2>From operating depth to strategy-led transformation.</h2>
            <p>Selected examples from logistics, financial services and manufacturing. Some client names are masked, while resume-confirmed metrics are retained for review.</p>
          </div>
        </Reveal>

        <Reveal delay={0.08} className={styles.scrollInterface}>
          <div className={styles.scrollControls}>
            <span>Scroll selected work</span>
            <div>
              <button aria-label="Scroll work left" onClick={() => scrollTrack(-1)}><ArrowLeft size={17} /></button>
              <button aria-label="Scroll work right" onClick={() => scrollTrack(1)}><ArrowRight size={17} /></button>
            </div>
          </div>
          <div className={styles.workTimelineTrack} ref={workTrackRef}>
            {selectedWork.map((project, index) => (
              <button key={project.title} className={`${styles.workChapter} ${workIndex === index ? styles.chapterSelected : ""}`} onClick={() => setWorkIndex(index)} aria-pressed={workIndex === index}>
                <span className={styles.chapterYear}>{project.year}</span>
                <i />
                <small>{project.company}</small>
                <em>{project.industry}</em>
                <h3>{project.title}</h3>
                <p>{project.short}</p>
              </button>
            ))}
          </div>
        </Reveal>

        <AnimatePresence mode="wait">
          <motion.div className={styles.workDetail} key={workIndex} initial={reduce ? false : { opacity: 0, y: 16 }} animate={reduce ? undefined : { opacity: 1, y: 0 }} exit={reduce ? undefined : { opacity: 0, y: -10 }}>
            <div>
              <span>{selectedWork[workIndex].company} · {selectedWork[workIndex].industry} · {selectedWork[workIndex].year}</span>
              <strong>{selectedWork[workIndex].metric}</strong>
            </div>
            <div>
              <span>Problem statement</span>
              <p>{selectedWork[workIndex].problem}</p>
            </div>
            <div>
              <span>My role</span>
              <p>{selectedWork[workIndex].role}</p>
            </div>
            <div>
              <span>Impact</span>
              <p>{selectedWork[workIndex].impact}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      <section id="about-me" data-nav="About Me" className={`${styles.section} ${styles.aboutSection}`}>
        <div className={styles.aboutSidebar}>
          <Reveal>
            <p className={styles.eyebrow}>About me</p>
            <h2>Education, skills,<br />interests and the work<br />that shapes me.</h2>
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
              <motion.div key="education" className={styles.educationTimeline} initial={reduce ? false : { opacity: 0, x: 18 }} animate={reduce ? undefined : { opacity: 1, x: 0 }} exit={reduce ? undefined : { opacity: 0, x: -18 }}>
                {education.map(([year, degree, school, detail]) => (
                  <div className={styles.educationItem} key={degree}>
                    <i />
                    <span className={styles.educationYear}>{year}</span>
                    <div>
                      <h3>{degree}</h3>
                      <strong>{school}</strong>
                      <p>{detail}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : aboutTab === "Resume" ? (
              <motion.div key="resume" className={styles.resumePanel} initial={reduce ? false : { opacity: 0, x: 18 }} animate={reduce ? undefined : { opacity: 1, x: 0 }} exit={reduce ? undefined : { opacity: 0, x: -18 }}>
                <div className={`${styles.resumePanelHeading} ${v4.resumePanelHeading}`}>
                  <p className={styles.eyebrow}>Resume</p>
                  <a className={`${styles.btn} ${styles.btnSolid}`} href="/shivani-tidke-resume.pdf" download>
                    Download Resume <ArrowDownToLine size={16} />
                  </a>
                </div>
                <iframe className={v4.resumeFrame} title="Shivani Tidke resume preview" src="/shivani-tidke-resume.pdf#toolbar=0&navpanes=0&view=FitH" loading="lazy" />
              </motion.div>
            ) : aboutTab === "Contact Me" ? (
              <motion.div key="contact" className={styles.contactPanel} initial={reduce ? false : { opacity: 0, x: 18 }} animate={reduce ? undefined : { opacity: 1, x: 0 }} exit={reduce ? undefined : { opacity: 0, x: -18 }}>
                <p className={styles.eyebrow}>Contact me</p>
                <h3>Open to thoughtful conversations.</h3>
                <p className={v4.contactLead}>For strategy, supply chain transformation, operations, implementation or collaboration conversations, reach out by email. LinkedIn can be added once you share the final URL.</p>
                <div className={styles.contactOptions}>
                  <a href="mailto:shivanitidke@gmail.com"><Mail size={19} /><span><small>Email</small>shivanitidke@gmail.com</span><ArrowRight size={17} /></a>
                  <a href="https://www.linkedin.com/in/shivani-tidke-04596899/" target="_blank" rel="noreferrer"><Linkedin size={19} /><span><small>LinkedIn</small>linkedin.com/in/shivani-tidke-04596899</span><ArrowRight size={17} /></a>
                </div>
              </motion.div>
            ) : (
              <motion.div key={aboutTab} className={styles.aboutList} initial={reduce ? false : { opacity: 0, x: 18 }} animate={reduce ? undefined : { opacity: 1, x: 0 }} exit={reduce ? undefined : { opacity: 0, x: -18 }}>
                <p className={styles.eyebrow}>{aboutTab}</p>
                <h3>{aboutTab === "Certifications" ? "Credentials and recognitions to confirm." : aboutTab === "Skills" ? "Highlighted skills from the resume." : "A little more of the person behind the work."}</h3>
                {aboutContent[aboutTab].map((item, index) => (
                  <motion.article key={item.title} initial={reduce ? false : { opacity: 0, y: 12 }} animate={reduce ? undefined : { opacity: 1, y: 0 }} transition={{ delay: index * 0.08 }}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <div><h4>{item.title}</h4><p>{item.subtitle}</p></div>
                  </motion.article>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>Designed with purpose. Built to translate strategy into operating impact.</p>
        <div>
          <a href="https://www.linkedin.com/in/shivani-tidke-04596899/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></a>
          <a href="mailto:shivanitidke@gmail.com" aria-label="Email"><Mail size={20} /></a>
        </div>
      </footer>
    </main>
  );
}
