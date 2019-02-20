$(document).on('ready', function() {
  $(".slider").slick({
  dots: false,
  infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: '<i class="material-icons left">&#xe314;</i>',
    prevArrow: '<i class="material-icons right">&#xe315;</i>'
  });

  $("#icon").click(function(){
  $(".sidebar").width('75%');
  $(".sidebar-conteiner").width('100%');
  });

  $(".closebtn").click(function(){
  $(".sidebar").width(0);
  $(".sidebar-conteiner").width(0);
  });

  $(".sidebar-conteiner").click(function(){
  $(".sidebar").width(0);
  $(".sidebar-conteiner").width(0);
  });
});