var GameView = Backbone.Marionette.View.extend({
	
	el: $(document),

    boardEl: $('.grid-container'),

    gridEl : $('.tile-container'),

	events: {
        'keydown' :  'move',
        'click .restart-button' :  'restart',
        'click .autorun-button' :  'autorun'
    },

    keyMap: {
    	37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    },	

	template: _.template($('#grid-template').html() ),
    tileTpl: _.template($('#game-tile-template').html() ),

    initialize: function() {
        this.collection = new Grid();
        this.render();
        console.log(this.collection);
        this.renderTiles(this.collection.getOccupiedTiles());
    },

    render: function() {
        this.boardEl.html( this.template({size: this.collection.size}) );
        return this;
    },

    move: function(e){
        var direction = this.keyMap[e.which];
        var grid  = this.collection;
        grid.move(direction);
    },

    renderTilePartial: function(tile){
        var tplstr = this.tileTpl({
            idx:   tile.get('cid'),
            value: tile.get('value'),
            x:tile.get('x'), y:tile.get('y')
        });
        var tileEl = $(tplstr);
        return tileEl;
    },

    renderTiles: function(tiles){
        var r =[];
        _(tiles).each(function(tile, i) {

            var tileEl = this.renderTilePartial(tile);
            r.push(tileEl); 
        }, this);
        $('.tile-container').append(r);
    },

    restart: function(){
        alert('restart');
    },

    autorun: function () {
        alert('autorun');
    }



});