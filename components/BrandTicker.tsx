const brands = [
  { name: "Barbas",     img: "/brands/barbas.png",     h: 36 },
  { name: "Solzaima",   img: "/brands/solzaima.png",   h: 32 },
  { name: "Ravelli",    img: "/brands/ravelli.png",    h: 30 },
  { name: "MCZ",        img: "/brands/mcz.svg",        h: 28 },
  { name: "Edilkamin",  img: "/brands/edilkamin.png",  h: 32 },
  { name: "Stuv",       img: "/brands/stuv.svg",       h: 38 },
  { name: "Bellfires",  img: "/brands/bellfires.svg",  h: 26 },
  { name: "La Nordica", img: "/brands/lanordica.svg",  h: 26 },
  { name: "DRU",        img: "/brands/dru.svg",        h: 28 },
  { name: "Camin",      img: "/brands/camin.svg",      h: 26 },
];

function BrandItem({ brand }: { brand: (typeof brands)[0] }) {
  return (
    <div style={{ display: "flex", alignItems: "center", padding: "0 52px", flexShrink: 0 }}>
      <img
        src={brand.img}
        alt={brand.name}
        style={{
          height: `${brand.h}px`,
          width: "auto",
          display: "block",
          filter: "brightness(0) invert(1)",
          opacity: 0.72,
        }}
      />
    </div>
  );
}

export default function BrandTicker() {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 2,
        background: "rgba(14,9,4,0.30)",
        backdropFilter: "blur(4px)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        overflow: "hidden",
        padding: "22px 0",
      }}
    >
      {/* Fade left */}
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "80px", zIndex: 2, background: "linear-gradient(to right, rgba(14,9,4,0.90) 0%, transparent 100%)", pointerEvents: "none" }} />
      {/* Fade right */}
      <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "80px", zIndex: 2, background: "linear-gradient(to left, rgba(14,9,4,0.90) 0%, transparent 100%)", pointerEvents: "none" }} />

      <div style={{ display: "flex" }}>
        <div className="ticker-set">
          {brands.map((brand) => <BrandItem key={brand.name} brand={brand} />)}
        </div>
        <div className="ticker-set" aria-hidden="true">
          {brands.map((brand) => <BrandItem key={`${brand.name}-2`} brand={brand} />)}
        </div>
      </div>
    </div>
  );
}
