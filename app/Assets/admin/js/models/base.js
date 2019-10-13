Em.BaseModel = Em.Object.extend({

	options: Em.inject.service('options'),
  session: Em.inject.service('session'),

});

Em.BaseModel.prototype.container = App.__container__;