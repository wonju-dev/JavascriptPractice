class Car {
  public name: string = "car";
  color: string;
  constructor(color: string) {
    this.color = color;
  }
  start() {
    console.log("start");
  }
}

class BMW extends Car {
  constructor(color: string) {
    super(color);
  }
  showName() {
    console.log(this.name);
  }
}

const myBmw: BMW = new BMW("mini BMW");
myBmw.showName();
