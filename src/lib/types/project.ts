type Image = {
  type: 'image',
  url: string;
  alt: string;
}

type Video = {
  type: 'video';
  url: string;
  videoType: 'video/mp4';
};

type Media = Image | Video;

type ProjectLink = {
  url: string;
  title: string;
}

type ProjectDetail = {
  title: string;
  description: string;
  media: Media[][];
}

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  img: Image;
  category: string;
  summary: string;
  tags: string[];
  detail: ProjectDetail[];
  links: ProjectLink[];
};
