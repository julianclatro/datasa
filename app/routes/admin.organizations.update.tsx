import { json, type ActionFunction} from '@remix-run/cloudflare';
import { Organization } from '~/models/Organization.server';
import { OrganizationForm } from '~/forms/OrganizationForm.server';

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
    const { id, name} = Object.fromEntries(fields) as any;

    const organization = await Organization.update({ id, name }, DB)

    return json(organization)
  } catch (error: any) {
    return json({message: 'ERROR'})
  }
}