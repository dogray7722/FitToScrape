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

