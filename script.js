const themeButton = document.getElementById("theme");
let theme = localStorage.getItem("theme");
let icon = localStorage.getItem("icon");
let root = document.body;

if (theme === null) localStorage.setItem("theme", "light");
if (icon === null) localStorage.setItem("icon", "&#127774;");

root.classList.add(theme);
themeButton.innerHTML = icon;
console.log(theme);

themeButton.addEventListener("click", () => {

  if (localStorage.getItem("theme") === "dark") {
    root.classList.remove("dark");
    root.classList.add("light");
    localStorage.setItem("theme", "light");
    themeButton.innerHTML = "&#127770;"
    localStorage.setItem("icon", "&#127770;");
  } else if (localStorage.getItem("theme") === "light") {
    root.classList.remove("light");
    root.classList.add("dark");
    localStorage.setItem("theme", "dark");
    themeButton.innerHTML = "&#127774;"
    localStorage.setItem("icon", "&#127774;");
  }
});
