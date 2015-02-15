var Grid = Backbone.Collection.extend({
	
	size: 4,

	model: function(){
		return new Tile();
	},

	initialize: function(){

		var size = this.size * this.size;

		for (var i=0; i<size; i++) {
            this.add({ idx: i});
        }

        this.randomTile();
        this.randomTile();
	},

	getFreeTiles: function() {
        return this.filter(function(tile) {
            return tile.isfree();
        });
    },

    getOccupiedTiles: function() {
        return this.filter(function(tile) {
            return !tile.isfree();
        });
    },

    randomTile: function() {
        var tiles = this.getFreeTiles();
        var size = this.size;
        if (tiles.length != 0) {
            var value = Math.random() < 0.9 ? 2 : 4;
            var free = tiles[Math.floor(Math.random() * tiles.length)];
            free.put(value);
            free.set({isNew: true, x: Math.floor(Math.random() * size), y: Math.floor(Math.random() * size)});
        }
    },

    move: function(direction){


    }
})