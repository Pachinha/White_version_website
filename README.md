# Lareiras Pachinha — site

Next.js (App Router) + CSS Modules. Sem dependências extra.

## Arrancar

```bash
npm install
npm run dev
```

Abrir http://localhost:3000

## Estrutura

```
app/
  layout.tsx          fonte Figtree, header fixo, link "saltar para o conteúdo"
  page.tsx            página inicial (Hero + marcas)
  [slug]/page.tsx     páginas provisórias (lareiras, orcamento, manutencao, …)
  globals.css         cores, botões (.btn, .btn-primary, .btn-secondary), movimento reduzido
components/
  SiteHeader.tsx      header: transparente no topo → creme com blur após 40px; menu móvel
  LanguageSwitcher    PT/ES/FR/EN com pílula que desliza (ainda só visual)
  Hero.tsx            hero com entrada escalonada e foto que "assenta"
  CountUp.tsx         números que contam quando aparecem no ecrã
  BrandStrip.tsx      faixa de marcas (placeholders)
lib/site.ts           telefone, menu, idiomas, páginas provisórias
public/               hero.jpg, logo.png
```

## Por trocar

- `lib/site.ts` → `PHONE_LABEL` e `PHONE_TEL`
- `public/hero.jpg` → foto original em alta resolução (a atual foi recortada de um screenshot)
- `public/logo.png` → logótipo original, idealmente em SVG
- `components/BrandStrip.tsx` → logótipos das marcas
- Confirmar os números do hero (30+, 1.000+, 12)

## Próximos passos

- Formulário de pedido de orçamento (`/orcamento`)
- Agendamento de manutenção (`/manutencao`)
- Traduções (ligar o seletor de idioma a rotas `/pt`, `/es`, …)
- Páginas de categoria e produto
