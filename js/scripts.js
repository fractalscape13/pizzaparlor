// //business logic
function Pizza() {
  this.size = size;
  this.toppings = 0;
}

Pizza.prototype.addTopping = function() {
  this.toppings++;
}

Pizza.prototype.addSize = function() {
  this.size = size;
}

function Salad() {
  this.size = size;
  this.additions = 0;
}

Salad.prototype.addAddition = function() {
  this.additions++;
}

Pizza.prototype.addSize = function() {
  this.size = size;
}


//user interface
var currentOrder = "";
$(document).ready(function() {
  $("#pizzaorder").on("click", "button", function() {
    $("#pizzaorder").hide();
    $("#saladorder").hide();
    $("#detailscreen").fadeIn();
  });
  $("#saladorder").on("click", "button", function() {
    $("#pizzaorder").hide();
    $("#saladorder").hide();
    $("#saladdetailscreen").fadeIn();
  });
  
  
  
  // $("#pizzaform").submit(function() {
  //   event.preventDefault();
  // });
  // $("#saladform").submit(function() {
  //   event.preventDefault();
  // });
});