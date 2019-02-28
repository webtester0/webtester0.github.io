$(document).ready(function(){

  $('.surface-consultation-btn').click(function(event){
    event.preventDefault();
    $('.surface-consultation').fadeIn();
  });

  $('.surface-close').click(function(event){
    event.preventDefault();
    $('.surface-consultation').fadeOut();
  });
  $('.surface-prices-btn').click(function(event){
    event.preventDefault();
    $('.surface-prices').fadeIn();
  });

  $('.surface-close').click(function(event){
    event.preventDefault();
    $('.surface-prices').fadeOut();
  });

  $('.feedback-slider').slick({
    prevArrow:'<button class="feedback-slider-btn   feedback-slider-prev"><img src="../img/feedback/leftArrow.svg"/></button>',
    nextArrow:'<button class="feedback-slider-btn   feedback-slider-next"><img src="../img/feedback/rightArrow.svg"/></button>',
    responsive: [{
      breakpoint: 768,
      settings: {
        arrows:false
      }
    }]
  });

  $('.features-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          prevArrow:'<button class="prev btn-features"></button>',
          nextArrow:'<button class="next btn-features"></button>'
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow:'<button class="prev btn-features"></button>',
          nextArrow:'<button class="next btn-features"></button>'
        }
      }
    ]
  });
  $('.materials-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          prevArrow:'<button class="prev btn-features"></button>',
          nextArrow:'<button class="next btn-features"></button>'
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow:'<button class="prev btn-features"></button>',
          nextArrow:'<button class="next btn-features"></button>'
        }
      }
    ]
  });
  $('.form').submit(function(event){
    event.preventDefault();
    $.ajax ({
      type: "POST",
      url: "../maller/phpmaller/message.php",
      data: $(this).serialize()
    }).done(function(){
      $(this).find('input').val('');
      alert("Ваша заявка успешно отправлена");
      $('form').trigger("reset");
    });
    return false;
  });
  jQuery(function($){
    $(".phone").mask("+7 (999) 999-99-99");
 });
});
