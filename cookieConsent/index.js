const cookie = document.getElementById("cookie")
const closeBtn = document.getElementById("cookie__close-btn")
const acceptBtn = document.getElementById("cookie__accept-btn")

let interval

if (!localStorage.getItem("cookie")) {
    interval = setInterval(() => cookie.classList.add("visible"), 5000)
}

function closeCookie() {
    cookie.classList.remove("visible")
}

closeBtn.addEventListener("click", closeCookie)

function acceptCookie() {
    localStorage.setItem("cookie", true)
    clearInterval(interval)
    closeCookie()
}

acceptBtn.addEventListener("click", acceptCookie)
