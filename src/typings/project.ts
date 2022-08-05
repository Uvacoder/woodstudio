import type { PhotoType } from "@typings/photo";

export type ProjectType = {
  title?: string;
  date?: string;
  clients?: string;
  materials?: string[];
  price?: string;
  photos?: PhotoType[];
  slug?: string;
  content?: string;
};
