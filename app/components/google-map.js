import Ember from 'ember';

export default Ember.Component.extend({
  map: Ember.inject.service('google-map'),

  actions: {
    showMap() {
      var container = this.$('.map-display')[0];
      this.get('map').findMap(container);
    }
  }
});
