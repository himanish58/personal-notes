const casual = require('casual');

module.exports = () => {
	casual.define('contact', function() {
		return {
			id: casual.uuid,
			name: casual.full_name,
			address: `${casual.street}, ${casual.city}, ${casual.country}`,
			phone: casual.phone,
			email: casual.email.toLowerCase(),
			company: casual.company_name
		};
	});
	const contacts = [];

	for (let i = 0; i < 100; i++) {
		contacts.push(casual.contact);
	}
	return contacts;
};
