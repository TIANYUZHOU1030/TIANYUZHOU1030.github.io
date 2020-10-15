$(document).ready(function () {
  console.log("hello world");

  $(".btn-box").click(function () {
    $(".box").addClass("active");
  });

  $(".btn-slide1").click(function () {
    $(".slide1").toggleClass("active");
  });

$('.btn-alert1').click(function(){
      $('.alert1').toggleClass('active'); 
    });


 $(".btn-str").click(function () {
    $(".item").addClass("hide");
    $(".item.str").removeClass("hide");
    $('.banner').removeClass('hide1');
    $('.slide2').addClass('hide2');
  });


$('.btn-head').click(function(){
	$('.item').addClass('hide');
	$('.item.head').removeClass('hide');
  $('.banner').removeClass('hide1');
  $('.slide2').addClass('hide2');
});

$('.btn-pai').click(function(){
  $('.item').addClass('hide');
  $('.item.pai').removeClass('hide');
  $('.banner').removeClass('hide1');
  $('.slide2').addClass('hide2');
});

$('.btn-dec').click(function(){
  $('.item').addClass('hide');
  $('.item.dec').removeClass('hide');
  $('.banner').removeClass('hide1');
  $('.slide2').addClass('hide2');
});

$('.btn-patt').click(function(){
  $('.item').addClass('hide');
  $('.item.patt').removeClass('hide');
  $('.banner').removeClass('hide1');
  $('.slide2').addClass('hide2');
});

$('.btn-home').click(function(){
	$('.item').addClass('hide');
  $('.banner').addClass('hide1');
  $('.item.chinese').removeClass('hide');
  $('.slide2').removeClass('hide2');
});

});



