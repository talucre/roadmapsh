const textarea = document.getElementById("textarea")
const currentChar = document.getElementById("current-char")

textarea.addEventListener("input", function () {
    this.style.height = "auto"
    this.style.height = this.scrollHeight + "px"
})

textarea.addEventListener("input", function () {
    const length = this.value.length
    currentChar.textContent = length

    if (length >= 250) {
        this.classList.add("invalid")
    } else {
        this.classList.remove("invalid")
    }
})
