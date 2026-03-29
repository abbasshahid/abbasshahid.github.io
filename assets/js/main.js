// assets/js/main.js 

document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("home-page");
  initSidebar("home", siteData);
  renderDesktopHeader(siteData.sections);
  renderHero(siteData.profile, siteData.profiles);
  renderSections(siteData.sections);
  setupThemeToggle();
  setupIntersectionObserver();
  setupLightbox();
});

/** Get selected publications from global pubData (from pubs-data.js) */
function getSelectedPubs(max = 6) {
  const data = window.pubData;
  if (!Array.isArray(data)) {
    console.warn("pubData is not an array or not loaded.");
    return [];
  }

  const selected = [];

  data.forEach((yearBlock) => {
    (yearBlock.items || []).forEach((item) => {
      // Check for "Selected" tag when there would be multiple publications we will uncomment this conditions to active another page
     // if (item.tags && item.tags.includes("Selected")) {
        selected.push({
          year: yearBlock.year,
          ...item
        });
      //}
    });
  });

  // Newest year first
  selected.sort((a, b) => b.year - a.year);

  return selected.slice(0, max);
}

function highlightAuthorName(citation) {
  if (!citation) return "";

  return citation.replace(
    /\bShahid Abbas\b/g,
    '<strong class="author-highlight">Shahid Abbas</strong>'
  );
}

function renderPublicationLinks(pub) {
  const links = [];

  if (pub.pubUrl) {
    links.push(
      `<a href="${pub.pubUrl}" target="_blank" rel="noreferrer">Publisher</a>`
    );
  }
  if (pub.pdfUrl) {
    links.push(
      `<a href="${pub.pdfUrl}" target="_blank" rel="noreferrer">PDF</a>`
    );
  }
  if (pub.codeUrl) {
    links.push(
      `<a href="${pub.codeUrl}" target="_blank" rel="noreferrer">Code</a>`
    );
  }

  if (!links.length) return "";

  return `<div class="small pub-links">${links.join(" · ")}</div>`;
}

function renderDesktopHeader(sections) {
  const layout = document.querySelector(".layout");
  if (!layout) return;

  const header = document.createElement("header");
  header.className = "site-header";
  header.innerHTML = `
    <div class="site-header-inner">
      <nav class="nav desktop-nav" id="desktopNav" aria-label="Primary navigation"></nav>
      <button class="theme-toggle" type="button" data-theme-toggle>
        <span data-theme-icon>🌙</span>
      </button>
    </div>
  `;

  document.body.insertBefore(header, layout);

  const nav = document.getElementById("desktopNav");
  if (!nav) return;

  sections.forEach((sec, idx) => {
    const btn = document.createElement("button");
    btn.textContent = sec.navLabel;
    btn.dataset.target = sec.id;
    btn.type = "button";
    if (sec.id === "publications") {
      btn.classList.add("nav-page-link");
    }

    if (idx === 0) btn.classList.add("active");

    btn.addEventListener("click", () => {
      // Special case: Publications goes to publications.html
      if (sec.id === "publications") {
        window.location.href = "publications.html";
        return;
      }

      // All other buttons scroll to their section on the same page
      const target = document.getElementById(sec.id);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });

    nav.appendChild(btn);
  });
}

function renderHero(profile, profiles) {
  const content = document.getElementById("content");
  if (!content || !profile) return;

  const scholarLink =
    (profiles || []).find((item) => item.name === "Google Scholar")?.url || "#";
  const cvLink = (profiles || []).find((item) => item.name === "CV")?.url || "#";

  const hero = document.createElement("section");
  hero.className = "hero";
  hero.innerHTML = `
    <div class="hero-copy">
      <span class="eyebrow">Academic Profile</span>
      <h1 class="hero-title">${profile.headline || profile.title}</h1>
      <p class="hero-summary">${profile.summary || ""}</p>
      <div class="hero-actions">
        <a class="button-primary" href="${cvLink}" target="_blank" rel="noreferrer">View CV</a>
        <a class="button-secondary" href="${scholarLink}" target="_blank" rel="noreferrer">Google Scholar</a>
      </div>
    </div>
  `;

  content.appendChild(hero);
}

