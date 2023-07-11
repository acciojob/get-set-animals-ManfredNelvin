class Animal {
  constructor(species) {
    this._species = species;
  }
  
  get species() {
    return this._species;
  }
  
  makeSound() {
    // Default implementation
  }
}

class Cat extends Animal {
  purr() {
    console.log("purr");
  }
  
  makeSound() {
    this.purr();
  }
}

class Dog extends Animal {
  bark() {
    console.log("woof");
  }
  
  makeSound() {
    this.bark();
  }
}
