function toggleShowPassword(id) {
    const elem = document.getElementById(id)
    const type = elem.getAttribute("type")
    if (type === "password") {
        elem.setAttribute("type", "text")
    } else {
        elem.setAttribute("type", "password")
    }
}

const showPasswordCheckbox = document.getElementById("show-password-checkbox")
const showConfirmPasswordCheckbox = document.getElementById(
    "show-confirm-password-checkbox"
)

showPasswordCheckbox.addEventListener("click", () =>
    toggleShowPassword("password")
)

showConfirmPasswordCheckbox.addEventListener("click", () =>
    toggleShowPassword("confirm-password")
)
