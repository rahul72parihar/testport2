/**
 * ==============================================================================
 * 🚀 APP.JS — DYNAMIC ENGINE (RENDERS CONFIG.JS DIRECTLY TO THE DOM)
 * ==============================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  if (typeof siteConfig === "undefined") {
    console.error("siteConfig is not loaded. Please ensure config.js is included before app.js.");
    return;
  }

  // 1. Dynamic Page Meta & Title
  document.title = `${siteConfig.personal.name} — ${siteConfig.personal.role}`;

  // 2. Render Navbar
  const brandEl = document.getElementById("nav-brand-text");
  if (brandEl) brandEl.textContent = siteConfig.personal.brandName;

  const navLinksContainer = document.getElementById("nav-links");
  if (navLinksContainer) {
    navLinksContainer.innerHTML = siteConfig.navigation
      .map(
        (item) => `<li><a href="${item.href}">${item.name}</a></li>`
      )
      .join("");
  }

  // Mobile menu toggle
  const navToggle = document.getElementById("nav-toggle");
  if (navToggle && navLinksContainer) {
    navToggle.addEventListener("click", () => {
      navLinksContainer.classList.toggle("open");
    });
    // Close on link click
    navLinksContainer.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => navLinksContainer.classList.remove("open"));
    });
  }

  // 3. Render Hero Section
  const heroBadge = document.getElementById("hero-badge");
  if (heroBadge) {
    heroBadge.innerHTML = `<span class="badge-pulse"></span> ${siteConfig.hero.badgeText}`;
  }

  const heroTitle = document.getElementById("hero-title");
  if (heroTitle) {
    heroTitle.innerHTML = `
      <span class="title-light">${siteConfig.hero.titleLine1}</span>
      <span class="title-gradient">${siteConfig.hero.titleLine2}</span>
    `;
  }

  const heroSubtitle = document.getElementById("hero-subtitle");
  if (heroSubtitle) heroSubtitle.textContent = siteConfig.hero.subtitle;

  const heroBtnPrimary = document.getElementById("hero-btn-primary");
  if (heroBtnPrimary) {
    heroBtnPrimary.textContent = siteConfig.hero.primaryButtonText;
    heroBtnPrimary.setAttribute("href", siteConfig.hero.primaryButtonHref);
  }

  const heroBtnSecondary = document.getElementById("hero-btn-secondary");
  if (heroBtnSecondary) {
    heroBtnSecondary.textContent = siteConfig.hero.secondaryButtonText;
    heroBtnSecondary.setAttribute("href", siteConfig.hero.secondaryButtonHref);
  }

  // 4. Render Services
  const servicesGrid = document.getElementById("services-grid");
  if (servicesGrid) {
    servicesGrid.innerHTML = siteConfig.services
      .map(
        (service) => `
        <div class="glass-card service-card">
          <div class="service-icon">${service.icon}</div>
          <h3 class="service-title">${service.title}</h3>
          <p class="service-desc">${service.description}</p>
        </div>
      `
      )
      .join("");
  }

  // 5. Render Projects & Category Filters
  renderProjectsSection();

  // 6. Render About Section
  const aboutHeading = document.getElementById("about-heading");
  if (aboutHeading) {
    aboutHeading.innerHTML = `
      ${siteConfig.about.headingPart1} <span class="gradient-text">${siteConfig.about.headingHighlight}</span>
    `;
  }

  const bentoProfile = document.getElementById("bento-profile");
  if (bentoProfile) {
    bentoProfile.style.backgroundImage = `url('${siteConfig.personal.avatarUrl}')`;
    bentoProfile.innerHTML = `
      <div class="bento-profile-overlay"></div>
      <div class="bento-profile-info">
        <h3 class="bento-profile-name">${siteConfig.personal.firstName} <span>${siteConfig.personal.lastName}</span></h3>
        <p class="bento-profile-role">${siteConfig.personal.role}</p>
      </div>
    `;
  }

  const bentoNumber = document.getElementById("bento-exp-number");
  if (bentoNumber) bentoNumber.textContent = siteConfig.about.experienceNumber;

  const bentoLabel = document.getElementById("bento-exp-label");
  if (bentoLabel) bentoLabel.textContent = siteConfig.about.experienceLabel;

  const bentoExpDesc = document.getElementById("bento-exp-desc");
  if (bentoExpDesc) bentoExpDesc.textContent = siteConfig.about.experienceDescription;

  const bentoReachBadge = document.getElementById("bento-reach-badge");
  if (bentoReachBadge) bentoReachBadge.textContent = siteConfig.about.reachBadge;

  const bentoReachDesc = document.getElementById("bento-reach-desc");
  if (bentoReachDesc) bentoReachDesc.textContent = siteConfig.about.reachDescription;

  const bentoQuote = document.getElementById("bento-quote");
  if (bentoQuote) bentoQuote.textContent = `"${siteConfig.about.quote}"`;

  // 7. Render Skills & Workflow
  const skillsList = document.getElementById("skills-list");
  if (skillsList) {
    skillsList.innerHTML = siteConfig.skills.technicalTools
      .map(
        (tool) => `
        <div class="skill-row">
          <div class="skill-icon">${tool.icon}</div>
          <div class="skill-info">
            <h4>${tool.name}</h4>
            <p>${tool.desc}</p>
          </div>
        </div>
      `
      )
      .join("");
  }

  const workflowSteps = document.getElementById("workflow-steps");
  if (workflowSteps) {
    workflowSteps.innerHTML = siteConfig.skills.workflow
      .map(
        (step) => `
        <div class="workflow-step">
          <div class="step-number">${step.step}</div>
          <div class="step-details">
            <h4>${step.title}</h4>
            <p>${step.desc}</p>
          </div>
        </div>
      `
      )
      .join("");
  }

  // 8. Render Clients
  const clientsGrid = document.getElementById("clients-grid");
  if (clientsGrid) {
    clientsGrid.innerHTML = siteConfig.clients
      .map((client) => `<span class="client-name">${client.name}</span>`)
      .join("");
  }

  // 9. Render Contact
  const contactHeading = document.getElementById("contact-heading");
  if (contactHeading) contactHeading.textContent = siteConfig.contact.heading;

  const contactSub = document.getElementById("contact-sub");
  if (contactSub) contactSub.textContent = siteConfig.contact.subheading;

  const contactEmail = document.getElementById("contact-email");
  if (contactEmail) {
    contactEmail.setAttribute("href", `mailto:${siteConfig.contact.email}`);
    contactEmail.innerHTML = `
      <span class="contact-icon">✉️</span>
      <div class="contact-text">
        <small>Email</small>
        <strong>${siteConfig.contact.email}</strong>
      </div>
    `;
  }

  const contactWhatsapp = document.getElementById("contact-whatsapp");
  if (contactWhatsapp) {
    const cleanNumber = siteConfig.contact.whatsappNumber.replace(/[^0-9]/g, "");
    contactWhatsapp.setAttribute("href", `https://wa.me/${cleanNumber}`);
    contactWhatsapp.innerHTML = `
      <span class="contact-icon">💬</span>
      <div class="contact-text">
        <small>WhatsApp</small>
        <strong>${siteConfig.contact.whatsappFormatted}</strong>
      </div>
    `;
  }

  const contactLocation = document.getElementById("contact-location");
  if (contactLocation) {
    contactLocation.innerHTML = `
      <span class="contact-icon">📍</span>
      <div class="contact-text">
        <small>Location</small>
        <strong>${siteConfig.contact.location}</strong>
      </div>
    `;
  }

  const contactResponse = document.getElementById("contact-response");
  if (contactResponse) {
    contactResponse.innerHTML = `
      <span class="contact-icon">⚡</span>
      <div class="contact-text">
        <small>Response Time</small>
        <strong>${siteConfig.contact.responseTime}</strong>
      </div>
    `;
  }

  // Contact Form Submission (Mailto fallback)
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("form-name")?.value || "";
      const email = document.getElementById("form-email")?.value || "";
      const message = document.getElementById("form-message")?.value || "";

      const mailtoUrl = `mailto:${siteConfig.contact.email}?subject=Inquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
      )}`;

      window.location.href = mailtoUrl;
      alert("Redirecting to your email client to send this message!");
      contactForm.reset();
    });
  }

  // 10. Render CTA & Footer
  const ctaTitle = document.getElementById("cta-title");
  if (ctaTitle) ctaTitle.textContent = siteConfig.cta.title;

  const ctaDesc = document.getElementById("cta-desc");
  if (ctaDesc) ctaDesc.textContent = siteConfig.cta.description;

  const ctaBtn = document.getElementById("cta-btn");
  if (ctaBtn) {
    ctaBtn.textContent = siteConfig.cta.buttonText;
    ctaBtn.setAttribute("href", siteConfig.cta.buttonHref);
  }

  const footerText = document.getElementById("footer-text");
  if (footerText) footerText.textContent = siteConfig.footer.text;

  const footerCopy = document.getElementById("footer-copy");
  if (footerCopy) {
    const year = new Date().getFullYear();
    footerCopy.textContent = `© ${year} ${siteConfig.personal.name}. ${siteConfig.footer.credit}.`;
  }

  const footerSocials = document.getElementById("footer-socials");
  if (footerSocials) {
    footerSocials.innerHTML = siteConfig.socials
      .map(
        (s) => `
        <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="footer-social-link" title="${s.name}">
          ${s.icon}
        </a>
      `
      )
      .join("");
  }

  // 11. Mouse Spotlight Effect
  const spotlight = document.getElementById("mouse-spotlight");
  if (spotlight) {
    window.addEventListener("mousemove", (e) => {
      spotlight.style.left = `${e.clientX}px`;
      spotlight.style.top = `${e.clientY}px`;
    });
  }

  // 12. Video Modal Setup
  setupVideoModal();
});

/**
 * Renders Projects and Category Filter Pills
 */
