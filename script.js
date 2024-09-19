window.onload = function () { //an animation to occur when the page loads
    const bars = document.querySelectorAll(".bar"); //create an element that grabs all the elements with the class bar
    gsap.from(bars, {
      duration: .5,
      opacity: 0,
      scaleY: 0,
      ease: "bounce.out",
      stagger: .5,
      transformOrigin: "bottom",
    });
  };