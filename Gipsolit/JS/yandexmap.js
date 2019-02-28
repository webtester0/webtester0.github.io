ymaps.ready(['AnimatedLine']).then(init);

function init(ymaps) {
    // Создаем карту.
    var myMap = new ymaps.Map("map", {
        center: [55.788834, 37.790157],
        zoom: 15
    }, {
        searchControlProvider: 'yandex#search'
    });
    // Создаем ломаные линии.
    var firstAnimatedLine = new ymaps.AnimatedLine([
        [55.787935, 37.783327],
        [55.787959, 37.784330],
        [55.787991, 37.785274],
        [55.788553, 37.785830],
        [55.788590, 37.790127],
        [55.788779, 37.790146]
    ], {}, {
        // Задаем цвет.
        strokeColor: "#00BF00",
        // Задаем ширину линии.
        strokeWidth: 3,
        // Задаем длительность анимации.
        animationTime: 4000
    });
    // Добавляем линии на карту.
    myMap.geoObjects.add(firstAnimatedLine);
    // Создаем метки.
    var firstPoint = new ymaps.Placemark([55.787939, 37.783327], {}, {
        // preset: 'islands#redRapidTransitCircleIcon'
        preset: 'islands#circleIcon',
        iconColor: '#00BF00'
    });
    var secondPoint = new ymaps.Placemark(myMap.getCenter(), {
          hintContent: 'Собственный значок метки',
          balloonContent: 'Гипсолит<br>Штукатурка стен'
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: '../img/logo_map.png',
          // Размеры метки.
          iconImageSize: [40, 40],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-20, -38]
      });
    // Функция анимации пути.
    function playAnimation() {
        // Добавляем первую метку на карту.
        myMap.geoObjects.add(firstPoint);
        myMap.geoObjects.add(secondPoint);
        firstAnimatedLine.animate()
            .then(function() {
                // Добавляем паузу после анимации.
                myMap.geoObjects.remove(firstPoint);
                firstAnimatedLine.reset();
                return ymaps.vow.delay(null, 2500);
            })
            .then(function() {
              myMap.geoObjects.add(firstPoint);
              firstAnimatedLine.reset();
              playAnimation();
          });
    }
    // Запускаем анимацию пути.
    playAnimation();
}