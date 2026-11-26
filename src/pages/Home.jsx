
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faArrowUpRightFromSquare,
  faCode,
  faPalette,
  faLaptopCode,
  faUsers,
  faEnvelope,
  faLightbulb,
  faMobileScreenButton,
  faXmark,
  faCopy,
  faCheck,
  faImages,
  faExpand,
  faGraduationCap,
  faBookOpen,
  faSchool,
  faChevronDown,
  faStar,
  faPaperPlane,
  faChevronLeft,
  faChevronRight,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";

// FOTO PROFIL
import fotoAnggi from "../assets/images/anggia-potrait.png";
import aboutPhoto from "../assets/images/anggia-about.jpeg";

// DATA PORTOFOLIO
import {
  profileData,
  educationData,
  projectsData,
  experiencesData,
  skillGroupsData,
  galleryData,
} from "../data/portfolioData";

// CSS
import "../../index.css";
import "./Home.css";

// =========================================
// WARNA KARTU
// =========================================

const colorMap = {
  peach: "bg-[#F7DED4]",
  sage: "bg-[#E1E9D9]",
  lilac: "bg-[#E9E0F0]",
  yellow: "bg-[#F7EBCB]",
};

// =========================================
// ICON PROYEK DAN SKILL
// =========================================

const iconMap = {
  laptop: faLaptopCode,
  code: faCode,
  lightbulb: faLightbulb,
  mobile: faMobileScreenButton,
  palette: faPalette,
  users: faUsers,
};

// =========================================
// ICON PENDIDIKAN
// =========================================

const educationIcons = [
  faGraduationCap,
  faLaptopCode,
  faBookOpen,
  faSchool,
];

const educationColors = [
  "education-sage",
  "education-peach",
  "education-lilac",
  "education-yellow",
];

// =========================================
// KOMPONEN JUDUL SECTION
// =========================================

const SectionHeading = ({ eyebrow, title, description }) => (
  <div className="section-heading reveal-up">
    <span className="eyebrow">✳ {eyebrow}</span>
    <h2>{title}</h2>
    {description && <p>{description}</p>}
  </div>
);

// =========================================
// KOMPONEN UTAMA HOME
// =========================================

