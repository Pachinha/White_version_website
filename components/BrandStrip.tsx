import s from "./BrandStrip.module.css";

// Trocar pelos logótipos reais (SVG ou PNG em /public/marcas)
const BRANDS = Array.from({ length: 6 }, (_, i) => `[LOGO MARCA ${i + 1}]`);

export default function BrandStrip() {
  return (
    <section className={s.strip} aria-labelledby="marcas-title">
      <div className={s.inner}>
        <h2 id="marcas-title" className={s.label}>
          Marcas que instalamos
        </h2>
        <ul className={s.list}>
          {BRANDS.map((b) => (
            <li key={b} className={s.logo}>
              {b}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
