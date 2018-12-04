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

// ----------- 1组合继承 -------------
// SubType.prototype = new SuperType();
// ---------------------------


// ----------- 2原型式继承 -------------
// SubType.prototype = Object.create(SuperType.prototype);
// ---------------------------


// ----------- 3寄生组合式继承 -------------
function inherit(Child, Parent) {
  var prototype = Object.create(Parent.prototype);
  prototype.constructor = Child;
  Child.prototype = prototype;
}
inherit(SubType, SuperType);
// ---------------------------

SubType.prototype.getWeight = function() {
  console.log(this.weight);
}
var sub = new SubType('jaya', 22, 53);
sub.getName();
sub.getWeight();