'use client';
import { usePathname } from 'next/navigation';
import { SidebarProvider } from '@/context/SidebarContext';
import LayoutContent from './LayoutContent';

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const excludedRoutes = ['/', '/login', '/otp', '/signup'];
  const isExcluded = excludedRoutes.includes(pathname);

  if (isExcluded) {
    return <>{children}</>;
  }

  return (
    <SidebarProvider>
      <LayoutContent>{children}</LayoutContent>
    </SidebarProvider>
  );
}
