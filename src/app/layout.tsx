import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "Roca Delta - Website",
    template: "%s | Roca Delta",
  },
  description:
    "We merge advanced technology with strategic consultancy to identify and solve complex business challenges",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>

      <script src="https://js.paystack.co/v2/inline.js" async></script>
    </html>
  );
}
