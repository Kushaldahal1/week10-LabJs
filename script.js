// challenge 1
class car{
  constructor(make, speed){
    this.make = make;
    this.speed = speed;
  }

  accelerate(){
    this.speed += 10;
    console.log(`${this.make} going at ${this.speed} km/h`);
  }
  brake(){
    this.speed -= 5;
    console.log(`${this.make} going at ${this.speed} km/h`);
  }
}
//car 1
const Lamborghini = new car('Lamborghini', 20);
Lamborghini.accelerate();
Lamborghini.brake();
// car 2
const Chevrolet = new car('Chevrolet', 80);
Chevrolet.accelerate();
Chevrolet.brake();
Chevrolet.brake();

// challenge 2
console.log("\n");
class carCl{
  constructor(make, speed){
    this.make = make;
    this.speed = speed;
  }

  accelerate(){
    this.speed += 10;
    console.log(`${this.make} going at ${this.speed} km/h`);
  }

  brake(){
    this.speed -= 5;
    console.log(`${this.make} going at ${this.speed} km/h`);
  }

  get speedUS(){
    return this.speed/1.6;
  }

  set speedUS(speed){
    this.speed = speed*1.6;
  }
}
const Ferrari = new carCl('Ferrari', 120);
Ferrari.accelerate();
console.log(`Current speed in mi/h: ${Ferrari.speedUS}`);
Ferrari.speedUS = 82.5;
console.log(`New speed in mi/h: ${Ferrari.speed}`);

// challenge 3
console.log("\n");
class EV extends car{
  constructor(make, speed, charge){
    super(make, speed);
    this.charge = charge;
  }
  chargeBattery(chargeTo){
    this.charge = chargeTo;
  }
  accelerate(){
    this.speed += 20;
    this.charge -= 1;
    console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}`)
  }
}
const Volkswagen = new EV('Volkswagen', 120, 23);
Volkswagen.accelerate();
Volkswagen.brake();
Volkswagen.chargeBattery(90);
Volkswagen.accelerate();
