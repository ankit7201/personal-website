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

export interface HomePage extends Base {
  name: string;
  description: string;
  contact: Contact;
}
