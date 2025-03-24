import Link from 'next/link';

import LogoIcon from '@/assets/LogoIcon';
import Spacing from '@/components/layout/Spacing';

import LogoutButton from './LogoutButton';

const AdminSidebar = () => {
  return (
    <nav className="flex w-full max-w-[280px] flex-col border-r border-slate-300 p-12">
      <Link href="/admin/dashboard" className="flex items-center gap-2">
        <LogoIcon width={28} height={28} />
        <span className="text-xl font-bold text-primary-400">Flowing Admin</span>
      </Link>

      <Spacing size={32} />

      <div className="flex flex-col gap-2 text-gray-700 [&>*]:py-1">
        <Link href="/admin/user-list">회원 목록</Link>
        <Link href="/admin/user-approval">회원 승인</Link>
        <Link href="/admin/user-restriction">회원 이용 제한</Link>
      </div>

      <LogoutButton />
    </nav>
  );
};

export default AdminSidebar;
