import { GeneralObject } from "@/types/general";
import { CategoryType } from "@/types/category";

export interface PostType extends GeneralObject {
  title: string;
  slug: string;
  category: CategoryType;
  content: string;
}
