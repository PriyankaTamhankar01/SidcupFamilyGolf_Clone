var csr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
  csr.style.left = dets.x + 30 + "px";
  csr.style.top = dets.y + "px";
  blur.style.left = dets.x - 200 + "px";
  blur.style.top = dets.y - 200 + "px";
});

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    csr.style.scale = 3;
    csr.style.border = "1px solid #fff";
    csr.style.backgroundColor = "transparent";
  });

  elem.addEventListener("mouseleave", function () {
    csr.style.scale = 1;
    csr.style.border = "0px solid #95c11e";
    csr.style.backgroundColor = "#95c11e";
  });
});

gsap.to("#nav", {
  backgroundColor: "#000",
  height: "110px",
  duration: 0.5,
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    marker: true,
    start: "top -25%",
    end: "top -80%",
    scrub: 2,
  },
});

gsap.from("#about-us img, about-us-in", {
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.4,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});

gsap.from(".card", {
  scale: 0.8,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    marker: true,
    start: "top 70%",
    end: "top 65%",
    scrub: 2,
  },
});

gsap.from("#colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    start:"top 55%",
    end:"top 45%",
    scrub:4
  },
});

gsap.from("#colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#colon2",
    scroller: "body",
    start:"top 55%",
    end:"top 45%",
    scrub:4
  },
});

gsap.from("#page4 h1",{
  y: 50,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    start:"top 75%",
    end:"top 70%",
    scrub:3
}
})

