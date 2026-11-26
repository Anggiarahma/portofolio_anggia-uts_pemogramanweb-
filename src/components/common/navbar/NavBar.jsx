
import { useEffect, useState } from "react";
import "./NavBar.css";

const menuItems = [
  { name: "Beranda", url: "introduction" },
  { name: "Tentang", url: "profile" },
  { name: "Proyek", url: "portfolio" },
  { name: "Pengalaman", url: "experience" },
  { name: "Keahlian", url: "services" },
  { name: "Galeri", url: "gallery" },
];

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("introduction");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      let currentSection = "introduction";

      menuItems.forEach((item) => {
        const section = document.getElementById(item.url);

        if (section) {
          const position = section.getBoundingClientRect();

          if (position.top <= 180) {
            currentSection = item.url;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuClick = (url) => {
    setActiveSection(url);
    setMenuOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">

        {/* LOGO */}
        <a
          href="#introduction"
          className="navbar-brand"
          onClick={() => handleMenuClick("introduction")}
        >
          <span className="brand-icon">A.</span>
          <span className="brand-name">Portofolio Anggia<span>.</span></span>
        </a>

        {/* MENU NAVIGASI */}
        <nav className={`navbar-menu ${menuOpen ? "menu-open" : ""}`}>
          {menuItems.map((item) => (
            <a
              key={item.url}
              href={`#${item.url}`}
              className={`navbar-link ${
                activeSection === item.url ? "active" : ""
              }`}
              onClick={() => handleMenuClick(item.url)}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* TOMBOL KONTAK */}
        <a
          href="#contact"
          className="navbar-contact"
          onClick={() => handleMenuClick("contact")}
        >
          Mari Terhubung <span>↗</span>
        </a>

        {/* TOMBOL MENU HP */}
        <button
          className={`navbar-toggle ${menuOpen ? "toggle-active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  );
};

export default NavBar;
