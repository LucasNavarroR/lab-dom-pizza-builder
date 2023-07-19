// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach((oneMush) => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((onePep) => {
    if (state.greenPeppers) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach((sauce) => {
    if (state.whiteSauce) {
      sauce.style.visibility = 'visible';
    } else {
      sauce.style.visibility = 'hidden';
    }
  });
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach((crust) => {
    if (state.glutenFreeCrust) {
      crust.style.visibility = 'visible';
    } else {
      crust.style.visibility = 'hidden';
    }
  });
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  let peperNode = document.querySelector('.btn.btn-pepperoni');
  peperNode.classList.toggle('active');
  let mushNode = document.querySelector('.btn.btn-mushrooms');
  mushNode.classList.toggle('active');
  let greenNode = document.querySelector('.btn.btn-green-peppers');
  greenNode.classList.toggle('active');
  let sauceNode = document.querySelector('.btn.btn-sauce');
  sauceNode.classList.toggle('active');
  let crustNode = document.querySelector('.btn.btn-crust');
  crustNode.classList.toggle('active');
}

function renderPrice() {
  //Iteration 4: change the HTML of `<aside class="panel price">`
let realUl = document.querySelector('.price ul');
  let ulNode = document.querySelectorAll('.price li');

  

  

  ulNode.forEach((elem) => {
    if (state.pepperoni === false && elem.innerText === '$1 pepperoni') {
      elem.remove();
    } else   if (state.pepperoni === true && !realUl.innerText.includes('$1 pepperoni')) {
      let liNode1 = document.createElement('li');
      liNode1.innerText = '$1 pepperoni';
      
      return realUl.append(liNode1);
    }
  

    if (state.mushrooms === false && elem.innerText === '$1 mushrooms') {
      elem.remove();
    } else   if (state.mushrooms === true && !realUl.innerText.includes('$1 mushrooms') ) {
      let liNode1 = document.createElement('li');
      liNode1.innerText = '$1 mushrooms';
      
      return realUl.append(liNode1);
    }
    if (state.greenPeppers === false && elem.innerText === '$1 green peppers') {
      elem.remove();
    } else   if (state.greenPeppers === true && !realUl.innerText.includes('$1 green peppers') ) {
      let liNode1 = document.createElement('li');
      liNode1.innerText = '$1 green peppers';
      return realUl.append(liNode1);
    }

    if (state.whiteSauce === false && elem.innerText === '$3 white sauce') {
      elem.remove();
    } else   if (state.whiteSauce === true && !realUl.innerText.includes('$3 white sauce') ) {
      let liNode1 = document.createElement('li');
      liNode1.innerText = '$3 white sauce';
      return realUl.append(liNode1);
    }
    if (
      state.glutenFreeCrust === false &&
      elem.innerText === '$5 gluten-free crust'
    ) {
      elem.remove();
    } else   if (state.glutenFreeCrust === true && !realUl.innerText.includes('$5 gluten-free crust') ) {
      let liNode1 = document.createElement('li');
      liNode1.innerText = '$5 gluten-free crust';
      
      return realUl.append(liNode1);
    }
  });


}




renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document
  .querySelector('.btn.btn-pepperoni')
  .addEventListener('click', function () {
    state.pepperoni = !state.pepperoni;
    renderEverything();
  });

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

document
  .querySelector('.btn.btn-mushrooms')
  .addEventListener('click', function () {
    state.mushrooms = !state.mushrooms;
    renderEverything();
  });

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document
  .querySelector('.btn.btn-green-peppers')
  .addEventListener('click', function () {
    state.greenPeppers = !state.greenPeppers;
    renderEverything();
  });

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
