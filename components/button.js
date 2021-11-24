class Button {
  constructor(className, onClickEvent, textContent) {
    this.element = document.createElement("button");
    this.element.className = className;
    this.element.addEventListener("click", onClickEvent);
    this.element.textContent = textContent;
  }
}
export { Button };
