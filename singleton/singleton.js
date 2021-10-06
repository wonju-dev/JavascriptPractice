class Singleton {
  constructor() {
    if (this.instance) return Singleton.instance;
    this.name = "heecheolman";
    this.age = 24;
    Singleton.instance = this;
  }
}

var firstSingleton = new Singleton();
console.log(firstSingleton);
var secondSingleton = new Singleton();
console.log(secondSingleton);
var a = new Singleton();
console.log(a);
var b = new Singleton();
console.log(b);

console.log(JSON.stringify(a) === JSON.stringify(b));
console.log(Singleton);
