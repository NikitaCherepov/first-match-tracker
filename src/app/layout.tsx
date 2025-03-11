import type { Metadata } from "next";
import "./globals.css";

import QueryWrapper from "./components/queryWrapper";

export const metadata: Metadata = {
  title: "Matchin Test WebApp",
  description: "Сделано для тестового задания",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body>
        <QueryWrapper>
        {children}
        </QueryWrapper>

      </body>
    </html>
  );
}
