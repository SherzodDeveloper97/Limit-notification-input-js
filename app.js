// Selectors:
let myText = document.getElementById("long-text--field");
let counterContainer = document.getElementById("counter-container");
let limit = 50;
counterContainer.textContent = 0 + "/" + limit;

// Event Listener:
myText.addEventListener("input", () => {
  let textLength = myText.value.length;
  //   console.log(textLength);
  counterContainer.textContent = textLength + "/" + limit;

  if (textLength > limit) {
    myText.style.borderColor = "#ff2851";
    counterContainer.style.color = "#ff2851";
  } else {
    myText.style.borderColor = "green";
    counterContainer.style.color = "grey";
  }
});

//////////////Qiyinroq yo'l Code///////////////////////:

// const textInput = document.querySelector(".long-text--field");
// let textInputValue = textInput.value;
// let counter = document.getElementById("counter");
// counter.textContent = 0;
// const counterLength = document.getElementById("counter-length");
// let counterUpdate = 0;
// counterLength.textContent = 50;

// textInput.addEventListener("keyup", (e) => {
//   if (e.target.value !== "") {
//     counterUpdate++;
//     counter.innerText = counterUpdate;
//     console.log(counter.value);

//     if (counter.value > counterLength.value) {
//       textInput.classList.add("error-length");
//     }
//   } else {
//     counterUpdate = 0;
//     counter.innerText = counterUpdate;
//   }
// });
