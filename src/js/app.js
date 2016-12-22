var App = {

	container: undefined,
	contentLoader: undefined,

	init: function(container) {

		this.container = container;
		this.initialLoad();

	},

	initialLoad: function() {

		this.contentLoader = new Loader([
			{id: 'homepage', src: 'data/homepage.html'}
		], this.loadCompleted.bind(this));

	},

	loadCompleted: function(results) {

		this.container.innerHTML = results['homepage'];
		this.contentLoader.dispose();
		this.initialTransitionIn();

	},

	initialTransitionIn: function() {

		this.container.classList.add('fade-in');

	}

};