export interface Service {
  number: string;
  name: string;
  description: string;
}

export interface Project {
  number: string;
  name: string;
  category: string;
  description: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}
