import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr(),
  rating: DS.attr(),
  content: DS.attr(),
  product: DS.belongsTo('product', {async: true})
});
