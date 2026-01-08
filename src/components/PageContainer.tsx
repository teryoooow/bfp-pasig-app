import { ReactNode } from "react";
import MobileHeader from "./MobileHeader";
import BottomNav from "./BottomNav";

interface PageContainerProps {
  children: ReactNode;
  title?: string;
  showHeader?: boolean;
  showNav?: boolean;
}

const PageContainer = ({
  children,
  title,
  showHeader = true,
  showNav = true,
}: PageContainerProps) => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {showHeader && <MobileHeader title={title} />}
      <main className="flex-1 pb-24 overflow-y-auto">{children}</main>
      {showNav && <BottomNav />}
    </div>
  );
};

export default PageContainer;
