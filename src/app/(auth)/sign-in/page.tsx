import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

import { auth } from '@/lib/auth';
import { SignInView } from '@/modules/auth/ui/views/sign-in-view';

export default async function Page() {
  const session = await auth.api.getSession({ headers: await headers() });

  if (session) {
    return redirect('/');
  }

  return <SignInView />;
}

