import { createPagesFunctionHandler } from "@remix-run/cloudflare-pages";
import {
  createCookie,
  createWorkersKVSessionStorage,
} from "@remix-run/cloudflare";
import * as build from "@remix-run/dev/server-build";


const handleRequest = createPagesFunctionHandler({
  build,
  mode: process.env.NODE_ENV,
  getLoadContext: (context) => {
    const sessionStorage = createWorkersKVSessionStorage({
      kv: context.env.SESSION_STORAGE,
      cookie: createCookie("__datasa_session", {
        secrets: [context.env.SECRET_KEY],
        sameSite: true,
        secure: true,
        path: '/'
      }),
    });
    return { env: context.env, sessionStorage };
  }
});

export function onRequest(context) {
  return handleRequest(context);
}
