import Ember from 'ember';
import layout from '../templates/components/fill-murray';

export default Ember.Component.extend({
  layout: layout,
  height: 100, // Default height and width 100
  width: 100,
  //
  // The following computed property will give us the url for
  // fill-murray. In this case it depends on the properties height and width.
  //
  src: Ember.computed('height', 'width', {
    get() {
      var base = 'http://www.fillmurray.com/';
      return `${base}${this.get('width')}/${this.get('height')}`;
    }
  })
});
