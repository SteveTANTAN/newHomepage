
export interface Link {
  name: string;
  url: string;
  icon: JSX.Element;
}

export interface PublicationLink {
  name: string;
  url: string;
}

export interface Publication {
  image?: string;
  title: string;
  authors: string[];
  conference: string;
  year: number;
  links: PublicationLink[];
  abstract: string;
}

export interface NewsItem {
  date: string;
  content: string;
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string[];
}

export interface MiscCategory {
  title: string;
  items: string[];
}
