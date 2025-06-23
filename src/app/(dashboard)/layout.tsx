import { SidebarProvider } from '@/components/ui/sidebar';
import { DashboardNavbar } from '@/modules/dashboard/ui/components/dashboard-navbar';
import { DashboardSidebar } from '@/modules/dashboard/ui/components/dashboard-sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <main className="flex flex-col h-screen w-screen bg-muted">
        <DashboardNavbar />
        <div className="w-full max-w-sm md:max-w-3xl">{children}</div>
      </main>
    </SidebarProvider>
  );
}

