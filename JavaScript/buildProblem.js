export class ProblemBuilder {
    constructor() {
        this.numOne = Math.random() * (12 - 1) + 1;
        this.numTwo = Math.random() * (12 - 1) + 1;
    }
    build() {
        $('.gameBox').html(`<div class="problem">${this.numOne} * ${this.numTwo} = ___</div>`)
    }
}