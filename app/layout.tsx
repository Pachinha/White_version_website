import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lareiras Pachinha — Lareiras, recuperadores e salamandras desde 1990",
  description:
    "Lareiras, recuperadores e salamandras a lenha, gás, pellets e bioetanol, com aconselhamento técnico e instalação incluída, em Portugal e Espanha.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt" className={figtree.variable}>
      <body>
        <a className="skip-link" href="#conteudo">
          Saltar para o conteúdo
        </a>
        <SiteHeader />
        <main id="conteudo">{children}</main>
      </body>
    </html>
  );
}
