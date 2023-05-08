const container = document.querySelector(".container");

container.addEventListener("mouseenter", () => {
  container.style.border = `2px groove #fff`;
});

container.addEventListener("mouseleave", () => {
  container.style.border = `none`;
});

