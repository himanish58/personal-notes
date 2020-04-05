import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import PageHeader from './PageHeader';
import SpendingBox from './SpendingBox';
import getSpendHistory from '../requests/spendHistory';

const SpendContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const NoResult = styled.h2`
	margin-top: 100px;
	color: #afafaf;
`;

const SpendHistory = () => {
	const [spendings, setSpendings] = useState([]);
	const [filteredSpendings, setFilteredSpendings] = useState([]);
	const spendingSearchRef = useRef();
	useEffect(() => {
		(async () => {
			const response = await getSpendHistory();
			if (response.status === 200) {
				setSpendings(response.data);
				setFilteredSpendings(response.data);
			} else {
				console.error(
					`Error in SpendHistory.useEffect.getSpendHistory: ${response}`,
				);
			}
		})();
	}, []);

	const searchSpendings = () => {
		const {
			current: { value },
		} = spendingSearchRef;
		const modifiedSpendings = spendings.filter(
			({ id, merchant }) =>
				id.toLowerCase().includes(value.trim().toLowerCase()) ||
				merchant.toLowerCase().includes(value.trim().toLowerCase()),
		);
		setFilteredSpendings(modifiedSpendings);
	};

	return (
		<SpendContainer>
			<PageHeader
				title="Spend History"
				placeholder="Search Spendings..."
				onChangeFunction={searchSpendings}
				searchRef={spendingSearchRef}
			/>
			{filteredSpendings.length ? (
				filteredSpendings.map(({ id, merchant, date, amount }) => (
					<SpendingBox
						key={id}
						id={id}
						merchant={merchant}
						date={date}
						amount={amount}
					/>
				))
			) : (
				<NoResult>No Result Found...</NoResult>
			)}
		</SpendContainer>
	);
};

export default SpendHistory;
