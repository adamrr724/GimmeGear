import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveAsk(){
      var params = {
        name: this.get('name') ? this.get('name') : " ",
        price: this.get('price') ? this.get('price') : " ",
        condition: this.get('condition') ? this.get('condition') : " ",
        type: this.get('type') ? this.get('type') : " ",
        image: this.get('image') ? this.get('image') : " ",
      };
      this.set('name', " ");
      this.set('price', " ");
      this.set('condition', " ");
      this.set('type', " ");
      this.set('image', " ");

      console.log(params);
      this.sendAction('saveAsk', params);
    }
  }
});
