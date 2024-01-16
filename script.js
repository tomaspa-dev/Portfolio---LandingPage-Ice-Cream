import {
  annotate,
  annotationGroup,
} from "https://unpkg.com/rough-notation?module";

// highlight-heading
const n1 = document.querySelector("#highlight-heading");
const n2 = document.querySelector("#underline-heading");
const a1 = annotate(n1, {
  type: "highlight",
  color: "#fbbf24",
  padding: 5,
  animation: false,
});
const a2 = annotate(n2, {
  type: "underline",
  color: "#fbbf24",
  padding: 0,
  strokeWidth: 3.5,
  animate: false,
});
// a1.show();

const group = annotationGroup([a1, a2]);
group.show();

///////////////////////////////////////////////////////////
// Sticky navigation

const heroSectionEl = document.querySelector(".hero-section");

const observer = new IntersectionObserver(
  function (entries) {
    const entrie = entries[0];
    // console.log(ent);

    if (entrie.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (entrie.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

observer.observe(heroSectionEl);

///////////////////////////////////////////////////////////
