var setupSessionRestoration = require('ember-simple-auth/instance-initializers/setup-session-restoration')['default'];

Ember.Application.instanceInitializer({

	name:       'ember-simple-auth',
	
  initialize: function(instance) {
    setupSessionRestoration(instance);
  }

});
