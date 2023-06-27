import * as React from "react";
import { Form, useFetcher } from "@remix-run/react";

export default function Login() {
  const fetcher = useFetcher();

  React.useEffect(() => {
    if (fetcher.state === "idle") {
      console.log(fetcher.data);
    }
  }, [fetcher]);
  return (
    <div className="w-[540px] mx-auto">
      <div className="flex items-center h-v84">
        <div className="w-full py-[20px] px-[40px] bg-green-300 rounded-3xl">
          <div className="text-subheading-medium">Iniciar Sesión</div>
          <fetcher.Form method="post" action="/sessions/new">
            <div className="flex flex-col space-y-4">
              <label>Usuario</label>
              <input type="text" name="username" id="username" className="rounded-lg" />
              <label>Contraseña</label>
              <input type="password" name="password" id="password" className="rounded-lg"/>
              <button
                type="submit"
                className="px-[30px] py-[15px] bg-green-600 text-white rounded-xl"
              >
                Conectar
              </button>
            </div>
          </fetcher.Form>
        </div>
      </div>
    </div>
  );
}
