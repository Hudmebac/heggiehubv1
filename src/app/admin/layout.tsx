import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin - HeggieHub',
  description: 'Admin section for HeggieHub',
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
    </>
  );
}
