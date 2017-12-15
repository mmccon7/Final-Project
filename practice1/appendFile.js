var fs = require("fs");

var textFile = process.argv[2];

fs.appendFile(textFile,"hello kitty", function(error) {

	if (error) {
		return console.log(error);
	}

	else {
		console.log("file added")
	}

	//console.log(data);

	//var output = data.split(",");

	//for (var i = 0; i < output.length; i++) {
	//	console.log(output[i]);

	//}

	


});