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
  GraduationCap,
  HeartHandshake,
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
import { formatFieldLabel } from "@/lib/v3FieldSchema";
import layout from "./PortfolioV2.module.css";
import map from "./PortfolioV3.module.css";

const navItems = [
  ["Home", "home"],
  ["Strategy", "strategy"],
  ["Work", "work"],
  ["About", "about-me"],
];

const coreCapabilities = [
  ["Supply-chain capability", "core_skill_01_title", "Short capability description", "core_skill_01_description", Route],
  ["Network capability", "core_skill_02_title", "Short capability description", "core_skill_02_description", Network],
  ["Cost capability", "core_skill_03_title", "Short capability description", "core_skill_03_description", CircleDollarSign],
  ["Market capability", "core_skill_04_title", "Short capability description", "core_skill_04_description", Boxes],
  ["Growth capability", "core_skill_05_title", "Short capability description", "core_skill_05_description", TrendingUp],
  ["Stakeholder capability", "core_skill_06_title", "Short capability description", "core_skill_06_description", Users],
] as const;

const strategyItems = Array.from({ length: 6 }, (_, index) => ({
  title: `Strategic method ${index + 1}`,
  titleKey: `strategy_0${index + 1}_title`,
  description: "One sentence explaining how this strategic method creates value.",
  descriptionKey: `strategy_0${index + 1}_description`,
}));

const workItems = Array.from({ length: 5 }, (_, index) => {
  const number = String(index + 1).padStart(2, "0");
  return {
    year: "Year or period",
    yearKey: `work_${number}_year`,
    client: "Client or industry label",
    clientKey: `work_${number}_client`,
    title: `Selected project ${index + 1}`,
    titleKey: `work_${number}_title`,
    summary: "One-sentence description of the mandate and contribution.",
    summaryKey: `work_${number}_summary`,
    metric: "Impact metric",
    metricKey: `work_${number}_metric`,
    mandate: "Short explanation of the mandate and the work completed.",
    mandateKey: `work_${number}_mandate`,
    outcome: "Short explanation of the measurable or strategic outcome.",
    outcomeKey: `work_${number}_outcome`,
  };
});

const aboutTabs = [
  ["Education", "about_tab_education", GraduationCap],
  ["Certifications", "about_tab_certifications", BadgeCheck],
  ["Skills", "about_tab_skills", Cuboid],
  ["Extracurriculars", "about_tab_extracurriculars", HeartHandshake],
  ["Interests", "about_tab_interests", Sparkles],
  ["Resume", "about_tab_resume", FileText],
  ["Contact", "about_tab_contact", MessageCircle],
] as const;

function Field({ name, block = false }: { name: string; block?: boolean }) {
  return <span className={`${map.field} ${block ? map.blockField : ""}`}>[{formatFieldLabel(name)}]</span>;
}

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  void delay;
  return <div className={className}>{children}</div>;
}

