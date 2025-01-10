const themeToggle = document.getElementById("theme-toggle");
const sunIcon = document.getElementById("sun-icon");
const moonIcon = document.getElementById("moon-icon");
const currentTheme = localStorage.getItem("theme") || "light";

// Configura o tema inicial
document.documentElement.setAttribute("data-theme", currentTheme);
if (currentTheme === "dark") {
  sunIcon.style.display = "none";
  moonIcon.style.display = "block";
} else {
  sunIcon.style.display = "block";
  moonIcon.style.display = "none";
}

themeToggle.addEventListener("click", () => {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  const newTheme = isDark ? "light" : "dark";

  // Altera o tema
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);

  // Alterna os ícones
  if (isDark) {
    sunIcon.style.display = "block";
    moonIcon.style.display = "none";
  } else {
    sunIcon.style.display = "none";
    moonIcon.style.display = "block";
  }
});
