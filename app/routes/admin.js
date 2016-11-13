import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('product');
  },
  actions: {
    saveProduct(params) {
      var newProduct = this.store.createRecord('product', params);
      newProduct.save();
      this.transitionTo('admin');
    },
    updateProduct(product, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          product.set(key,params[key]);
        }
      });
      product.save();
      this.transitionTo('admin');
    },
    delete(product){
      if(confirm("Are you sure you want to delete this product, and all of it's reviews?")){
        var review_deletions = product.get('reviews').map(function(review){
          return review.destroyRecord();
        });
        Ember.RSVP.all(review_deletions).then(function(){
          return product.destroyRecord();
        });
        this.transitionTo('admin');
      }
    }
  }
});
