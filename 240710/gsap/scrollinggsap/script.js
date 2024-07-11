const tl = gsap.timeline();

tl.to(".typo01", {
  y: 0,
  duration: 1,
})
  .to(
    ".typo02",
    {
      y: 0,
      duration: 1,
    },
    "-=1"
  )
  .to(".typo span", {
    opacity: 0,
    duration: 1,
  })
  .to(".typo", {
    gap: 0,
    duration: 1,
  });
