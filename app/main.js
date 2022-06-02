import { PokemonsController } from "./Controllers/PokemonsController.js";
import { SandboxesController } from "./Controllers/SandboxController.js";

class App {
  pokemonsController = new PokemonsController();
  sandboxesController = new SandboxesController();
}

window["app"] = new App();
