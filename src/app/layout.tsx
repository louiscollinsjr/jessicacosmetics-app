import type { Metadata } from "next";
import Navigation from "./components/Navigation";
import MegaMenu from "./components/NavigationMegaMenu";

import "./globals.css";


export const metadata: Metadata = {
  title: "JESSICA® Comentics - România",
  description: "JESSICA® Comentics - România",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* <Navigation /> */}
        <MegaMenu />
        <main>{children}</main>
      </body>
    </html>
  );
}
