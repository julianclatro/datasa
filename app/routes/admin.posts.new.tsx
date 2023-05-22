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
    let form = await request.formData();
    const fields = Array.from(form.entries())
    const { } = Object.fromEntries(fields) ?? {};


    return json({message: 'OK'})
  } catch (error: any) {
    return json({message: 'ERROR'})
  }
}
