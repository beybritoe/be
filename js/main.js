(function () {
  const cfg = BECLA_CONFIG;

  function waLink(message) {
    const text = encodeURIComponent(message || cfg.whatsappMessageDefault);
    return `https://wa.me/${cfg.whatsappNumber}?text=${text}`;
  }

  // Fill WhatsApp links (header, hero, contact card)
  document.querySelectorAll("#whatsapp-header, #whatsapp-hero, #whatsapp-contact").forEach((el) => {
    el.href = waLink();
  });

  const phoneLabel = document.getElementById("contact-phone-label");
  if (phoneLabel) phoneLabel.textContent = cfg.whatsappDisplay;

  const cityEl = document.getElementById("contact-city");
  if (cityEl) cityEl.textContent = cfg.city;

  const hoursEl = document.getElementById("contact-hours");
  if (hoursEl) hoursEl.textContent = cfg.hours;

  // Render menu
  const grid = document.getElementById("menu-grid");
  if (grid && Array.isArray(cfg.menu)) {
    grid.innerHTML = cfg.menu
      .map((item) => {
        const message = `Olá! Quero pedir: ${item.name}.`;
        return `
          <article class="menu-card">
            <div class="menu-card-body">
              <h3>${item.name}</h3>
              <p>${item.description}</p>
            </div>
            <div class="menu-card-footer">
              <span class="price">${item.price}</span>
              <a class="btn btn-primary btn-sm" href="${waLink(message)}" target="_blank" rel="noopener">Pedir</a>
            </div>
          </article>
        `;
      })
      .join("");
  }

  // Mobile nav toggle
  const navToggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("main-nav");
  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(open));
    });
    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Footer year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
