export interface Base {
  id: number;
  documentId?: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
}

export interface Media extends Base {
  url: string;
}

export interface Social extends Base {
  name: Media;
  href: string;
}

export interface Contact extends Base {
  email: string;
  resume: Media;
  social: Social[];
}

export interface InfoCard extends Base {
  title: string;
  description: string;
  href: string;
}

export interface HomePage extends Base {
  name: string;
  description: string;
  contact: Contact;
  infoCard: InfoCard[];
}

export interface Link extends Base {
  text: string;
  image: Media;
  href: string;
}

export interface ProjectCard extends Base {
  title: string;
  description: string;
  tags: string;
  link: Link[];
}

export interface ProjectPage extends Base {
  title: string;
  description: string;
  projectCards: ProjectCard[];
}
