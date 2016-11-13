import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveReview() {
      var params = {
        username: this.get('username') ? this.get('username') : " ",
        rating: this.get('rating') ? this.get('rating') : " ",
        content: this.get('content') ? this.get('content') : " ",
        product: this.get('product'),
      };
      this.sendAction('saveReview', params);
    }
  }
});