function renderSections(sections) {
  const content = document.getElementById("content");

  sections.forEach((sec) => {
    const sectionEl = document.createElement("section");
    sectionEl.id = sec.id;
    sectionEl.className = "section";

    const header = document.createElement("div");
    header.className = "section-header";
    header.innerHTML = `
      <h2 class="section-title">${sec.title}</h2>
      <span class="section-kicker">${sec.subtitle || ""}</span>
    `;
    sectionEl.appendChild(header);

    // --- TEXT SECTIONS ---
    if (sec.type === "text") {
      sec.paragraphs.forEach((p) => {
        const para = document.createElement("p");
        para.textContent = p;
        sectionEl.appendChild(para);
      });

      if (sec.metrics && sec.metrics.length) {
        const metrics = document.createElement("div");
        metrics.className = "inline-metrics";
        sec.metrics.forEach((m) => {
          const badge = document.createElement("span");
          badge.className = "badge";
          badge.textContent = m;
          metrics.appendChild(badge);
        });
        sectionEl.appendChild(metrics);
      }

      if (sec.pills && sec.pills.length) {
        const pillRow = document.createElement("div");
        pillRow.className = "pill-row";
        sec.pills.forEach((p) => {
          const pill = document.createElement("span");
          pill.className = "pill";
          pill.textContent = p;
          pillRow.appendChild(pill);
        });
        sectionEl.appendChild(pillRow);
      }
    }

    // --- TIMELINE SECTIONS (Experience, Education, etc.) ---
    if (sec.type === "timeline") {
      const timeline = document.createElement("div");
      timeline.className = "timeline";

      sec.items.forEach((item) => {
        const itemEl = document.createElement("article");
        itemEl.className = "timeline-item";

        const itemHeader = document.createElement("div");
        itemHeader.className = "timeline-header";
        itemHeader.innerHTML = `
          <div>
            <div class="timeline-role">${item.role}</div>
            <div class="timeline-org">${item.org}</div>
          </div>
          <div class="timeline-meta">${item.meta || ""}</div>
        `;
        itemEl.appendChild(itemHeader);

        if (item.description) {
          const desc = document.createElement("p");
          desc.textContent = item.description;
          itemEl.appendChild(desc);
        }

        if (item.pills && item.pills.length) {
          const pillRow = document.createElement("div");
          pillRow.className = "pill-row";
          item.pills.forEach((p) => {
            const pill = document.createElement("span");
            pill.className = "pill";
            pill.textContent = p;
            pillRow.appendChild(pill);
          });
          itemEl.appendChild(pillRow);
        }

        timeline.appendChild(itemEl);
      });

      sectionEl.appendChild(timeline);
    }

    // --- SELECTED PUBLICATIONS (home page section) ---
    if (sec.type === "publications") {
      if (sec.intro) {
        const para = document.createElement("p");
        para.className = "small";
        // use innerHTML if intro contains links
        para.innerHTML = sec.intro;
        sectionEl.appendChild(para);
      }

      const ul = document.createElement("ul");
      ul.className = "pub-list";

      const maxItems = sec.maxItems || 6;
      const selectedPubs = getSelectedPubs(maxItems);

      if (selectedPubs.length === 0) {
        const li = document.createElement("li");
        li.innerHTML = `
          <div class="pub-title small">
            No selected publications found. Make sure <code>pubs-data.js</code> has items with <code>tags: ["Selected"]</code>.
          </div>
        `;
        ul.appendChild(li);
      } else {
        selectedPubs.forEach((pub) => {
          const li = document.createElement("li");
          li.className = "pub-item";
          li.innerHTML = `
            <div class="pub-title">${highlightAuthorName(pub.citation)}</div>
            ${renderPublicationLinks(pub)}
            <div class="pub-meta small">Year: ${pub.year}</div>
          `;
          ul.appendChild(li);
        });
      }

      sectionEl.appendChild(ul);
    }

    if (sec.type === "cards") {
      const grid = document.createElement("div");
      grid.className = "cards-grid";

      sec.items.forEach((item) => {
        const card = document.createElement("article");
        card.className = "info-card";
        card.innerHTML = `
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        `;
        grid.appendChild(card);
      });

      sectionEl.appendChild(grid);
    }

    // Finally append the whole section
    content.appendChild(sectionEl);
  });
}

