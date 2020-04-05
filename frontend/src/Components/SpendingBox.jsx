import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	width: 80%;
	background: #ffffff;
	margin: 16px;
	padding: 16px;
`;

const Button = styled.button`
	margin-left: 16px;
	color: #0066cc;
	cursor: pointer;
	border: 0;
	font-size: inherit;

	&:disabled {
		color: #d3d3d3;
		cursor: not-allowed;
	}
`;

const AmountInput = styled.input`
	border: 0;
	border-bottom: 1px solid #1ba94c;
	padding: 10px;
	margin: 16px 0;
	font-size: 16px;
	background: #ffffff;

	&::placeholder {
		color: #1ba94c;
	}

	&:disabled {
		padding: 0;
		margin: 0;
		border: 0;
		font-size: inherit;
		width: 80px;
		color: #000000;
	}
`;

const SpendingBox = ({ id, merchant, date, amount }) => {
	const amountRef = useRef();
	const [spendingDetails, setSpendingDetails] = useState({
		id,
		merchant,
		date,
		amount,
	});
	const [amountTemp, setAmountTemp] = useState(spendingDetails.amount);
	const [editMode, setEditMode] = useState(false);
	const amountChangeHandler = () => {
		const amountValue = amountRef.current.value;
		setAmountTemp(parseInt(amountValue, 10));
	};
	const editClickHandler = () => setEditMode(true);
	const cancelClickHandler = () => {
		setAmountTemp(spendingDetails.amount);
		setEditMode(false);
	};
	const saveClickHandler = () => {
		setSpendingDetails({ id, merchant, date, amount: amountTemp });
		setEditMode(false);
	};

	return (
		<Container>
			<h1>{spendingDetails.merchant}</h1>
			<h4>Transaction ID : {spendingDetails.id}</h4>
			<h4>
				Amount(USD) :{' '}
				<AmountInput
					type="number"
					disabled={!editMode}
					value={editMode ? amountTemp : spendingDetails.amount}
					onChange={amountChangeHandler}
					ref={amountRef}
				/>
				{!editMode ? (
					<Button onClick={editClickHandler}>Edit</Button>
				) : (
					<>
						<Button onClick={saveClickHandler} disabled={!amountTemp}>
							Save
						</Button>
						<Button onClick={cancelClickHandler}>Cancel</Button>
					</>
				)}
			</h4>
			<h4>Date : {spendingDetails.date}</h4>
		</Container>
	);
};

export default SpendingBox;
