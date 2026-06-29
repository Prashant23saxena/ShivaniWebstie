const directCodes: Record<string, string> = {
  header_resume_label: "0.3",
  hero_eyebrow: "1.1",
  hero_name: "1.2",
  hero_summary: "1.3",
  hero_portrait: "1.4",
  core_skills_heading: "1.6",
  strategy_section_label: "2.1",
  strategy_heading: "2.2",
  strategy_intro: "2.3",
  work_section_label: "3.1",
  work_heading: "3.2",
  work_intro: "3.3",
  work_scroll_label: "3.4",
  work_card_action_label: "3.6",
  work_detail_mandate_label: "3.7",
  work_detail_outcome_label: "3.8",
  about_eyebrow: "4.1",
  about_heading: "4.2",
  resume_download_label: "4.6.1",
  contact_email: "4.7.1",
  contact_linkedin: "4.7.2",
  footer_statement: "5.1",
  footer_copyright: "5.2",
};

const aboutTabCodes: Record<string, string> = {
  about_tab_education: "4.3.1",
  about_tab_certifications: "4.3.2",
  about_tab_skills: "4.3.3",
  about_tab_extracurriculars: "4.3.4",
  about_tab_interests: "4.3.5",
  about_tab_resume: "4.3.6",
  about_tab_contact: "4.3.7",
};

const aboutSectionNumbers: Record<string, string> = {
  education: "1",
  certifications: "2",
  skills: "3",
  extracurriculars: "4",
  interests: "5",
  resume: "6",
  contact: "7",
};

export function getFieldCode(name: string): string {
  if (directCodes[name]) return directCodes[name];
  if (aboutTabCodes[name]) return aboutTabCodes[name];

  let match = name.match(/^profile_(\d{2})_(value|label)$/);
  if (match) return `1.5.${Number(match[1])}.${match[2] === "value" ? "1" : "2"}`;

  match = name.match(/^core_skill_(\d{2})_(title|description)$/);
  if (match) return `1.7.${match[1]}.${match[2] === "title" ? "1" : "2"}`;

  match = name.match(/^strategy_(\d{2})_(title|description)$/);
  if (match) return `2.4.${match[1]}.${match[2] === "title" ? "1" : "2"}`;

  match = name.match(/^work_(\d{2})_(year|client|title|summary|metric|mandate|outcome)$/);
  if (match) {
    const fieldNumber: Record<string, string> = {
      year: "1",
      client: "2",
      title: "3",
      summary: "4",
      metric: "5",
      mandate: "6",
      outcome: "7",
    };
    return `3.5.${match[1]}.${fieldNumber[match[2]]}`;
  }

  match = name.match(/^education_(\d{2})_(qualification|details)$/);
  if (match) return `4.5.${match[1]}.${match[2] === "qualification" ? "1" : "2"}`;

  match = name.match(/^about_(education|certifications|skills|extracurriculars|interests|resume|contact)_(heading|content)$/);
  if (match) return `4.4.${aboutSectionNumbers[match[1]]}.${match[2] === "heading" ? "1" : "2"}`;

  return "X";
}

export function formatFieldLabel(name: string): string {
  return `${getFieldCode(name)} · ${name}`;
}
