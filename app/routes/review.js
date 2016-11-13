import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('product', params.product_id);
  },
  actions: {
    delete(review) {
      if(confirm("Are you sure you want to delete this review?")){
        review.destroyRecord();
        this.transitionTo('review');
      }
    }
  }
});
