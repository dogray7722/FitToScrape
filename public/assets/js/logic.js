
//Materialize initiators
$(".button-collapse").sideNav();
$(document).ready(function(){
    $('.slider').slider({
        indicators: false
    });
    $('.modal').modal();
});

//On click of the saved articles button send render the saved handlebars template
$("#saved").on("click", function(event){
    event.preventDefault();
    window.location.href = "/saved"
});

//When clicking the save button for an article, make a put request to toggle the saved boolean
$(".savebutton").on("click", function(event){
    event.preventDefault();
    $.ajax({
        url: '/api/articles/' + ($(this).attr("data-id")),
        type: 'PUT'
    });
    window.location.href = "/"
});

//When clicking the delete button, toggle the saved boolean again so
$(".delete").on("click", function(event){
    event.preventDefault();
    console.log($(this).attr("data-id"));
    $.ajax({
        url: '/api/saved/' + ($(this).attr("data-id")),
        type: 'PUT'
    });
    window.location.href = "/saved"
});


//Get request to load notes associated with an article on click of the add note button

$("addNote").on("click", function(event) {
    var thisId = $(this).attr("data-id");

    $.ajax({
        method: "GET",
        url: '/api/saved/' + thisId
    })
    .done(function(data){
      console.log(data);
      if (data.note){
          $("#bodyinput").val(data.note.body);
      }
    })
});


//Get articles that have notes attached for rendering in the Add Note modal
$("#addNote").on("click", function() {
    var thisId = $(this).attr("data-id");
    console.log(thisId);

    $.ajax({
        method: "GET",
        url: "/api/notes/" + thisId
    })
        .done(function(data){
            console.log(data);
            $("#cardTitle").html("Note for article: " + data._id)

        })
});

