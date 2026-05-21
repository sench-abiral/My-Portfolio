// ============================================================
// PORTFOLIO INTERACTIVITY — VANILLA JS
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  // ----- Initialize Lucide icons -----
  if (window.lucide) lucide.createIcons();

  // ----- Set footer year -----
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ----- Hide loader after 1.4s -----
  setTimeout(() => {
    const loader = document.getElementById('loader');
    if (loader) loader.classList.add('hidden');
    // Re-init icons after dynamic content is added
    setTimeout(() => { if (window.lucide) lucide.createIcons(); }, 100);
  }, 1400);

  // ----- Build dynamic sections -----
  buildSkills();
  buildProjects();
  buildTimeline();
  buildCertifications();
  buildServices();
  buildTestimonials();
  buildSocialLinks();
  buildHireMeButtons();
  buildParticles();

  // Re-render icons after building sections
  if (window.lucide) lucide.createIcons();

  // ----- Wire up interactivity -----
  setupNavbar();
  setupScrollProgress();
  setupScrollToTop();
  setupThemeToggle();
  setupRevealOnScroll();
  setupTypingAnimation();
  setupAnimatedSkillBars();
  setupChatbot();
  setupContactForm();
  setupCopyEmail();
});

// ============================================================
// SECTION BUILDERS
// ============================================================

function buildSkills() {
  const grid = document.getElementById('skillsGrid');
  if (!grid) return;
  grid.innerHTML = PORTFOLIO_DATA.skills.map((cat) => `
    <div class="glass skill-card reveal">
      <div class="skill-header">
        <div class="skill-icon"><i data-lucide="${cat.icon}"></i></div>
        <h3 class="skill-name">${cat.name}</h3>
      </div>
      <div class="skill-bars">
        ${cat.items.map((s) => `
          <div class="skill-bar-row">
            <div class="skill-bar-label">
              <span>${s.name}</span>
              <span class="level">${s.level}%</span>
            </div>
            <div class="skill-bar">
              <div class="skill-bar-fill" data-level="${s.level}"></div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function buildProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;
  grid.innerHTML = PORTFOLIO_DATA.projects.map((p) => `
    <article class="glass project-card reveal">
      <div class="project-image${p.image ? ' has-img' : ''}" style="background: ${p.gradient};">
        ${p.image ? `<img src="${p.image}" alt="${p.title}" class="project-img" onerror="this.remove(); this.parentElement.classList.remove('has-img');" />` : ''}
        ${p.featured ? `
          <div class="featured-badge">
            <i data-lucide="star"></i> Featured
          </div>
        ` : ''}
        ${!p.image ? `<span class="project-letter">${p.title.charAt(0)}</span>` : ''}
      </div>
      <div class="project-body">
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.description}</p>
        <div class="project-tech">
          ${p.tech.map((t) => `<span class="tech-tag">${t}</span>`).join('')}
        </div>
        <div class="project-actions">
          ${p.github && p.github !== '#' ? `
            <a href="${p.github}" target="_blank" class="action-code">
              <i data-lucide="github"></i> Code
            </a>
          ` : ''}
          ${p.demo && p.demo !== '#' ? `
            <a href="${p.demo}" target="_blank" class="action-demo">
              <i data-lucide="external-link"></i> Live
            </a>
          ` : ''}
        </div>
      </div>
    </article>
  `).join('');
}

function buildTimeline() {
  const timeline = document.getElementById('timeline');
  if (!timeline) return;
  timeline.innerHTML = PORTFOLIO_DATA.timeline.map((item, i) => `
    <div class="timeline-item ${i % 2 === 1 ? 'right' : ''} reveal">
      <div class="timeline-node">
        <i data-lucide="${item.icon}"></i>
      </div>
      <div class="timeline-content">
        <div class="glass timeline-card">
          <div class="timeline-year">${item.year}</div>
          <h3 class="timeline-title">${item.title}</h3>
          <div class="timeline-place">${item.place}</div>
          <p class="timeline-desc">${item.description}</p>
        </div>
      </div>
    </div>
  `).join('');
}

function buildCertifications() {
  const grid = document.getElementById('certsGrid');
  if (!grid) return;
  grid.innerHTML = PORTFOLIO_DATA.certifications.map((c) => `
    <div class="cert-card reveal">
      <div class="cert-icon"><i data-lucide="award"></i></div>
      <h3 class="cert-title">${c.title}</h3>
      <div class="cert-issuer">${c.issuer}</div>
      <div class="cert-year">${c.year}</div>
    </div>
  `).join('');
}

function buildServices() {
  const grid = document.getElementById('servicesGrid');
  if (!grid) return;
  const email = PORTFOLIO_DATA.personal.email;
  const mailto = `mailto:${email}?subject=${encodeURIComponent('Service Inquiry')}&body=${encodeURIComponent(`Hi Abiral,\n\nI'm interested in your services. Project details:\n\n`)}`;

  grid.innerHTML = PORTFOLIO_DATA.services.map((s) => `
    <div class="glass service-card reveal">
      <div class="service-icon"><i data-lucide="${s.icon}"></i></div>
      <h3 class="service-title">${s.title}</h3>
      <p class="service-desc">${s.description}</p>
      <a href="${mailto}" class="service-link">
        Inquire <i data-lucide="arrow-right"></i>
      </a>
    </div>
  `).join('');
}

function buildTestimonials() {
  const grid = document.getElementById('testimonialsGrid');
  if (!grid) return;
  grid.innerHTML = PORTFOLIO_DATA.testimonials.map((t) => `
    <div class="glass testimonial-card reveal">
      <i data-lucide="quote" class="testimonial-quote-icon"></i>
      <p class="testimonial-text">"${t.quote}"</p>
      <div class="testimonial-author">
        <div class="testimonial-avatar">${t.name.charAt(0)}</div>
        <div>
          <div class="testimonial-name">${t.name}</div>
          <div class="testimonial-role">${t.role}</div>
        </div>
      </div>
    </div>
  `).join('');
}

function buildSocialLinks() {
  const p = PORTFOLIO_DATA.personal;
  // Fill in placeholder href="#" links throughout the page
  document.querySelectorAll('[data-social="linkedin"]').forEach((a) => (a.href = p.linkedin));
  document.querySelectorAll('[data-social="twitter"]').forEach((a) => (a.href = p.twitter));
  document.querySelectorAll('[data-social="instagram"]').forEach((a) => (a.href = p.instagram));
  document.querySelectorAll('[data-social="facebook"]').forEach((a) => (a.href = p.facebook));
  document.querySelectorAll('[data-social="tiktok"]').forEach((a) => (a.href = p.tiktok));
  document.querySelectorAll('[data-social="messenger"]').forEach((a) => (a.href = p.messenger));
  document.querySelectorAll('[data-social="youtube"]').forEach((a) => (a.href = p.youtube));
}

function buildHireMeButtons() {
  const p = PORTFOLIO_DATA.personal;
  const mailto = `mailto:${p.email}?subject=${encodeURIComponent('Job / Project Opportunity')}&body=${encodeURIComponent(`Hello Abiral,\n\nI came across your portfolio and would love to discuss a job or freelance opportunity with you.\n\nProject details:\n\nBest,`)}`;
  document.querySelectorAll('.hire-btn, .hire-btn-mobile').forEach((btn) => {
    btn.setAttribute('href', mailto);
  });
}

function buildParticles() {
  const container = document.getElementById('particles');
  if (!container) return;
  const colors = ['#7C3AED', '#06B6D4', '#EC4899'];
  const count = 18;
  let html = '';
  for (let i = 0; i < count; i++) {
    const size = Math.random() * 6 + 3;
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    const duration = Math.random() * 8 + 6;
    const delay = Math.random() * 4;
    const color = colors[i % 3];
    html += `<span class="particle" style="
      width:${size}px; height:${size}px;
      left:${left}%; top:${top}%;
      background:${color};
      box-shadow: 0 0 12px ${color};
      animation-duration: ${duration}s;
      animation-delay: ${delay}s;
    "></span>`;
  }
  container.innerHTML = html;
}

// ============================================================
// INTERACTIVITY
// ============================================================

function setupNavbar() {
  const navbar = document.getElementById('navbar');
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuIcon = document.getElementById('menuIcon');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  });

  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    // swap icon
    const isOpen = mobileMenu.classList.contains('open');
    menuIcon.setAttribute('data-lucide', isOpen ? 'x' : 'menu');
    if (window.lucide) lucide.createIcons();
  });

  // Close mobile menu when a link is clicked
  mobileMenu.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      menuIcon.setAttribute('data-lucide', 'menu');
      if (window.lucide) lucide.createIcons();
    });
  });
}

