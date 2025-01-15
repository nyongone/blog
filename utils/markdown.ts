import rehypeHighlight from "rehype-highlight";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import { useCallback } from "react";

export async function markdownToHTML(content: string) {
  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSanitize)
    .use(rehypeStringify)
    .use(rehypeHighlight)
    .use(rehypeSlug)
    .process(content);

  return processedContent.toString();
}

export function getHeadingsFromMdx(mdx: string) {
  const _getHeadingLevel = (s: string) => s.match(/^(#{1,3})(?=\s)/)![0].length;
  const _getSanitizedId = (s: string) =>
    s
      .match(/^#{1,3}\s+(\S.*)$/)![1]
      .trimEnd()
      .replaceAll(" ", "-")
      .replaceAll("#", "")
      .toLowerCase();

  const _getHeadings = (mdx: string) => {
    const lines = mdx.split("\n");
    return lines
      .filter((line) => line.startsWith("#"))
      .map((heading) => {
        const level = _getHeadingLevel(heading);
        const id = _getSanitizedId(heading);
        return {
          id: id,
          level: level,
          content: heading.replaceAll("#", "").trim(),
        };
      });
  };

  return _getHeadings(mdx);
}
