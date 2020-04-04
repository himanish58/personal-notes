const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 5000;

server.use(jsonServer.bodyParser);
server.use(middlewares);

server.get('/contacts', (request, response) => {
	if (request.method === 'GET') {
		const contacts = require('./contacts');
		response.status(200).jsonp(contacts());
	}
});

server.get('/spend-history', (request, response) => {
	if (request.method === 'GET') {
		const spendings = require('./spendHistory');
		response.status(200).jsonp(spendings());
	}
});

server.listen(port, () => {
	console.log('JSON Server is running');
});
