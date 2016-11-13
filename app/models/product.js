import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  price: DS.attr(),
  details: DS.attr(),
  size: DS.attr(),
  type: DS.attr(),
  color: DS.attr(),
  image: DS.attr(),
  reviews: DS.hasMany('review', {async: true})
});
