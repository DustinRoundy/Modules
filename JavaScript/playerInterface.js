export class BuildInterface {
    constructor(imgSrc) {
        this.imgSrc = imgSrc;
        this.correct = 0;
        this.lives = 3;
    }
    build() {
        $('.stageContainer').html(`<div class="gameBox"></div>` +
            `<div class="playerBox">` +
            `<div class="lives">${this.lives}</div>` +
            `<div class="correct">${this.correct}</div>` +
            `<img class="player" src=${this.imgSrc}>` +
            `<input type="text" class="playerAnswer" onchange="checkAnswer(this.value)">` +
            `</div>`);
    }
}
