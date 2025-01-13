import { GeneralObject } from "@/types/general";
import { CategoryType } from "@/types/category";
import { ImageType } from "@/types/image";

export interface ThumbnailType extends GeneralObject {
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    thumbnail: ImageType;
    large: ImageType;
    medium: ImageType;
    small: ImageType;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: string | null;
  folderPath: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string | null;
}

export interface PostType extends GeneralObject {
  title: string;
  slug: string;
  category: CategoryType;
  content: string;
  thumbnail?: ThumbnailType;
}
