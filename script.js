gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",
  smooth: 1.5,
  effects: true,
});

function animatePage() {
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
      scrub: true,
    },
  });

  gsap.from("footer", {
    y: -200,
    immediateRender: false,
    scrollTrigger: {
      trigger: "footer",
      end: "100% 100%",
      scrub: true,
      invalidateOnRefresh: true,
    },
  });

  const textSplitList = document.querySelectorAll(".text");

  textSplitList.forEach((text) => {
    const split = SplitText.create(text, {
      type: "lines, words, chars",
      mask: "lines",
    });
    gsap.from(split.chars, {
      y: 40,
      opacity: 0,
      stagger: 0.03,
      scrollTrigger: {
        trigger: text,
        start: "0% 80%",
        end: "100% 80%",
        markers: true,
      },
    });
  });
}

const timeline = gsap.timeline({
  onComplete() {
    animatePage();
    gsap.to("#preloader", {
      opacity: 0,
      duration: 0.5,
      onComplete() {
        gsap.to("#preloader", { display: "none" });
      },
    });
  },
});

timeline.to("#preloader path", {
  strokeDashoffset: 0,
  fill: "#CF2929BD",

  duration: 2,
});
