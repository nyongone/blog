import { fetchData } from "@/utils/fetch";
import { GeneralResponse } from "@/types/response";
import { PostType } from "@/types/post";

export async function getPosts(page = 1, limit = 10, category?: string) {
  return await fetchData<GeneralResponse<PostType[]>>(
    `/posts?page=${page}&limit=${limit}${category ? `&category=${category}` : ``}`,
    {
      method: "GET",
      cache: "default",
    },
  );
}

export async function getPostById(id: number) {
  return await fetchData<GeneralResponse<PostType>>(`/posts/${id}`, {
    method: "GET",
    cache: "no-cache",
  });
}

export async function getPostBySlug(slug: string) {
  return await fetchData<GeneralResponse<PostType>>(
    `/posts/searchBySlug/${slug}`,
    {
      method: "GET",
      cache: "no-cache",
    },
  );
}
