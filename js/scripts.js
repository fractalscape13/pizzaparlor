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
  console.log(updateCost);
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
  this.additions += input;
}

Salad.prototype.addSize = function(input) {
  this.size += input;
}

Salad.prototype.addDeliveryfee = function(input) {
  this.deliveryfee += input;
}

Salad.prototype.totalCost = function() {
  this.totalcost += this.size + this.additions + this.deliveryfee;
}


//user interface
var currentOrder = "";
var currentSize = 0;
var totalAddons = [];
var deliveryFee = 0;
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
      $("#totalcost").append(currentOrder.totalcost);
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
    if (currentOrder.size > 9) {
      deliveryFee = parseInt($("input:radio[name=deliverytype]:checked").val());
      currentOrder.addDeliveryfee(deliveryFee);
      currentOrder.totalCost();
      $("#totalcost").append(currentOrder.totalcost);
      $("#totalorder").append(currentOrder.type)
      $("#saladoptions").hide();
      $("#pricescreen").fadeIn();
      } else {
        $(".please").fadeIn();
      }   
  });



  //click function for price screen
  $("#pricescreen").on("click", "#buybtn", function() {
    alert("Your food is being prepared!")
  });
});