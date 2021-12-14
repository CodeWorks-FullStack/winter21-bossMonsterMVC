import { GameController } from "./Controllers/GameController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // NOTE ALWAY ALWAYS ALWAYS LINK NEWLY CREATED CONTROLLERS HERE
  valuesController = new ValuesController();
  gameController = new GameController()

}

window["app"] = new App();
