import axios from 'axios';
import Routes from '../Routes';

const getSpendHistory = async () => {
	try {
		const response = await axios.get(
			`${Routes.apiHost}/${Routes.spendHistory}`,
		);
		return response;
	} catch (error) {
		return error;
	}
};

export default getSpendHistory;
