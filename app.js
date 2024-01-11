console.log("The DOM");

//log body to console
const body = document.querySelector("body");
console.log(body);

//log h1 to console
const h1 = document.querySelector("h1");
console.log(h1);

//modify element
const h1_1 = document.querySelector("h1");
h1_1.textContent = "Hello World!";

//adding element
function createList() {
  //call function within console
  const body2 = document.querySelector("body");
  const h2 = document.createElement("h2");
  const p = document.createElement("p");
  const ol = document.createElement("ol");
  const li1 = document.createElement("li");
  const li2 = document.createElement("li");
  const li3 = document.createElement("li");
  h2.textContent = "This is a list!";
  li1.textContent = "List1";
  li2.textContent = "List2";
  li3.textContent = "List3";
  body2.appendChild(h2);
  body2.appendChild(p);
  body2.appendChild(ol);
  ol.appendChild(li1);
  ol.appendChild(li2);
  ol.appendChild(li3);
}

//removing elements
const h1_2 = document.querySelector("h1");
h1_2.remove();
