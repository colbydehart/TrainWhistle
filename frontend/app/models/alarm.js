import DS from 'ember-data';

export default DS.Model.extend({
  start_location: DS.belongsTo('location', {inverse: null}),
  start_time: DS.attr('time'),
  end_time: DS.attr('time'),
  last_notified: DS.attr('date'),
  name: DS.attr('string'),
  direction: DS.attr('string'),
  line: DS.attr('string'),
  humanStartTime: Ember.computed('start_time', function() {
    return moment(this.get('start_time'), 'H:m').format('h:mma');
  }),
  humanEndTime: Ember.computed('end_time', function() {
    return moment(this.get('end_time'), 'H:m').format('h:mma');
  })
});
