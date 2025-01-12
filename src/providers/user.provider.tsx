'use client';

import { createSafeContext } from '@/components/create-safe-context';
import { decodeAccessToken } from '@/utils';

type User = {
  memberId: string;
};

const [UserContextProvider, useUser] = createSafeContext<User>('User');

export { useUser };

export default function UserProvider({ children }: PropsWithStrictChildren) {
  const memberId = decodeAccessToken();

  return (
    <UserContextProvider
      value={{
        memberId,
      }}
    >
      {children}
    </UserContextProvider>
  );
}
