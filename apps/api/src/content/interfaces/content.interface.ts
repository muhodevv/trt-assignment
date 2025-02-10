export interface Author {
  firstname: string;
  lastname: string;
}

export interface Content {
  id: string;
  type: string;
  title: string;
  description: string;
  path: string;
  published_date: string;
  authors: Author[];
  image: string;
}

export interface UnifiedContent extends Content {
  language: string;
  section: string;
}