/* Theme toggle with localStorage */
function setupThemeToggle() {
  const body = document.body;
  const themeToggles = document.querySelectorAll("[data-theme-toggle]");
  const themeIcons = document.querySelectorAll("[data-theme-icon]");

  if (!themeToggles.length) return;

  // 1) Check if user already chose something
  const storedTheme = localStorage.getItem("theme");

  let isDark;
  if (storedTheme === "dark") {
    isDark = true;
  } else if (storedTheme === "light") {
    isDark = false;
  } else {
    // 2) No stored preference → use system preference
    const prefersDark = window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    isDark = prefersDark;
  }

  // Apply initial theme
  if (isDark) {
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
  }

  syncThemeIcons(body.classList.contains("dark"), themeIcons);

  themeToggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      body.classList.toggle("dark");
      const nowDark = body.classList.contains("dark");
      syncThemeIcons(nowDark, themeIcons);
      localStorage.setItem("theme", nowDark ? "dark" : "light");
    });
  });
}

function syncThemeIcons(isDark, icons) {
  icons.forEach((icon) => {
    icon.textContent = isDark ? "☀️" : "🌙";
  });
}


/* Active nav on scroll */
function setupIntersectionObserver() {
  const sections = document.querySelectorAll(".section");
  const navButtons = document.querySelectorAll(".desktop-nav button[data-target]");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navButtons.forEach((btn) => {
            btn.classList.toggle("active", btn.dataset.target === id);
          });
        }
      });
    },
    { threshold: 0.4 }
  );

  sections.forEach((sec) => observer.observe(sec));
}

function setupLightbox() {
  const lb = document.getElementById("lightbox");
  const lbImg = document.getElementById("lbImg");
  const lbStage = document.getElementById("lbStage");
  const btnClose = document.getElementById("lbClose");
  const btnIn = document.getElementById("lbZoomIn");
  const btnOut = document.getElementById("lbZoomOut");
  const btnReset = document.getElementById("lbReset");

  if (!lb || !lbImg || !lbStage || !btnClose) return;

  let scale = 1;
  let tx = 0;
  let ty = 0;

  const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

  function applyTransform() {
    lbImg.style.transform = `translate(${tx}px, ${ty}px) scale(${scale})`;
  }

  function reset() {
    scale = 1;
    tx = 0;
    ty = 0;
    applyTransform();
  }

  function open(src, alt = "") {
    lbImg.src = src;
    lbImg.alt = alt;
    reset();
    lb.classList.add("open");
    lb.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function close() {
    lb.classList.remove("open");
    lb.setAttribute("aria-hidden", "true");
    lbImg.src = "";
    document.body.style.overflow = "";
  }

  // Click any diagram image to open
  document.addEventListener("click", (e) => {
    const img = e.target.closest(".diagram-img-wrap img");
    if (!img) return;
    open(img.src, img.alt || "Figure");
  });

  // Close on background click
  lb.addEventListener("click", (e) => {
    if (e.target === lb || e.target === lbStage) close();
  });

  // Close on ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lb.classList.contains("open")) close();
  });

  // Buttons
  btnClose.addEventListener("click", close);
  btnReset.addEventListener("click", reset);

  btnIn.addEventListener("click", () => {
    scale = clamp(scale + 0.2, 1, 6);
    applyTransform();
  });

  btnOut.addEventListener("click", () => {
    scale = clamp(scale - 0.2, 1, 6);
    applyTransform();
  });

  // Zoom with mouse wheel
  lbStage.addEventListener("wheel", (e) => {
    if (!lb.classList.contains("open")) return;
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.15 : 0.15;
    scale = clamp(scale + delta, 1, 6);
    applyTransform();
  }, { passive: false });

  // Drag to pan
  let dragging = false;
  let lastX = 0;
  let lastY = 0;

  lbImg.addEventListener("mousedown", (e) => {
    if (!lb.classList.contains("open")) return;
    dragging = true;
    lastX = e.clientX;
    lastY = e.clientY;
  });

  document.addEventListener("mousemove", (e) => {
    if (!dragging) return;
    tx += (e.clientX - lastX);
    ty += (e.clientY - lastY);
    lastX = e.clientX;
    lastY = e.clientY;
    applyTransform();
  });

  document.addEventListener("mouseup", () => {
    dragging = false;
  });
}


