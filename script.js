window.onload = function () {
    const bars = document.querySelectorAll(".bar");
    gsap.from(bars, {
      duration: .5,
      opacity: 0,
      scaleY: 0,
      ease: "bounce.out",
      stagger: .5,
      transformOrigin: "bottom",
    });
  };