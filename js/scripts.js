$(document).ready(function() {
  $('#grocery-list').submit(function(event) {
    event.preventDefault();
    $("#grocery-list").hide();
    var groceryItems = ['item1', 'item2', 'item3', 'item4'];

    var newList = groceryItems.map(function(groceryItem) {
      var groceryInput = $("input#" + groceryItem).val();
      return groceryInput.toUpperCase();
    });

    var sorteds = newList.sort();
    console.log(newList);

    sorteds.forEach(function(sorted) {
      $("ul#fav-list").append("<li>" + sorted + "</li>");
    });
  });
});
