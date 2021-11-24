class Container {
  constructor(id, width = 500, height = 500) {
    this.width = width;
    this.height = height;
    this.element = document.createElement("div");
    this.element.id = `${id}-container`;
    this.element.className = "container";
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
  }
}
export { Container };
