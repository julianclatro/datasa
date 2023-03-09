import { redirect } from '@remix-run/cloudflare';

export async function createUserSession(sessionStorage: Storage, { isAuthed }: any) {
  const session = await sessionStorage.getSession();
  session.set("data", {
    isAuthed,
  })
  return redirect('/admin', {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session),
    },
  });
}

async function getUserSession(request: Request, sessionStorage: Storage) {
  return sessionStorage.getSession(request.headers.get("Cookie"));
}

export async function getUser(request: Request, sessionStorage: Storage) {
  const session = await getUserSession(request, sessionStorage);
  return session.get("data");
}

export async function logout(request: Request, sessionStorage: Storage) {
  let session = await getUserSession(request, sessionStorage);
  return redirect(`/`, {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session),
    },
  });
}