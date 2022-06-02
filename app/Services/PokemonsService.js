import { ProxyState } from "../AppState.js";
import { Pokemon } from "../Models/pokemon.js";

const pokeApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
  timeout: 5000})


class PokemonsService{
  constructor(){

  }

  async getListOfPoke() {
    const res = await pokeApi.get('pokemon?limit=1126');
    console.log('Getting list of ', res.data);
    ProxyState.pokemon = res.data.results.map(p => p)
  }

  async getDetails(url) {
    const res = await axios.get(url);
    console.log('getting main view details', res.data);
    ProxyState.activePokemon = new Pokemon(res.data)
    console.log('active', ProxyState.activePokemon); 
    
  }
}

export const pokemonsService = new PokemonsService() 