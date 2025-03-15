import { withAuth } from './_components/Authenticated';
import LoginSection from './_components/LoginSection';

export default withAuth(function LoginPage() {
  return <LoginSection />;
});
