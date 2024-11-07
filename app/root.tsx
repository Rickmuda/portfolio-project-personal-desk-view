import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import globalStyles from "./styles/global.css"; // Import Global CSS
import projectsStyles from "./styles/projects.css"; // Import Projects CSS

// Import Google Fonts
export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap", // Simpler Inter font link
  },
  { rel: "stylesheet", href: globalStyles }, // Add Global CSS link
  { rel: "stylesheet", href: projectsStyles }, // Add Projects CSS link
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        {/* Main layout */}
        <div className="section">
          {/* Insert page content */}
          <main className="h-full">{children}</main>
        </div>
        {/* Restoring scroll, scripts, etc */}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <Layout>
      {/* This renders the current route component */}
      <Outlet />
    </Layout>
  );
}
