export interface Testimonial {
  content: string;
  author: string;
  company: string;
}

export interface AdminPanel {
  content: string;
  title: string;
}

export interface Project {
  id: string;
  title: string;
  viewLiveSite?: string;
  liveUrl?: string;
  client: string;
  type: string;
  category: string;
  description: string;
  challenge?: string;
  solution?: string;
  technologies: string[];
  results?: string[];
  testimonial?: Testimonial;
  adminPanel?: AdminPanel;
  images: string[];
}
