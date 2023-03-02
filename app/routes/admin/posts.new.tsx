import * as React from "react";
import { json, type ActionFunction, redirect} from '@remix-run/cloudflare';
import { useFetcher } from "@remix-run/react";


type ActionData = {
  formError?: string;
  fields?: {
    name: FormData;
  };
};

export let action: ActionFunction = async ({
  request,
  context,
}): Promise<Response | ActionData | null> => {
  try {
    const ctx = context as any;
    const { API_HOST } = ctx.env;
    let form = await request.formData();
    const fields = Array.from(form.entries())
    const data: any = Object.fromEntries(fields);
    console.log('data', data)
    return redirect('/')
  } catch (error: any) {
    return json({message: 'ERROR'})
  }
}

export default function New() {
  const fetcher = useFetcher();

  React.useEffect(() => {
    // console.log('fetcher', fetcher)
    if (fetcher.type === 'done') {
      console.log(fetcher.data)
    }
  }, [fetcher]);

  return (
    <div>
      <div className="header">
        <h2>Nuevo Dato</h2>
      </div>
      <fetcher.Form className="" method="post" action={`/admin/posts/new`}>
        <label>Nombre</label>
        <input type="text" id="inform" name="inform" />
      </fetcher.Form>
    </div>
  );
}
