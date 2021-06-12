//search bar
$(document).ready(function(){
  $("#tableSearch").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

$(document).ready(function(){
  $("#tableSearch").on("keyup", function() {
    $("table").each(function(i) {
      if ($(this).find(':visible').length == 0) {
        $(this).toggle();
       }
      if ($(this).find(':visible').length == 7) {
        $(this).toggle();
      }
      if ($(this).find(':visible').length == 5) {
        $(this).toggle();
      }
      if ($(this).find(':visible').length == 6) {
        $(this).toggle();
      }
      console.log($(this).find(':visible').length);
      }
    )
  });
});

