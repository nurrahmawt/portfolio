export type ProjectCategory =
  | "All"
  | "Machine Learning"
  | "Deep Learning"
  | "Computer Vision"
  | "NLP"
  | "Data Analysis"
  | "Web"
  | "Mobile Development & Security";

export interface Project {
  id: string;
  title: string;
  description: string;
  category: Exclude<ProjectCategory, "All">[];
  tech: string[];
  highlights: string[];
  github?: string;
  demo?: string;
  streamlit?: string;
  web?: string;
  year: string;
}

export interface ExperienceSection {
title?: string;
points: string[];
}

export interface Experience {
role: string;
company: string;
location: string;
period: string;
type: "internship" | "training" | "education";
sections: ExperienceSection[];
}

export interface Skill {
  label: string;
  items: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  /** Optional URL to a PDF or external verification page */
  url?: string;
  /** Optional path to a local PDF file (public/) */
  file?: string;
  /** Optional related project id (matches `projects.id`) */
  relevantProjectId?: string;
}