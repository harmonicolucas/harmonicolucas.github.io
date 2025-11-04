const state = {
  lang: localStorage.getItem("lang") === "en" ? "en" : "pt",
  theme: document.documentElement.dataset.theme === "dark" ? "dark" : "light",
  project: 0
};

const t = (key) => UI[state.lang][key] ?? key;

function applyLanguage() {
  const dict = UI[state.lang];
  document.documentElement.lang = state.lang === "en" ? "en" : "pt";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const value = dict[node.dataset.i18n];
    if (typeof value === "string") node.textContent = value;
  });

  const page = document.body.dataset.page;
  document.title = page === "projects" ? t("meta.projectsTitle") : t("meta.title");
  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute("content", t("meta.description"));

  const langBtn = document.getElementById("lang-toggle");
  if (langBtn) {
    langBtn.textContent = state.lang === "pt" ? "EN" : "PT";
    langBtn.setAttribute("aria-pressed", state.lang === "en" ? "true" : "false");
  }
  document.querySelectorAll("[data-lang-set]").forEach((button) => {
    button.setAttribute("aria-pressed", button.dataset.langSet === state.lang ? "true" : "false");
  });

  const menu = document.getElementById("menu-toggle");
  if (menu) menu.setAttribute("aria-label", t("nav.menu"));
  const themeBtn = document.getElementById("theme-toggle");
  if (themeBtn) themeBtn.setAttribute("aria-label", t("nav.theme"));

  renderChips();
  renderCarousel();
  renderArchive();
  renderCredentials();
  renderAchievements();
}

function setLanguage(lang) {
  state.lang = lang === "en" ? "en" : "pt";
  localStorage.setItem("lang", state.lang);
  applyLanguage();
}

function setTheme(theme) {
  state.theme = theme === "dark" ? "dark" : "light";
  document.documentElement.dataset.theme = state.theme;
  document.documentElement.classList.toggle("dark", state.theme === "dark");
  localStorage.setItem("theme", state.theme);
  const color = document.querySelector('meta[name="theme-color"]');
  if (color) color.setAttribute("content", state.theme === "dark" ? "#0f1115" : "#d9dadd");
}

function chipList(items) {
  return items.map((item) => `<li>${item}</li>`).join("");
}

function renderChips() {
  const paint = (id, key) => {
    const node = document.getElementById(id);
    if (!node) return;
    node.innerHTML = `<div class="skill-items">${t(key).map((item) => `<span class="skill-item">${item}</span>`).join("")}</div>`;
  };
  paint("chips-one", "skills.one.items");
  paint("chips-two", "skills.two.items");
}

function renderLogos() {
  const grid = document.getElementById("tech-stack");
  if (!grid) return;
  const columns = [[], [], [], []];
  LOGOS.forEach((logo, index) => columns[index % 4].push(logo));
  grid.innerHTML = columns
    .map(
      (column) => `<div class="tech-stack-column">${column
        .map(
          (logo) => `<div class="tech-stack-item"><img src="${logo.src}" alt="${logo.name}"><span class="tech-stack-label">${logo.name}</span></div>`
        )
        .join("")}</div>`
    )
    .join("");
}

function featuredProjects() {
  return PROJECTS.filter((project) => project.category === "tech");
}

function renderCarousel() {
  const stack = document.getElementById("album");
  const title = document.getElementById("work-title");
  const desc = document.getElementById("work-desc");
  const link = document.getElementById("work-link");
  if (!stack || !title) return;

  const items = featuredProjects();
  const active = ((state.project % items.length) + items.length) % items.length;
  state.project = active;
  const current = items[active];

  const slots = {
    0: { x: "-50%", y: "-50%", s: 1, o: 1, z: 5 },
    "-1": { x: "calc(-50% - 210px)", y: "-50%", s: 0.72, o: 0.85, z: 4 },
    1: { x: "calc(-50% + 210px)", y: "-50%", s: 0.72, o: 0.85, z: 4 },
    "-2": { x: "calc(-50% - 340px)", y: "-50%", s: 0.55, o: 0.3, z: 3 },
    2: { x: "calc(-50% + 340px)", y: "-50%", s: 0.55, o: 0.3, z: 3 }
  };
  stack.innerHTML = items
    .map((project, index) => {
      let offset = index - active;
      const half = items.length / 2;
      if (offset > half) offset -= items.length;
      if (offset < -half) offset += items.length;
      const slot = slots[offset] || { x: "-50%", y: "-50%", s: 0.5, o: 0, z: 1 };
      const center = offset === 0 ? " work-album-item-center" : "";
      return `<button class="work-album-item${center}" type="button" data-index="${index}" style="transform:translate(${slot.x}, ${slot.y}) scale(${slot.s});opacity:${slot.o};z-index:${slot.z}" aria-label="${project.title[state.lang]}">
        <img class="work-album-img" src="${project.image}" alt="${project.title[state.lang]}">
      </button>`;
    })
    .join("");

  title.textContent = current.title[state.lang];
  desc.textContent = current.summary[state.lang];
  link.href = `projectos.html#${current.id}`;
  link.textContent = `${t("projects.view")} →`;
}

function shiftProject(step) {
  state.project += step;
  renderCarousel();
}

