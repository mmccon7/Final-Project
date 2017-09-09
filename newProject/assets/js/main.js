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
var query1URL = "https://newsapi.org/v1/articles?source=hacker-news&sortBy=latest&apiKey=e5da89b57ee347a1a1da306427dc5fa7"
var query2URL = "http://api.sqoot.com/v2/deals?api_key=c2aos";

function callNews(){
		$.ajax({
		  url: query1URL,
		  method: "GET"
		}).done(function(response) {
		  console.log(response);
		  //console.log(response.Runtime);
		});
};
  
function callSus(){
    $.ajax({
        url: query2URL,
        method: "GET"
    }).done(function(response) {
        console.log(response);    
    });
};



callNews();


$(".navLogo").on("click", function() {
	if(this.id == bi){
		console.log("working");
	}
});




//  newsapi  KEY    =   e5da89b57ee347a1a1da306427dc5fa7