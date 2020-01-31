//business logic
function Pizza() {
  this.size = size;
  this.toppings = 0;
}

Pizza.prototype.addTopping = function() {
  this.toppings++;
}

Pizza.prototype.addSize = function() {
  this.size = //input of size selection
}

function Salad() {
  this.size = size;
  this.additions = 0;
}

Salad.prototype.addAddition = function() {
  this.additions++;
}

Pizza.prototype.addSize = function() {
  this.size = //input of size selection
}


//user interface
$(document).ready(function() {
  $("form").submit(function() {

  });
});