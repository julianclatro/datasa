import stylesheet from "~/tailwind.css";
import type { MetaFunction, LinksFunction } from "@remix-run/cloudflare";
import { ModalProvider } from "~/context/Modal";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "DATASA",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="light bg-background" >
        <ModalProvider>
          <div>
            <Outlet />
          </div>
        </ModalProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
