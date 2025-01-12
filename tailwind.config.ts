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
          },
          h2: {
            fontSize: "1.75rem",
            fontWeight: "bold",
            margin: "1.5rem 0",
          },
          h3: {
            fontSize: "1.5rem",
            fontWeight: "bold",
            margin: "1.5rem 0",
          },
          h4: {
            fontSize: "1.25rem",
            fontWeight: "bold",
            margin: "1.5rem 0",
          },
          p: {
            fontSize: "1rem",
            fontWeight: "normal",
            lineHeight: "2",
            marginBottom: "1.5rem",
          },
          ul: {
            fontSize: "1rem",
            listStyle: "disc inside",
            margin: "1.5rem 0",
          },
          ol: {
            fontSize: "1rem",
            listStyle: "decimal inside",
            margin: "1.5rem 0",
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
            fontSize: "1rem",
          },
          a: {
            display: "inline-block",
            color: theme("colors.blue.500"),
            wordBreak: "break-word",
            fontSize: "1rem",
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
        },
      },
    }),
  },
  plugins: [typography],
} satisfies Config;
