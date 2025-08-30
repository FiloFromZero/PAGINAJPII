import { c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderTemplate, d as createAstro, b as addAttribute, F as Fragment } from '../chunks/astro/server_HJvi1lLk.mjs';
import 'kleur/colors';
import { $ as $$PageLayout } from '../chunks/PageLayout_DssI5ubI.mjs';
import { $ as $$Hero2 } from '../chunks/Hero2_CP7C6zQV.mjs';
import { $ as $$Icon } from '../chunks/ToggleTheme_CSDC6GRN.mjs';
import { $ as $$Content } from '../chunks/Content_BXo_rjjC.mjs';
import { $ as $$Stats } from '../chunks/Stats_DUehOoe7.mjs';
import { $ as $$Testimonials } from '../chunks/Testimonials_rZ0Rtnpu.mjs';
import { $ as $$Brands } from '../chunks/Brands_BV6NUnrG.mjs';
import { a as getPermalink } from '../chunks/permalinks_CNPnO7hi.mjs';
import { $ as $$Image } from '../chunks/Logo_DouzFt2M.mjs';
import { $ as $$WhatsAppButton } from '../chunks/WhatsAppButton_VNND6H6S.mjs';
import imgPagoEnLinea from '../chunks/pagoEnLinea_Mp2x6rIL.mjs';
import imgCalidad from '../chunks/Calidad_CKYt6aLO.mjs';
import imgValores from '../chunks/valores_BQw-47Hk.mjs';
import imgDocentes from '../chunks/Profesores_BWsUGCt_.mjs';
import imgVirtualidad from '../chunks/virtualidad_Bx65YHDc.mjs';
import FeriaU1 from '../chunks/FeriaUniversitaria_Nup-XzM6.mjs';
import FeriaU2 from '../chunks/FeriaUniversitaria2_C35WgHrO.mjs';
import Regional from '../chunks/Regional_C1I8QpXd.mjs';
import Memoria from '../chunks/Memoria_CYkJRgPz.mjs';
export { renderers } from '../renderers.mjs';

