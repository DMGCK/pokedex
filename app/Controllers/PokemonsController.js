import { Pop } from "../Utils/Pop.js";
import { pokemonsService } from "../Services/PokemonsService.js"
import { ProxyState } from "../AppState.js";
import { Pokemon } from "../Models/pokemon.js";


function _drawList() {
  // console.log('attempting draw list'); 
  let template = ''
  ProxyState.pokemon.forEach(p =>  template += Pokemon.listTemplate(p))
  // console.log(template);
  
  document.getElementById('dex-list').innerHTML = template
}

function _drawDetails() {
  // console.log('drawing details'); 
  
  
  try {
    let selected = ProxyState.activePokemon;
    // console.log('detail draw',selected); 
    
    document.getElementById('detail-view').innerHTML = selected.DetailsTemplate
    
  } catch (error) {
    Pop.toast(error, 'error')
    console.error(error); 
  }
}

function _GameView() {
  let selected = ProxyState.activePokemon;
  document.getElementById('detail-view').innerHTML = selected.GameViewTemplate
}

export class PokemonsController {
  constructor() {
    console.log('pokemon controller is working'); 
    ProxyState.on('pokemon', _drawList)
    ProxyState.on('activePokemon', _drawDetails)
    _drawList()
    this.getListOfPoke()
  }

  async getListOfPoke() {
    try {
      await pokemonsService.getListOfPoke() 
    } catch (error) {
      Pop.toast(error, 'error')
      console.error(error); 
    }
  }

  async getDetails(url) {
    try {
      await pokemonsService.getDetails(url)
    } catch (error) {
      Pop.toast(error, 'error')
      console.error(error); 
    }
  }

  gameView() {
    _GameView()
  }

  detailView() {
    _drawDetails()
  }

}