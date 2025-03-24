import { SSRSafeSuspense } from '@/components/Async';
import FileFormProvider from '@/providers/FileFormProvider';

import ProfileProvider from './components/ProfileContext';
import ProfileForm from './components/ProfileForm';
import ProfileHeader from './components/ProfileHeader';

export default function Profile() {
  return (
    <>
      <ProfileHeader />
      <SSRSafeSuspense>
        <FileFormProvider>
          <ProfileProvider>
            <ProfileForm />
          </ProfileProvider>
        </FileFormProvider>
      </SSRSafeSuspense>
    </>
  );
}
