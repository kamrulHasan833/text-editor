// hover class
setHoverStyle("text-align", "bg-blue-400", "text-align");

//set text align on click event
function setTextAlign(isActive) {
  getElement("text-align").addEventListener("click", function (e) {
    const firstElement = getElement("text-left");
    const lastElement = getElement("text-justify");
    const preElement = getElement("text-align").querySelector(".bg-blue-400");
    const targetElement = e.target.parentNode;
    const active = "bg-blue-400";
    const ids = ["text-left", "text-center", "text-right", "text-justify"];

    if (firstElement === targetElement && isActive) {
      targetElement.classList.remove(active);
      lastElement.classList.add(active);
      ids.forEach((id) => {
        removeClass("text-box", id);
      });
      setClass("text-box", lastElement.id);
    } else if (isActive) {
      targetElement.classList.remove(active);
      firstElement.classList.add(active);
      ids.forEach((id) => {
        removeClass("text-box", id);
      });
      setClass("text-box", firstElement.id);
    } else if (ids.includes(targetElement.id)) {
      preElement.classList.remove("bg-blue-400");
      targetElement.classList.add("bg-blue-400");
      ids.forEach((id) => {
        removeClass("text-box", id);
      });
      setClass("text-box", targetElement.id);
    }
  });
}
