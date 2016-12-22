var App = {

	container: undefined,

	init: function(container) {
		this.container = container;
		this.initialLoad();
	},

	initialLoad: function() {
		var homepage = new Loader([
			{id: 'homepage', src: 'data/homepage.html'},
			{id: 'about', src: 'data/about.html'}
		], this.loadCompleted.bind(this));

		var test = new Loader([
			{id: 'test', src: 'data/test.html'}
		], this.test.bind(this));
	},

	loadCompleted: function(results) {
		this.container.innerHTML = results['homepage'];
		this.initialTransitionIn();
		console.log('test 1!');
	},

	initialTransitionIn: function() {
		this.container.classList.add('fade-in');
	},

	dispose: function() {
		this.container.innerHTML = '';
	},

	test: function() {
		console.log('test 2!');
	}

};