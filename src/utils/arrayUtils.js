Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length) | 0)];
}

Array.prototype.randomIndex = function () {
  return [Math.floor((Math.random()*this.length) | 0)];
}

Array.prototype.shuffle = function () {
  let currentIndex = this.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [this[currentIndex], this[randomIndex]] = [
      this[randomIndex], this[currentIndex]];
  }

  return this;
}