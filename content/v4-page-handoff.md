# Shivani Portfolio V4 — Page Content and Context Handoff

This document captures the current `/v4` portfolio page content, design context, section intent, and open questions. It is meant to be given to another design/content system to think of better ways to represent the page.

Current local page:

- `http://localhost:3001/v4`

Repository:

- `https://github.com/Prashant23saxena/ShivaniWebstie.git`

Primary implementation files:

- `src/components/PortfolioV4.tsx`
- `src/components/PortfolioV4.module.css`
- `src/app/v4/page.tsx`

Reference assets:

- Profile photo: `public/shivani-profile-photo.jpeg`
- Resume PDF: `public/shivani-tidke-resume.pdf`

Current section screenshots:

- Home: `content/v4-section-snapshots/01-home.png`
- Current Strategy section: `content/v4-section-snapshots/02-strategy-current.png`
- Work: `content/v4-section-snapshots/03-work.png`
- About Me: `content/v4-section-snapshots/04-about-me.png`

Note: There is also a later experimental snapshot folder, `content/v4-section-snapshots-after`, but that was from an “Industry Phases” experiment that the user did not like and asked to revert.

---

## Overall portfolio intent

The website is for Shivani Tidke, a strategy and operations professional with roughly six years of experience across supply chain, logistics, manufacturing, banking implementation, automotive launch risk, aerospace delivery assurance, and procurement transformation.

The desired impression is:

- polished, editorial, mature;
- consulting-style but not generic;
- warm and human, not cold corporate;
- strategic but grounded in execution;
- easy to read in a 16:9 laptop viewport;
- interactive, but not gimmicky;
- enough structure for recruiters / clients to understand the story quickly.

The design currently uses:

- warm off-white / paper background;
- black editorial typography;
- muted brown / taupe accent;
- thin lines and understated borders;
- circular profile image;
- scroll-snapping sections;
- interactive cards and timeline.

---

## Current navigation

Visible header navigation:

1. Home
2. Strategy
3. Work
4. About Me

Important preference:

- The user does not want the top-right “Resume” header button.
- Resume should exist inside the About Me section only.

---

## Page structure desired by the user

The user has described the page as:

1. Home page
2. Core skill set — currently shown on the Home page
3. A section that is currently named “Strategy,” but may not be the right concept
4. Client experience / selected work
5. About Me

Important unresolved framing:

- The current “Strategy” section may not actually be strategy.
- The user felt it may be better represented as phases of work, industry exposure, or project phases.
- A visual experiment called “Industry Phases” was attempted and rejected. The user did not like the look/feel of that version.
- Another system should rethink this section from first principles.

---

# 1. Home section

## Section intent

This section introduces Shivani, gives a concise professional positioning statement, shows her photo, and summarizes her profile using three metrics.

## Current visible content

Eyebrow:

> Hello, I'm

Name:

> Shivani  
> Tidke

Hero summary:

> Strategy and operations professional specializing in supply chain transformation across the full journey — from diagnostic workshops and solution design to implementation, governance and measurable impact.

Profile metrics:

1. `~6 years`  
   Supporting label: `Strategy creation and execution`

2. `Supply Chain`  
   Supporting label: `Primary domain`

3. `Manufacturing & Logistics`  
   Supporting label: `Operating context`

Profile image:

- Uses Shivani’s real profile photo.
- Circular portrait treatment.
- Source: `public/shivani-profile-photo.jpeg`

## Current core skills shown on Home

Section eyebrow:

> Core skills & capabilities

Skill cards:

### Structured Problem Solving

> Converts complex, dispersed information into a clear problem frame, decision tree and execution path.

### Stakeholder Alignment

> Builds shared facts, decision forums and communication rhythms across clients, leaders and cross-functional teams.

### Supply Chain Expertise

> Works across logistics, warehousing, sourcing, planning and manufacturing operations with an operator’s lens.

### AI-enabled Automation

> Uses analytics, dashboards and emerging technology to automate repetitive work and augment decision-making.

### Implementation Discipline

> Moves recommendations into action through initiative tracking, governance, ownership and cadence management.

### Cost & Productivity Transformation

> Identifies and delivers measurable levers across cost, productivity, process discipline and operating efficiency.

