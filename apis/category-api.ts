import { fetchData } from "@/utils/fetch";
import { CategoryType } from "@/types/category";
import { GeneralResponse } from "@/types/response";

export async function getCategories() {
  return await fetchData<GeneralResponse<CategoryType[]>>("/categories", {
    method: "GET",
    cache: "default",
  });
}