const $$Note = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-blue-50 dark:bg-slate-800 not-prose"> <div class="max-w-6xl mx-auto px-4 sm:px-6 py-4 text-md text-center font-medium"> <span class="font-bold"> ${renderComponent($$result, "Icon", $$Icon, { "name": "tabler:info-square", "class": "w-5 h-5 inline-block align-text-bottom" })} Filosofía: </span> La Educación Compromiso De Todos.
</div> </section>`;
}, "C:/Users/user/Desktop/JUANPABLO/P\xC1GINA WEB/Colegio_JPII/src/components/widgets/Note.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://iejuanpabloiisoacha.edu.co");
const $$Carousel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Carousel;
  const {
    images,
    showIndicators = true,
    showArrows = true,
    showProgress = true
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", '<div id="carousel" class="relative left-1/2 right-1/2 -mx-[50vw] w-screen overflow-hidden mt-4 mb-8 group"> <!-- Progress Bar --> ', ' <!-- Main Carousel Container --> <div class="relative overflow-hidden rounded-2xl shadow-2xl"> <div id="carousel-inner" class="flex transition-all duration-1000 ease-out h-[280px] md:h-[360px] lg:h-[440px] xl:h-[520px]"> ', ' </div> <!-- Side Gradients for Depth --> <div class="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-black/40 to-transparent z-10"></div> <div class="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-black/40 to-transparent z-10"></div> </div> <!-- Navigation Arrows --> ', " <!-- Enhanced Indicators --> ", ` <!-- Loading Animation --> <div id="loading-overlay" class="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center opacity-100 transition-opacity duration-500 z-40"> <div class="flex flex-col items-center space-y-4"> <div class="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin"></div> <p class="text-white/80 text-sm font-medium">Cargando im\xE1genes...</p> </div> </div> </div> <script type="module">
  class ProfessionalCarousel {
    constructor() {
      this.carousel = document.getElementById('carousel');
      this.inner = document.getElementById('carousel-inner');
      this.prevBtn = document.getElementById('prevBtn');
      this.nextBtn = document.getElementById('nextBtn');
      this.paginationDotsContainer = document.getElementById('pagination-dots');
      this.progressBar = document.getElementById('progress-bar');
      this.slideCounter = document.getElementById('slide-counter');
      this.loadingOverlay = document.getElementById('loading-overlay');

      this.dots = this.paginationDotsContainer ? Array.from(this.paginationDotsContainer.children) : [];
      this.slides = Array.from(this.inner.children);
      this.totalImages = this.slides.length;
      this.current = 0;
      this.autoSlideInterval = null;
      this.progressInterval = null;
      this.isTransitioning = false;
      this.touchStartX = 0;
      this.touchEndX = 0;

      this.init();
    }

    init() {
      this.setupEventListeners();
      this.updateCarousel();
      this.startAutoSlide();
      this.hideLoadingOverlay();
      this.setupTouchEvents();
    }

    hideLoadingOverlay() {
      if (this.loadingOverlay) {
        setTimeout(() => {
          this.loadingOverlay.style.opacity = '0';
          setTimeout(() => {
            this.loadingOverlay.style.display = 'none';
          }, 500);
        }, 1000);
      }
    }

    updateCarousel(smooth = true) {
      if (this.isTransitioning) return;
      this.isTransitioning = true;

      // Update transform with smooth transition
      this.inner.style.transition = smooth ? 'transform 1s cubic-bezier(0.4, 0, 0.2, 1)' : 'none';
      this.inner.style.transform = \`translateX(-\${this.current * 100}%)\`;

      // Update indicators
      this.updateIndicators();

      // Update slide counter
      if (this.slideCounter) {
        this.slideCounter.textContent = \`\${this.current + 1} / \${this.totalImages}\`;
      }

      // Preload next image for better performance
      this.preloadNextImage();

      // Reset transition flag after animation
      setTimeout(() => {
        this.isTransitioning = false;
      }, 1000);
    }

    updateIndicators() {
      this.dots.forEach((dot, index) => {
        const innerDot = dot.querySelector('div:first-child');
        if (index === this.current) {
          dot.classList.add('active');
          innerDot.classList.remove('bg-white/40', 'hover:bg-white/70');
          innerDot.classList.add('bg-white', 'scale-125');
        } else {
          dot.classList.remove('active');
          innerDot.classList.remove('bg-white', 'scale-125');
          innerDot.classList.add('bg-white/40', 'hover:bg-white/70');
        }
      });
    }

    preloadNextImage() {
      const nextIndex = (this.current + 1) % this.totalImages;
      const nextSlide = this.slides[nextIndex];
      if (nextSlide) {
        const img = nextSlide.querySelector('img');
        if (img && !img.complete) {
          // Create a new Image object to preload
          const preloadImg = new Image();
          preloadImg.src = img.src;
          // Also preload srcset if available
          if (img.srcset) {
            preloadImg.srcset = img.srcset;
          }
        }
      }
    }

    updateProgressBar() {
      if (!this.progressBar) return;

      let progress = 0;
      const duration = 5000; // 5 seconds
      const interval = 50; // Update every 50ms
      const increment = (interval / duration) * 100;

      clearInterval(this.progressInterval);
      this.progressInterval = setInterval(() => {
        progress += increment;
        if (progress >= 100) {
          progress = 100;
          clearInterval(this.progressInterval);
        }
        this.progressBar.style.width = \`\${progress}%\`;
      }, interval);
    }

    startAutoSlide() {
      clearInterval(this.autoSlideInterval);
      this.updateProgressBar();

      this.autoSlideInterval = setInterval(() => {
        this.next();
      }, 5000);
    }

    next() {
      this.current = (this.current + 1) % this.totalImages;
      this.updateCarousel();
      this.startAutoSlide();
    }

    prev() {
      this.current = (this.current - 1 + this.totalImages) % this.totalImages;
      this.updateCarousel();
      this.startAutoSlide();
    }

    goToSlide(index) {
      if (index !== this.current) {
        this.current = index;
        this.updateCarousel();
        this.startAutoSlide();
      }
    }

    setupEventListeners() {
      // Navigation buttons
      if (this.prevBtn) {
        this.prevBtn.addEventListener('click', () => this.prev());
      }

      if (this.nextBtn) {
        this.nextBtn.addEventListener('click', () => this.next());
      }

      // Pagination dots
      this.dots.forEach((dot, index) => {
        dot.addEventListener('click', () => this.goToSlide(index));
      });

      // Pause on hover
      this.carousel.addEventListener('mouseenter', () => {
        clearInterval(this.autoSlideInterval);
        clearInterval(this.progressInterval);
        if (this.progressBar) {
          this.progressBar.style.transition = 'width 0.3s ease-out';
          this.progressBar.style.width = '0%';
        }
      });

      this.carousel.addEventListener('mouseleave', () => this.startAutoSlide());

      // Keyboard navigation
      document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
          this.prev();
        } else if (e.key === 'ArrowRight') {
          this.next();
        }
      });
    }

    setupTouchEvents() {
      this.carousel.addEventListener('touchstart', (e) => {
        this.touchStartX = e.changedTouches[0].screenX;
      });

      this.carousel.addEventListener('touchend', (e) => {
        this.touchEndX = e.changedTouches[0].screenX;
        this.handleSwipe();
      });
    }

    handleSwipe() {
      const swipeThreshold = 50;
      const swipeDistance = this.touchStartX - this.touchEndX;

      if (Math.abs(swipeDistance) > swipeThreshold) {
        if (swipeDistance > 0) {
          this.next(); // Swipe left
        } else {
          this.prev(); // Swipe right
        }
      }
    }
  }

  // Initialize carousel when DOM is loaded
  document.addEventListener('DOMContentLoaded', () => {
    new ProfessionalCarousel();
  });

  // Also initialize on Astro page load
  document.addEventListener('astro:page-load', () => {
    new ProfessionalCarousel();
  });
<\/script>`], ["", '<div id="carousel" class="relative left-1/2 right-1/2 -mx-[50vw] w-screen overflow-hidden mt-4 mb-8 group"> <!-- Progress Bar --> ', ' <!-- Main Carousel Container --> <div class="relative overflow-hidden rounded-2xl shadow-2xl"> <div id="carousel-inner" class="flex transition-all duration-1000 ease-out h-[280px] md:h-[360px] lg:h-[440px] xl:h-[520px]"> ', ' </div> <!-- Side Gradients for Depth --> <div class="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-black/40 to-transparent z-10"></div> <div class="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-black/40 to-transparent z-10"></div> </div> <!-- Navigation Arrows --> ', " <!-- Enhanced Indicators --> ", ` <!-- Loading Animation --> <div id="loading-overlay" class="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center opacity-100 transition-opacity duration-500 z-40"> <div class="flex flex-col items-center space-y-4"> <div class="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin"></div> <p class="text-white/80 text-sm font-medium">Cargando im\xE1genes...</p> </div> </div> </div> <script type="module">
  class ProfessionalCarousel {
    constructor() {
      this.carousel = document.getElementById('carousel');
      this.inner = document.getElementById('carousel-inner');
      this.prevBtn = document.getElementById('prevBtn');
      this.nextBtn = document.getElementById('nextBtn');
      this.paginationDotsContainer = document.getElementById('pagination-dots');
      this.progressBar = document.getElementById('progress-bar');
      this.slideCounter = document.getElementById('slide-counter');
      this.loadingOverlay = document.getElementById('loading-overlay');

      this.dots = this.paginationDotsContainer ? Array.from(this.paginationDotsContainer.children) : [];
      this.slides = Array.from(this.inner.children);
      this.totalImages = this.slides.length;
      this.current = 0;
      this.autoSlideInterval = null;
      this.progressInterval = null;
      this.isTransitioning = false;
      this.touchStartX = 0;
      this.touchEndX = 0;

      this.init();
    }

    init() {
      this.setupEventListeners();
      this.updateCarousel();
      this.startAutoSlide();
      this.hideLoadingOverlay();
      this.setupTouchEvents();
    }

    hideLoadingOverlay() {
      if (this.loadingOverlay) {
        setTimeout(() => {
          this.loadingOverlay.style.opacity = '0';
          setTimeout(() => {
            this.loadingOverlay.style.display = 'none';
          }, 500);
        }, 1000);
      }
    }

    updateCarousel(smooth = true) {
      if (this.isTransitioning) return;
      this.isTransitioning = true;

      // Update transform with smooth transition
      this.inner.style.transition = smooth ? 'transform 1s cubic-bezier(0.4, 0, 0.2, 1)' : 'none';
      this.inner.style.transform = \\\`translateX(-\\\${this.current * 100}%)\\\`;

      // Update indicators
      this.updateIndicators();

      // Update slide counter
      if (this.slideCounter) {
        this.slideCounter.textContent = \\\`\\\${this.current + 1} / \\\${this.totalImages}\\\`;
      }

      // Preload next image for better performance
      this.preloadNextImage();

      // Reset transition flag after animation
      setTimeout(() => {
        this.isTransitioning = false;
      }, 1000);
    }

    updateIndicators() {
      this.dots.forEach((dot, index) => {
        const innerDot = dot.querySelector('div:first-child');
        if (index === this.current) {
          dot.classList.add('active');
          innerDot.classList.remove('bg-white/40', 'hover:bg-white/70');
          innerDot.classList.add('bg-white', 'scale-125');
        } else {
          dot.classList.remove('active');
          innerDot.classList.remove('bg-white', 'scale-125');
          innerDot.classList.add('bg-white/40', 'hover:bg-white/70');
        }
      });
    }

    preloadNextImage() {
      const nextIndex = (this.current + 1) % this.totalImages;
      const nextSlide = this.slides[nextIndex];
      if (nextSlide) {
        const img = nextSlide.querySelector('img');
        if (img && !img.complete) {
          // Create a new Image object to preload
          const preloadImg = new Image();
          preloadImg.src = img.src;
          // Also preload srcset if available
          if (img.srcset) {
            preloadImg.srcset = img.srcset;
          }
        }
      }
    }

    updateProgressBar() {
      if (!this.progressBar) return;

      let progress = 0;
      const duration = 5000; // 5 seconds
      const interval = 50; // Update every 50ms
      const increment = (interval / duration) * 100;

      clearInterval(this.progressInterval);
      this.progressInterval = setInterval(() => {
        progress += increment;
        if (progress >= 100) {
          progress = 100;
          clearInterval(this.progressInterval);
        }
        this.progressBar.style.width = \\\`\\\${progress}%\\\`;
      }, interval);
    }

    startAutoSlide() {
      clearInterval(this.autoSlideInterval);
      this.updateProgressBar();

      this.autoSlideInterval = setInterval(() => {
        this.next();
      }, 5000);
    }

    next() {
      this.current = (this.current + 1) % this.totalImages;
      this.updateCarousel();
      this.startAutoSlide();
    }

    prev() {
      this.current = (this.current - 1 + this.totalImages) % this.totalImages;
      this.updateCarousel();
      this.startAutoSlide();
    }

    goToSlide(index) {
      if (index !== this.current) {
        this.current = index;
        this.updateCarousel();
        this.startAutoSlide();
      }
    }

    setupEventListeners() {
      // Navigation buttons
      if (this.prevBtn) {
        this.prevBtn.addEventListener('click', () => this.prev());
      }

      if (this.nextBtn) {
        this.nextBtn.addEventListener('click', () => this.next());
      }

      // Pagination dots
      this.dots.forEach((dot, index) => {
        dot.addEventListener('click', () => this.goToSlide(index));
      });

      // Pause on hover
      this.carousel.addEventListener('mouseenter', () => {
        clearInterval(this.autoSlideInterval);
        clearInterval(this.progressInterval);
        if (this.progressBar) {
          this.progressBar.style.transition = 'width 0.3s ease-out';
          this.progressBar.style.width = '0%';
        }
      });

      this.carousel.addEventListener('mouseleave', () => this.startAutoSlide());

      // Keyboard navigation
      document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
          this.prev();
        } else if (e.key === 'ArrowRight') {
          this.next();
        }
      });
    }

    setupTouchEvents() {
      this.carousel.addEventListener('touchstart', (e) => {
        this.touchStartX = e.changedTouches[0].screenX;
      });

      this.carousel.addEventListener('touchend', (e) => {
        this.touchEndX = e.changedTouches[0].screenX;
        this.handleSwipe();
      });
    }

    handleSwipe() {
      const swipeThreshold = 50;
      const swipeDistance = this.touchStartX - this.touchEndX;

      if (Math.abs(swipeDistance) > swipeThreshold) {
        if (swipeDistance > 0) {
          this.next(); // Swipe left
        } else {
          this.prev(); // Swipe right
        }
      }
    }
  }

  // Initialize carousel when DOM is loaded
  document.addEventListener('DOMContentLoaded', () => {
    new ProfessionalCarousel();
  });

  // Also initialize on Astro page load
  document.addEventListener('astro:page-load', () => {
    new ProfessionalCarousel();
  });
<\/script>`])), maybeRenderHead(), showProgress && renderTemplate`<div class="absolute top-0 left-0 right-0 z-20"> <div id="progress-bar" class="h-1 bg-gradient-to-r from-primary to-secondary transition-all duration-300 ease-out"></div> </div>`, images.map(({ src, alt }, index) => renderTemplate`<div class="relative flex-shrink-0 w-full h-full group/slide"> ${renderComponent($$result, "Image", $$Image, { "src": src, "alt": alt, "width": 1920, "height": 520, "layout": "cover", "loading": index === 0 ? "eager" : "lazy", "sizes": "100vw", "widths": [640, 1024, 1280, 1920], "aspectRatio": "3.7:1", "fetchpriority": index === 0 ? "high" : "low", "class": "w-full h-full object-cover object-center transform transition-all duration-700 group-hover/slide:scale-105" })} <!-- Overlay Gradient --> <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div> <!-- Slide Content Overlay (Optional) --> <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover/slide:opacity-100 transition-opacity duration-500"> <div class="text-center text-white transform translate-y-4 group-hover/slide:translate-y-0 transition-transform duration-500"> <h3 class="text-2xl md:text-3xl font-bold mb-2 text-shadow-lg">${alt}</h3> <div class="w-16 h-1 bg-accent mx-auto rounded-full"></div> </div> </div> </div>`), showArrows && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <button id="prevBtn" class="absolute left-6 top-1/2 -translate-y-1/2 z-30 bg-white/10 backdrop-blur-md text-white p-4 rounded-full shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-white/20 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75 group/btn" aria-label="Imagen anterior"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 transition-transform duration-300 group-hover/btn:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path> </svg> </button> <button id="nextBtn" class="absolute right-6 top-1/2 -translate-y-1/2 z-30 bg-white/10 backdrop-blur-md text-white p-4 rounded-full shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-white/20 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75 group/btn" aria-label="Imagen siguiente"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </button> ` })}`, showIndicators && renderTemplate`<div class="absolute bottom-6 left-1/2 -translate-x-1/2 z-30"> <div id="pagination-dots" class="flex items-center space-x-3 bg-black/20 backdrop-blur-md rounded-full px-4 py-2"> ${images.map((_, index) => renderTemplate`<button${addAttribute(index, "data-index")} class="relative group/dot"${addAttribute(`Ir a imagen ${index + 1}`, "aria-label")}> <div class="w-3 h-3 bg-white/40 rounded-full transition-all duration-500 hover:bg-white/70 hover:scale-125 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75"></div> <div class="absolute inset-0 w-3 h-3 bg-white rounded-full scale-0 group-hover/dot:scale-150 group-hover/dot:bg-white/80 transition-all duration-300"></div> </button>`)} </div> <!-- Slide Counter --> <div class="text-center mt-3"> <span id="slide-counter" class="text-white/80 text-sm font-medium bg-black/20 backdrop-blur-md px-3 py-1 rounded-full">
1 / ${images.length} </span> </div> </div>`);
}, "C:/Users/user/Desktop/JUANPABLO/P\xC1GINA WEB/Colegio_JPII/src/components/Carousel.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "Colegio Juan Pablo II - Inicio",
    ignoreTitleTemplate: true
  };
  const firstImage = FeriaU1.src;
  const heroImage = imgPagoEnLinea.src;
  return renderTemplate`<link rel="preload" as="image"${addAttribute(firstImage, "href")}><link rel="preload" as="image"${addAttribute(heroImage, "href")}>${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="relative">${renderComponent($$result2, "Carousel", $$Carousel, { "images": [
    { src: FeriaU1.src, alt: "Calidad Educativa" },
    { src: FeriaU2.src, alt: "Valores Institucionales" },
    { src: Memoria.src, alt: "Docentes" },
    { src: Regional.src, alt: "Virtualidad" }
  ] })}<div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"><a href="/admisiones" class="text-white text-4xl md:text-6xl font-bold text-center drop-shadow-lg animate-pulse">¡Matrículas Abiertas 2026!</a></div></div>${renderComponent($$result2, "Hero2", $$Hero2, { "tagline": "Nueva Web!!", "actions": [
    { variant: "primary", target: "_blank", text: "Contacto", href: getPermalink("/contacto") },
    { variant: "secondary", text: "Nuestros servicios", href: getPermalink("/servicios") }
  ], "image": {
    class: "cursor-pointer mx-auto hover:scale-105 transition-all duration-500 object-contain drop-shadow-xl",
    src: imgPagoEnLinea,
    alt: "Pago en Linea",
    width: 720,
    height: 432,
    layout: "contained",
    loading: "eager",
    sizes: "(max-width: 768px) 96vw, (max-width: 1200px) 60vw, 1440px",
    widths: [480, 720, 900, 1440],
    aspectRatio: "5:3",
    fetchpriority: "high",
    onclick: 'window.open("https://www.mipagoamigo.com/MPA_WebSite/ServicePayments/StartPayment?id=4672&searchedCategoryId=&searchedAgreementName=INSTITUTO%20PSICOPEDAGOGICO%20JUAN%20PABLO%20II")'
  }, "data-animate": "animate-fade-in-up" }, { "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle", "data-animate": "animate-fade-in-up", "data-animate-delay": "300" }, { "default": ($$result4) => renderTemplate`<span class="hidden sm:inline">
