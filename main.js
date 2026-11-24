const themeToggle = document.getElementById("theme-toggle");
const icon = themeToggle.querySelector("i");
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
    document.body.classList.add("light-mode");
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
}
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    if (document.body.classList.contains("light-mode")) {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
        localStorage.setItem("theme", "light");
    } else {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
        localStorage.setItem("theme", "dark");
    }
});