import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch
} from "@remix-run/react";

import sharedStyles from '~/styles/shared.css';
import Error from "~/components/util/Error";

export const meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

function Document({title, children}){
  return (<html lang="en">
  <head>
  <title>{title}</title>
    <Meta />
    <Links />
  </head>
  <body>
   {children}
    <ScrollRestoration />
    <Scripts />
    <LiveReload />
  </body>
  </html>);
}

export default function App() {
  return (
    <Document>
    <Outlet/>
    </Document>
  );
}

export function CatchBoundary(){
  const caughtResponse = useCatch();
return <Document title={caughtResponse.statusText}>
<main>
  <Error title={caughtResponse.statusText}>
    <p>{caughtResponse?.data?.message || 'Something went wrong. Please try again later.'}</p>
    <p>back to <Link to="/">Safety</Link>.</p>
  </Error>
</main>
</Document>
}

export function ErrorBoundary({error}){
  const caughtResponse = useCatch();
  return <Document title="An error occured">
  <main>
    <Error title="An error occured">
      <p>{error?.message || 'Something went wrong. Please try again later.'}</p>
      <p>back to <Link to="/">Safety</Link>.</p>
    </Error>
  </main>
  </Document>
}


export function links(){
  return [{rel:'stylesheet', href: sharedStyles}]
}