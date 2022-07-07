const btn = document.getElementById("button");
const clearButton = document.getElementById("button1");
let input = document.getElementById("input");
let ul = document.getElementById("lista");
let storage = [];
/////// Ovaj dio koristi da nakon refresha stranice ostane lista itema
const storedInput = localStorage.getItem("lista");

if (input) {
  ul.innerHTML = storedInput;
}

////// Glavni submit button
btn.addEventListener("click", function () {
  itemCreation();
  savingItems();
});

//// Kreiranje elementa klikom na submit
function itemCreation() {
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
}

////// Spremanje cijelog ULa i pojedinacnog itema u local storage
function savingItems() {
  //// sprema LI elemente u storage
  localStorage.setItem("lista", ul.innerHTML);

  ///// Spremanje pojedinacnog itema sa svojim indexom
  ///// Nedostatak ovog koda kojeg ne mogu otklonit: Nakon reolada stranice se index itema ne nastavlja sa zadnjim nego se vraca na item1, iako je item1 zauzet
  storage.push(input.value);
  for (let i = 0; i < storage.length; i++) {
    localStorage.setItem(`item${i + 1}`, storage[i]);
  }
}

///// Brisanje cachea i elemenata

clearButton.addEventListener("click", function () {
  localStorage.clear();
  while (ul.hasChildNodes()) {
    ul.removeChild(ul.firstChild);
  }
});
