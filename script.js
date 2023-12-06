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
  color: "#fcd34d",
  padding: 0,
  strokeWidth: 3.5,
});
// a1.show();

const group = annotationGroup([a1, a2]);
group.show();
