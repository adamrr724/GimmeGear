import Ember from 'ember';

export default Ember.Component.extend({

actions: {
  toggleDetail() {
    this.toggleProperty('updateProductForm');
  },
  updateProduct(product) {
      var params = {
        name: this.get('name'),
        price: this.get('price'),
        details: this.get('details'),
        size: this.get('size'),
        type: this.get('type'),
        color: this.get('color'),
        image: this.get('image'),
      };
      this.toggleProperty('updateProductForm');
      this.sendAction('updateProduct', product, params);
    }
  }
});
