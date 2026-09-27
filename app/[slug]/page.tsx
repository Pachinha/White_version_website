import Link from "next/link";
import { notFound } from "next/navigation";
import { PAGES } from "@/lib/site";

export function generateStaticParams() {
  return Object.keys(PAGES).map((slug) => ({ slug }));
}

export const dynamicParams = false;

export default async function Placeholder({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const title = PAGES[slug];
  if (!title) notFound();

  return (
    <section
      style={{
        maxWidth: 1440,
        margin: "0 auto",
        padding: "160px var(--gutter) 120px",
        minHeight: "70vh",
      }}
    >
      <h1 style={{ fontSize: "clamp(36px, 5vw, 56px)", margin: "0 0 16px", fontWeight: 800 }}>
        {title}
      </h1>
      <p style={{ fontSize: 18, color: "var(--ink-2)", margin: "0 0 32px" }}>
        Esta página ainda está a ser preparada.
      </p>
      <Link href="/" className="btn btn-secondary btn-sm">
        Voltar ao início
      </Link>
    </section>
  );
}
