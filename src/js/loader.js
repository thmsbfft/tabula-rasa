function Loader(manifest, onComplete) {

	this.onComplete = onComplete;
	this.itemsToLoad = Object.keys(manifest).length;
	this.results = [];

	this.loadManifest(manifest);

};

Loader.prototype.loadManifest = function(manifest) {

	for (i in manifest) {
		this.fetch(manifest[i]);
	}
	
}

Loader.prototype.fetch = function(item) {
	
	console.log('Loading:', item.src);
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if(xhr.readyState == 4) {
			if(xhr.status == 200) {
				console.log('Loaded:', item.src);
				this.results[item.id] = xhr.responseText;
			}
		}
	}.bind(this);

	xhr.addEventListener('loadend', this.onLoadEnd.bind(this));
	xhr.open('GET', item.src, true);
	xhr.send();

}

Loader.prototype.onLoadEnd = function(e) {

	this.itemsToLoad--;
	if(this.itemsToLoad == 0) {
		console.log('Complete!');
		this.itemsToLoad = null;
		this.onComplete(this.results);
	}
		
}