let center = [55.881985, 37.547665];

function init() {
	let map = new ymaps.Map('map', {
		center: center,
		zoom: 16
	});

    let placemark = new ymaps.Placemark(center, {
		balloonContentHeader: 'Мир ковролина',
		balloonContentBody: 'Дмитровское шоссе',
		balloonContentFooter: 'дом 100 стр 2, 1-й этаж',
		hintContent: '<span class="overlay-text-map">Дмитровское шоссе дом 100 <br>стр 2, 1-й этаж</span>',
	}, {
		iconLayout: 'default#image',
		iconImageHref: 'icons/ic-point-map.svg',
		iconImageSize: [53, 76],
		iconImageOffset: [-70, -65]
	});

  map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  map.controls.remove('rulerControl'); // удаляем контрол правил
  map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
  
  map.geoObjects.add(placemark);
}

ymaps.ready(init);