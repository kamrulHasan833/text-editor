// set color to text box
const colarray = ["text-black"];

getElement("color").addEventListener("input", function (e) {
  const color = getInputValueById("color");
  removeClass("text-box", colarray[0]);
  colarray.shift();
  colarray.push(`text-[${color}]`);
  setClass("text-box", `text-[${getInputValueById("color")}]`);
});

// set font size
const fontSizes = ["text-base"];
getElement("number").addEventListener("click", function () {
  const value = `text-[${getInputValueById("number")}px]`;
  removeClass("text-box", fontSizes[0]);
  fontSizes.shift();
  fontSizes.push(value);
  setClass("text-box", value);
});
getElement("number").addEventListener("blur", function () {
  const value = `text-[${getInputValueById("number")}px]`;
  removeClass("text-box", fontSizes[0]);
  fontSizes.shift();
  fontSizes.push(value);
  setClass("text-box", value);
});

// text transform
setHoverStyle("uppercase", "bg-blue-400", "all");
