const toggle = document.getElementById("modeToggle");
const body = document.body;
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");
const drawerOverlay = document.getElementById("drawerOverlay");

const savedMode = localStorage.getItem("mode");
if (savedMode === "light") {
  body.classList.add("light-mode");
  toggle.innerHTML = "&#9790;";
} else {
  toggle.innerHTML = "&#9788;";
}

toggle.addEventListener("click", () => {
  body.classList.toggle("light-mode");
  const isLight = body.classList.contains("light-mode");
  toggle.innerHTML = isLight ? "&#9790;" : "&#9788;";
  localStorage.setItem("mode", isLight ? "light" : "dark");
});

function toggleMenu() {
  menuToggle.classList.toggle("active");
  navLinks.classList.toggle("active");
  drawerOverlay.classList.toggle("active");

  if (navLinks.classList.contains("active")) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "";
  }
}

menuToggle.addEventListener("click", toggleMenu);
drawerOverlay.addEventListener("click", toggleMenu);

const navLinksItems = navLinks.querySelectorAll("a");
navLinksItems.forEach((link) => {
  link.addEventListener("click", () => {
    if (navLinks.classList.contains("active")) {
      toggleMenu();
    }
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && navLinks.classList.contains("active")) {
    toggleMenu();
  }
});
