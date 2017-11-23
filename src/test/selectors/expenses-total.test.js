import selectedExpensesTotal from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'

test('should return zero when no expenses are passed', () =>{
   const result = selectedExpensesTotal([]);
   expect(result).toEqual(0)
});

test('should correctly add up single expense', () =>{
    const result = selectedExpensesTotal([expenses[1]]);
    expect(result).toEqual(19398)
});

test('should correctly add up multiple expenses', () =>{
    const result = selectedExpensesTotal(expenses);
    expect(result).toEqual(26091)
});
