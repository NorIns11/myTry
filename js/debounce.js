var debounce = (func, wait = 50) => {
  let timer = 0;

  return function(...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  }
}

var throttle = (func, wait = 50) => {
  let last = 0;

  return function(...args) {
    let current = new Date();
    if (current - last >= wait) {
      func.apply(this, args);
      last = current;
    }
  }
}
