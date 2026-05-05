import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PR Complexity Scorer — Score GitHub PRs for Better Code Reviews",
  description: "Analyze GitHub pull requests and assign complexity scores based on changed files, cyclomatic complexity, and review patterns. Prioritize reviews intelligently."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c35c2759-7328-4c25-b5c5-e672171eb752"></script>
      </head>
      <body style={{ backgroundColor: "#0d1117", color: "#c9d1d9", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
