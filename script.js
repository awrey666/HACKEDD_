const input = document.querySelector(".input")
const btn = document.querySelector(".btn")
const warn = document.querySelector(".form_warn")
const error = document.querySelector(".error")
const succes = document.querySelector(".succes")







if (localStorage.getItem("error") == "true") {
    error.classList.add("display_flex")
    warn.innerHTML = `У вас закончились попытки`
}
else {
    let turn = 3

    btn.addEventListener("click", function () {
        if (input.value !== "") {
            let x = input.value.trim()
            if (Number(x) !== 6 && turn !== 0) {
                turn--
                warn.innerHTML = `У вас осталось ${turn} попытки`
            }
            else if (Number(x) == 6) {
                succes.classList.add("display_flex")
            }
            if (turn == 0) {
                error.classList.add("display_flex")
                warn.innerHTML = `У вас закончились попытки`
                localStorage.setItem("error", true)
            }
        }
    })
}





