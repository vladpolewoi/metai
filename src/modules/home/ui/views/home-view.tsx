'use client';

import { Button } from '@/components/ui/button';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';

export function HomeView() {
  const router = useRouter();
  const { data: session } = authClient.useSession();

  const onSignOut = () => {
    authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          // Redirect to the sign-in page after successful sign-out
          router.push('/sign-in');
        },
      },
    });
  };

  if (!session) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Welcome, {session.user.name}!</h1>
      <p>Email: {session.user.email}</p>

      <Button onClick={onSignOut}>Sign Out</Button>
    </div>
  );
}

