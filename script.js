gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",
  smooth: 1.5,
  effects: true,
});

gsap.from(".hero", {
  opacity: 0,
  duration: 2,
});

gsap.from(".bg1", {
  opacity: 0,
  duration: 2,
});

gsap.from(".bg2", {
  y: 50,
  duration: 1,
});

gsap.from(".cities-list div", {
  opacity: 0,
  y: 20,
  filter: "blur(10px)",
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".cities",
    start: "0% 80%",
    end: "100% 70%",
    scrub: true,
  },
});

gsap.from(".thanks li", {
  opacity: 0,
  y: 20,
  filter: "blur(10px)",
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".thanks ",

    start: "0% 80%",
    end: "100% 80%",
    markers: true,
    scrub: true,
  },
});
