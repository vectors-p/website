const t = document.getElementById("modeToggle");
const b = document.body;

if (localStorage.mode === "light") {
  b.classList.add("light-mode");
  t.textContent = "Dark";
}

t.onclick = () => {
  b.classList.toggle("light-mode");
  const light = b.classList.contains("light-mode");
  t.textContent = light ? "Dark" : "Light";
  localStorage.mode = light ? "light" : "dark";
};
