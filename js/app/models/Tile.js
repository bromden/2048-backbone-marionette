var Tile = Backbone.Model.extend({

	defaults: {
	            x: null, 
	            y: null,
	            idx:        null,
	            value:      0,
	            mergedFrom: false,
	            isNew:      false,
	            prev:       null
        	},
});