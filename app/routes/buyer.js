import Ember from 'ember';

export default Ember.Route.extend({
    model() {
      return this.store.findAll('ask');
    },

  actions: {
    saveAsk(params) {
      var newAsk = this.store.createRecord('ask', params);
      newAsk.save();
      this.transitionTo('buyer');
    }
  }
});
