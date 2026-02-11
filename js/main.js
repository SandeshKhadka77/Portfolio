// reveal sections on scroll

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");

  console.log("Sections found:", sections.length);

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.2 }
  );

  sections.forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
  });
});


