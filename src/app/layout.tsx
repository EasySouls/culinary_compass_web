import "./globals.css";
import Nav from "@/components/Nav";
import Provider from "@/components/Provider";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Culinary Compass",
  description:
    "Search for delicious recipes or share your favorites with others.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Provider>
          <main>
            <Nav />
            {children}
            <Analytics />
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