## Context / design notes

The core skill cards are meant to represent reusable strengths: what Shivani is good at across contexts. They should not duplicate the “Strategy” or “Work” sections. They are high-level capabilities, not project examples.

Potential improvement areas:

- The capability cards are currently simple grid cards.
- They work reasonably well and the user has said this area is good.
- Do not overcomplicate unless there is a clear design gain.

---

# 2. Strategy section — current version

## Section intent

This section is currently framed as a strategy-to-execution method. However, the user is unsure whether this should be called “Strategy.” She has said it may be more like project phases, industry phases, or types of work she has handled.

Current headline:

> Six moves I use to turn complex work into execution.

Intro:

> A practical strategy-to-implementation rhythm for moving from messy inputs to aligned decisions, owned initiatives and durable operating change.

Current six cards:

### 01. Diagnose the operating reality

> Start with Gemba walks, interviews, data cuts and process observation to see where work actually breaks.

### 02. Frame the decision problem

> Turn ambiguity into a concise problem statement, fact base, hypotheses and prioritization logic.

### 03. Design the solution architecture

> Translate the diagnosis into levers, business cases, operating routines and practical implementation choices.

### 04. Align decision makers

> Create workshops, narratives and evidence-backed forums that help senior stakeholders choose and commit.

### 05. Run execution cadence

> Install tracking, owners, dashboards and escalation routines so initiatives keep moving after the workshop.

### 06. Scale and embed impact

> Convert pilots into repeatable playbooks, capability building and routines that sustain value over time.

## Why this section exists

This section was originally separated from Core Skills because:

- Core Skills = reusable strengths / capabilities.
- Strategy section = repeatable way of working / operating rhythm.

However, this distinction is not fully landing yet.

## User feedback / open design challenge

The user did not like a later experiment that represented this as “Industry Phases” with a row of phase cards and an active detail panel. The concept may still be valid, but the visual execution was not liked.

Another system should explore:

- Should this section be renamed?
- Should it be about “project phases,” “transformation lifecycle,” “how I work,” “operating rhythm,” or “industry exposure”?
- Can it become more visual without feeling like generic cards?
- Can it connect better to the client work section?

Possible alternate names:

- How I Move Work
- Transformation Rhythm
- From Diagnosis to Delivery
- My Operating Method
- Project Phases I Drive
- Strategy-to-Execution System
- How I Create Momentum

Important caution:

- Do not make this too abstract.
- It should feel grounded in Shivani’s actual project work.
- The user wants visual improvement, especially for this section, but rejected the first visual experiment.

---

# 3. Work section / selected client experience

## Section intent

This section shows selected project experience across clients and industries. It should make the portfolio credible and concrete. The user wants the reader to understand the selected work without needing excessive scrolling.

Current headline:

> From operating depth to strategy-led transformation.

Intro:

> Selected examples from logistics, financial services and manufacturing. Some client names are masked, while resume-confirmed metrics are retained for review.

Interaction:

- Horizontal timeline / card rail.
- User clicks a work item.
- Detail panel updates below.

Detail-panel structure requested by the user:

1. Problem statement
2. My role
3. Impact

The page now follows this structure.

## Selected work content

### 1. Mahindra Logistics

Year:

> 2018–22

Industry:

> Logistics & supply chain operations

Title:

> Business excellence and automation foundation

Short card summary:

> Built operating depth across productivity, cost-saving, automation and logistics transformation programs.

Metric:

> 4+ years

Problem statement:

> Company-wide productivity and cost-saving ideas needed a structured mechanism for adoption, tracking and execution across business verticals.

My role:

> Designed and executed Idea Network, launched PULSE across seven verticals, supported emerging-tech opportunities across IoT, AI, UAV and AR/VR, and helped shape an automation fund framework.

Impact:

> Built a practical operator’s lens before consulting, with recognized work including a CII Gold Award for Industry 4.0 and successful AR/VR implementation for an e-commerce client.

---

### 2. Jubilant Ingrevia

Year:

> 2024

Industry:

> Chemicals manufacturing · procurement

Title:

> Procurement savings and execution acceleration

Short card summary:

> Led procurement initiatives across logistics, warehousing and MRO with tight execution governance.

Metric:

