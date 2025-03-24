import AdminSidebar from './_components/AdminSidebar';

export default async function AdminLayout({ children }: PropsWithStrictChildren) {
  return (
    <main className="flex h-full w-full items-center justify-center">
      <div className="mx-auto flex min-h-[800px] w-full max-w-7xl rounded-lg bg-white shadow-md">
        <AdminSidebar />
        <div className="p-12">{children}</div>
      </div>
    </main>
  );
}
