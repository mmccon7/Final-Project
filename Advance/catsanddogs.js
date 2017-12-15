function Animal(raining, noise){
	this.raining = raining;
	this.noise = noise;
	this.makeNoise = function() {
		if (this.raining === true) {
			console.log(this.noise);
		}
	};

var dogs = new Animal(true, "woof");
var cats = new Animal(false, "meow");
var cow = new Animal(true, "moo");

}