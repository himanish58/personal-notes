const casual = require('casual');

module.exports = () => {
	casual.define('spendings', function() {
		return {
			id: casual.uuid,
			merchant: casual.company_name,
			amount: casual.integer((from = 1000), (to = 100000)),
			date: casual.date((format = 'DD-MM-YYYY'))
		};
	});
	const spendings = [];

	for (let i = 0; i < 100; i++) {
		spendings.push(casual.spendings);
	}
	return spendings;
};
