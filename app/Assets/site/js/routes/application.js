var Mixin         = require('ember-simple-auth/mixins/application-route-mixin')['default'];
var Configuration = require('ember-simple-auth/configuration')['default'];

App.ApplicationRoute = Em.Route.extend(Mixin, {

  model: function()
  {
    window.ParsleyValidator.setLocale("en");
    var self = this; 

    var Options = this.get('options');

    return Em.$.getJSON('options').then(function(data){
      
      for(var i in data)
      {
        Options.set(i, data[i]);
      }

      return Options;

    });

  },

  _authorize: function(block)
  {
    var self = this;
    
    this.get('session').authorize('authorizer:devise', function(header, data){
      //authorize
      var headers = {};
      headers[header] = data;
      Em.$.ajaxSetup({
        headers: headers
      });

      Ember.$(document).ajaxError(function(evt, jqxhr, settings, thrownError ){
        
        if (jqxhr.status === 401) {
          self.get('session').invalidate();
        } 
        
      });

      block();

    });
  },

  sessionRestored: function()
  {
    this._authorize(function(){});
  },

  sessionAuthenticated: function()
  {
    var self = this;

    this._authorize(function(){
      //transition
      var attemptedTransition = self.get('session.attemptedTransition');
      if (attemptedTransition) {
        attemptedTransition.retry();
        self.set('session.attemptedTransition', null);
      } else {
        self.transitionTo(Configuration.routeAfterAuthentication);
      }

    });

  },

  sessionInvalidated: function() {
    
    var self = this;


    //reset ajax header
    Em.$.ajaxSetup({
      headers: {}
    });

    //reset ajax 401 listner
    //Ember.$(document).off('ajaxError');

    this.transitionTo(Configuration.authenticationRoute).then(function(){
      //reset applicatoin
      // console.log('reset application');
      // App.reset();
      // App.buildRegistry();

      if(Configuration.refreshAfterInvalidation)
        window.location.reload();
    });

  },

  actions: {
    logout: function(){
      this.get('session').invalidate();
    }
  }

});