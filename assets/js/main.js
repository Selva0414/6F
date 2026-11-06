const navLinks = [
  { href: "index.html", label: "Home" },
  { href: "courses.html", label: "Courses" },
  { href: "technologies.html", label: "Technologies" },
  { href: "success.html", label: "Student Success" },
  { href: "projects.html", label: "Projects" },
  { href: "about.html", label: "About Us" },
  { href: "contact.html", label: "Contact" }
];

function currentPage() {
  const page = window.location.pathname.split("/").pop();
  return page || "index.html";
}

function renderHeader() {
  const headerRoot = document.getElementById("site-header");
  if (!headerRoot) return;

  const page = currentPage();
  const links = navLinks
    .map((item) => {
      const active = item.href === page ? ' aria-current="page"' : "";
      return `<li><a class="nav-link" href="${item.href}"${active}>${item.label}</a></li>`;
    })
    .join("");

  headerRoot.innerHTML = `
    <header class="site-header">
      <div class="container nav-wrap">
        <a class="brand" href="index.html" aria-label="6F IT School home">
          <span class="brand-logo" aria-hidden="true">6F</span>
          <span class="brand-mark">6F IT School</span>
        </a>
        <button class="menu-toggle" aria-expanded="false" aria-controls="nav-list">Menu</button>
        <ul id="nav-list" class="nav-list">
          ${links}
          <li><a href="enquiry.html" class="btn btn-accent">Enquire Now</a></li>
        </ul>
      </div>
    </header>
  `;

  const toggle = headerRoot.querySelector(".menu-toggle");
  const list = headerRoot.querySelector("#nav-list");
  toggle?.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    list.classList.toggle("open");
  });
}

function renderFooter() {
  const footerRoot = document.getElementById("site-footer");
  if (!footerRoot) return;

  footerRoot.innerHTML = `
    <footer class="footer">
      <div class="container footer-grid">
        <section>
          <h3>6F IT School</h3>
          <p class="muted">Technology-focused training in AWS, DevOps, Agentic AI and software development with practical project learning.</p>
        </section>
        <section>
          <h4>Quick Links</h4>
          <p><a href="courses.html">All Courses</a></p>
          <p><a href="technologies.html">Technology Stack</a></p>
          <p><a href="enquiry.html">Apply / Enquire</a></p>
          <p><a href="faq.html">FAQ</a></p>
        </section>
        <section>
          <h4>Legal</h4>
          <p><a href="privacy.html">Privacy Policy</a></p>
          <p><a href="terms.html">Terms & Conditions</a></p>
          <p><a href="contact.html">Contact Us</a></p>
        </section>
      </div>
    </footer>
  `;
}

function setupReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!items.length || !("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  items.forEach((el) => observer.observe(el));
}

function setupTechCards() {
  document.querySelectorAll(".tech-card").forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.toggle("is-open");
    });
  });
}

function setupAccordions() {
  document.querySelectorAll("[data-accordion]").forEach((root) => {
    const items = root.querySelectorAll(".accordion-item");

    root.querySelectorAll(".accordion-trigger").forEach((trigger) => {
      trigger.addEventListener("click", () => {
        const item = trigger.closest(".accordion-item");
        item.classList.toggle("open");
        trigger.setAttribute("aria-expanded", String(item.classList.contains("open")));
      });
    });

    const expand = root.querySelector("[data-expand]");
    const collapse = root.querySelector("[data-collapse]");

    expand?.addEventListener("click", () => {
      items.forEach((item) => {
        item.classList.add("open");
        item.querySelector(".accordion-trigger")?.setAttribute("aria-expanded", "true");
      });
    });

    collapse?.addEventListener("click", () => {
      items.forEach((item) => {
        item.classList.remove("open");
        item.querySelector(".accordion-trigger")?.setAttribute("aria-expanded", "false");
      });
    });
  });
}

function setupCourseFilter() {
  const search = document.getElementById("course-search");
  const category = document.getElementById("course-category");
  const level = document.getElementById("course-level");
  if (!search || !category || !level) return;

  const cards = Array.from(document.querySelectorAll("[data-course-card]"));

  function applyFilter() {
    const q = search.value.trim().toLowerCase();
    const c = category.value;
    const l = level.value;

    cards.forEach((card) => {
      const text = card.dataset.search || "";
      const cat = card.dataset.category || "";
      const lev = card.dataset.level || "";

      const visible = text.includes(q) && (c === "all" || cat === c) && (l === "all" || lev === l);
      card.classList.toggle("course-hidden", !visible);
    });
  }

  search.addEventListener("input", applyFilter);
  category.addEventListener("change", applyFilter);
  level.addEventListener("change", applyFilter);
}

function setupVideoModal() {
  const modal = document.getElementById("video-modal");
  if (!modal) return;

  const frameWrap = modal.querySelector(".modal-body");
  const closeBtn = modal.querySelector("[data-close-modal]");

  function closeModal() {
    modal.setAttribute("aria-hidden", "true");
    frameWrap.innerHTML = "";
  }

  document.querySelectorAll("[data-video-url]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const url = btn.getAttribute("data-video-url");
      if (!url) return;

      modal.setAttribute("aria-hidden", "false");
      frameWrap.innerHTML = `<iframe title="Student testimonial" loading="lazy" src="${url}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    });
  });

  closeBtn?.addEventListener("click", closeModal);
  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeModal();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModal();
  });
}

function setupForms() {
  document.querySelectorAll("form[data-demo-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const note = form.querySelector(".form-note");
      if (note) {
        note.textContent = "Thanks. Your enquiry has been recorded in this demo UI. Connect this form to your backend/CRM to receive real submissions.";
      }
      form.reset();
    });
  });
}

renderHeader();
renderFooter();
setupReveal();
setupTechCards();
setupAccordions();
setupCourseFilter();
setupVideoModal();
setupForms();
