import { NavigationBar } from "./navigationbar.js";
import { Container } from "./container.js";
class Simulation {
  constructor(structure) {
    this.buttons = structure.buttons;

    // Create project div
    this.element = document.createElement("div");
    this.element.id = structure.id;
    this.element.className = "simulation";

    // Create project header
    this.header3 = document.createElement("h3");
    this.header3.id = `${this.element.id}-header3`;
    this.header3.className = "simulation-header";
    this.header3.textContent = structure.title;
    this.element.appendChild(this.header3);

    // Create navigation bar
    this.navigationBar = new NavigationBar(this.element.id, this.buttons);
    this.element.appendChild(this.navigationBar.element);

    // Create container
    this.container = new Container(this.element.id, 500, 500);
    this.element.appendChild(this.container.element);
  }
}
export { Simulation };
