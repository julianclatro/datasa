import { type LoaderFunction } from '@remix-run/cloudflare';
import { logout } from '~/utils/session.server';

export const loader: LoaderFunction = async ({ request, context }) => {
  const { sessionStorage } = context;

  
  return await logout(request, sessionStorage as Storage);
}