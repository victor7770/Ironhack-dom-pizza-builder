// Write your Pizza Builder JavaScript in this file.

// Constants 
var basePrice = 10
var ingredients = {
  pepperonni: { name: 'Pepperonni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
}
// Initial value of the state (the state values can change over time)
var state = {
  pepperonni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
}

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed
function renderEverything() {
  renderPepperonni()
  renderMushrooms()
  renderGreenPeppers()
  renderWhiteSauce()
  renderGlutenFreeCrust()

  renderButtons()
  renderPrice()
}

function renderPepperonni() {
  document.querySelectorAll('.pep').forEach(function ($pep) {
    if (state.pepperonni) {
      $pep.style.visibility = "visible";
    }
    else {
      $pep.style.visibility = "hidden";
    }
  })
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(function ($mushroom) {
    if (state.mushrooms) {
      $mushroom.style.visibility = "visible";
    }
    else {
      $mushroom.style.visibility = "hidden";
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">` 
  document.querySelectorAll('.green-pepper').forEach(function ($pepper) {
    if (state.greenPeppers) {
      $pepper.style.visibility = "visible";
    }
    else {
      $pepper.style.visibility = "hidden";
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  let crust = document.getElementsByClassName('crust')
  if (state.glutenFreeCrust) {
    crust[0].classList.add('crust-gluten-free');
  }
  else {
    crust[0].classList.remove('crust-gluten-free');
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let sauce = document.getElementsByClassName('sauce')
  if (state.whiteSauce) {
    sauce[0].classList.add('sauce-white');
  }
  else {
    sauce[0].classList.remove('sauce-white');
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  let btn = document.getElementsByClassName('btn')
  if(state.pepperonni){
    btn[0].classList.add('active')
  }
  else{
    btn[0].classList.remove('active')
  }

  if(state.mushrooms){
    btn[1].classList.add('active')
  }
  else{
    btn[1].classList.remove('active')
  
  }
  if(state.greenPeppers){
    btn[2].classList.add('active')
  }
  else{
    btn[2].classList.remove('active')
  }
  
  if(state.whiteSauce){
    btn[3].classList.add('active')
  }
  else{
    btn[3].classList.remove('active')
  }
  
  if(state.glutenFreeCrust){
    btn[4].classList.add('active')
  }
  else{
    btn[4].classList.remove('active')
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let panel = document.getElementsByClassName('price');
  let ul = panel[0].getElementsByTagName('ul');
  let list = ul[0].getElementsByTagName('li');
  let strong = panel[0].getElementsByTagName('strong');
  let count = 10;
  if (state.pepperonni){
    list[0].style.visibility = "visible";
    count +=1;
  }
  else{
    list[0].style.visibility = "hidden";
  }

  if (state.mushrooms){
    list[1].style.visibility = "visible";
    count +=1;
  }
  else{
    list[1].style.visibility = "hidden";
  }

  if (state.greenPeppers){
    list[2].style.visibility = "visible";
    count +=1;
  }
  else{
    list[2].style.visibility = "hidden";
  }

  if (state.whiteSauce){
    list[3].style.visibility = "visible";
    count +=3;
  }
  else{
    list[3].style.visibility = "hidden";
  }

  if (state.glutenFreeCrust){
    list[4].style.visibility = "visible";
    count +=5;
  }
  else{
    list[4].style.visibility = "hidden";
  }
  strong[0].innerText =`$${count}`
}


renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function () {
  state.pepperonni = !state.pepperonni
  renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

document.querySelector('.btn.btn-mushrooms').onclick = function () {
  state.mushrooms = !state.mushrooms
  renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

document.querySelector('.btn.btn-green-peppers').onclick = function () {
  state.greenPeppers = !state.greenPeppers
  renderEverything()
}

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').onclick = function () {
  state.whiteSauce = !state.whiteSauce
  renderEverything()
}

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').onclick = function () {
  state.glutenFreeCrust = !state.glutenFreeCrust
  renderEverything()
}