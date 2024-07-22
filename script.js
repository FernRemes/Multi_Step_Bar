const circles = document.querySelectorAll(".circle");
const progressBar = document.querySelector(".indicator");
const buttons = document.querySelectorAll("button");

let currentStep = 1;

// update the current step
const updateSteps = (e) => {
    currentStep = e.target.id === "next" ? ++currentStep : --currentStep;
    
    circles.forEach((circle, i) => {
        circle.classList[`${i < currentStep ? "add" : "remove"}`]("active");
    })

    progressBar.style.width = `${((currentStep - 1) / (circles.length - 1)) * 100}%`;

    if(currentStep === circles.length) {
        buttons[1].disabled = true;

    }
    else if (currentStep === 1) {
        buttons[0].disabled = true;
    }
    else{
        buttons.forEach((button) => (button.disabled = false));
    }
}

// add click event listeners to all buttons
buttons.forEach((button) => {
    button.addEventListener("click", updateSteps);
});
