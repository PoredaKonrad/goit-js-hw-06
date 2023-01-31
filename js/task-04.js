const buttonDecrement = document.querySelector(
	'button[data-action="decrement"]'
);

const buttonIncrement = document.querySelector(
	'button[data-action="increment"]'
);

let counterValue = 0;

const value = document.querySelector("#value");

const buttonDecrementClick = () => {
	counterValue -= 1;
	value.innerText = counterValue;
};

const buttonIncrementClick = () => {
	counterValue += 1;
	value.innerText = counterValue;
};

buttonDecrement.addEventListener("click", buttonDecrementClick);
buttonIncrement.addEventListener("click", buttonIncrementClick);