function setupScrollProgress() {
  const bar = document.getElementById('scrollProgress');
  window.addEventListener('scroll', () => {
    const h = document.documentElement;
    const scrolled = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
    bar.style.width = scrolled + '%';
  });
}

function setupScrollToTop() {
  const btn = document.getElementById('scrollTopBtn');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 600) btn.classList.add('visible');
    else btn.classList.remove('visible');
  });
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function setupThemeToggle() {
  const toggle = document.getElementById('themeToggle');
  const icon = document.getElementById('themeIcon');

  // Read saved theme
  const saved = localStorage.getItem('theme');
  if (saved === 'light') {
    document.body.classList.add('light-mode');
    icon.setAttribute('data-lucide', 'sun');
  }

  toggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const isLight = document.body.classList.contains('light-mode');
    icon.setAttribute('data-lucide', isLight ? 'sun' : 'moon');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    if (window.lucide) lucide.createIcons();
  });
}

function setupRevealOnScroll() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
  );

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
}

function setupTypingAnimation() {
  const el = document.getElementById('typingText');
  if (!el) return;
  const phrases = PORTFOLIO_DATA.typingPhrases;
  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    const current = phrases[phraseIndex];
    if (!deleting) {
      el.textContent = current.substring(0, charIndex + 1);
      charIndex++;
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(tick, 1500);
        return;
      }
    } else {
      el.textContent = current.substring(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
      }
    }
    setTimeout(tick, deleting ? 40 : 80);
  }
  tick();
}

