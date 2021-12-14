
export class Hero {
  constructor(data) {
    this.name = data.name
    this.img = data.img
    // NOTE below is setting a default value
    this.health = 100
    this.damage = .5
  }

  // NOTE ternary is writting below - remember that the statement before the ? is always a conditional, then what we want to do if that statement is true, then the thing we want to do if false

  // ? conditional statement evaluation
  // : else statement
  get Template() {
    return  /*html*/ `
    <div class="col-md-6 ${this.health <= 0 ? 'bg-danger' : ''}">
      <div class="row text-center">
        <div class="col-12">
          <div class="progress mt-1">
            <div class="progress-bar" role="progressbar" style="width: ${this.health}%;" aria-valuenow="0"
              aria-valuemin="0" aria-valuemax="100">
            </div>
          </div>
          <div class="col-12">
            <h6>${this.name}</h6>
            <img src="${this.img}" alt="">
          </div>
          <div class="col-12 mt-2">
            <div class="d-grid gap-2">
              <button class="btn btn-success" ${this.health <= 0 ? 'disabled' : ''} type="button">Heal</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    `
  }
}