$(document).ready(function(){
    $("#mycarousel").carousel( { interval: 2000 } );
    
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        }
        else if ($("#carouselButton").children("span").hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');                    
        }
    });
});
const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
myInput.focus()
});
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));
$('#btn').on('shown.bs.modal', function () {
    $('#goalmodal').trigger('focus')
  });
  $('#bt').on('shown.bs.modal', function () {
    $('#sd').trigger('focus')
  })