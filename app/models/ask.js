import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  price: DS.attr(),
  condition: DS.attr(),
  type: DS.attr(),
  image: DS.attr()
});