Prepara a tu hijo para el futuro: <span class="font-semibold text-primary">Juntos para existir, convivir y aprender</span>.
</span>` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title", "data-animate": "animate-fade-in-up" }, { "default": ($$result4) => renderTemplate`
Evolucionamos para ti: <br> Descubre la nueva web del <span class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-bold">Juan Pablo II</span>.
` })}` })}${renderComponent($$result2, "Note", $$Note, { "data-animate": "animate-fade-in-up" })}${renderComponent($$result2, "Brands", $$Brands, { "title": "Accesos R\xE1pidos", "subtitle": "Accede r\xE1pidamente a plataformas educativas y recursos digitales. Simplifica tu navegaci\xF3n con estos enlaces a las herramientas m\xE1s utilizadas.", "icons": [], "images": [
    {
      src: "~/assets/images/Tools_ZigmaDatos.png",
      alt: "Zigma Datos",
      onclick: 'window.open("https://www.iejuanpabloii.zigmadatos.org")'
    },
    {
      src: "~/assets/images/Tools_Biblored.png",
      alt: "Biblored",
      onclick: 'window.open("https://www.biblored.gov.co")'
    },
    {
      src: "~/assets/images/Tools_BibliotecaNacional.png",
      alt: "Biblioteca Nacional",
      onclick: 'window.open("https://bibliotecanacional.gov.co/es-co")'
    },
    {
      src: "~/assets/images/Tools_BancoRepublica.png",
      alt: "Red Cultural Banco de la Republica",
      onclick: 'window.open("https://www.banrepcultural.org/biblioteca-virtual")'
    },
    {
      src: "~/assets/images/Tools_ColombiaAprende.png",
      alt: "Colombia Aprende",
      onclick: 'window.open("https://colombiaaprende.edu.co")'
    }
  ], "data-animate": "animate-scale-in" })}${renderComponent($$result2, "Content", $$Content, { "isReversed": true, "tagline": "Nuestra Oferta", "title": "Formaci\xF3n de Alto Nivel para un Futuro Brillante!", "items": [
    { title: "El mejor colegio privado de la comuna uno." },
    { title: "Estamos dentro de los mejores colegios privados del municipio de Soacha." },
    { title: "Altos indicadores en las pruebas SABER." }
  ], "image": {
    class: "object-contain rounded-2xl shadow-large",
    src: imgCalidad,
    alt: "Calidad Educativa",
    width: 700,
    height: 500,
    layout: "constrained",
    loading: "lazy",
    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1400px",
    widths: [480, 640, 1e3, 1400],
    aspectRatio: "7:5"
  }, "data-animate": "animate-slide-in-right" }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate`<div class="absolute inset-0 bg-gradient-subtle"></div>` })}`, "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate`<h3 class="text-3xl font-bold tracking-tight dark:text-white sm:text-4xl mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
