const OTPinputs = document.querySelectorAll("input");
const button = document.querySelector("button");

window.addEventListener("load", () => OTPinputs[0].focus());

OTPinputs.forEach((input, index) => {
    input.addEventListener("input", () => {
        const currentInput = input;
        const nextInput = OTPinputs[index + 1];

        if (currentInput.value.length === 1) {
            nextInput.removeAttribute("disabled");
            nextInput.focus();
        }

        if (!OTPinputs[3].disabled && OTPinputs[3].value !== "") {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });
});

OTPinputs[0].addEventListener("keyup", (e) => {
    if (e.key === "Backspace" && e.target.value === "") {
        e.target.setAttribute("disabled", true);
    }
});

OTPinputs.forEach((input, index) => {
    input.addEventListener("keyup", (e) => {
        if (e.key === "Backspace" && e.target.value === "") {
            e.target.setAttribute("disabled", true);
            OTPinputs[index - 1].focus();
        }
    });
});
