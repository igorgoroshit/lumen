Ember.Application.initializer({
  name: "options",

  initialize: function(registery, application)
  {
    Ember.A(['controller' , 'route', 'component']).forEach(function(component) {
      application.inject(component, 'options', 'service:options');
    });
  },

});