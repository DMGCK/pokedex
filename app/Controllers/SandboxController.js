import { ProxyState } from "../AppState.js";
import { sandboxesService } from "../Services/SandboxesService.js";

export class SandboxesController {
  constructor() {
    console.log('sandbox controller working'); 
    this.getSandTeam()
  }

  async getSandTeam() {
    await sandboxesService.getSandTeam()
  }

  async addToTeam() {
    let active = ProxyState.activePokemon
    await sandboxesService.addToTeam(active)

  }
}