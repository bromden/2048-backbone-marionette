var Tile = Backbone.Model.extend({

	defaults: {
        x: null, 
        y: null,
        value:      0,
        mergedFrom: false,
        isNew:      false,
        prev:       null
	},

    isfree: function() {
        return this.get('value') == 0;
    },  

    free: function() {
        this.set({
            value: 0, prev: null,
            isNew: false,
            mergedFrom: false
        });
    },

    getPos: function() {
        return {x:this.get('x'), y:this.get('y')};
    },

    put: function(value) {
        this.set({value: value});
    },

});