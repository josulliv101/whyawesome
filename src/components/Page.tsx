import { cn } from "@/lib/utils";
import { Sidebar } from "./Sidebar";

const classMap = {
  "lg:grid-cols-5": "lg:grid-cols-5",
  "lg:grid-cols-1": "lg:grid-cols-1",
  "lg:col-span-1": "lg:col-span-1",
  "lg:col-span-4": "lg:col-span-4",
};

export function Page({
  children,
  className,
  showSidebar = true,
}: React.PropsWithChildren<{
  className?: string;
  showSidebar?: boolean;
}>) {
  const columnsClass = classMap[`lg:grid-cols-${showSidebar ? 5 : 1}`];
  const columnsSpanClass = classMap[`lg:col-span-${showSidebar ? 4 : 1}`];
  return (
    <main
      style={{ minHeight: "calc(100vh - 56px - 24px)" }}
      className={cn(
        "container flex flex-col items-center justify-between py-12",
        className
      )}
    >
      <div className="bg-background w-full">
        <div className={`grid ${columnsClass} gap-8`}>
          {showSidebar && <Sidebar className="hidden lg:block lg:col-span-1" />}
          <div className={`${columnsSpanClass}`}>
            <div className="bg-gray-100 h-12"></div>
            {children}
          </div>
        </div>
      </div>
      <footer>my footer</footer>
    </main>
  );
}
