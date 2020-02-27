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
  setName = function(name) {
    this.name = name;
  };
  showInfo = function() {
    console.log("name: ", this.name);
    console.log("age: ", this.age);
    console.log("position: ", this.position);
  };
}

module.exports = User;
