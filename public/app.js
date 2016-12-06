var init = function(){
  var container = document.getElementById('main-map');
  var centerCoords = {lat: 60.4203, lng: -1.4032};
  var mainMap = new MapWrapper(container, centerCoords, 8);

  
  var mangasterMarker = mainMap.addMarker(centerCoords, "Mangaster", mangasterContent);

  var mousaCoords = {lat: 59.9953, lng: -1.1820};
  var mousaMarker = mainMap.addMarker(mousaCoords, "Broch of Mousa", mousaContent);

  mainMap.addClickEvent();
  mainMap.addButtonClickEvent();
  
  

};

var mangasterContent = "<b>Mangaster</b><p>Sheep. Lots of sheep.</p>"  + "<div><img width = '280' src='http://c640c.alamy.com/640c/axce90/mangaster-voe-shetland-axce90.jpg'></div>";

var mousaContent = "<div><b>Broch of Mousa</b><p>A near-intact iron age roundhouse, thought to have been built around 300 BC.</p><p>The broch is mentioned in the Norse sagas. One tells of an eloping couple who took refuge in it after being shipwrecked on their way to Iceland; another describes it as being difficult to attack.</p></div>" + "<div><img width = '280' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mousa_broch.jpg/440px-Mousa_broch.jpg'></div>";




window.onload = init;