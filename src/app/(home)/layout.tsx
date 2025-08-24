import { Header, Footer } from "@/components/layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BeetleBytes - Modern Digital Agency",
  description: "BeetleBytes crafts stunning websites that deliver seamless user experiences and drive business growth. Transform your vision into reality with our cutting-edge web solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
