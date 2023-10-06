import Footer from "@/components/Footer";
import "./globals.css";
import Nav from "@/components/Nav";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Akshar } from "next/font/google";
import AuthProvider from "./context/AuthProvider";

const akshar = Akshar({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Culinary Compass",
  description:
    "Search for delicious recipes or share your favorites with others.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body className={`${akshar.className} bg-blue-300`}>
        <Analytics />
        <AuthProvider>
          <Nav />
          <main>{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
