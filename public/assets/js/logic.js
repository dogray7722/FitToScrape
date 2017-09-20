$(".button-collapse").sideNav();
$(document).ready(function(){
    $('.slider').slider({
        indicators: false
    });
    $('.modal').modal();

});

$("#saved").on("click", function(event){
    event.preventDefault();
    window.location.href = "/saved"
});


$(".savebutton").on("click", function(event){
    event.preventDefault();
    $.ajax({
        url: '/api/articles/' + ($(this).attr("data-id")),
        type: 'PUT'
    });
    window.location.href = "/"
});


$(".delete").on("click", function(event){
    event.preventDefault();
    console.log($(this).attr("data-id"));
    $.ajax({
        url: '/api/saved/' + ($(this).attr("data-id")),
        type: 'PUT'
    });
    window.location.href = "/saved"
});


