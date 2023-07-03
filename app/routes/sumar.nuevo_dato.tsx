import { json, type ActionFunction } from "@remix-run/cloudflare";
import { Proposal } from "~/models/Proposal.server";
import { User } from "~/models/User.server";
import { UserForm } from "~/forms/UserForm.server";
import { ProposalForm } from "~/forms/ProposalForm.server";

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
    const { DB } = context.env as any;
    const form = await request.formData();
    const fields = Array.from(form.entries());
    const data: any = Object.fromEntries(fields);
    console.log("DATA", data);
    const { information, link, first_name, last_name, email } = data ?? {};
    if (first_name && last_name && email) {
      console.log('has name and else', first_name, last_name, email)
    } else  if (information && link) {
      // const proposal = new ProposalForm()
      console.log('has information', information, link)
    }
    // const { axis_id, organizations_id, categories_id, ...output } = data;
    // await Post.update(output, DB)

    return json({ message: "OK" });
  } catch (error: any) {
    return json({ message: "ERROR" });
  }
};
