const nameInput = document.querySelector("#name-input");

const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", (e) => {
  if (e.currentTarget.value) {
    nameOutput.innerText = e.currentTarget.value;
  } 
    nameOutput.innerText = "Anonymous";
});