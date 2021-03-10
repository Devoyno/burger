$(document).ready(function() {
  $(".update-burger").on("click", function() {
    var id = $(this).val();
   console.log(id);
   $.ajax({
     method:"PUT",
     url: "/burgers/"+id
   }).then(function(response) {
     console.log(response);
     location.reload();
   })
  });
  $("#add-burger").on("click", function() {
    var name = $("#burger-name").val();
    console.log(name);
    $.ajax({
      method: "POST",
      url: "/burgers",
      data: name
    }).then(function(response) {
      console.log(response);
      location.reload();
    })
  })
})
