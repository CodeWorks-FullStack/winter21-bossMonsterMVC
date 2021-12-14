import { ProxyState } from "../AppState.js"
import { Boss } from "../Models/Boss.js";


class GameService {
  constructor() {
    console.log('hello from the service')
  }

  attackBoss(bossName) {
    let foundBoss = ProxyState.bosses.find(b => b.name == bossName)
    console.log('found boss', foundBoss);
    ProxyState.heroes.forEach(h => {
      if (foundBoss.health > 0) {
        foundBoss.health -= h.damage
      } else if (foundBoss.health <= 0) {
        window.alert(`You have defeated ${foundBoss.name}! Much rejoicing`)
        let foundBossIndex = ProxyState.bosses.findIndex(b => b.name == bossName)
        ProxyState.bosses.splice(foundBossIndex, 1)
      }
    })
    ProxyState.bosses = ProxyState.bosses

  }

  attackPlayers() {
    console.log('interval is working');
    let randomHero = ProxyState.heroes[Math.floor(Math.random() * ProxyState.heroes.length)]
    ProxyState.bosses.forEach(b => {
      if (randomHero.health > 0) {
        randomHero.health -= b.damage
      }
    })
    console.log('heroes after damage', ProxyState.heroes);
    ProxyState.heroes = ProxyState.heroes
  }

  createBoss(newBoss) {
    ProxyState.bosses.unshift(new Boss(newBoss))
    ProxyState.bosses = ProxyState.bosses
    setInterval(this.attackPlayers, 1000)
  }

}

//NOTE we are only exporting one instance of this object/service - Singleton Pattern 
export const gameService = new GameService()