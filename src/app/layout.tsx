import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@/styles/globals.scss";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Frontend Responsive",
  description: "Reactjs Test",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
