import type { PhotoType } from "@typings/photo";

export type ProjectType = {
  title?: string;
  date?: string;
  published?: boolean;
  clients?: string;
  materials?: string[];
  price?: string;
  photos?: PhotoType[];
  thumb?: string;
  cover?: string;
  slug?: string;
  content?: string;
};
