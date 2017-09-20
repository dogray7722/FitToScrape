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


$(".delete").on("click", function(event){
    event.preventDefault();
    console.log($(this).attr("data-id"));
    $.ajax({
        url: '/api/saved/' + ($(this).attr("data-id")),
        type: 'PUT'
    })
    window.location.href = "/saved"
});