Calidad Educativa Desde 1992
</h3><p class="text-lg text-muted leading-relaxed">
El Instituto Psicopedagógico Juan Pablo II, se caracteriza por entregar educación de la más alta calidad en los
        niveles de preescolar, básica primaria, básica secundaria y media técnica.
</p>` })}` })}${renderComponent($$result2, "Content", $$Content, { "isAfterContent": true, "items": [
    { title: "Respeto" },
    { title: "Tolerancia" },
    { title: "Compromiso" },
    { title: "Solidaridad" },
    { title: "Servicio a la comunidad" }
  ], "image": {
    class: "object-contain",
    src: imgValores,
    alt: "Valores Institucionales",
    width: 700,
    height: 500,
    layout: "constrained",
    loading: "lazy",
    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1400px",
    widths: [320, 480, 640, 700, 1e3, 1400, 2e3],
    aspectRatio: "7:5"
  }, "data-animate": "animate-fade-in-up" }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate`<div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div>` })}`, "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate`<h3 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-2">Valores institucionales</h3>
El Instituto Psicopedagógico Juan Pablo II, se caracteriza por fomentar en toda la comunidad Juanpablina los siguientes
      valores que fortalecen y dignificar al ser humano.
` })}` })}${renderComponent($$result2, "Content", $$Content, { "isReversed": true, "isAfterContent": true, "items": [
    { title: "Docentes con destacada experiencia laboral." },
    { title: "Egresados Juanpablinos." },
    { title: "Alto sentido humano." }
  ], "image": {
    class: "object-contain",
    src: imgDocentes,
    alt: "Docentes",
    width: 700,
    height: 500,
    layout: "constrained",
    loading: "lazy",
    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1400px",
    widths: [320, 480, 640, 700, 1e3, 1400, 2e3],
    aspectRatio: "7:5"
  }, "data-animate": "animate-fade-in-up" }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate`<div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div>` })}`, "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate`<h3 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-2">Nuestros Docentes</h3>
