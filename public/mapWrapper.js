var MapWrapper = function(container, center, zoom){

  this.googleMap = new google.maps.Map(container, 

  {
    center: center,
    zoom: zoom
  });
}
  //google.maps.Map([page element], [object]) is a constructor provided by Google

MapWrapper.prototype = {

  addMarker: function(coords, title, info){
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap,
      title: title
    });

    //BUG: as currently set up, every new marker user creates by clicking on the map also creates an empty info window; haven't managed to get info window to work as separate method, however
    var infoWindow = new google.maps.InfoWindow({
      content: info,
      maxWidth: 300
    });

    google.maps.event.addListener(marker, 'click', function(event){
      infoWindow.open(this.googleMap, marker);
    }.bind(this));
  }, 

  addClickEvent: function(){
    google.maps.event.addListener(this.googleMap, 'click', function(event){
      var position = event.latLng;
      this.addMarker(position);
    }.bind(this));
  },

  //BUG: not working -- nothing happens on button click; should it instead be a Google maps control button, inside the map?
  addButtonClickEventCenter: function(){
    var button = document.getElementById('set-center-button');
    button.onclick = google.maps.event.addListener(this.googleMap, 'click', function(event){
      console.log(this);
      this.setCenter({lat: 62.0083, lng: -6.7853});
      this.panTo(this.center);
    }.bind(this));
  }, 

  addButtonClickEventLocation: function(){
    var button = document.getElementById('location-button');
    google.maps.event.addListener(button, 'click', function(event){

    })
  }

}
