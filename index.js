// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push(name);
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

function appendCat(name) {
  var arr = [...cats, name];
  return arr;
}

function prependCat(name) {
  var arr = [name, ...cats];
  return arr;
}

function removeLastCat() {
  var arr = cats.slice(0, cats.length - 1);
  return arr;
}

function removeFirstCat() {
  var arr = cats.slice(1);
  return arr;
}
