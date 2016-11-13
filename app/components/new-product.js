import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleDetail() {
      this.toggleProperty('addNewProduct');
    },
    saveProduct(){
      var params = {
        name: this.get('name') ? this.get('name') : " ",
        price: this.get('price') ? this.get('price') : " ",
        details: this.get('details') ? this.get('details') : " ",
        size: this.get('size') ? this.get('size') : " ",
        type: this.get('type') ? this.get('type') : " ",
        color: this.get('color') ? this.get('color') : " ",
        image: this.get('image') ? this.get('image') : " ",
      };
      this.toggleProperty('addNewProduct');
      this.set('name', " ");
      this.set('price', " ");
      this.set('details', " ");
      this.set('size', " ");
      this.set('type', " ");
      this.set('color', " ");
      this.set('image', " ");
      this.sendAction('saveProduct', params);
    }
  }
});
