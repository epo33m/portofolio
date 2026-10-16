import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "[Nama] - Portfolio",
  description: "[Peran] - selected work, about, and contact.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-[#1d1d1f] font-sans">
        {children}
      </body>
    </html>
  );
}
