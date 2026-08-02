export interface Service {
  number: string;
  name: string;
  description: string;
}

export interface Project {
  number: string;
  name: string;
  category: "Client" | "Personal";
  images: readonly [string, string, string];
  href?: string;
}