function Home() {
  // =========================================
  // STATE
  // =========================================

  // Typewriter
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Efek 3D foto
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  // Filter dan modal proyek
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [activeProject, setActiveProject] = useState(null);
  const [activeSlideIdx, setActiveSlideIdx] = useState(0);

  // Filter dan lightbox galeri
  const [galleryFilter, setGalleryFilter] = useState("Semua");
  const [lightboxItem, setLightboxItem] = useState(null);

  // Pendidikan
  const [activeEducation, setActiveEducation] = useState(null);

  // Kontak
  const [copied, setCopied] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    message: "",
  });

  // =========================================
  // TYPEWRITER EFFECT
  // =========================================

  useEffect(() => {
    if (!profileData.roles?.length) return;

    const currentRole = profileData.roles[roleIndex];
    const speed = isDeleting ? 45 : 85;

    const timer = setTimeout(() => {
      if (!isDeleting && displayedRole.length < currentRole.length) {
        setDisplayedRole(
          currentRole.slice(0, displayedRole.length + 1)
        );
      } else if (
        !isDeleting &&
        displayedRole.length === currentRole.length
      ) {
        setIsDeleting(true);
      } else if (isDeleting && displayedRole.length > 0) {
        setDisplayedRole(
          currentRole.slice(0, displayedRole.length - 1)
        );
      } else if (isDeleting && displayedRole.length === 0) {
        setIsDeleting(false);
        setRoleIndex(
          (prev) => (prev + 1) % profileData.roles.length
        );
      }
    }, !isDeleting && displayedRole === currentRole ? 1400 : speed);

    return () => clearTimeout(timer);
  }, [displayedRole, isDeleting, roleIndex]);

  // =========================================
  // SCROLL REVEAL
  // =========================================

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal-up");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [selectedCategory, galleryFilter]);

  // =========================================
  // TUTUP MODAL DENGAN ESCAPE
  // =========================================

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setActiveProject(null);
        setLightboxItem(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  // =========================================
  // FOTO 3D TILT
  // =========================================

  const handlePhotoMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x =
      ((e.clientX - rect.left) / rect.width - 0.5) * 14;

    const y =
      ((e.clientY - rect.top) / rect.height - 0.5) * -14;

    setTilt({ x, y });
  };

  const resetPhotoMove = () => {
    setTilt({ x: 0, y: 0 });
  };

  // =========================================
  // FILTER PROYEK
  // =========================================

  const projectCategories = [
    "Semua",
    ...new Set(projectsData.map((p) => p.category)),
  ];

  const filteredProjects =
    selectedCategory === "Semua"
      ? projectsData
      : projectsData.filter(
          (p) => p.category === selectedCategory
        );

  // =========================================
  // FILTER GALERI
  // =========================================

  const galleryCategories = [
    "Semua",
    ...new Set(galleryData.map((g) => g.category)),
  ];

  const filteredGallery =
    galleryFilter === "Semua"
      ? galleryData
      : galleryData.filter(
          (g) => g.category === galleryFilter
        );

  // =========================================
  // MODAL PROYEK
  // =========================================

  const openProjectModal = (project) => {
    setActiveProject(project);
    setActiveSlideIdx(0);
  };

  const modalImages = activeProject
    ? [
        ...(activeProject.image ? [activeProject.image] : []),
        ...(activeProject.gallery || []),
      ]
    : [];

  // =========================================
  // COPY EMAIL
  // =========================================

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profileData.email);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2200);
    } catch (error) {
      console.error("Gagal menyalin email:", error);
    }
  };

  // =========================================
  // FORM KONTAK
  // =========================================

  const handleQuickMail = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Halo Anggia! Pesan dari ${
        contactForm.name || "Pengunjung Portofolio"
      }`
    );

    const body = encodeURIComponent(contactForm.message);

    window.location.href =
      `mailto:${profileData.email}?subject=${subject}&body=${body}`;
  };

  // =========================================
  // TAMPILAN WEBSITE
  // =========================================

  return (
    <main className="portfolio-page">

      {/* =====================================
          HERO SECTION
      ====================================== */}

      <section className="hero-wrap" id="introduction">
        <div className="hero content">

          <div className="hero-copy">

            <span className="hello-pill">
              <span className="hello-dot" />
            </span>

            <p className="hero-kicker">
              I'm a{" "}
              <span className="typewriter-text">
                {displayedRole}
                <span className="typewriter-cursor">|</span>
              </span>
            </p>

            <h1 className="hero-name">
              <span className="hero-first-name">
                {profileData.firstName}
              </span>

              <span className="hero-last-name">
                {profileData.lastName}
              </span>

              <i className="hero-name-sparkle">✳</i>
            </h1>

            <p className="hero-description">
              Suka mengeksplorasi dunia{" "}
              <strong>web development</strong>, desain antarmuka,
              dan ide-ide digital. Saat ini sedang belajar,
              bertumbuh, dan mengubah ide menjadi karya yang bermanfaat.
            </p>

            <div className="hero-actions">
              <a className="button-main" href="#portfolio">
                Lihat Karyaku
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>

              <a className="button-text" href="#contact">
                Hubungi Saya ↗
              </a>
            </div>

            <div className="hero-stats">
              {profileData.stats.map((stat) => (
                <div key={stat.label}>
                  <b>{stat.value}</b>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>

          </div>

          {/* FOTO HERO */}

          <div
            className="hero-visual"
            onMouseMove={handlePhotoMove}
            onMouseLeave={resetPhotoMove}
          >

            <div className="hero-blob" />

            <div
              className="hero-photo-frame"
              style={{
                transform: `rotate(3deg) perspective(800px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
              }}
            >
              <img
                src={fotoAnggi}
                alt={`Foto ${profileData.fullName}`}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>

            <div className="float-note note-top">
              creative mind <span>✷</span>
            </div>

            <div className="sparkle sparkle-one">✳</div>
            <div className="sparkle sparkle-two">✦</div>

          </div>
        </div>

        <div className="hero-bottom content">
          <span>SCROLL TO EXPLORE</span>
          <span className="scroll-line" />
          <span>PORTFOLIO 2026</span>
        </div>
      </section>

      {/* =====================================
          TENTANG SAYA
      ====================================== */}

      <section className="about-section section-pad" id="profile">
        <div className="content about-grid">

          <div className="about-photo reveal-up">
            <div className="about-photo-frame">
              <img
                src={aboutPhoto}
                alt="Foto Anggi About"
              />
            </div>

            <div className="about-photo-caption">
              <span className="caption-star">✳</span>
              <div>
                <strong>Kenali Saya Lebih Dekat</strong>
                <small>Ruang Kecil Tentang Anggia</small>
              </div>
            </div>
          </div>

          <div className="about-copy reveal-up">

            <SectionHeading
              eyebrow="TENTANG SAYA"
              title="Halo, Saya Anggia!"
              description="Senang bisa berbagi sedikit cerita tentang diri saya."
            />

            {profileData.aboutParagraphs.map((para, idx) => (
              <p className="body-copy" key={idx}>
                {para}
              </p>
            ))}

            <div className="about-tags">
              {profileData.aboutTags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* =====================================
          EDUCATION SECTION
      ====================================== */}

      <section className="education-section" id="education">
        <div className="education-container">

          <div className="education-heading">
            <span className="section-label">
              <FontAwesomeIcon icon={faStar} />
              PERJALANAN PENDIDIKAN
            </span>

            <h2>
              My Education <span>Journey</span>
            </h2>

            <p>
              Setiap perjalanan punya cerita. Ini adalah bagian dari proses
              belajar dan berkembang yang membentuk diri saya hingga saat ini.
            </p>
          </div>

          <div className="education-grid">
            {educationData.map((item, index) => {
              const isActive = activeEducation === item.id;

              return (
                <article
                  className={`education-card ${
                    educationColors[index % educationColors.length]
                  } ${isActive ? "active" : ""}`}
                  key={item.id}
                  onClick={() =>
                    setActiveEducation(isActive ? null : item.id)
                  }
                >
                  <div className="education-card-top">
                    <span className="education-year">
                      {item.year}
                    </span>

                    <span className="education-number">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="education-main">
                    <div className="education-icon">
                      <FontAwesomeIcon
                        icon={
                          educationIcons[index % educationIcons.length]
                        }
                      />
                      <span className="education-icon-sparkle">
                        ✦
                      </span>
                    </div>

                    <div className="education-info">
                      <h3>{item.place}</h3>
                      <p className="education-major">
                        {item.major}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`education-detail ${
                      isActive ? "show" : ""
                    }`}
                  >
                    <p>{item.detail}</p>
                  </div>

                  <div className="education-card-bottom">
                    <span>
                      {isActive ? "Tutup detail" : "Lihat detail"}
                    </span>

                    <span className="education-arrow">
                      <FontAwesomeIcon icon={faChevronDown} />
                    </span>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="education-footer">
            <span>♡</span>
            <p>
              Still learning, still growing, and always exploring new things.
            </p>
            <span>♡</span>
          </div>

        </div>
      </section>

      {/* =====================================
          PROJECTS SECTION
      ====================================== */}

      <section className="projects-section section-pad" id="portfolio">
        <div className="content">

          <div className="section-top-bar">
            <SectionHeading
              eyebrow="SELECTED WORKS"
              title="Beberapa hal yang pernah kubuat."
              description="Klik pada kartu proyek untuk melihat detail fitur, peran, serta galeri tampilan."
            />

            <div
              className="filter-pills"
              role="tablist"
              aria-label="Filter proyek"
            >
              {projectCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`filter-pill ${
                    selectedCategory === cat ? "is-active" : ""
                  }`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <article
                className="project-card reveal-up"
                key={project.id}
                onClick={() => openProjectModal(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openProjectModal(project);
                  }
                }}
              >

                {project.image ? (
                  <div className="project-cover-wrap">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-cover-img"
                    />

                    <span className="project-badge-float">
                      {project.number} • {project.year}
                    </span>

                    <span className="project-zoom-hint">
                      <FontAwesomeIcon icon={faExpand} /> Detail
                    </span>
                  </div>
                ) : (
                  <div className={`project-art ${colorMap[project.color]}`}>
                    <span className="project-number">
                      {project.number} / 0{projectsData.length}
                    </span>

                    <div className="project-icon">
                      <FontAwesomeIcon
                        icon={iconMap[project.iconName] || faCode}
                      />
                    </div>

                    <span className="project-art-word">
                      {project.title.split(" ")[0]}
                    </span>

                    <span className="project-year">
                      {project.year}
                    </span>
                  </div>
                )}

                <div className="project-info">

                  <div className="project-meta">
                    <span>{project.subtitle}</span>
                    <span>{project.category}</span>
                  </div>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <div className="project-footer-actions">

                    {project.link && (
                      <a
                        className="project-link"
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Live Site{" "}
                        <FontAwesomeIcon
                          icon={faArrowUpRightFromSquare}
                        />
                      </a>
                    )}
                  </div>

                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

{/* =====================================
    EXPERIENCE SECTION
====================================== */}

<section className="experience-section section-pad" id="experience">
  <div className="content experience-container">

    <div className="experience-intro">
      <SectionHeading
        eyebrow="MY JOURNEY"
        title="Pengalaman & Kolaborasi"
        description="Setiap kesempatan menjadi bagian dari perjalanan untuk belajar, berkembang, dan menciptakan sesuatu yang bermakna."
      />

      <div className="experience-doodle">
        <span>✳</span>
        <span className="doodle-text">little steps, big growth</span>
        <span>✳</span>
      </div>

      <div className="experience-mini-note">
        <FontAwesomeIcon icon={faLightbulb} />
        <span>Every experience has a story to tell.</span>
      </div>
    </div>

    <div className="experience-timeline">
      {experiencesData.map((item, index) => (
        <article
          className={`experience-card experience-${item.color || "peach"}`}
          key={item.id}
          style={{ "--experience-index": index }}
        >
          <div className="experience-marker">
            <span>{String(index + 1).padStart(2, "0")}</span>
          </div>

          <div className="experience-card-inner">

            <div className="experience-card-top">
              <span className="experience-number">
                EXPERIENCE {String(index + 1).padStart(2, "0")}
              </span>

              <span className="experience-date">
                <FontAwesomeIcon icon={faCalendarDays} />
                {item.date}
              </span>
            </div>

            <div className="experience-card-body">
              <div className="experience-icon">
                <FontAwesomeIcon
                  icon={
                    index === 0
                      ? faUsers
                      : index === 1
                      ? faLaptopCode
                      : faLightbulb
                  }
                />
              </div>

              <div className="experience-information">
                <h3>{item.title}</h3>

                <span className="experience-role">
                  {item.role}
                </span>

                <p>{item.text}</p>
              </div>
            </div>

            <div className="experience-card-footer">
              <span>
                <FontAwesomeIcon icon={faStar} />
                Growth & Learning
              </span>

              <span className="experience-decoration">✳</span>
            </div>

          </div>
        </article>
      ))}
    </div>

    <div className="experience-bottom-note">
      <span>♡</span>
      <p>Still learning, still growing, and always exploring new possibilities.</p>
      <span>♡</span>
    </div>

  </div>
</section>

      {/* =====================================
          SKILLS SECTION
      ====================================== */}

      <section className="skills-section section-pad" id="services">
        <div className="content">

          <SectionHeading
            eyebrow="MY TOOLBOX"
            title="Tools yang sering kugunakan"
            description="Masih terus berkembang, tapi ini beberapa kemampuan dan tools yang pernah kupelajari maupun gunakan."
          />

          <div className="skills-grid">
            {skillGroupsData.map((group) => (
              <article
                className={`skill-card reveal-up ${colorMap[group.color]}`}
                key={group.id}
              >

                <div className="skill-card-heading">
                  <span className="skill-icon">
                    <FontAwesomeIcon
                      icon={iconMap[group.iconName] || faCode}
                    />
                  </span>

                  <h3>{group.title}</h3>
                </div>

                <div className="skill-list">
                  {group.skills.map((skill) => (
                    <span key={skill.name} className="skill-chip">
                      {skill.name}
                      <small>{skill.level}</small>
                    </span>
                  ))}
                </div>

              </article>
            ))}
          </div>

        </div>
      </section>

      {/* =====================================
          GALLERY SECTION
      ====================================== */}

      <section className="gallery-section section-pad" id="gallery">
        <div className="content">

          <div className="section-top-bar">
            <SectionHeading
              eyebrow="SNAPSHOTS & MOMENTS"
              title="Galeri kegiatan & dokumentasi"
              description="Ruang untuk menyimpan dokumentasi lomba, organisasi, sertifikat, maupun cuplikan karya."
            />

            <div className="filter-pills">
              {galleryCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`filter-pill ${
                    galleryFilter === cat ? "is-active" : ""
                  }`}
                  onClick={() => setGalleryFilter(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="gallery-grid">
            {filteredGallery.map((item) => (
              <article
                key={item.id}
                className={`gallery-card reveal-up ${
                  !item.image ? colorMap[item.color] : ""
                }`}
                onClick={() => setLightboxItem(item)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setLightboxItem(item);
                  }
                }}
              >

                {item.image ? (
                  <div className="gallery-photo-box">
                    <img src={item.image} alt={item.title} />

                    <span className="gallery-expand-btn">
                      <FontAwesomeIcon icon={faExpand} />
                    </span>
                  </div>
                ) : (
                  <div className="gallery-placeholder">
                    <FontAwesomeIcon icon={faImages} />
                    <span>Slot Foto Siap Diisi</span>
                    <small>public/images/gallery/</small>
                  </div>
                )}

                <div className="gallery-caption">
                  <div className="gallery-meta">
                    <span>{item.category}</span>
                    <span>{item.year}</span>
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.caption}</p>
                </div>

              </article>
            ))}
          </div>

        </div>
      </section>

      {/* =====================================
          CONTACT SECTION
      ====================================== */}

      <section className="contact-section section-pad" id="contact">
        <div className="content contact-card reveal-up">

          <div className="contact-decoration">✳</div>

          <span className="eyebrow">LET&apos;S CONNECT</span>

          <h2>
            Punya ide menarik?
            <br />
            <span>Yuk, ngobrol!</span>
          </h2>

          <p>
            Terbuka untuk bertukar cerita, belajar bersama, dan
            berkolaborasi dalam hal-hal kreatif maupun teknologi.
          </p>

          <div className="contact-actions-row">

            <a
              className="button-main"
              href={`mailto:${profileData.email}`}
            >
              <FontAwesomeIcon icon={faEnvelope} />
              {profileData.email}
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>

            <button
              type="button"
              className="button-secondary"
              onClick={handleCopyEmail}
            >
              <FontAwesomeIcon icon={copied ? faCheck : faCopy} />
              {copied ? "Email Tersalin!" : "Salin Email"}
            </button>

          </div>

          <form
            className="quick-contact-form"
            onSubmit={handleQuickMail}
          >

            <input
              type="text"
              placeholder="Nama kamu..."
              value={contactForm.name}
              onChange={(e) =>
                setContactForm({
                  ...contactForm,
                  name: e.target.value,
                })
              }
              required
            />

            <input
              type="text"
              placeholder="Tulis pesan singkat atau ide kolaborasi..."
              value={contactForm.message}
              onChange={(e) =>
                setContactForm({
                  ...contactForm,
                  message: e.target.value,
                })
              }
              required
            />

            <button type="submit" className="button-main">
              Kirim Pesan
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>

          </form>

<div className="contact-foot">
  <span>Made with curiosity &amp; a little coffee ☕ </span>

  <span>
    © {new Date().getFullYear()} {profileData.fullName}
  </span>

  <span className="template-credit">
    Link Template = {" "}
    <a
      href="https://preview.themewagon.com/picto/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Picto by ThemeWagon ↗
    </a>
  </span>
</div>

        </div>
      </section>

      {/* =====================================
          MODAL DETAIL PROYEK
      ====================================== */}

      {activeProject && (
        <div
          className="modal-backdrop"
          onClick={() => setActiveProject(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="modal-box"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              type="button"
              className="modal-close"
              onClick={() => setActiveProject(null)}
              aria-label="Tutup modal"
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>

            {modalImages.length > 0 ? (
              <div className="modal-gallery-viewer">

                <img
                  src={modalImages[activeSlideIdx]}
                  alt={`${activeProject.title} preview`}
                />

                {modalImages.length > 1 && (
                  <div className="modal-slide-controls">

                    <button
                      type="button"
                      onClick={() =>
                        setActiveSlideIdx(
                          (prev) =>
                            (prev - 1 + modalImages.length) %
                            modalImages.length
                        )
                      }
                    >
                      <FontAwesomeIcon icon={faChevronLeft} />
                    </button>

                    <span>
                      {activeSlideIdx + 1} / {modalImages.length}
                    </span>

                    <button
                      type="button"
                      onClick={() =>
                        setActiveSlideIdx(
                          (prev) =>
                            (prev + 1) % modalImages.length
                        )
                      }
                    >
                      <FontAwesomeIcon icon={faChevronRight} />
                    </button>

                  </div>
                )}

              </div>
            ) : (
              <div
                className={`modal-art-banner ${
                  colorMap[activeProject.color]
                }`}
              >

                <div className="project-icon">
                  <FontAwesomeIcon
                    icon={
                      iconMap[activeProject.iconName] || faCode
                    }
                  />
                </div>

                <p>
                  Tambahkan screenshot proyek ini di{" "}
                  <code>public/images/projects/</code> lalu isi properti{" "}
                  <code>image</code> dan <code>gallery</code> pada{" "}
                  <code>src/data/portfolioData.js</code>.
                </p>

              </div>
            )}

            <div className="modal-body">

              <div className="project-meta">
                <span>{activeProject.subtitle}</span>
                <span>{activeProject.year}</span>
              </div>

              <h3>{activeProject.title}</h3>

              <p className="modal-desc">
                {activeProject.description}
              </p>

              {activeProject.highlights?.length > 0 && (
                <div className="modal-highlights">
                  <h4>Kontribusi &amp; Fitur Utama:</h4>

                  <ul>
                    {activeProject.highlights.map((item, i) => (
                      <li key={i}>✦ {item}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="project-tags">
                {activeProject.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              {activeProject.link && (
                <div className="modal-actions">
                  <a
                    className="button-main"
                    href={activeProject.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Kunjungi Website
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare}
                    />
                  </a>
                </div>
                
              )}

            </div>
          </div>
        </div>
      )}

      {/* =====================================
          LIGHTBOX GALERI
      ====================================== */}

      {lightboxItem && (
        <div
          className="modal-backdrop"
          onClick={() => setLightboxItem(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="modal-box lightbox-box"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              type="button"
              className="modal-close"
              onClick={() => setLightboxItem(null)}
              aria-label="Tutup lightbox"
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>

            {lightboxItem.image ? (
              <img
                src={lightboxItem.image}
                alt={lightboxItem.title}
                className="lightbox-full-img"
              />
            ) : (
              <div
                className={`modal-art-banner ${
                  colorMap[lightboxItem.color]
                }`}
              >

                <div className="project-icon">
                  <FontAwesomeIcon icon={faImages} />
                </div>

                <p>
                  Simpan foto dokumentasi di{" "}
                  <code>public/images/gallery/</code> lalu isi{" "}
                  <code>image</code> pada <code>galleryData</code>.
                </p>

              </div>
            )}

            <div className="modal-body">

              <div className="project-meta">
                <span>{lightboxItem.category}</span>
                <span>{lightboxItem.year}</span>
              </div>

              <h3>{lightboxItem.title}</h3>

              <p className="modal-desc">
                {lightboxItem.caption}
              </p>

            </div>
          </div>
        </div>
        
      )}

    </main>
    
  );
  
}

export default Home;
