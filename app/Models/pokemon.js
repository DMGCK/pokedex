
export class Pokemon {
  constructor(obj) {
    this.name= obj.name;
    this.types = [obj.types[0], obj.types[1]]
    this.img = JSON.stringify(obj.sprites)
    this.height= obj.height
    this.weight= obj.weight
    this.id = obj.id
    this.abilities = obj.abilities
    this.user = 'Cameron'
  }


  get DetailsTemplate() {
    console.log('details template accessed'); 
    
    return `
    <div class="bg-dark text-light m-2 px-4 p-2">
           <div class="row text-center">
             <div class="col-12">
               <h1 class="selectable rounded mb-1" onclick="app.pokemonsController.gameView()">${this.name}</h1>
              </div>
              <img class="p-2"src="${JSON.parse(this.img).front_default}" alt="">
              <div class="col-12">
                ${this.height} ft. || ${this.weight} lbs.
              </div>
              <div class="col-12">
                ${this.types[0].type.name} ${this.types?.[1] ? this.types[1].type.name : ''}
              </div>
            </div>
            <div onclick="app.sandboxesController.addToTeam('${this.id}')" class="btn btn-outline-light">Add To Team</div>
         </div>
    `
  }

  get GameViewTemplate() {
    console.log('game view template accessed'); 
    
    let templateA = ''
    return `
    <div class="bg-dark text-light m-2 px-4 p-2">
           <div class="row text-center">
             <div class="col-12">
               <h1 class="selectable rounded mb-1" onclick="app.pokemonsController.detailView()">${this.name}</h1>
              </div>
              <img class="p-2"src="${JSON.parse(this.img).back_default}" alt="">
              <div class="col-12">
                ${this.height} ft. || ${this.weight} lbs.
              </div>
              <div class="col-12">
              ${this.types[0].type.name} ${this.types?.[1] ? this.types[1].type.name : ''}
              </div>
            </div>
         </div>
    `
  }

  static listTemplate(poke) {
    return `<h6 onclick="app.pokemonsController.getDetails('${poke.url}')" class="selectable m-0 p-1">${poke.name}</h6>`
  }
}