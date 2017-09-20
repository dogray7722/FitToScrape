
//Materialize initiators
$(".button-collapse").sideNav();
$(document).ready(function(){
    $('.slider').slider({
        indicators: false
    });
    $('.modal').modal();
});

//On click of the saved articles button send render the saved handlebars templated
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


