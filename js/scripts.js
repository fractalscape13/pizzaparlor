// //business logic
function Pizza() {
  this.size = 0;
  this.toppings = 0;
}

Pizza.prototype.addTopping = function() {
  this.toppings++;
}

Pizza.prototype.addSize = function(input) {
  this.size += input;
}

function Salad() {
  this.size = 0;
  this.additions = 0;
}

Salad.prototype.addAddition = function() {
  this.additions++;
}

Pizza.prototype.addSize = function(input) {
  this.size += input;
}


//user interface
var currentOrder = "";
var currentSize = 0;
$(document).ready(function() {
  //click function for start screen (salad or pizza)
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
  

  
  //click function for pizza detail screen
  $("#pizzaform").submit(function() {
    event.preventDefault();
    currentOrder = new Pizza();
    currentSize = parseInt($("#pizzasize").val());
    currentOrder.addSize(currentSize);
    // currentOrder.addTopping();
    $("#detailscreen").hide();
    $("#pricescreen").fadeIn();

  });


  //click function for salad detail screen
  $("#saladform").submit(function() {
    event.preventDefault();
    currentOrder = new Salad();

    $("#saladdetailscreen").hide();
    $("#pricescreen").fadeIn();
  });
});