Nuestro cuerpo directivo y docente siempre atento a acompañar los procesos institucionales, son profesionales con altos
      conocimientos y sentido humano que nos permiten promover en nuestros educandos. Educación de calidad y con visión de
      servicio al municipio de Soacha y al país.
` })}` })}${renderComponent($$result2, "Stats", $$Stats, { "subtitle": "Datos hist\xF3ricos de la prestaci\xF3n del servicio Juanpablino:", "stats": [
    { title: "Graduados", amount: "+1200" },
    { title: "A\xF1os de experiencia", amount: "33" }
  ], "data-animate": "animate-bounce-in" })}${renderComponent($$result2, "Content", $$Content, { "id": "about", "columns": 3, "image": {
    class: "object-contain",
    src: imgVirtualidad,
    alt: "Virtualidad",
    width: 800,
    height: 600,
    layout: "constrained",
    loading: "lazy",
    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 1600px",
    widths: [480, 800, 1200, 1600],
    aspectRatio: "4:3"
  }, "data-animate": "animate-fade-in-up" }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate`<div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div>` })}`, "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate`<h2 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-2">Virtualidad</h2><p>
Adaptándonos a esta coyuntura que vivimos a nivel mundial, desde el Instituto Psicopedagógico Juan Pablo II,
        hemos ratificado nuestro compromiso con la transformación de la sociedad a través de la mejor oferta educativa
        virtual, recibiendo reconocimiento por parte de la secretaría de Educación y Cultura de Soacha.
