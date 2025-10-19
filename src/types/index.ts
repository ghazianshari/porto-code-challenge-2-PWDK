export interface Project {
  title: string;
  link: string;
  description: string;
  technologies: string[];
  githubLink: string;
  demoLink: string;
  image: string;
  slug: string
  starmethod: {
    s: string,
    t: string,
    a: string,
    r: string,
  }
}

export interface Blog {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
}
