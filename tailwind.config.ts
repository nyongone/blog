import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./containers/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    typography: (theme: any) => ({
      DEFAULT: {
        css: {
          color: theme("colors.gray.700"),
          h1: {
            fontSize: "2rem",
            fontWeight: "bold",
            margin: "1.5rem 0",
            "@media screen and (max-width: 767px)": {
              fontSize: "1.75rem",
            },
          },
          h2: {
            fontSize: "1.75rem",
            fontWeight: "bold",
            margin: "1.5rem 0",
            "@media screen and (max-width: 767px)": {
              fontSize: "1.5rem",
            },
          },
          h3: {
            fontSize: "1.5rem",
            fontWeight: "bold",
            margin: "1.5rem 0",
            "@media screen and (max-width: 767px)": {
              fontSize: "1.25rem",
            },
          },
          h4: {
            fontSize: "1.25rem",
            fontWeight: "bold",
            margin: "1.5rem 0",
            "@media screen and (max-width: 767px)": {
              fontSize: "1rem",
            },
          },
          p: {
            fontSize: "1.25rem",
            fontWeight: "normal",
            lineHeight: "2",
            marginBottom: "1.5rem",
            wordBreak: "break-all",
            "@media screen and (max-width: 767px)": {
              fontSize: "1rem",
            },
          },
          ul: {
            fontSize: "1.25rem",
            lineHeight: "2",
            listStyle: "disc",
            margin: "1.5rem 0",
            paddingLeft: "1.5rem",
            "@media screen and (max-width: 767px)": {
              fontSize: "1rem",
            },
          },
          ol: {
            fontSize: "1.25rem",
            lineHeight: "2",
            listStyle: "decimal",
            margin: "1.5rem 0",
            paddingLeft: "1.5rem",
            "@media screen and (max-width: 767px)": {
              fontSize: "1rem",
            },
          },
          em: {
            fontStyle: "italic",
          },
          img: {
            margin: "2rem 0",
            borderRadius: "0.25rem",
          },
          pre: {
            width: "100%",
            height: "auto",
            padding: "2rem",
            margin: "2rem 0",
            backgroundColor: theme("colors.gray.100"),
            borderRadius: "0.75rem",
            overflowX: "auto",
            fontSize: "1.25rem",
            "@media screen and (max-width: 767px)": {
              fontSize: "1rem",
            },
          },
          a: {
            color: theme("colors.blue.500"),
            wordBreak: "break-word",
            fontSize: "1.25rem",
            "@media screen and (max-width: 767px)": {
              fontSize: "1rem",
            },
            "&:hover": {
              textDecorationLine: "underline",
              textDecorationColor: theme("colors.blue.500"),
              textUnderlineOffset: "4px",
            },
          },
          hr: {
            width: "100%",
            height: "1px",
            border: "none",
            backgroundColor: theme("colors.gray.200"),
          },
          blockquote: {
            width: "100%",
            height: "auto",
            margin: "3rem 0",
            padding: "1rem 1.5rem",
            borderLeft: "3px solid",
            borderLeftColor: theme("colors.gray.300"),
            borderRadius: "0 0.75rem 0.75rem 0",
            backgroundColor: theme("colors.gray.100"),
            "& > p": {
              marginBottom: "0",
            },
          },
          code: {
            display: "inline-block",
            padding: "0 0.25rem",
            margin: "0 0.25rem",
            fontSize: "1rem",
            borderRadius: "0.5rem",
            backgroundColor: theme("colors.gray.200"),
            "@media screen and (max-width: 767px)": {
              fontSize: "0.75rem",
            },
          },
        },
      },
    }),
  },
  plugins: [typography],
} satisfies Config;
