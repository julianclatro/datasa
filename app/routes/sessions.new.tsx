import { type ActionFunction, json } from '@remix-run/cloudflare';
import { createUserSession } from '~/utils/session.server';

function validateLenght(password: unknown) {
  if (typeof password !== 'string' || password.length < 3) {
    return `passwords must be at least 3 characters long`;
  }
}

function validateusername(username: unknown) {
  if (typeof username !== 'string' || username.length < 3) {
    return `usernames must be at least 3 characters long`;
  }
}

type ActionData = {
  formError?: string;
  fieldErrors?: {
    username: string | undefined;
    password: string | undefined;
  };
  fields?: {
    username: string;
    password: string;
  };
};

export let action: ActionFunction = async ({
  request,
  context,
}) => {
  let form = await request.formData();
  let username = form.get('username');
  let password = form.get('password');
  const { env, sessionStorage }: any = context
  // console.log('env', env)
  const { API_HOST, JWT_SECRET_KEY }: any = env;
  console.log("LOGIN INFO", typeof username, typeof password, username, password)

  if (typeof username !== 'string' || typeof password !== 'string') {
    return { formError: `Form not submitted correctly.` };
  }
  
  let fields = { username, password };
  let fieldErrors = {
    username: validateusername(username),
    password: validateLenght(password)
  };
  if (Object.values(fieldErrors).some(Boolean)) return { fieldErrors, fields };
  try {
   
    return await createUserSession(sessionStorage, { isAuthed: true })
  } catch (error: any) {
    return json({message: 'Something went wrong'})
  }
};
