function observe(obj) {
  if(!obj || typeof obj !== 'object') {
    return;
  } else {
    Object.keys(obj).forEach(key => {
      defineReactive(obj, key, obj[key]);
    })
  }
}

function defineReactive(obj, key, value) {
  observe(value);
  var dp = new Dep();

  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    set: function setter(newVal) {
      value = newVal;
      dp.notify();
    },
    get: function getter() {
      if(Dep.target) {
        dp.addSub(Dep.target);
      }
      return value;
    }
  })
}

class Dep {
  constructor() {
    this.subs = [];
  }
  addSub(sub) {
    // sub是Watcher的实例
    this.subs.push(sub);
  }
  notify() {
    this.subs.forEach(sub => {
      sub.update();
    })
  }
}
Dep.target = null;

class Watcher{
  constructor(obj, key, cb) {
    Dep.target = this;
    this.obj = obj;
    this.key = key;
    this.value = obj[key];
    this.cb = cb;
    Dep.target = null;
  }
  update () {
    this.value = this.obj[this.key];
    this.cb(this.value);
  }
}

function change(value) {
  document.querySelector('div').innerText = value
}

var data = { name: 'Jaya' }
observe(data);
var name = data.name;   // get value

new Watcher(data, 'name', change);
data.name = 'xxx';      // set value