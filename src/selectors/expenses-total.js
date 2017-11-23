const selectExpensesTotal = (expenses) => {

    return expenses.reduce((accumulator, currentValue) =>
        accumulator + currentValue.amount, 0)

};

export default selectExpensesTotal