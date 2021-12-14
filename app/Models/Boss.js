

export class Boss {
  constructor(data) {
    this.name = data.name
    this.img = data.img
    this.damage = Math.floor(Math.random() * 25)
    this.health = 100
  }

  get Template() {
    return /*html*/ `
      <div class="progress">
        <div class="progress-bar" id="bossHealth" role="progressbar" style="width: ${this.health}%;" aria-valuenow="0"
          aria-valuemin="0" aria-valuemax="100">
        </div>
      </div>
      <div class="row mt-2 justify-content-center">
        <div class="col-md-4 text-center">
          <h2>${this.name}</h2>
          <img src="${this.img}" alt="">
          <button class="btn btn-danger btn-lg mt-2" onclick="app.gameController.attackBoss('${this.name}')">ATTACK</button>
        </div>
      </div>
    `
  }
}