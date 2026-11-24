/**
 * A1 ELECTRICAL & SECURITY - Master Application Logic (Phase 1 Refined)
 * Features:
 * - Bilingual Language Switcher (English <-> Hindi) with instant DOM updates
 * - Theme Switcher (Dark / Light) with system detection & localStorage memory
 * - Mobile Drawer Menu & Sticky Nav with smooth scroll & scroll-spy
 * - Dynamic Service Cards rendering & "Get Quote" auto-selection
 * - Dynamic Portfolio Projects rendering with filter tabs
 * - Full-featured Lightbox (Next/Prev, Keyboard shortcuts, Swipe detection)
 * - 10-digit Indian Mobile validation with real-time feedback
 * - LocalStorage lead persistence & automatic WhatsApp URI dispatch
 * - Surveillance HUD live ticking clock
 * - IntersectionObserver Scroll Reveal animations
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // Application State
  const state = {
    lang: localStorage.getItem('a1_lang') || 'en',
    theme: localStorage.getItem('a1_theme') || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'),
    activeFilter: 'all',
    lightboxIndex: 0,
    filteredProjects: [...APP_DATA.projects]
  };

  /* ==========================================================================
     1. THEME CONTROLLER
     ========================================================================== */
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    state.theme = theme;
    localStorage.setItem('a1_theme', theme);

    if (themeIcon) {
      if (theme === 'light') {
        themeIcon.className = 'fa-solid fa-moon';
        themeToggleBtn.setAttribute('title', state.lang === 'hi' ? 'डार्क मोड पर स्विच करें' : 'Switch to Dark Mode');
      } else {
        themeIcon.className = 'fa-solid fa-sun';
        themeToggleBtn.setAttribute('title', state.lang === 'hi' ? 'लाइट मोड पर स्विच करें' : 'Switch to Light Mode');
      }
    }
  }

  applyTheme(state.theme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const newTheme = state.theme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
    });
  }

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('a1_theme')) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });

  /* ==========================================================================
     2. BILINGUAL LANGUAGE ENGINE (ENGLISH <-> HINDI)
     ========================================================================== */
  const langToggleBtn = document.getElementById('lang-toggle');
  const langLabel = document.getElementById('lang-label');

  function getNestedTranslation(obj, path) {
    return path.split('.').reduce((prev, curr) => (prev ? prev[curr] : null), obj);
  }

  function applyLanguage(lang) {
    state.lang = lang;
    localStorage.setItem('a1_lang', lang);
    document.documentElement.setAttribute('lang', lang);

    const dict = APP_DATA.translations[lang] || APP_DATA.translations.en;

    // Update Language Toggle Button Label
    if (langLabel) {
      langLabel.textContent = lang === 'en' ? 'हिन्दी' : 'English';
      langToggleBtn.setAttribute('title', lang === 'en' ? 'Switch to Hindi' : 'Switch to English');
    }

    // Update all static data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const translation = getNestedTranslation(dict, key);
      if (translation) {
        el.textContent = translation;
      }
    });

    // Update form placeholders
    const nameInput = document.getElementById('client-name');
    const phoneInput = document.getElementById('client-phone');
    const emailInput = document.getElementById('client-email');
    const messageInput = document.getElementById('client-message');

    if (nameInput) nameInput.placeholder = dict.contact.placeholderName;
    if (phoneInput) phoneInput.placeholder = dict.contact.placeholderPhone;
    if (emailInput) emailInput.placeholder = dict.contact.placeholderEmail;
    if (messageInput) messageInput.placeholder = dict.contact.placeholderMessage;

    // Re-render dynamic sections with the new language
    renderServices();
    renderProjects(state.activeFilter);
    renderWhyChooseUs();
  }

  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      const newLang = state.lang === 'en' ? 'hi' : 'en';
      applyLanguage(newLang);
    });
  }

  /* ==========================================================================
     3. STICKY NAVBAR, SCROLL SPY & MOBILE DRAWER
     ========================================================================== */
  const header = document.getElementById('header');
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const backToTopBtn = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    if (scrollPos > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    if (scrollPos > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }

    // Scroll spy
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => {
      const top = section.offsetTop - 120;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, { passive: true });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      hamburgerBtn.classList.toggle('active', isOpen);
      hamburgerBtn.setAttribute('aria-expanded', isOpen);
    });

    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        hamburgerBtn.classList.remove('active');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
        navMenu.classList.remove('open');
        hamburgerBtn.classList.remove('active');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ==========================================================================
     4. SURVEILLANCE HUD LIVE CLOCK
     ========================================================================== */
  const hudClock = document.getElementById('hud-clock');
  function updateHudClock() {
    if (!hudClock) return;
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const mins = String(now.getMinutes()).padStart(2, '0');
    const secs = String(now.getSeconds()).padStart(2, '0');
    hudClock.textContent = `SYS TIME: ${hours}:${mins}:${secs} IST`;
  }
  updateHudClock();
  setInterval(updateHudClock, 1000);

  /* ==========================================================================
     5. RENDER SERVICES & "GET QUOTE" AUTO-ROUTING
     ========================================================================== */
  const servicesContainer = document.getElementById('services-container');
  const serviceDropdown = document.getElementById('client-service');

  function renderServices() {
    if (!servicesContainer) return;
    servicesContainer.innerHTML = '';
    const isHi = state.lang === 'hi';
    const btnQuoteText = isHi ? 'कोटेशन लें' : 'Get Quote';

    APP_DATA.services.forEach((service) => {
      const card = document.createElement('div');
      card.className = 'service-card reveal-init';

      const title = isHi ? service.titleHi : service.titleEn;
      const desc = isHi ? service.descHi : service.descEn;
      const features = isHi ? service.featuresHi : service.featuresEn;

      const featuresHtml = features
        .map(feat => `
          <div class="service-feature-item">
            <i class="fa-solid fa-circle-check" aria-hidden="true"></i>
            <span>${feat}</span>
          </div>
        `).join('');

      card.innerHTML = `
        <div class="service-icon-wrap" aria-hidden="true">
          <i class="${service.icon}"></i>
        </div>
        <h3 class="service-title">${title}</h3>
        <p class="service-desc">${desc}</p>
        <div class="service-features">
          ${featuresHtml}
        </div>
        <div class="service-cta">
          <button class="btn btn-primary btn-block get-quote-btn" data-service-id="${service.id}" data-service-title="${service.titleEn}">
            <i class="fa-solid fa-file-invoice" aria-hidden="true"></i>
            <span>${btnQuoteText}</span>
          </button>
        </div>
      `;

      servicesContainer.appendChild(card);
    });

    document.querySelectorAll('.get-quote-btn').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const serviceTitleEn = e.currentTarget.getAttribute('data-service-title');
        autoSelectServiceAndScroll(serviceTitleEn);
      });
    });

    observeReveals();
  }

  function autoSelectServiceAndScroll(serviceTitleEn) {
    if (!serviceDropdown) return;

    let found = false;
    for (let i = 0; i < serviceDropdown.options.length; i++) {
      if (serviceDropdown.options[i].value === serviceTitleEn) {
        serviceDropdown.selectedIndex = i;
        found = true;
        break;
      }
    }

    if (!found) {
      serviceDropdown.value = serviceTitleEn;
    }

    serviceDropdown.classList.remove('is-invalid');
    serviceDropdown.focus();
    serviceDropdown.style.boxShadow = '0 0 0 4px rgba(245, 166, 35, 0.4)';
    setTimeout(() => {
      serviceDropdown.style.boxShadow = '';
    }, 2000);

    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  /* ==========================================================================
     6. RENDER PROJECTS & LIGHTBOX IMPLEMENTATION
     ========================================================================== */
  const projectsContainer = document.getElementById('projects-container');
  const filterBtns = document.querySelectorAll('.filter-btn');

  function renderProjects(filter = 'all') {
    if (!projectsContainer) return;
    projectsContainer.innerHTML = '';
    const isHi = state.lang === 'hi';

    state.filteredProjects = filter === 'all'
      ? APP_DATA.projects
      : APP_DATA.projects.filter(p => p.category === filter);

    state.filteredProjects.forEach((project, idx) => {
      const card = document.createElement('div');
      card.className = 'project-card reveal-init';
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');

      const title = isHi ? project.titleHi : project.titleEn;
      const cat = isHi ? project.categoryLabelHi : project.categoryLabelEn;
      const loc = isHi ? project.locationHi : project.locationEn;
      const desc = isHi ? project.descHi : project.descEn;

      card.setAttribute('aria-label', `View details for ${title}`);

      card.innerHTML = `
        <div class="project-thumb">
          <img src="${project.image}" alt="${title}" loading="lazy">
          <div class="project-overlay" aria-hidden="true">
            <div class="project-view-icon">
              <i class="fa-solid fa-expand"></i>
            </div>
          </div>
        </div>
        <div class="project-info">
          <div class="project-meta">
            <span class="project-cat">${cat}</span>
            <span class="project-loc"><i class="fa-solid fa-location-dot" aria-hidden="true"></i> ${loc}</span>
          </div>
          <h3 class="project-title">${title}</h3>
          <p class="project-desc-excerpt">${desc}</p>
        </div>
      `;

      card.addEventListener('click', () => openLightbox(idx));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLightbox(idx);
        }
      });

      projectsContainer.appendChild(card);
    });

    observeReveals();
  }

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filterVal = btn.getAttribute('data-filter');
      state.activeFilter = filterVal;
      renderProjects(filterVal);
    });
  });

  /* ==========================================================================
     LIGHTBOX CONTROLS
     ========================================================================== */
  const lightbox = document.getElementById('project-lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxLocation = document.getElementById('lightbox-location');
  const lightboxDesc = document.getElementById('lightbox-desc');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxPrev = document.getElementById('lightbox-prev');
  const lightboxNext = document.getElementById('lightbox-next');

  function openLightbox(index) {
    if (!lightbox || state.filteredProjects.length === 0) return;
    state.lightboxIndex = index;
    updateLightboxContent();
    lightbox.classList.add('active');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    lightboxClose.focus();
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('active');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function updateLightboxContent() {
    const project = state.filteredProjects[state.lightboxIndex];
    if (!project) return;
    const isHi = state.lang === 'hi';

    const title = isHi ? project.titleHi : project.titleEn;
    const loc = isHi ? project.locationHi : project.locationEn;
    const desc = isHi ? project.descHi : project.descEn;

    lightboxImg.src = project.image;
    lightboxImg.alt = title;
    lightboxTitle.textContent = title;
    lightboxLocation.innerHTML = `<i class="fa-solid fa-location-dot" aria-hidden="true"></i> <span>${loc}</span>`;
    lightboxDesc.textContent = desc;
  }

  function nextLightbox() {
    if (state.filteredProjects.length === 0) return;
    state.lightboxIndex = (state.lightboxIndex + 1) % state.filteredProjects.length;
    updateLightboxContent();
  }

  function prevLightbox() {
    if (state.filteredProjects.length === 0) return;
    state.lightboxIndex = (state.lightboxIndex - 1 + state.filteredProjects.length) % state.filteredProjects.length;
    updateLightboxContent();
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxNext) lightboxNext.addEventListener('click', nextLightbox);
  if (lightboxPrev) lightboxPrev.addEventListener('click', prevLightbox);

  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (!lightbox || !lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextLightbox();
    if (e.key === 'ArrowLeft') prevLightbox();
  });

  let touchStartX = 0;
  let touchEndX = 0;

  if (lightbox) {
    lightbox.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    lightbox.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });
  }

  function handleSwipe() {
    const swipeThreshold = 45;
    if (touchEndX + swipeThreshold < touchStartX) {
      nextLightbox();
    } else if (touchEndX > touchStartX + swipeThreshold) {
      prevLightbox();
    }
  }

  /* ==========================================================================
     7. RENDER WHY CHOOSE US
     ========================================================================== */
  const whyGridContainer = document.getElementById('why-grid-container');

  function renderWhyChooseUs() {
    if (!whyGridContainer) return;
    const icons = [
      'fa-solid fa-diagram-project',
      'fa-solid fa-user-check',
      'fa-solid fa-map-location-dot',
      'fa-solid fa-shield-virus',
      'fa-solid fa-hand-holding-dollar',
      'fa-solid fa-clock-rotate-left'
    ];

    const currentReasons = APP_DATA.translations[state.lang].whyUs.reasons;
    whyGridContainer.innerHTML = '';
    currentReasons.forEach((reason, i) => {
      const card = document.createElement('div');
      card.className = 'why-card reveal-init';
      card.innerHTML = `
        <div class="why-icon" aria-hidden="true">
          <i class="${icons[i] || 'fa-solid fa-check'}"></i>
        </div>
        <h3 class="why-card-title">${reason.title}</h3>
        <p class="why-card-desc">${reason.desc}</p>
      `;
      whyGridContainer.appendChild(card);
    });

    observeReveals();
  }

  /* ==========================================================================
     8. ENQUIRY FORM VALIDATION, LOCALSTORAGE & WHATSAPP PIPELINE
     ========================================================================== */
  const enquiryForm = document.getElementById('enquiry-form');
  const nameInput = document.getElementById('client-name');
  const phoneInput = document.getElementById('client-phone');
  const emailInput = document.getElementById('client-email');
  const messageInput = document.getElementById('client-message');
  const successBanner = document.getElementById('form-success-banner');

  if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/\D/g, '').slice(0, 10);
      validatePhone(false);
    });
  }

  function validateName() {
    const val = nameInput.value.trim();
    const isValid = val.length >= 2;
    toggleInputStatus(nameInput, isValid);
    return isValid;
  }

  function validatePhone(showError = true) {
    const val = phoneInput.value.trim();
    const phoneRegex = /^[6-9]\d{9}$/;
    const isValid = phoneRegex.test(val);
    if (showError || val.length === 10) {
      toggleInputStatus(phoneInput, isValid);
    }
    return isValid;
  }

  function validateEmail() {
    const val = emailInput.value.trim();
    if (!val) {
      emailInput.classList.remove('is-invalid');
      return true;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(val);
    toggleInputStatus(emailInput, isValid);
    return isValid;
  }

  function validateService() {
    const isValid = serviceDropdown.value !== '' && serviceDropdown.value !== '-- Choose Service --';
    toggleInputStatus(serviceDropdown, isValid);
    return isValid;
  }

  function validateMessage() {
    const isValid = messageInput.value.trim().length >= 5;
    toggleInputStatus(messageInput, isValid);
    return isValid;
  }

  function toggleInputStatus(inputElem, isValid) {
    if (isValid) {
      inputElem.classList.remove('is-invalid');
    } else {
      inputElem.classList.add('is-invalid');
    }
  }

  if (nameInput) nameInput.addEventListener('blur', validateName);
  if (phoneInput) phoneInput.addEventListener('blur', () => validatePhone(true));
  if (emailInput) emailInput.addEventListener('blur', validateEmail);
  if (serviceDropdown) serviceDropdown.addEventListener('change', validateService);
  if (messageInput) messageInput.addEventListener('blur', validateMessage);

  if (enquiryForm) {
    enquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const isNameValid = validateName();
      const isPhoneValid = validatePhone(true);
      const isEmailValid = validateEmail();
      const isServiceValid = validateService();
      const isMessageValid = validateMessage();

      if (!isNameValid || !isPhoneValid || !isEmailValid || !isServiceValid || !isMessageValid) {
        const firstInvalid = enquiryForm.querySelector('.is-invalid');
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      const leadData = {
        name: nameInput.value.trim(),
        phone: phoneInput.value.trim(),
        email: emailInput.value.trim() || 'Not provided',
        service: serviceDropdown.value,
        message: messageInput.value.trim(),
        timestamp: new Date().toISOString()
      };

      try {
        const storedLeads = JSON.parse(localStorage.getItem('a1_leads') || '[]');
        storedLeads.push(leadData);
        localStorage.setItem('a1_leads', JSON.stringify(storedLeads));
      } catch (err) {
        console.warn('LocalStorage save error:', err);
      }

      if (successBanner) {
        successBanner.classList.add('active');
        successBanner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }

      const whatsappNumber = '917506191312';
      const formattedText = `*NEW ENQUIRY - A1 ELECTRICAL & SECURITY*%0A%0A` +
        `*Name:* ${encodeURIComponent(leadData.name)}%0A` +
        `*Phone:* ${encodeURIComponent(leadData.phone)}%0A` +
        `*Email:* ${encodeURIComponent(leadData.email)}%0A` +
        `*Service Required:* ${encodeURIComponent(leadData.service)}%0A` +
        `*Details:* ${encodeURIComponent(leadData.message)}%0A%0A` +
        `_Sent via A1 Electrical & Security Website Portal_`;

      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${formattedText}`;

      enquiryForm.reset();

      setTimeout(() => {
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      }, 1000);
    });
  }

  /* ==========================================================================
     9. SCROLL REVEAL OBSERVER
     ========================================================================== */
  function observeReveals() {
    const revealElements = document.querySelectorAll('.reveal-init:not(.reveal-observed)');
    if (!('IntersectionObserver' in window)) {
      revealElements.forEach(el => el.classList.add('reveal-visible'));
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          obs.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => {
      el.classList.add('reveal-observed');
      observer.observe(el);
    });
  }

  const yearElem = document.getElementById('current-year');
  if (yearElem) {
    yearElem.textContent = new Date().getFullYear();
  }

  // Initialize Language and Components
  applyLanguage(state.lang);
});
