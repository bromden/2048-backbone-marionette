var App = Marionette.Application.extend({
	
	initialize: function(options) {
		console.log('2048');
		this.gridView = new GameView();
		
	}
});

var app = new App();

app.start();

