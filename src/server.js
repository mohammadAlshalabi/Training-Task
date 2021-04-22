const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/assets'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', serveHomepage);
app.get('/', serveHomepage);

async function serveHomepage(req, res) {
	res.render('homepage')
};
sbhdb


const server = app.listen(8085, () => {
	console.log('Listening at http://%s:%s', server.address().address, server.address().port);
});
