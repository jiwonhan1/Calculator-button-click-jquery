var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

$(document).ready(function() {
  $("button#add").click(function(event) {

    var number1 = parseInt($("#num1").val());
    var number2 = parseInt($("#num2").val());
    var result = add(number1, number2);
    $("#output").text(result);
    event.preventDefault();
  });
   $("button#subtract").click(function(event) {

     var number1 = parseInt($("#num1").val());
     var number2 = parseInt($("#num2").val());
     var result = subtract(number1, number2);
     $("#output").text(result);
     event.preventDefault();
   });
   $("button#multiply").click(function(event) {

     var number1 = parseInt($("#num1").val());
     var number2 = parseInt($("#num2").val());
     var result = multiply(number1, number2);
     $("#output").text(result);
     event.preventDefault();
   });
   $("button#divide").click(function(event) {
     var number1 = parseInt($("#num1").val());
     var number2 = parseInt($("#num2").val());
     var result = divide(number1, number2);
     $("#output").text(result);
     event.preventDefault();
   });
});
