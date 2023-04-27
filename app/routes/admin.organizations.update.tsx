import { json, type ActionFunction} from '@remix-run/cloudflare';
import { Organization } from '~/models/Organization.server';

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
    const { DB } = context.env as any
    let form = await request.formData();
    const fields = Array.from(form.entries())
    const data: any = Object.fromEntries(fields);

    await Organization.update(data, DB)

    return json({ message: 'OK' })
  } catch (error: any) {
    return json({message: 'ERROR'})
  }
}