import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { Hero } from "@/components/Hero";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "why awesome",
  description: "find out why stuff is awesome",
};

export default function RootLayout({
  children,
  modal,
  params = {},
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
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
        <Hero />
        <div className="bg-background w-full">
          <div className={`grid lg:grid-cols-5 gap-8`}>
            <Sidebar hub={hub} className="hidden lg:block lg:col-span-1" />
            <div className="lg:col-span-4">
              <div className="bg-gray-100 h-12 hidden"></div>
              {children}
            </div>
          </div>
        </div>{" "}
        <div vaul-drawer-wrapper=""></div>
        {modal}
        <div id="modal-root" />
      </body>
    </html>
  );
}
