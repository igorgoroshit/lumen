var Configuration       = require('ember-simple-auth/configuration')['default'];
var setupSession        = require('ember-simple-auth/initializers/setup-session')['default'];
var setupSessionService = require('ember-simple-auth/initializers/setup-session-service')['default'];
var sessionStore        = require('ember-simple-auth/session-stores/local-storage')['default'];
var deviseAuthenticator = require('ember-simple-auth/authenticators/devise')['default'];
var deviseAuthorizer    = require('ember-simple-auth/authorizers/devise')['default'];

Ember.Application.initializer({
  
  name: 'ember-simple-auth',

  initialize: function(registry, application)
  {
    var config   = ENV['ember-auth'] || {};
    Configuration.load(config);
    application.register('session-admin:application', sessionStore);
    application.register('authenticator:devise', deviseAuthenticator);
    application.register('authorizer:devise', deviseAuthorizer);

    setupSession(registry);
    setupSessionService(registry);
  },

});