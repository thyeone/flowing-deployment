export default async function AdminLayout({ children }: PropsWithStrictChildren) {
  return <main className="flex h-screen w-screen flex-col bg-slate-300">{children}</main>;
}