function renderArchive() {
  const tech = document.getElementById("tech-list");
  const digital = document.getElementById("digital-list");
  if (!tech && !digital) return;

  const row = (project, number) => `
    <article class="project-row" id="${project.id}">
      <span class="project-index">${String(number).padStart(2, "0")}</span>
      <img src="${project.image}" alt="${project.title[state.lang]}">
      <div>
        <h3>${project.title[state.lang]}</h3>
        <p>${project.summary[state.lang]}</p>
        <p class="project-group">${project.group[state.lang]}</p>
        <ul class="chips">${chipList(project.tags[state.lang])}</ul>
      </div>
    </article>`;

  if (tech) {
    tech.innerHTML = PROJECTS.filter((project) => project.category === "tech")
      .map((project, index) => row(project, index + 1))
      .join("");
  }
  if (digital) {
    digital.innerHTML = PROJECTS.filter((project) => project.category === "digital")
      .map((project, index) => row(project, index + 1))
      .join("");
  }
}

function renderCredentials() {
  const list = document.getElementById("cert-list");
  if (!list) return;
  const icon = `<span class="award-icon" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z"></path></svg></span>`;
  list.innerHTML = CERTS.map((cert) => {
    const inner = `${icon}<span><span class="award-title">${cert.title[state.lang]}</span><span class="pf-award-meta">${cert.meta[state.lang]}</span></span>`;
    if (!cert.href) return `<div class="award-item">${inner}</div>`;
    return `<a class="award-item" href="${cert.href}" target="_blank" rel="noopener noreferrer">${inner}</a>`;
  }).join("");
}

function renderAchievements() {
  const list = document.getElementById("achieve-list");
  if (!list || document.body.dataset.page !== "home") return;
  const stacks = [
    ["assets/stacks/bm-3.jpg", "assets/stacks/bm-2.jpg", "assets/stacks/bm-1.jpg"],
    ["assets/stacks/isutc-3.jpg", "assets/stacks/isutc-2.jpg", "assets/stacks/isutc-1.jpg"],
    ["assets/stacks/web-3.jpg", "assets/stacks/web-2.jpg", "assets/stacks/web-1.jpg"]
  ];
  list.innerHTML = ACHIEVEMENTS.map((item, index) => {
    const images = stacks[index] || [];
    const front = images[images.length - 1];
    const backs = images.slice(0, -1);
    const fan = ["--tx:-26px;--ty:16px;--rot:-8deg;--sc:0.92", "--tx:20px;--ty:12px;--rot:6deg;--sc:0.95"];
    const photos = `${backs.map((src, i) => `<img class="stacked-image" style="${fan[i] || ""}" src="${src}" alt="">`).join("")}<img class="stacked-image stacked-image-front" src="${front}" alt="">`;
    return `<article class="experience-card${index === 1 ? " experience-card-reverse" : ""}">
      <div class="experience-text">
        <div class="experience-header">
          <h3 class="experience-title">${item.title[state.lang]}</h3>
          <span class="experience-date">${item.date[state.lang]}</span>
        </div>
        <p class="experience-subtitle">${item.subtitle[state.lang]}</p>
        <p class="experience-org">${item.place[state.lang]}</p>
        <p class="experience-desc">${item.body[state.lang]}</p>
        ${item.link ? `<a class="experience-certificate" href="${item.link.href}" target="_blank" rel="noopener noreferrer">${item.link[state.lang]}</a>` : ""}
      </div>
      <div class="experience-image-stack">${photos}</div>
    </article>`;
  }).join("");
}

function initNav() {
  const toggle = document.getElementById("menu-toggle");
  const links = document.getElementById("nav-links");
  if (!toggle || !links) return;
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  links.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function initForm() {
  const dialog = document.getElementById("contact-dialog");
  const openers = document.querySelectorAll("[data-open-contact]");
  const form = document.getElementById("contact-form");
  if (!dialog || !form) return;

  openers.forEach((button) => {
    button.addEventListener("click", () => {
      if (typeof dialog.showModal === "function") dialog.showModal();
      else dialog.setAttribute("open", "");
    });
  });

  dialog.querySelectorAll("[data-close-contact]").forEach((button) => {
    button.addEventListener("click", () => dialog.close());
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    const subject = encodeURIComponent(name ? `Portfólio — ${name}` : "Portfólio");
    const body = encodeURIComponent(`${message}\n\n${name}\n${email}`);
    window.location.href = `mailto:harmonicolucas@gmail.com?subject=${subject}&body=${body}`;
    dialog.close();
  });
}

function initCarouselControls() {
  const stack = document.getElementById("album");
  if (!stack) return;
  stack.addEventListener("click", (event) => {
    const card = event.target.closest(".work-album-item");
    if (!card) return;
    const index = Number(card.dataset.index);
    if (index === state.project) return;
    state.project = index;
    renderCarousel();
  });
  const prev = document.getElementById("album-prev");
  const next = document.getElementById("album-next");
  if (prev) prev.addEventListener("click", () => shiftProject(-1));
  if (next) next.addEventListener("click", () => shiftProject(1));

  let timer = window.setInterval(() => shiftProject(1), 6500);
  const album = document.querySelector(".work-album");
  if (!album) return;
  album.addEventListener("mouseenter", () => window.clearInterval(timer));
  album.addEventListener("mouseleave", () => {
    timer = window.setInterval(() => shiftProject(1), 6500);
  });
  album.addEventListener("focusin", () => window.clearInterval(timer));
}

document.getElementById("lang-toggle")?.addEventListener("click", () => {
  setLanguage(state.lang === "pt" ? "en" : "pt");
});
document.querySelectorAll("[data-lang-set]").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.langSet));
});
document.getElementById("theme-toggle")?.addEventListener("click", () => {
  setTheme(state.theme === "dark" ? "light" : "dark");
});

renderLogos();
applyLanguage();
initNav();
initForm();
initCarouselControls();
window.addEventListener("scroll", () => {
  document.querySelector(".nav-bar")?.classList.toggle("scrolled", window.scrollY > 24);
}, { passive: true });
