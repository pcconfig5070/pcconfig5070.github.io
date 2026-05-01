import { useState } from "react";

interface Part {
  category: string;
  icon: string;
  name: string;
  retailer: string;
  amazonUrl: string;
}

const parts: Part[] = [
  {
    category: "Case",
    icon: "🖥️",
    name: "Fractal Design Focus 2 ATX Mid Tower Black",
    retailer: "amazon",
    amazonUrl: "https://www.amazon.com/s?k=Fractal+Design+Focus+2+ATX+Mid+Tower+Black",
  },
  {
    category: "CPU",
    icon: "⚙️",
    name: "Intel Core i5 14600KF 3.5 GHz 14-Core LGA1700",
    retailer: "amazon",
    amazonUrl: "https://www.amazon.com/s?k=Intel+Core+i5+14600KF",
  },
  {
    category: "Motherboard",
    icon: "🔌",
    name: "MSI B760 PRO P II DDR4 ATX",
    retailer: "amazon",
    amazonUrl: "https://www.amazon.com/s?k=MSI+B760+PRO+P+II+DDR4+ATX",
  },
  {
    category: "GPU",
    icon: "🎮",
    name: "MSI VENTUS 2X OC GeForce RTX 5070 12GB GDDR7 Silver / Black",
    retailer: "amazon",
    amazonUrl: "https://www.amazon.com/s?k=MSI+VENTUS+2X+OC+RTX+5070+12GB",
  },
  {
    category: "RAM",
    icon: "💾",
    name: "Kingston FURY Beast 32GB (2×16GB) DDR4 3200 CL16 Black",
    retailer: "amazon",
    amazonUrl: "https://www.amazon.com/s?k=Kingston+FURY+Beast+32GB+DDR4+3200+CL16",
  },
  {
    category: "CPU Cooler",
    icon: "❄️",
    name: "Deepcool AK400 AirCooler ZERO DARK PLUS Black",
    retailer: "amazon",
    amazonUrl: "https://www.amazon.com/s?k=Deepcool+AK400+ZERO+DARK+PLUS",
  },
  {
    category: "Storage",
    icon: "💿",
    name: "SanDisk WD Blue SN5100 1TB SSD M.2-2280 PCIe 4.0 x4 NVMe",
    retailer: "amazon",
    amazonUrl: "https://www.amazon.com/s?k=WD+Blue+SN5100+1TB+SSD+NVMe",
  },
  {
    category: "Power Supply",
    icon: "⚡",
    name: "be quiet! Pure Power 12 M 750W Fully Modular 80+ Gold",
    retailer: "amazon",
    amazonUrl: "https://www.amazon.com/s?k=be+quiet+Pure+Power+12+M+750W+Gold",
  },
];

const GlitchText = ({ text }: { text: string }) => {
  return (
    <span className="glitch-wrapper" data-text={text}>
      {text}
    </span>
  );
};

const PartCard = ({ part, index }: { part: Part; index: number }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`part-card ${hovered ? "part-card--hovered" : ""}`}
      style={{ animationDelay: `${index * 0.08}s` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Scan line effect */}
      <div className="scan-line" />

      {/* Corner accents */}
      <div className="corner corner-tl" />
      <div className="corner corner-tr" />
      <div className="corner corner-bl" />
      <div className="corner corner-br" />

      {/* Category Header */}
      <div className="part-category-header">
        <div className="category-tag">
          <span className="category-icon">{part.icon}</span>
          <span className="category-label">{part.category}</span>
        </div>
      </div>

      {/* Part Info */}
      <div className="part-body">
        {/* Icon */}
        <div className="part-visual">
          <div className="part-visual-inner">
            <span className="part-visual-icon">{part.icon}</span>
            <div className="part-visual-glow" />
          </div>
        </div>

        {/* Details */}
        <div className="part-details">
          <h3 className="part-name">{part.name}</h3>
          <div className="part-meta">
            <span className="retailer-badge amazon-badge">AMAZON</span>
          </div>
        </div>

        {/* Link Button */}
        <div className="part-action">
          <a
            href={part.amazonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="buy-btn"
          >
            <span>VOIR</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const partCount = parts.length;

  return (
    <div className="app">
      {/* Animated background grid */}
      <div className="bg-grid" />
      <div className="bg-vignette" />

      {/* Floating particles */}
      <div className="particles">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${6 + Math.random() * 6}s`,
          }} />
        ))}
      </div>

      <div className="container">
        {/* Header */}
        <header className="header">
          <div className="header-top">
            <div className="header-tag">
              <span className="tag-dot" />
              <span>GAMING BUILD 2025</span>
            </div>
            <div className="header-tag">
              <span className="tag-dot" />
              <span>RTX 5070 — i5 14600KF</span>
            </div>
          </div>

          <h1 className="header-title">
            <GlitchText text="GG" />
            <span className="header-title-sub">BUILD</span>
          </h1>

          <p className="header-subtitle">
            {"// "} Configuration PC Gaming — Présentation des composants
          </p>

          {/* Stats bar */}
          <div className="stats-bar">
            <div className="stat-item">
              <span className="stat-label">COMPOSANTS</span>
              <span className="stat-value">{partCount}</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-label">SOCKET</span>
              <span className="stat-value">LGA1700</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-label">PLATEFORME</span>
              <span className="stat-value">DDR4 — PCIe 4.0</span>
            </div>
          </div>
        </header>

        {/* Parts List */}
        <main className="parts-list">
          {parts.map((part, index) => (
            <PartCard key={part.category} part={part} index={index} />
          ))}
        </main>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-line" />
          <div className="footer-content">
            <div className="footer-note">
              * Les liens redirigent vers Amazon — les prix peuvent varier
            </div>
          </div>
          <div className="footer-badges">
            <span className="footer-badge">RTX 5070</span>
            <span className="footer-badge">DDR4 32GB</span>
            <span className="footer-badge">1TB NVMe</span>
            <span className="footer-badge">750W GOLD</span>
            <span className="footer-badge">14-CORE</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
