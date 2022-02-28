const number = document.querySelector(".number");
const buttonContainer = document.querySelector(".button-container");

let curNumber = 0;

// Defining functions
const stringToNumber = () => {
  curNumber = Number.parseInt(number.textContent);
};

const decreaseAndIncreaseAnimation = (curNumber) => {
  number.style.transform = `scale(1) rotate(${curNumber * 360}deg)`;
  number.style.transition = "all 0.5s ease";
  number.textContent = curNumber;
};

const resetAnimation = (curNumber) => {
  number.style.transform = "scale(1.1) rotate(0deg)";
  number.style.transition = "all 0.5s ease";
  number.textContent = curNumber;
};

// Event Delegation
buttonContainer.addEventListener("click", function (e) {
  console.log(e.target);
  if (e.target.classList.contains("decrease")) {
    stringToNumber();
    curNumber -= 1;
    decreaseAndIncreaseAnimation(curNumber);
  }
  // DONE

  if (e.target.classList.contains("reset")) {
    curNumber = 0;
    resetAnimation(curNumber);
  }

  // DONE

  if (e.target.classList.contains("increase")) {
    stringToNumber();
    curNumber += 1;
    decreaseAndIncreaseAnimation(curNumber);
  }

  // DONE
});

// If you want to see more content from me. please subscribe.
// It's Showtime.
