import Ember from 'ember';

export default Ember.Route.extend({

    model() {
      return this.store.findAll('ask');
  },

  actions: {
    removeItem() {
      this.transitionTo('index');
      },

      askRemove(item) {
        if(confirm("Are you sure you want to delete this ask?")){
            return item.destroyRecord();
        };
          this.transitionTo('cart');
      }
  }
});
