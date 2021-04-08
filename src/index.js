const button = document.querySelector(".bm-button")

document.addEventListener("DOMContentLoaded", () => {
    if ("dark" === localStorage.theme) {
        document.documentElement.classList.add("dark")
    }
})

button.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
    console.log(document.documentElement.classList)
    if (document.documentElement.classList.contains("dark")) {
        localStorage.theme = "dark"
    } else {
        localStorage.theme = "light"
    }
}
);
