import Image from "next/image";
import Link from "next/link";
import CountUp from "./CountUp";
import BrandTicker from "./BrandTicker";
import { ArrowIcon, CalendarIcon } from "./Icons";
import s from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={s.hero} aria-labelledby="hero-title">
      <div className={s.media}>
        <Image
          src="/hero.png"
          alt="Sala de estar com lareira acesa"
          fill
          priority
          quality={90}
          sizes="(max-width: 900px) 100vw, 65vw"
          className={s.photo}
        />
      </div>

      <BrandTicker />

      <div className={s.inner}>
        <div className={s.content}>
          <p className={s.kicker}>Desde 1990 · Portugal e Espanha</p>

          <h1 id="hero-title" className={s.title}>
            Aquecimento com quem sabe, desde 1990.
          </h1>

          <p className={s.lead}>
            Lareiras, recuperadores e salamandras a lenha, gás, pellets e bioetanol — com
            aconselhamento técnico e instalação incluída.
          </p>

          <div className={s.ctas}>
            <Link href="/orcamento" className="btn btn-primary btn-lg">
              Pedir orçamento grátis
              <span className="arrow">
                <ArrowIcon />
              </span>
            </Link>
            <Link href="/produtos" className="btn btn-secondary btn-lg">
              Ver produtos
            </Link>
          </div>

          <Link href="/manutencao" className={s.service}>
            <CalendarIcon />
            <span>Já é cliente? Agende manutenção ou limpeza</span>
          </Link>

          <dl className={s.stats}>
            <div>
              <dt>anos de experiência</dt>
              <dd>
                <CountUp to={30} suffix="+" />
              </dd>
            </div>
            <div>
              <dt>instalações feitas</dt>
              <dd>
                <CountUp to={1000} suffix="+" />
              </dd>
            </div>
            <div>
              <dt>marcas de topo</dt>
              <dd>
                <CountUp to={12} />
              </dd>
            </div>
            <div>
              <dt>países servidos</dt>
              <dd>PT + ES</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