function setupAnimatedSkillBars() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.skill-bar-fill').forEach((bar) => {
            const level = bar.getAttribute('data-level');
            setTimeout(() => { bar.style.width = level + '%'; }, 200);
          });
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  document.querySelectorAll('.skill-card').forEach((card) => observer.observe(card));
}

// ============================================================
// CHATBOT
// ============================================================
function setupChatbot() {
  const launcher = document.getElementById('chatbotLauncher');
  const win = document.getElementById('chatbotWindow');
  const closeBtn = document.getElementById('chatbotClose');
  const messages = document.getElementById('chatbotMessages');
  const suggestions = document.getElementById('chatbotSuggestions');
  const form = document.getElementById('chatbotForm');
  const input = document.getElementById('chatbotInput');
  const launcherIcon = document.getElementById('chatLauncherIcon');
  const openFromHero = document.getElementById('openChatbotBtn');

  // Greet on first open
  let greeted = false;

  function openChatbot() {
    win.classList.add('open');
    launcherIcon.setAttribute('data-lucide', 'x');
    if (window.lucide) lucide.createIcons();
    if (!greeted) {
      addBotMessage(PORTFOLIO_DATA.chatbot.greeting);
      greeted = true;
    }
  }

  function closeChatbot() {
    win.classList.remove('open');
    launcherIcon.setAttribute('data-lucide', 'message-square');
    if (window.lucide) lucide.createIcons();
  }

  launcher.addEventListener('click', () => {
    if (win.classList.contains('open')) closeChatbot();
    else openChatbot();
  });

  closeBtn.addEventListener('click', closeChatbot);
  if (openFromHero) openFromHero.addEventListener('click', openChatbot);

  // Suggestion clicks
  suggestions.querySelectorAll('.suggestion-chip').forEach((chip) => {
    chip.addEventListener('click', () => {
      sendMessage(chip.getAttribute('data-q'));
      suggestions.style.display = 'none';
    });
  });

  // Form submit
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    sendMessage(text);
    input.value = '';
    suggestions.style.display = 'none';
  });

  function addBotMessage(html) {
    const div = document.createElement('div');
    div.className = 'chat-message bot';
    div.innerHTML = html;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
  }

  function addUserMessage(text) {
    const div = document.createElement('div');
    div.className = 'chat-message user';
    div.textContent = text;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
  }

  function showTyping() {
    const t = document.createElement('div');
    t.className = 'typing-bubble';
    t.id = 'typingBubble';
    t.innerHTML = '<span></span><span></span><span></span>';
    messages.appendChild(t);
    messages.scrollTop = messages.scrollHeight;
  }

  function hideTyping() {
    const t = document.getElementById('typingBubble');
    if (t) t.remove();
  }

  function sendMessage(text) {
    addUserMessage(text);
    showTyping();
    setTimeout(() => {
      hideTyping();
      addBotMessage(getReply(text));
    }, 900 + Math.random() * 500);
  }

  function getReply(input) {
    const text = input.toLowerCase();
    const r = PORTFOLIO_DATA.chatbot.responses;

    if (/skill|tech|stack|know|language/.test(text) && !/spoken|speak/.test(text)) return r.skills;
    if (/project|portfolio|built|made|work/.test(text)) return r.projects;
    if (/about|who|yourself|tell me/.test(text)) return r.about;
    if (/study|education|school|college|univers|degree/.test(text)) return r.education;
    if (/experience|job history/.test(text)) return r.experience;
    if (/intern|internship|hiring|hire|hire me/.test(text)) return r.internship;
    if (/freelanc|client|gig/.test(text)) return r.freelance;
    if (/contact|email|reach|phone|call/.test(text)) return r.contact;
    if (/service|offer|do you do|do you build/.test(text)) return r.services;
    if (/where|location|based|live|city|london/.test(text)) return r.location;
    if (/speak|nepal|hindi|english|language/.test(text)) return r.languages;
    return r.default;
  }
}

// ============================================================
// CONTACT FORM
// ============================================================
function setupContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get('name');
    const email = data.get('email');
    const message = data.get('message');
    const subject = `Portfolio Contact from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(PORTFOLIO_DATA.personal.email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, '_blank');
  });
}

// ============================================================
// COPY EMAIL
// ============================================================
function setupCopyEmail() {
  const btn = document.getElementById('copyEmailBtn');
  const title = document.getElementById('copyTitle');
  const icon = document.getElementById('copyIcon');
  if (!btn) return;

  btn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
      title.textContent = 'Copied!';
      icon.setAttribute('data-lucide', 'check');
      if (window.lucide) lucide.createIcons();
      setTimeout(() => {
        title.textContent = 'Copy email';
        icon.setAttribute('data-lucide', 'copy');
        if (window.lucide) lucide.createIcons();
      }, 2000);
    } catch (err) {
      console.warn('Clipboard failed', err);
    }
  });
}
