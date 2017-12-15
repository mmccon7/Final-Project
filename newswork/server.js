var bodyParser = require('body-parser');
var express = require('express');
var expressHandlebars = require('express-handlebars');
var methodOverride = require('method-override');
var mongoose = require('mongoose');
mongoose.Promise = Promise;

var app = express();
var port = process.env.PORT || 3000;

// set up handlebars engine
app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// Serve static content for the app from the 'public' directory in the
// application directory.
app.use(express.static(__dirname + '/public'));

// Override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

app.use(bodyParser.json());
// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}));
  // enter mlab here.
mongoose.connect(
	"mongodb://heroku_pkpw9247:381u9dv7e4ou4q6h43i2h033qh@ds161483.mlab.com:61483/heroku_pkpw9247"
);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connected');
    app.listen(port, function() {
        console.log('listening on ' + port);
    });
});

// get them routes
require('./controllers/news_controller.js')(app);