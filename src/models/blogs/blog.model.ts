type RawMetadata = {
  sourceFilePath: string;
  sourceFileName: string;
  sourceFileDir: string;
  contentType: string;
  flattenedPath: string;
}

type BlogBody = {
  raw: string;
  html: string;
}

export type Blog = {
  _id: string;
  title: string;
  publishedAt: string;
  updatedAt: string;
  description: string;
  image: string;
  isPublished: boolean;
  author: string;
  tags: string[];
  body: BlogBody;
  _raw: RawMetadata;
  type: 'Blog';
  url: string;
}