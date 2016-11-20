App.Router.map(function(){

    this.route('login', function(){
    });
    
    this.route('users', function(){
      this.route('create');
      this.route('edit', {path: ':id/edit'});
    });

    this.route('forms', function(){
      this.route('create', {path: ':fid/create'});
      this.route('fill', {path: ':id/fill'});
      this.route('link', {path: ':id/link'});
      this.route('edit', {path: ':id/edit'});
      this.route('settings', {path: ':id/settings'});
      this.route('delete', {path: ':id/delete'});
    });

    this.route('fills', function(){
      //this.route('create');
      //this.route('settings', {path: ':id/settings'});
    });    

});