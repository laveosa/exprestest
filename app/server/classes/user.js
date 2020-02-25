const EventEmitter = require("events");

class User extends EventEmitter {
  constructor(name, age, position) {
    super();
    this.name = name;
    this.age = age;
    this.position = position;
  }
  sayHi = () => {
    console.log(`${this.name} say hi`);
  };
}

module.exports = User;
