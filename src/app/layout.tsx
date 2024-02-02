import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { UserContextProvider } from "@/context/User";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MedCure",
  description: "MedCure is a platform medical students to learn and practice their skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <UserContextProvider>{children}</UserContextProvider>
      </body>
    </html>
  );
}
