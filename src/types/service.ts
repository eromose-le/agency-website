export type Img = {
  id: number;
  url: string;
};

export type Service = {
  id: number;
  name: string;
  title: string;
  desc: string;
  video?: string;
  photo?: string;
  longDesc: string;
  images?: Img[];
};
