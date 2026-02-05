const toggle = document.getElementById("modeToggle");
const body = document.body;
const savedMode = localStorage.getItem("mode");

if (savedMode === "light") {
  body.classList.add("light-mode");
  toggle.textContent = "Dark";
} else {
  toggle.textContent = "Light";
}

toggle.addEventListener("click", () => {
  body.classList.toggle("light-mode");
  const isLight = body.classList.contains("light-mode");
  toggle.textContent = isLight ? "Dark" : "Light";
  localStorage.setItem("mode", isLight ? "light" : "dark");
});
