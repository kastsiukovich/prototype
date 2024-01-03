'use strict'

let h1 = document.getElementsByTagName('h1')[0];
h1.innerText = 'hello rabbit';
console.log(h1)

let animal = {
   eats: true
}

function Rabbit(name) {
   this.name = name;
   this.__proto__ = animal;

}
Rabbit.prototype.jumps = true;

let rabbit = new Rabbit('Кролик');

function Dog(name) {
   this.name = name;
}

Dog.prototype = rabbit;

function Cat() { };
let cat = new Cat();

let dog = new Dog('Барбос');
animal.eyes = true;

let rabbit2 = new rabbit.constructor('Крольчиха');

console.log(animal.eats)
console.log(rabbit.eats);
console.log(dog.name)
console.log(dog.eyes)
console.log(animal)
console.log(Object.getOwnPropertyNames(Dog.prototype))
console.log(Object.getOwnPropertyNames(Cat.prototype))
console.log(Cat.prototype.constructor === Cat)
console.log(Rabbit.prototype)
console.log(Object.getOwnPropertyNames(Rabbit.prototype))

function Rabbit3() { }
Rabbit3.prototype = {
   eats: true
};

var rabbit3 = new Rabbit3();
Rabbit3.prototype = {};
Rabbit3.prototype.eats = false;
delete rabbit3.eats;
delete Rabbit3.prototype.eats;
console.log(rabbit3.eats);

let btn = document.getElementsByTagName('button')[0];

function show(){
   h1.classList.toggle('hidden');
}

btn.addEventListener('click', show)