import type { PhotoType } from "@styles/typings/photo";

export type ProjectType = {
  title?: string;
  date?: string;
  clients?: string;
  materials?: string[];
  price?: string;
  photos?: PhotoType[];
  thumb?: string;
  cover?: string;
  slug?: string;
  content?: string;
};
