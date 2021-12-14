import { ProxyState } from "../AppState.js"
import { gameService } from "../Services/GameService.js"

function drawBosses() {
  let template = ''
  let bosses = ProxyState.bosses
  bosses.forEach(b => template += b.Template)
  document.getElementById('bosses').innerHTML = template
}

function drawHeroes() {
  let template = ''
  let heroes = ProxyState.heroes
  console.log('proxy state class objects', ProxyState.heroes);
  heroes.forEach(h => template += h.Template)
  document.getElementById('heroes').innerHTML = template
}


export class GameController {
  constructor() {
    console.log('hello from the game controller')
    // NOTE when using proxystate.on, the first argument is always in a string, and represents data in the proxystate. The second argument is what we want to have happen when the first argument changes
    // NOTE this is the observer pattern!!! Make sure not to invoke these functions within the proxystate.on
    ProxyState.on('bosses', drawBosses)
    ProxyState.on('heroes', drawHeroes)
    drawBosses()
    drawHeroes()
  }

  attackBoss(bossName) {
    console.log('boss name', bossName)
    gameService.attackBoss(bossName)
  }

  attackPlayers() {
    gameService.attackPlayers()
  }

  createBoss() {
    event.preventDefault()
    let form = event.target
    let newBoss = {
      name: form.name.value,
      img: form.img.value
    }
    console.log('created Boss Object', newBoss)
    gameService.createBoss(newBoss)
    form.reset()
  }

}