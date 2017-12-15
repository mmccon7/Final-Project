var fs = require("fs");


fs.readFile("best_things_ever.txt", "utf8" "lazyboy recliner, massage, medidation, hot shower, cheese fondue, hot coffee with cashew milk, kitten falling asleep " function(error, data) {

	if (error) {
		return console.log(error);
	}

	console.log(data);

	var dataArr = data.split(",");

	console.log(dataArr);


});