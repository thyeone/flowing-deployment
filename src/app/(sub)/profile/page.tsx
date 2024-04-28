import { SSRSafeSuspense } from '@/components/Async';
import Spacing from '@/components/Spacing';
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
            <Spacing size={16} />
            <ProfileForm />
          </ProfileProvider>
        </FileFormProvider>
      </SSRSafeSuspense>
    </>
  );
}
