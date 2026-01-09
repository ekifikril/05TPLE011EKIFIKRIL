function showHome() {
  setActive("home", 0);
}

function showPertemuan() {
  setActive("pertemuan", 1);
}

function setActive(id, btnIndex) {
  document
    .querySelectorAll(".content")
    .forEach((c) => c.classList.remove("active"));
  document.getElementById(id).classList.add("active");

  document
    .querySelectorAll(".nav-btn")
    .forEach((b) => b.classList.remove("active"));
  document.querySelectorAll(".nav-btn")[btnIndex].classList.add("active");
}
