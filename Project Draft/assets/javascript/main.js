var config = {
	apiKey: "AIzaSyB9GWaGjIZGrKoHZ0qFTe363xTTg5RkwJ8",
	authDomain: "groupap-d8463.firebaseapp.com",
	databaseURL: "https://groupap-d8463.firebaseio.com",
	projectId: "groupap-d8463",
	storageBucket: "groupap-d8463.appspot.com",
	messagingSenderId: "10550599206"
};
firebase.initializeApp(config);

var select;	
var query2URL = "http://api.sqoot.com/v2/deals?api_key=c2aos";


 function callSus(){
     $.ajax({
         url: query2URL,
         method: "GET"
     }).done(function(response) {
         console.log(response);    
     });
 };


// $("li").hover(function() {
//  //   $( this ).append( $( "<span>" + iconName + "</span>" ) );
// //  }, function() {
//     //$( this ).find( "span:last" ).remove();
  
//   var iconName = "";

//   if( this.id == "bloom"){
// 		iconName = "bloomberg"
// 	}else if( this.id == "jazeera"){
//  iconName = "al-jazeera-english"
// 	}else if( this.id == "cnn"){
//  iconName = "cnn"
// 	}else if( this.id == "google"){
//  iconName = "google-news"
// 	}else if( this.id == "hacker"){
//  iconName = "hacker-news"
// 	}else if( this.id == "nation"){
//  iconName = "national-geographic"
// 	}else if( this.id == "bi"){
//  iconName = "business-insider"
// 	}else if( this.id == "lad"){
//  iconName = "the-lad-bible"
// 	}else if( this.id == "nfl"){
//  iconName = "nfl-news"
// 	}else if( this.id == "huff"){
//  iconName = "the-huffington-post"
// 	}else if( this.id == "time"){
//  iconName = "time"
// 	}else if( this.id == "techRadar"){
//  iconName = "techradar"
// 	}else if( this.id == "verge"){
//  iconName = "the-verge"
// 	}else if( this.id == "reddit"){
//  iconName = "reddit-r-all"
// 	}else if( this.id == "sci"){
//  iconName = "new-scientist"
// 	};


$(".navLogo").on("click", function() {

	if( this.id == "bloom"){
		select = "bloomberg"
	}else if( this.id == "jazeera"){
		select = "al-jazeera-english"
	}else if( this.id == "cnn"){
		select = "cnn"
	}else if( this.id == "google"){
		select = "google-news"
	}else if( this.id == "hacker"){
		select = "hacker-news"
	}else if( this.id == "nation"){
		select = "national-geographic"
	}else if( this.id == "bi"){
		select = "business-insider"
	}else if( this.id == "lad"){
		select = "the-lad-bible"
	}else if( this.id == "nfl"){
		select = "nfl-news"
	}else if( this.id == "huff"){
		select = "the-huffington-post"
	}else if( this.id == "time"){
		select = "time"
	}else if( this.id == "techRadar"){
		select = "techradar"
	}else if( this.id == "verge"){
		select = "the-verge"
	}else if( this.id == "reddit"){
		select = "reddit-r-all"
	}else if( this.id == "sci"){
		select = "new-scientist"
	};
});


 
	var query1URL = "https://newsapi.org/v1/articles?source=" + select + "&apiKey=e5da89b57ee347a1a1da306427dc5fa7"
	
	function callNews(){
		$.ajax({
		  url: query1URL,
		  method: "GET"
		}).done(function(response) {
		  console.log(response);

		  	for(var i = 0; i < 5; i++){

		  		var newDiv = $("<div class='foo'>");
				$("#silo").prepend(newDiv);
				newDiv.addClass("info");

				var title = 'Title: ' + JSON.stringify(response.articles[i].title);
				var t = $("<h5>").text(title);
				newDiv.append(t);

				var article = JSON.stringify(response.articles[i].description);
				var a = $("<p>").text(article);
				newDiv.append(a);

			};

		});
	};

	callNews();