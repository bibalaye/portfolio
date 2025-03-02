// Types pour le portfolio

export interface UserInfo {
  name: string;
  email: string;
  stack: string[];
  bio: string;
  github?: string;
  linkedin?: string;
  location?: string;
  languages?: string[];
}

export interface ProjectType {
  title: string;
  desc: string;
  image: string;
  images: string[];
  live: boolean;
  technologies: string[];
  link?: string;
  github: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Experience {
  role: string;
  company: string;
  date: string;
  desc: string;
  skills: string[];
} 