> ~₹4 Cr delivered

Problem statement:

> Savings levers existed across logistics, warehousing and MRO, but needed sharper sizing, ownership, PMO rhythm and implementation pace.

My role:

> Led 9+ Capex and non-Capex initiatives, built daily trackers, validated savings levers with business heads, and supported Steering Committee documents.

Impact:

> Created ₹9 Cr+ line of sight and delivered ~₹4 Cr savings within two months while strengthening PMO ownership and implementation governance.

---

### 3. TVS SCS

Year:

> 2024

Industry:

> 3PL logistics · warehousing productivity

Title:

> Warehousing diagnostic and automation pipeline

Short card summary:

> Diagnosed productivity, automation and subcontracted manpower opportunities across warehouse operations.

Metric:

> ₹18–28 Cr pipeline

Problem statement:

> The India warehousing cost base needed a grounded diagnostic across lease rentals, subcontracted manpower and productivity bottlenecks.

My role:

> Led the warehousing workstream through Gemba walks, time-motion studies, stakeholder interviews and site assessments across two key locations.

Impact:

> Identified 10+ productivity initiatives, 5+ automation levers, 2–3% labor-cost optimization and a ₹18–28 Cr improvement pipeline.

---

### 4. Karur Vysya Bank

Year:

> 2024–25

Industry:

> Banking · SME growth and process redesign

Title:

> SME growth engine design and scale-up

Short card summary:

> Designed and scaled an analytics-led SME leads pilot and renewal process redesign.

Metric:

> 850+ branches

Problem statement:

> The bank needed a repeatable mechanism to generate quality SME leads, improve branch adoption and redesign renewal processes without weakening risk controls.

My role:

> Designed the SME Leads Pilot, co-defined qualification parameters, institutionalized the Lead Management Portal across 150+ branches, and built scale-up playbooks.

Impact:

> Generated ~4,500 quality leads, enabled ~₹80 Cr logged leads and ~₹20 Cr disbursals, with scale-up guidelines for 850+ branches.

---

### 5. TASL

Year:

> 2025

Industry:

> Aerospace manufacturing · delivery assurance

Title:

> Operational delivery diagnostic

Short card summary:

> Identified execution bottlenecks across planning, engineering, supply chain, quality and shopfloor rhythms.

Metric:

> 20+ initiatives

Problem statement:

> Delivery execution issues were fragmented across PPC, engineering, supply chain, quality and shopfloor review mechanisms.

My role:

> Conducted 10+ cross-functional stakeholder interviews, integrated into daily reviews and built macro-enabled dashboards for engineering visibility.

Impact:

> Identified 20+ initiatives and reduced report preparation from hours to minutes, freeing teams to focus on issue resolution.

---

### 6. Mahindra Automotive Development

Year:

> 2025–26

Industry:

> Automotive product development · launch risk

Title:

> Vehicle program risk management

Short card summary:

> Translated component-level VES and software risks into vehicle-level launch readiness insights.

Metric:

> 5 launches

Problem statement:

> Upcoming vehicle platform launches needed proactive visibility into cascading timeline, cost and performance risks across siloed component teams.

My role:

> Led VES and software risk management across five vehicle programs, independently coordinating 25–30+ stakeholders and leadership forums.

Impact:

> Improved visibility of cross-functional launch risks, supported faster joint resolution and strengthened leadership decision-making for launch readiness.

## Work-section design concerns

The user wants this to be more readable in a 16:9 view. The current horizontal timeline plus detail panel can feel crowded. Ideas to explore:

- Keep horizontal timeline but make cards shorter and detail panel more spacious.
- Use a vertical “selected work stack” with one featured case at a time.
- Use filters by industry / phase.
- Use a compact table-like matrix for clients, industry, problem, impact.
- Use a carousel but ensure the active case is fully readable without scrolling.

---

# 4. About Me section

## Section intent

This section contains education, certifications, skills, interests, resume, and contact details.

Current section headline:

> Education, skills,  
> interests and the work  
> that shapes me.

Tabs:

1. Education
2. Certifications
3. Skills
4. Interests
5. Resume
6. Contact Me

## Education content

### MBA — International Business

Period:

> 2022 – 2024

Institution:

