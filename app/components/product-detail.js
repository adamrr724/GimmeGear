import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  itemAdded: false,
  actions: {
    addToCart(item) {
      this.get('shoppingCart').add(item);
      this.set('itemAdded', true);
    }
  }
});
