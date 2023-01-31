const fontSizeControl = document.getElementById("font-size-control");

const text = document.getElementById("text");

fontSizeControl.addEventListener("input", (event) => {
  const rangeValue = event.target.valueAsNumber;
  text.setAttribute("style", `font-size:${rangeValue}px;`);
});