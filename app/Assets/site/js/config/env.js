(function(global){

        if(!global.ENV)
        {
                global.ENV = {};
        }

        var ENV = global.ENV;


        ENV['ember-auth'] = {
                compat: true,
                authenticationRoute: 'login',
                routeAfterAuthentication: 'index',
                routeIfAlreadyAuthenticated: 'index',
                refreshAfterInvalidation: false,
                serverTokenEndpoint: 'login',
                tokenAttributeName: 'token',
                cookieName: 'app:session',
                localStorageKey: 'app:session',
                baseURL: null
        };

})(this)