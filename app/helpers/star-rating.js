import Ember from 'ember';

export function starRating(params) {
  var reviewRating = params[0].get('rating');

  if(reviewRating == "5 stars") {
    return Ember.String.htmlSafe('<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>');
  } else if(reviewRating == "4 stars") {
    return Ember.String.htmlSafe('<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>');
  } else if(reviewRating == "3 stars") {
    return Ember.String.htmlSafe('<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>');
  } else if(reviewRating == "2 stars") {
    return Ember.String.htmlSafe('<i class="fa fa-star"></i><i class="fa fa-star"></i>');
  } else {
    return Ember.String.htmlSafe('<i class="fa fa-star"></i>');
  }
}

export default Ember.Helper.helper(starRating);
