function SuperType(name, age) {
  this.name = name;
  this.age = age;
}
SuperType.prototype.getName = function(){
  alert(this.name);
}

function  SubType(name, age, weight) {
  SuperType.call(this,name, age);
  this.weight = weight;
}

// ----------- 1 -------------
// SubType.prototype = new SuperType();
// ---------------------------


// ----------- 2 -------------
SubType.prototype = Object.create(SuperType.prototype);
SubType.prototype.getWeight = function() {
  console.log(this.weight);
}
// function inherit(Child, Parent) {
//   var prototype = Object.create(Parent.prototype);
//   console.log(111, prototype);
//   prototype.constructor = Child;
//   Child.prototype = prototype;
// }

// inherit(SubType, SuperType);
// ---------------------------

var sub = new SubType('jaya', 22, 55);
sub.getName();
sub.getWeight();