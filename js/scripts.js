$(document).ready(function() {
  var iceCreams = ["Cherry Garcia", "Mint Chip", "Butter Pecan", "Strawberry", "Vanilla", "Pumpkin Spice"];

  iceCreams.forEach(function(iceCream) {
    $("ul#flavorList").append("<li>" + iceCream + "</li>");
    // $("ul#flavorList").show();
  });






});