</p><br><p>
Contamos con equipo humano idóneo y herramientas tecnológicas implementadas desde el año 2006, con la
        implementación de Zigma datos, página web institucional, Dropbox, redes sociales, WhatsApp Juanpablino,
        Business, y que fortalecimos durante el 2020 con la implementación de correos institucionales y G Suite For
        Education, para ofrecer y garantizar formación bajo el esquema de la virtualidad, con los estándares académicos
        que destacan al Juan Pablo II.
</p>` })}` })}${renderComponent($$result2, "Testimonials", $$Testimonials, { "title": "Testimonios y Experiencias", "testimonials": [
    {
      testimonial: "Nixon Andr\xE9s Meneses fue uno de los veinte colombianos beneficiados con la Beca Fulbright...",
      name: "\xA1Juanpablino de talla internacional!",
      job: "Estudiante"
    },
    {
      testimonial: `La marca de Juanpablina se lleva para toda la vida...`,
      name: "\xA1Orgullosamente Juanpablina!",
      job: "Estudiante"
    },
    {
      testimonial: `El Instituto Psicopedag\xF3gico Juan Pablo II, fue mi segundo hogar...`,
      name: "Luz \xC1ngela P\xE9rez Castiblanco",
      job: "Estudiante"
    }
  ], "data-animate": "animate-slide-in-left" })}${renderComponent($$result2, "WhatsAppButton", $$WhatsAppButton, { "phoneNumber": "573196721410", "message": "Hola, estoy interesado en sus servicios." })}` })}`;
}, "C:/Users/user/Desktop/JUANPABLO/P\xC1GINA WEB/Colegio_JPII/src/pages/index.astro", void 0);

const $$file = "C:/Users/user/Desktop/JUANPABLO/PÁGINA WEB/Colegio_JPII/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
