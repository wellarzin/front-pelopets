import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Toaster } from 'sonner'

export const metadata: Metadata = {
  title: "Pelo Pets",
  description: "Adoção de Bichinhos em Pelotas - RS",
  keywords: ['adoção', 'pets', 'pelopets', 'bichinhos']
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
