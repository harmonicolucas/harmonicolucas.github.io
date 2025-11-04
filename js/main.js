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
  localStorage.setItem("theme", state.theme);
  const color = document.querySelector('meta[name="theme-color"]');
  if (color) color.setAttribute("content", state.theme === "dark" ? "#121316" : "#d9dadd");
}

function chipList(items) {
  return items.map((item) => `<li>${item}</li>`).join("");
}

function renderChips() {
  const one = document.getElementById("chips-one");
  const two = document.getElementById("chips-two");
  if (one) one.innerHTML = chipList(t("skills.one.items"));
  if (two) two.innerHTML = chipList(t("skills.two.items"));
}

function renderLogos() {
  const grid = document.getElementById("logo-grid");
  if (!grid) return;
  grid.innerHTML = LOGOS.map(
    (logo) => `<figure class="logo-tile"><img src="${logo.src}" alt="${logo.name}"></figure>`
  ).join("");
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

  stack.innerHTML = items
    .map((project, index) => {
      let offset = index - active;
      const half = items.length / 2;
      if (offset > half) offset -= items.length;
      if (offset < -half) offset += items.length;
      const abs = Math.abs(offset);
      const hidden = abs > 2;
      return `<button class="album-card" type="button" data-index="${index}" style="--offset:${offset};--abs:${abs}" ${hidden ? "hidden" : ""} aria-label="${project.title[state.lang]}">
        <img src="${project.image}" alt="${project.title[state.lang]}">
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
  list.innerHTML = CERTS.map((cert) => {
    const inner = `<span class="cred-mark" aria-hidden="true"></span><span><strong>${cert.title[state.lang]}</strong><small>${cert.meta[state.lang]}</small></span><span class="cred-arrow" aria-hidden="true">↗</span>`;
    if (!cert.href) return `<div class="cred">${inner}</div>`;
    return `<a class="cred" href="${cert.href}" target="_blank" rel="noopener noreferrer">${inner}</a>`;
  }).join("");
}

function renderAchievements() {
  const list = document.getElementById("achieve-list");
  if (!list) return;
  list.innerHTML = ACHIEVEMENTS.map((item) => `
    <article class="achieve">
      <header>
        <h3>${item.title[state.lang]}</h3>
        <p>${item.subtitle[state.lang]}</p>
      </header>
      <p class="achieve-meta"><span>${item.date[state.lang]}</span><span>${item.place[state.lang]}</span></p>
      <p>${item.body[state.lang]}</p>
      ${item.link ? `<a class="text-link" href="${item.link.href}" target="_blank" rel="noopener noreferrer">${item.link[state.lang]} ↗</a>` : ""}
    </article>
  `).join("");
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
    const card = event.target.closest(".album-card");
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
  const album = document.querySelector(".album-wrap");
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
