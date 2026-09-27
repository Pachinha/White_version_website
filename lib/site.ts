// Dados do site num só sítio — trocar os placeholders pelos reais.
export const PHONE_LABEL = "[TELEFONE]";
export const PHONE_TEL = "+351000000000";

export type NavItem = { href: string; label: string; highlight?: boolean };

export const NAV: NavItem[] = [
  { href: "/lareiras", label: "Lareiras" },
  { href: "/recuperadores", label: "Recuperadores" },
  { href: "/salamandras", label: "Salamandras" },
  { href: "/fogoes", label: "Fogões" },
  { href: "/churrasqueiras", label: "Churrasqueiras" },
  { href: "/outlet", label: "Outlet", highlight: true },
  { href: "/servicos", label: "Serviços" },
];

export const LANGS = ["PT", "ES", "FR", "EN"] as const;

// Páginas provisórias (até existirem as verdadeiras)
export const PAGES: Record<string, string> = {
  lareiras: "Lareiras",
  recuperadores: "Recuperadores de calor",
  salamandras: "Salamandras",
  fogoes: "Fogões",
  churrasqueiras: "Churrasqueiras",
  outlet: "Outlet",
  servicos: "Serviços",
  orcamento: "Pedir orçamento",
  manutencao: "Agendar manutenção ou limpeza",
  produtos: "Produtos",
};
