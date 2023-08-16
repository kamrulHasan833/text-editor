// crate function to get an element by id
function getElement(id) {
  const element = document.getElementById(id);
  return element;
}
// crate function to get value of an input field
function getInputValueById(id) {
  const input = document.getElementById(id);
  const inputValue = input.value;
  return inputValue;
}
// crate function to set classlist to an element
function setClass(id, classitem) {
  const element = document.getElementById(id);
  element.classList.add(classitem);
}
// crate function to revove classlist to an element
function removeClass(id, classitem) {
  const element = document.getElementById(id);
  element.classList.remove(classitem);
}

// create toggle
let result = false;
function toggle() {
  result ? (result = false) : (result = true);
  return result;
}

// hover style
function setHoverStyle(id, hoverClass, contentType) {
  getElement(id).addEventListener("mouseover", function (e) {
    const targetElement = e.target.parentNode;
    const active = hoverClass;
    const isActive = targetElement.className.includes(active);
    if (contentType === "text-align") {
      setTextAlign(isActive);
      const ids = ["text-left", "text-center", "text-right", "text-justify"];
      if (ids.includes(targetElement.id)) {
        setClass(targetElement.id, `hover:${hoverClass}`);
      }
    } else {
      setTextStyle(id, hoverClass, isActive);
      setClass(id, `hover:${hoverClass}`);
    }
  });
  // mouse out event
  getElement(id).addEventListener("mouseout", function (e) {
    const targetElement = e.target.parentNode;
    if (contentType === "text-align") {
      const ids = ["text-left", "text-center", "text-right", "text-justify"];
      if (ids.includes(targetElement.id)) {
        removeClass(targetElement.id, `hover:${hoverClass}`);
      }
    } else {
      removeClass(id, `hover:${hoverClass}`);
    }
  });
}

// set text slyle on click event
function setTextStyle(id, classname1, isActive) {
  getElement(id).addEventListener("click", function (e) {
    const targetElement = e.target.parentNode;
    if (isActive) {
      removeClass(id, classname1);
      removeClass("text-box", targetElement.id);
    } else {
      setClass(id, classname1);
      setClass("text-box", targetElement.id);
    }
  });
}
