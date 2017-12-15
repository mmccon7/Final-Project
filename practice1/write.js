var fs = require("fs");


fs.readFile("movies.txt", "utf8", "Inception, Die Hard ,la hein", function(error, data) {

	if (err) {
		return console.log(err);
	}

	console.log(data);


});