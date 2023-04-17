import { json, type ActionFunction} from '@remix-run/cloudflare';
import { Post } from '~/models/Post.server';

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
    const { axis_id, organizations_id, categories_id, ...output } = data;
    await Post.update(output, DB)

    return json({ message: 'OK' })
  } catch (error: any) {
    return json({message: 'ERROR'})
  }
}