function renderProjectsSection() {
  const filterContainer = document.getElementById("category-filter");
  const projectsGrid = document.getElementById("projects-grid");
  if (!filterContainer || !projectsGrid) return;

  const allProjects = siteConfig.projects || [];

  // Extract unique categories & compute counts
  const categoryCounts = { All: allProjects.length };
  allProjects.forEach((p) => {
    categoryCounts[p.category] = (categoryCounts[p.category] || 0) + 1;
  });

  const categories = Object.keys(categoryCounts);

  // Render Filter Buttons
  filterContainer.innerHTML = categories
    .map(
      (cat, idx) => `
      <button class="filter-btn ${idx === 0 ? "active" : ""}" data-category="${cat}">
        ${cat} <span class="filter-count">${categoryCounts[cat]}</span>
      </button>
    `
    )
    .join("");

  // Function to render project cards
  function displayProjects(selectedCategory) {
    const filtered =
      selectedCategory === "All"
        ? allProjects
        : allProjects.filter((p) => p.category === selectedCategory);

    projectsGrid.innerHTML = filtered
      .map((p) => {
        // Thumbnail: YouTube auto thumbnail if available
        const thumbUrl = p.youtubeId
          ? `https://img.youtube.com/vi/${p.youtubeId}/hqdefault.jpg`
          : "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80";

        return `
          <div class="project-card" data-youtube="${p.youtubeId || ""}" data-title="${escapeHtml(p.title)}">
            <div class="project-thumb">
              <img src="${thumbUrl}" alt="${escapeHtml(p.title)}" loading="lazy" />
              <div class="play-badge">▶</div>
              ${p.duration ? `<span class="duration-tag">${p.duration}</span>` : ""}
            </div>
            <div class="project-body">
              <span class="project-category">${p.category}</span>
              <h3 class="project-title">${escapeHtml(p.title)}</h3>
              <p class="project-desc">${escapeHtml(p.description)}</p>
              <div class="project-meta">
                <span>👤 ${escapeHtml(p.client || "Client")}</span>
                <span>${(p.software || []).join(" • ")}</span>
              </div>
            </div>
          </div>
        `;
      })
      .join("");

    // Attach click listeners to open video modal
    projectsGrid.querySelectorAll(".project-card").forEach((card) => {
      card.addEventListener("click", () => {
        const ytid = card.getAttribute("data-youtube");
        const title = card.getAttribute("data-title");
        if (ytid) {
          openVideoModal(ytid, title);
        }
      });
    });
  }

  // Initial render
  displayProjects("All");

  // Filter button click events
  filterContainer.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      filterContainer.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      displayProjects(btn.getAttribute("data-category"));
    });
  });
}

/**
 * Video Modal Implementation
 */
function setupVideoModal() {
  const modal = document.getElementById("video-modal");
  const closeBtn = document.getElementById("modal-close");
  if (!modal) return;

  const closeModal = () => {
    modal.classList.remove("active");
    const iframe = document.getElementById("modal-iframe");
    if (iframe) iframe.src = "";
  };

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
}

function openVideoModal(youtubeId, title) {
  const modal = document.getElementById("video-modal");
  const iframe = document.getElementById("modal-iframe");
  const modalTitle = document.getElementById("modal-title");
  if (!modal || !iframe) return;

  iframe.src = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`;
  if (modalTitle) modalTitle.textContent = title || "Video Preview";
  modal.classList.add("active");
}

function escapeHtml(text) {
  if (!text) return "";
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
