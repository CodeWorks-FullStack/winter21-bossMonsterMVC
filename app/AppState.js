import { Boss } from "./Models/Boss.js"
import { Hero } from "./Models/Hero.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []



  bosses = []

  heroes = [new Hero({ name: 'Harrington', img: 'https://miro.medium.com/max/900/0*MKa98bYfic-q7waG.', hairColor: 'british' }), new Hero({ name: 'Markington', img: 'https://codeworks.blob.core.windows.net/media/mark.ohnsman__QGdtYWlsLmNvbQ==/profile-picture.jpeg?v=761', hairColor: 'less british' })]
}


export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
