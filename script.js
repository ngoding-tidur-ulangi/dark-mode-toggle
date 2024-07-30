const indicator = document.getElementsByClassName("indicator")[0]
const body = document.getElementsByTagName("body")[0]

indicator.addEventListener("click", () => {
    body.classList.toggle("dark")
    body.classList.toggle("light")
})