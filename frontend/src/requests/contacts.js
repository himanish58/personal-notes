import axios from 'axios';
import Routes from '../Routes';

const getContacts = async () => {
	try {
		const response = await axios.get(`${Routes.apiHost}/${Routes.contacts}`);
		return response;
	} catch (error) {
		return error;
	}
};

export default getContacts;