export default function PortfolioV3() {
  const [active, setActive] = useState("Home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [workIndex, setWorkIndex] = useState(0);
  const [aboutTab, setAboutTab] = useState("Education");
  const workTrackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        const label = visible?.target.getAttribute("data-nav");
        if (label) setActive(label);
      },
      { threshold: [0.35, 0.6] }
    );
    document.querySelectorAll("[data-nav]").forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const scrollWork = (direction: number) => {
    workTrackRef.current?.scrollBy({ left: direction * 600, behavior: "smooth" });
  };

  return (
    <main className={`${layout.root} ${map.root}`}>
      <header className={layout.header}>
        <button className={layout.monogram} onClick={() => scrollTo("home")}>
          ST.
        </button>
        <nav className={layout.desktopNav}>
          {navItems.map(([label, id]) => (
            <button key={id} className={`${layout.navBtn} ${active === label ? layout.navActive : ""}`} onClick={() => scrollTo(id)}>
              {label}
            </button>
          ))}
        </nav>
        <button className={`${layout.btn} ${layout.btnGhost} ${layout.resumeBtn}`} onClick={() => { setAboutTab("Resume"); scrollTo("about-me"); }}>
          Resume <Field name="header_resume_label" />
        </button>
        <button className={layout.menuButton} onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav className={layout.mobileNav} initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }}>
            {navItems.map(([label, id]) => (
              <button key={id} className={layout.mobileNavBtn} onClick={() => scrollTo(id)}>{label}</button>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>

      <section id="home" data-nav="Home" className={layout.sectionHome}>
        <div className={layout.homeGrid}>
          <Reveal className={layout.heroCopy}>
            <p className={layout.eyebrow}>Introductory greeting <Field name="hero_eyebrow" /></p>
            <h1>Username<Field name="hero_name" block /></h1>
            <p className={`${layout.intro} ${map.placeholder}`}>
              Professional positioning statement describing expertise, problems solved and intended impact.
              <Field name="hero_summary" block />
            </p>
          </Reveal>

          <Reveal className={layout.portraitWrap} delay={0.1}>
            <div className={layout.portraitPlaceholder}>
              <CircleUserRound size={72} strokeWidth={0.8} />
              <span>Portrait image <Field name="hero_portrait" block /></span>
            </div>
          </Reveal>

          <Reveal className={layout.profilePoints} delay={0.2}>
            {[
              [BriefcaseBusiness, "Experience metric", "profile_01_value", "Experience context", "profile_01_label"],
              [Cuboid, "Primary domain", "profile_02_value", "Domain context", "profile_02_label"],
              [Target, "Consulting focus", "profile_03_value", "Focus context", "profile_03_label"],
              [CircleUserRound, "Professional qualities", "profile_04_value", "Approach context", "profile_04_label"],
            ].map(([Icon, value, valueKey, label, labelKey]) => {
              const ProfileIcon = Icon as typeof Target;
              return (
                <div className={layout.profilePoint} key={String(valueKey)}>
                  <ProfileIcon size={25} strokeWidth={1.25} />
                  <div>
                    <strong>{String(value)} <Field name={String(valueKey)} /></strong>
                    <small>{String(label)} <Field name={String(labelKey)} /></small>
                  </div>
                </div>
              );
            })}
          </Reveal>
        </div>

        <Reveal className={layout.capabilityArea}>
          <p className={layout.eyebrow}>Core capability section <Field name="core_skills_heading" /></p>
          <div className={layout.capabilityGrid}>
            {coreCapabilities.map(([title, titleKey, description, descriptionKey, Icon], index) => (
              <div className={layout.capability} key={titleKey}>
                <Icon size={20} />
                <span className={layout.capabilityCopy}>
                  <strong>{title}<Field name={titleKey} block /></strong>
                  <small>{description}<Field name={descriptionKey} block /></small>
                </span>
                <i>{String(index + 1).padStart(2, "0")}</i>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section id="strategy" data-nav="Strategy" className={`${layout.section} ${layout.editorialSection}`}>
        <Reveal className={layout.editorialHeading}>
          <span className={layout.sectionNumber}>Section number and label <Field name="strategy_section_label" block /></span>
          <div>
            <h2>Strategy section headline<Field name="strategy_heading" block /></h2>
            <p>One sentence introducing the strategic framework.<Field name="strategy_intro" block /></p>
          </div>
        </Reveal>
        <Reveal className={layout.strategyMatrix}>
          {strategyItems.map((item, index) => (
            <article className={layout.strategyCard} key={item.titleKey}>
              <span>0{index + 1}</span>
              <h3>{item.title}<Field name={item.titleKey} block /></h3>
              <p>{item.description}<Field name={item.descriptionKey} block /></p>
            </article>
          ))}
        </Reveal>
      </section>

      <section id="work" data-nav="Work" className={`${layout.section} ${layout.editorialSection}`}>
        <Reveal className={layout.editorialHeading}>
          <span className={layout.sectionNumber}>Section number and label <Field name="work_section_label" block /></span>
          <div>
            <h2>Selected-work headline<Field name="work_heading" block /></h2>
            <p>One sentence explaining the selected-work collection and confidentiality note.<Field name="work_intro" block /></p>
          </div>
        </Reveal>
        <Reveal className={layout.scrollInterface}>
          <div className={layout.scrollControls}>
            <span>Timeline instruction <Field name="work_scroll_label" /></span>
            <div>
              <button onClick={() => scrollWork(-1)} aria-label="Scroll left"><ArrowLeft size={17} /></button>
              <button onClick={() => scrollWork(1)} aria-label="Scroll right"><ArrowRight size={17} /></button>
            </div>
          </div>
          <div className={layout.workTimelineTrack} ref={workTrackRef}>
            {workItems.map((project, index) => (
              <button
                className={`${layout.workChapter} ${workIndex === index ? layout.chapterSelected : ""}`}
                key={project.titleKey}
                onClick={() => setWorkIndex(index)}
              >
                <span className={layout.chapterYear}>{project.year}<Field name={project.yearKey} block /></span>
                <i />
                <small>{project.client}<Field name={project.clientKey} block /></small>
                <h3>{project.title}<Field name={project.titleKey} block /></h3>
                <p>{project.summary}<Field name={project.summaryKey} block /></p>
                <b>Case-study action <Field name="work_card_action_label" /></b>
              </button>
            ))}
          </div>
        </Reveal>
        <div className={layout.workDetail}>
          <div>
            <span>{workItems[workIndex].client}<Field name={workItems[workIndex].clientKey} block /></span>
            <strong>{workItems[workIndex].metric}<Field name={workItems[workIndex].metricKey} block /></strong>
          </div>
          <div>
            <span>Mandate heading <Field name="work_detail_mandate_label" /></span>
            <p>{workItems[workIndex].mandate}<Field name={workItems[workIndex].mandateKey} block /></p>
          </div>
          <div>
            <span>Outcome heading <Field name="work_detail_outcome_label" /></span>
            <p>{workItems[workIndex].outcome}<Field name={workItems[workIndex].outcomeKey} block /></p>
          </div>
        </div>
      </section>

      <section id="about-me" data-nav="About" className={`${layout.section} ${layout.aboutSection}`}>
        <div className={layout.aboutSidebar}>
          <p className={layout.eyebrow}>About section label <Field name="about_eyebrow" /></p>
          <h2>About-section headline<Field name="about_heading" block /></h2>
          <div className={layout.aboutTabs}>
            {aboutTabs.map(([label, key, Icon]) => (
              <button className={`${layout.aboutTab} ${aboutTab === label ? layout.aboutActive : ""}`} key={key} onClick={() => setAboutTab(label)}>
                <Icon size={18} /> {label}<Field name={key} />
              </button>
            ))}
          </div>
        </div>
        <div className={layout.aboutDetail}>
          <h3>{aboutTab} content heading <Field name={`about_${aboutTab.toLowerCase().replaceAll(" ", "_")}_heading`} /></h3>
          <p className={map.placeholder}>
            Content for the selected About subsection. Individual education, certification, skill, interest, resume and contact entries will use numbered keys.
            <Field name={`about_${aboutTab.toLowerCase().replaceAll(" ", "_")}_content`} block />
          </p>
          {aboutTab === "Education" && (
            <div className={layout.aboutList}>
              {[1, 2, 3, 4].map((number) => (
                <article key={number}>
                  <span>0{number}</span>
                  <div>
                    <h4>Education qualification <Field name={`education_0${number}_qualification`} /></h4>
                    <p>Institution, dates, specialization and score <Field name={`education_0${number}_details`} /></p>
                  </div>
                </article>
              ))}
            </div>
          )}
          {aboutTab === "Resume" && (
            <a className={`${layout.btn} ${layout.btnSolid}`} href="#" onClick={(event) => event.preventDefault()}>
              Resume download action <Field name="resume_download_label" /> <ArrowDownToLine size={16} />
            </a>
          )}
          {aboutTab === "Contact" && (
            <div className={layout.contactOptions}>
              <a href="#" onClick={(event) => event.preventDefault()}><Mail size={19} /><span>Email address <Field name="contact_email" /></span><ArrowRight size={17} /></a>
              <a href="#" onClick={(event) => event.preventDefault()}><MessageCircle size={19} /><span>Professional profile URL <Field name="contact_linkedin" /></span><ArrowRight size={17} /></a>
            </div>
          )}
        </div>
      </section>

      <footer className={layout.footer}>
        <p>Footer statement <Field name="footer_statement" /></p>
        <p>Copyright text <Field name="footer_copyright" /></p>
      </footer>

      <aside className={map.legend}>
        <strong>V3 content-map mode</strong><br />
        Text in square brackets is the proposed editable field key.
        <a className={map.backLink} href="/v2">Return to V2 →</a>
      </aside>
    </main>
  );
}
