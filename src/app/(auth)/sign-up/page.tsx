import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

import { auth } from '@/lib/auth';
import { SignUpView } from '@/modules/auth/ui/views/sign-up-view';

export default async function Page() {
  const session = await auth.api.getSession({ headers: await headers() });

  if (session) {
    return redirect('/');
  }

  return <SignUpView />;
}

