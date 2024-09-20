import gsap from "gsap";

const createTimeline = () => gsap.timeline();

const animateBodyOverflow = (overflow, duration) => {
  return gsap.to("body", {
    duration,
    overflowY: overflow,
    ease: "power3.inOut",
  });
};

export const preLoaderAnim = (setLoading) => {
  const tl = createTimeline();

  tl.add(animateBodyOverflow("hidden", 0.1))
    .to(".texts-container", { duration: 0, opacity: 1, ease: "power3.out" })
    .from(".texts-container span", {
      duration: 2,
      delay: 1,
      opacity: 1,
      stagger: 0.4,
      ease: "power3.out",
    })
    .add(animateBodyOverflow("scroll", 0.1))
    .to(".preloader", {
      duration: 1,
      opacity: 0,
      ease: "power2.out",
      onComplete: () => {
        gsap.set(".preloader", { display: "none" });
        setLoading(false);
      },
    });
};

export const openMenu = () => {
  const tl = createTimeline();
  tl.to("body", {
    duration: 0.1,
    overflowY: "hidden",
    ease: "power3.out",
  })
    .set(".hamburger-menu", { display: "block" })
    .to(".nav-secondary, .nav-primary", {
      duration: 0.8,
      height: "100%",
      transformOrigin: "right top",
      stagger: 0.1,
      ease: "power3.inOut",
    })
    .from(".nav-link", {
      duration: 0.5,
      x: -80,
      opacity: 0,
      stagger: 0.5,
      ease: "power3.in",
    });
};

export const closeMenu = () => {
  const tl = createTimeline();
  tl.to("body", {
    duration: 0.05,
    overflowY: "scroll",
    ease: "power3.inOut",
  })
    .to([".nav-primary", ".nav-secondary"], {
      duration: 0.8,
      height: 0,
      transformOrigin: "right top",
      stagger: 0.1,
      ease: "power3.inOut",
    })
    .set(".hamburger-menu", { display: "none" });
};

export const fadeIn = (el) => {
  gsap.to(el, {
    duration: 3,
    opacity: 1,
    ease: "power4.out",
  });
};

export const fadeOut = (el) => {
  gsap.to(el, {
    duration: 3,
    opacity: 0,
    ease: "power4.out",
  });
};
