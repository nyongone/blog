"use server";

/**
 * 기존 Javascript API에서 제공하는 Fetch API를 확장한 Fetch 함수 입니다.
 * Fetch 함수 실행 이후 Response 타입을 지정 가능합니다.
 *
 * @param url - Request를 보낼 URL 입니다.
 * @param options - Request Method, Header, Body, Caching을 지정합니다.
 */

export async function fetchData<T = unknown>(
  url: string,
  options: {
    method: "GET" | "POST" | "PUT" | "DELETE" | "OPTIONS";
    headers?: HeadersInit;
    cache?: RequestCache;
  },
) {
  const apiEndpoint = `${process.env.NEXT_PUBLIC_API_ENDPOINT}`;
  const { method, headers, cache } = options;

  const _requestHeader: Headers = new Headers(headers);

  const _response = await fetch(`${apiEndpoint}${url}`, {
    method: method,
    headers: _requestHeader,
    cache: cache,
  });

  return (await _response.json()) as Promise<T>;
}
