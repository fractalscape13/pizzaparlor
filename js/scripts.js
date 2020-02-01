// //business logic
function Pizza() {
  this.size = 0;
  this.toppings = 0;
  this.deliveryfee = 0;
  this.totalcost = 0;
  this.type = "Pizza";
}

Pizza.prototype.addToppings = function(input) {
  var updateCost = 0;
  for (var i=0; i < input.length; i++){
    updateCost += parseInt(input[i]);
  }
  this.toppings += updateCost;
}

Pizza.prototype.addSize = function(input) {
  this.size += input;
}

Pizza.prototype.addDeliveryfee = function(input) {
  this.deliveryfee += input;
}

Pizza.prototype.totalCost = function() {
  this.totalcost += this.size + this.toppings + this.deliveryfee;
}

function Salad() {
  this.size = 0;
  this.additions = 0;
  this.deliveryfee = 0;
  this.totalcost = 0;
  this.type = "Salad";
}

Salad.prototype.addAdditions = function(input) {
  var updateCost = 0;
  for (var i=0; i < input.length; i++){
    updateCost += parseInt(input[i]);
  }
  this.additions += updateCost;
}

Salad.prototype.addSize = function(input) {
  if (input == 15) {
    this.size += (input + 5);
  } else {
    this.size += input;
  }
}

Salad.prototype.addDeliveryfee = function(input) {
  this.deliveryfee += input;
}

Salad.prototype.totalCost = function() {
  this.totalcost += this.size + this.additions + this.deliveryfee;
}

function getSize(object) {
  if (object.size == 20) {
    return "Large ";
  } else if (object.size == 15) {
    return "Medium ";
  } else {
    return "Small ";
  }
};



//user interface
var currentOrder = "";
var currentSize = 0;
var totalAddons = [];
var deliveryFee = 0;
var size = "";
$(document).ready(function() {
  //click function for start screen (salad or pizza)
  $("#pizzaorder").on("click", "button", function() {
    $("#pizzaorder").hide();
    $("#saladorder").hide();
    $("#pizzaoptions").fadeIn();
  });
  $("#saladorder").on("click", "button", function() {
    $("#pizzaorder").hide();
    $("#saladorder").hide();
    $("#saladoptions").fadeIn();
  });
  

  //click function for pizza detail screen
  $("#pizzaform").submit(function() {
    event.preventDefault();
    currentOrder = new Pizza();
    currentSize = parseInt($("#pizzasize").val());
    currentOrder.addSize(currentSize);
    if (currentOrder.size > 9) {
      $.each($("input[name='topping']:checked"), function(){
        totalAddons.push($(this).val());
      });
      currentOrder.addToppings(totalAddons);
      deliveryFee = parseInt($("input:radio[name=deliverytype]:checked").val());
      currentOrder.addDeliveryfee(deliveryFee);
      currentOrder.totalCost();
      size = getSize(currentOrder);
      $("#totalcost").append(currentOrder.totalcost);
      $("#totalorder").append(size)
      $("#totalorder").append(currentOrder.type)
      $("#pizzaoptions").hide();
      $("#pricescreen").fadeIn();
    } else {
        $(".please").fadeIn();
    }
  });


  //click function for salad detail screen
  $("#saladform").submit(function() {
    event.preventDefault();
    currentOrder = new Salad();
    currentSize = parseInt($("#saladsize").val());
    currentOrder.addSize(currentSize);
    if (currentOrder.size > 8) {
      $.each($("input[name='topping']:checked"), function(){
        totalAddons.push($(this).val());
      });
      currentOrder.addAdditions(totalAddons);
      deliveryFee = parseInt($("input:radio[name=deliverytype2]:checked").val());
      currentOrder.addDeliveryfee(deliveryFee);
      currentOrder.totalCost();
      size = getSize(currentOrder);
      $("#totalcost").append(currentOrder.totalcost);
      $("#totalorder").append(size)
      $("#totalorder").append(currentOrder.type)
      $("#saladoptions").hide();
      $("#pricescreen").fadeIn();
      } else {
        $(".please").fadeIn();
      }   
  });



  //click function for price screen
  $("#pricescreen").on("click", "#buybtn", function() {
    if (currentOrder.deliveryfee > 0) {
      $("#address").fadeIn();
      currentOrder.deliveryfee = 0;
    } else {
      $("#ontheway").fadeIn();
      $("#buybtn").hide();
    }
  });
});