/*Объявление переменных*/
var $li = $('.img_list').find('> li'),/*метод find()- позволяет найти все li внутри класса .img_list*/
/*внтури этих li находим все ссылки а */
    $links = $li.find('> a'),
    $lightbox = $('.stages-gallery-lightbox'),
    $overlay = $('.stages-gallery-lightbox-overlay'),
    $month = $('.stages-gallery-lightbox-overlay-month'),
    $prev = $('.prev'),
    $next = $('.next'),
    liIndex,/*переменная, в кторую записываем индексы массива li*/
    targetImg;/*контейнер для отображения изображения */
/*Функция, позволяющия определеить ссылку, на которую нажимает пользоватетль => заменить пути для тега img*/
/*кеширование картинок*/
var imgs = [];
var imgSources = [
    'img/eiffel-1-big.png',
    'img/eiffel-2-big.png',
    'img/eiffel-3-big.png',
]

for (var i = 0; i < imgSources.length; i++) {
    imgs [i] = new Image();
    imgs[i].src = imgSources[i];
}

function replaceImg (src) {
    $lightbox.find('img').attr('src',src);
}

$links.click(function(event) {

    event.preventDefault();
    liIndex = $(this).parent().index();
    targetImg = $(this).attr('href');
    replaceImg(targetImg);
    $lightbox.fadeIn();
    if ((liIndex + 1) == 1) {
        $month.text('май');
    } else if ((liIndex + 1) == 2) {
        $month.text('июль');
    } else {
        $month.text('сентябрь');
    }

});


$overlay.click(function(){
    $lightbox.fadeOut();
});

$next.click(function() {

  if((liIndex + 1) < $li.length ) {
      targetImg = $li.eq(liIndex+1).find('> a').attr('href');
      liIndex ++;
  }  else {
    targetImg = $li.eq(0).find('> a').attr('href');
    liIndex = 0;
  }
  replaceImg(targetImg);
  
    if ((liIndex + 1) == 1) {
        $month.text('май');
    } else if ((liIndex+1) == 2) {
        $month.text('июль');
    } else {
        $month.text('сентябрь');
    }
});

$prev.click(function() {

    if (liIndex > 0) {
        targetImg = $li.eq(liIndex - 1).find('> a').attr('href');
        liIndex --;
        
    }  else {
        targetImg = $li.eq($li.length - 1).find('> a').attr('href');
        liIndex = $li.length - 1;
    }
    replaceImg(targetImg);
    if ((liIndex + 1) == 1) {
        $month.text('май');
    } else if ((liIndex + 1) == 2) {
        $month.text('июль');
    } else {
        $month.text('сентябрь');
    }
});





