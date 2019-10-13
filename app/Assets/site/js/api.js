(function(global){
	var resources = [];

	_cacheUrls = {};

	var Api = Em.Object.extend({});

	var ApiResource = Em.Object.extend({
		model: null,
		url: '',

		__getBaseUrlFor: function(model)
		{
			var name = model.toString();
			var url = null;

			if(_cacheUrls[name])
			{
				url =  _cacheUrls[name];
				return url;
			}

			url 	= name.replace('App.', '').replace('Model', '').toLowerCase();
			//url 	= pluralize(url);

			_cacheUrls[name] = url;
			return url;
		},

		create: function()
		{

			var url = this.get('url');
			var modelName  = this.get('modelName');
			var model = App[modelName];
			this.__getBaseUrlFor(model);
			
			var item = model.create(arguments);

			return item;
		},

		load: function(id){
			var url = this.get('url');
			var modelName  = this.get('modelName');
			var model = App[modelName];

		  return Em.$.getJSON(url + '/' + id).then(function(data){
	    	var item = model.create(data);
	    	return item;
	    });
	  },

		find: function(params)
		{
			var url = this.get('url');
			var modelName  = this.get('modelName');
			var model = App[modelName];
			var query = [];
			var perPage = params.perPage ? params.perPage : 0;
			for(var i in params)
			{
				if(params[i]!=undefined&&params[i]!=null)
				  query.push(i+'='+params[i]);
			}

		  return Em.$.getJSON(url + '?' + query.join('&')).then(function(data){
		    var items = data.data || [];
		    var _items = [];
		    var meta = data.meta;
		    for(var i = 0; i < items.length; i++)
		    {
		    	//move login to server
		    	if(meta){
		    		items[i].index = (parseInt(meta.page) * perPage) - perPage + i + 1;
		    	}
			var item = model.create(items[i]);
			item.container = App.__container__;
			_items.push(item);
		    }
		    data.data = _items;
		    return data;
		  });
		},

		save: function(object)
		{
			var model = null;
			//handel route
			if(object instanceof Em.Route)
			{
	      var controller  = this.get('controller');
	      model     = controller.get('model');
			}
			else if(object instanceof Em.Object)
			{
				model = object;
			}
			else{
				model = object;
			}

			var url = this.get('url');
			var type = Em.get(object, 'id') ? 'PUT' : 'POST';

			if(type == 'PUT')
			{
				url = url + '/' + model.get('id');
			}

			return Em.$.ajax({
				type: type,
				url: url,
				data: JSON.stringify(model)
			});
		}

	});

	Api.add = function(url, name, modelName){

		modelName = modelName + 'Model';

		var resource = ApiResource.create({
			url: url,
			modelName: modelName
		});

		this[name] = resource;

	};

	global.Api = Api;

})(window);