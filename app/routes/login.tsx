import * as React from "react";
import { Form, useFetcher } from "@remix-run/react";

export default function Login() {
  const fetcher = useFetcher();

  React.useEffect(() => {
    if (fetcher.type === 'done') {
      console.log(fetcher.data)
    }
  }, [fetcher]);
  return (
    <div>
      <h1>Nueva Sesión</h1>
      <fetcher.Form method="post" action="/sessions/new">
        <div className="flex flex-col space-y-4 w-[720px]">
          <label>Usuario</label>
          <input type="text" name="username" id="username"/>
          <label>Contraseña</label>
          <input type="password" name="password" id="password"/>
          <button type="submit" className="px-[30px] py-[15px] bg-slate-900 text-white">Conectar</button>
        </div>
      </fetcher.Form>
    </div>
  );
} 