var essentials = {
	drink: "agua";
	eat: "camaron";
	activity: "bailando";
	place: "Curacao";
	sleep: 5;
}

var nicetohaves = {
	houseThings: ["tv", "tablet", "bed"]
	carThings: ["radio", "GPS"]
};

var nonesentials = {
	personal: "cool hair"
};


// exports

module.exports = {
	essentials: essentials
	nicetohaves: nicetohaves
};
// Using the require keyword lets us access all of the exports
// in our ess.js file
var stuffINeed = require("./run.js");

// This will print everything in exports.
console.log("--------------------------");
console.log("ALL THE STUFF I NEED");
console.log(stuffINeed);
console.log("--------------------------");

// These will print correctly because we imported them
console.log("Essentials");
console.log(stuffINeed.essentials);
console.log("--------------------------");
console.log("Nice to Haves");
console.log(stuffINeed.nicetohaves);

// This won't print anything because it wasn't exported in ess.js
console.log("--------------------------");
console.log("Nonessentials");
console.log(stuffINeed.nonessentials);