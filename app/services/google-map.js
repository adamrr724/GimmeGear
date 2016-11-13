import Ember from 'ember';

export default Ember.Service.extend({
  googleMaps: window.google.maps,
  findMap(container) {
    var map = new this.googleMaps.Map(container, {
      zoom: 15,
      center: {lat: 45.5185583, lng: -122.6794225},
    });
    var marker = new this.googleMaps.Marker({
      position: {lat: 45.5185583, lng: -122.6794225},
      map: map,
    });
  }
});
