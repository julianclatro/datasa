import stylesheet from "datasa-design-system/styles/index.css";
import type { MetaFunction, LinksFunction } from "@remix-run/cloudflare";
import {
  ModalProvider,
  CommandProvider,
  NotificationProvider,
  useCommand,
} from "~/context";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError,
  Link,
} from "@remix-run/react";
import {
  Layout as LayoutComponent,
  Header,
  Footer,
} from "datasa-design-system";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "DATASA",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

const Layout = ({}) => {
  const { openCommand } = useCommand();
  return (
    <LayoutComponent>
      <Header openCommand={openCommand} component={Link} />
      <Outlet />
      <Footer />
    </LayoutComponent>
  );
};
export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="light bg-background">
        <CommandProvider>
          <NotificationProvider>
            <ModalProvider>
              <Layout />
            </ModalProvider>
          </NotificationProvider>
        </CommandProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  let error = useRouteError();
  console.log("ERROR", error);
  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>
          {error.status} {error.statusText}
        </h1>
        <p>{error.data}</p>
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div>
        <h1>Error</h1>
        <p>{error.message}</p>
        <p>The stack trace is:</p>
        <pre>{error.stack}</pre>
      </div>
    );
  } else {
    return <h1>Unknown Error</h1>;
  }
}