> Indian Institute of Foreign Trade, Delhi

Description:

> Strategy, international business and cross-border commercial problem solving. Resume-confirmed; descriptive line to be refined.

### B.Tech — Production Engineering

Period:

> 2014 – 2018

Institution:

> College of Engineering Pune, Pune

Description:

> Engineering foundation in production systems, manufacturing processes and operating discipline. Resume-confirmed; descriptive line to be refined.

## Certifications content

### Lean / Six Sigma methodology exposure

> Used in Mahindra Logistics’ Idea Network cost-savings initiative; exact certification name to confirm.

### Industry 4.0 recognition

> Gold Award at CII Championships Trophy for low-cost automation and digitization projects.

### Additional certifications

> Placeholder for certifications you want to add later from certificates or LinkedIn.

## Skills content

### Supply Chain Operations & Transformation

> Logistics, warehousing, sourcing, MRO, planning and manufacturing operations.

### Data-driven Problem Solving

> Diagnostics, problem structuring, dashboarding, prioritization and business-case development.

### Program & Change Management

> Initiative tracking, governance, implementation cadence and cross-functional adoption.

### Client Engagement & Workshop Facilitation

> Stakeholder interviews, senior leadership workshops, CXO alignment and executive storytelling.

## Interests content

### Sports and swimming

> Enthusiastic sports person; swimming achievements to be expanded once you share the exact details.

### Photography

> A creative lens for noticing composition, light and overlooked details.

### Technology in operations

> Interest in AI, automation and emerging tech that can make operating work sharper and faster.

## Resume section

Resume tab:

- Shows embedded resume PDF.
- Has download button.
- Source: `public/shivani-tidke-resume.pdf`

Button text:

> Download Resume

## Contact section

Headline:

> Open to thoughtful conversations.

Intro:

> For strategy, supply chain transformation, operations, implementation or collaboration conversations, reach out by email. LinkedIn can be added once you share the final URL.

Email:

> shivanitidke@gmail.com

LinkedIn:

> https://www.linkedin.com/in/shivani-tidke-04596899/

Footer statement:

> Designed with purpose. Built to translate strategy into operating impact.

---

# Content and representation questions for another system

## Biggest open question

How should the current “Strategy” section be represented?

It currently says “Six moves I use to turn complex work into execution,” but the user has questioned whether this section should instead represent:

- phases of work;
- project lifecycle;
- types of transformation exposure;
- industry exposure;
- operating method;
- a bridge between core capabilities and client work.

## Recommended exploration prompts

Another system can consider:

1. What is the cleanest conceptual distinction between:
   - Core Skills
   - Strategy / Method
   - Work Experience

2. Should the Strategy section be renamed?

3. Can the Strategy section become more visual without becoming gimmicky?

4. Can the Work section be made more readable in one 16:9 viewport?

5. Can the About section feel less like a resume duplication and more like a human background section?

6. Should project names be public or masked?

## Possible alternative site architecture

Version A — current structure:

1. Home + core capabilities
2. Strategy method
3. Selected work
4. About me

Version B — project-phase structure:

1. Home
2. Core capabilities
3. How I move work from diagnosis to delivery
4. Selected client work
5. About me

Version C — industry-exposure structure:

1. Home
2. Core capabilities
3. Industry exposure map
4. Case studies / selected work
5. About me

Version D — consulting story structure:

1. Who I am
2. What I am strong at
3. How I work
4. Where I have applied it
5. Background and contact

---

# Tone guidance

Keep the language:

- professional;
- specific;
- not inflated;
- measurable where possible;
- grounded in operations and execution;
- suitable for consulting / strategy / supply chain roles.

Avoid:

- generic “passionate problem solver” language;
- overuse of “strategy” without evidence;
- too much jargon;
- long paragraphs;
- invented certifications or unverified claims.

---

# Facts that need user review

- Whether `Jubilant Ingrevia`, `Karur Vysya Bank`, `TASL`, and `Mahindra Automotive Development` should be publicly named or masked.
- Exact certification names.
- Swimming / sports achievements.
- Whether education descriptions should be more formal or simpler.
- Whether the phrase “AI-enabled Automation” is accurate for the core capability list.
- Whether “Strategy” is the right nav label.

