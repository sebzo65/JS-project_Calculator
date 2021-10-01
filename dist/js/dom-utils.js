const createElemWithText = (type, text, parent) => {
  const newElem = document.querySelector(".phoneCalculator__screen--display");
  const textNode = document.createTextNode(text);
  newElem.appendChild(textNode);
  parent.appendChild(newElem);
};

export default createElemWithText;
