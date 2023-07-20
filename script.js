var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});

////////////////  ANIMATION   ////////////////

gsap.from("#nav", {
  y: -50,
  duration: 1,
  delay: 1,
  opacity: 0,
  stagger: 0.2,
});

gsap.from("#header, h2, span, h4, #button", {
  y: 50,
  duration: 2,
  delay: 1,
  opacity: 0,
  stagger: 0.3,
});

gsap.from("#video-box, #video", {
  y: 50,
  duration: 1,
  delay: 1,
  opacity: 0,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#video",
    start: "top bottom",
  },
});

gsap.from("#event", {
  x: 50,
  duration: 2,
  delay: 1,
  opacity: 0,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#event",
    start: "top bottom",
  },
});

gsap.from("#feature h1, #feature p, #card", {
  x: 50,
  duration: 1,
  delay: 1,
  opacity: 0,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#feature",
    start: "top bottom",
  },
});

gsap.from("#about, #about-card", {
  x: 50,
  duration: 1,
  delay: 1,
  opacity: 0,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#about",
    start: "top bottom",
  },
});

gsap.from("#feedback, #testi-card", {
  y: 50,
  duration: 1,
  delay: 1,
  opacity: 0,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#feedback",
    start: "top bottom",
  },
});

gsap.from("#brand-logo, #brand-sector, #brand-logos", {
  y: 50,
  duration: 1,
  delay: 1,
  opacity: 0,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#brand-logo",
    start: "top bottom",
  },
});

gsap.from("#container-contact, #contact-contanier", {
  x: -50,
  duration: 1,
  delay: 1,
  opacity: 0,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#contact-contanier",
    start: "top bottom",
  },
});

gsap.from("#imagebox", {
  x: 50,
  duration: 1,
  delay: 1,
  opacity: 0,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#imagebox",
    start: "top bottom",
  },
});

gsap.from("#footer-left, #footer-center, #footer-right, hr, span", {
  y: 50,
  duration: 1,
  delay: 1,
  opacity: 0,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#footer-left, #footer-center, #footer-right, hr, span",
    start: "top bottom",
  },
});
