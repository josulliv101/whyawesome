import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { memo } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "why awesome",
  description: "find out why stuff is awesome",
};

const Foo = memo(function Foobar() {
  return <div>foobar</div>;
});

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    hub?: string;
    tags?: string;
  };
}) {
  const { hub } = params;
  console.log("root layout ::params", params);
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {!hub && (
          <div className="w-full bg-hero min-h-[360px] bg-bottom bg-no-repeat bg-cover" />
        )}
        <div className="bg-background w-full">
          <div className={`grid lg:grid-cols-5 gap-8`}>
            <Sidebar hub={hub} className="hidden lg:block lg:col-span-1" />
            <div className="lg:col-span-4">
              <div className="bg-gray-100 h-12"></div>
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
