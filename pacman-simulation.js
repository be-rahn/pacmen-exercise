import { Simulation } from "./components/simulation.js";
import { Pacman } from "./components/pacman.js";
let images = [
  ["./images/right-opened.png", "./images/right-closed.png"],
  ["./images/left-opened.png", "./images/left-closed.png"],
];
let pacmanSimulationStructure = {
  id: "pacman-simulation",
  title: "Pacman Simulation",
  buttons: {
    "Create Pacmen": function createPacmen() {
      let newPacman = new Pacman(pacmanSimulationProperties);
      newPacman.container.element.appendChild(newPacman.element);
      pacmanSimulationProperties.pacmen.push(newPacman);
    },
    "Remove Pacman": function removePacman() {
      let pacmanToRemove = pacmanSimulationProperties.pacmen.pop();
      let intervalToRemove = pacmanSimulationProperties.intervalIDs.pop();
      clearInterval(intervalToRemove);
      pacmanToRemove.container.element.removeChild(pacmanToRemove.element);
    },
    "Remove All Pacmen": function removeAll() {
      let length = pacmanSimulationProperties.pacmen.length;
      for (let i = 0; i < length; i++) {
        let pacmanToRemove = pacmanSimulationProperties.pacmen.pop();
        let intervalToRemove = pacmanSimulationProperties.intervalIDs.pop();
        clearInterval(intervalToRemove);
        pacmanToRemove.container.element.removeChild(pacmanToRemove.element);
      }
    },
    "Start Simulation": function startSimulation() {
      pacmanSimulationProperties.pacmen.forEach((pacman) =>
        pacmanSimulationProperties.intervalIDs.push(
          setInterval(pacman.move, 1000 / 60, pacman)
        )
      );
    },
    "Stop Simulation": function stopSimulation() {
      pacmanSimulationProperties.intervalIDs.forEach((id) => clearInterval(id));
    },
  },
};

let pacmanSimulationProperties = {
  pacmen: [],
  intervalIDs: [],
  pacmanImages: images,
  maxEdge: 450,
  minEdge: 0,
  project: new Simulation(pacmanSimulationStructure),
};
document
  .getElementById("projects")
  .appendChild(pacmanSimulationProperties.project.element);
