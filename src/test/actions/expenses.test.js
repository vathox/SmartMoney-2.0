import {addExpense, editExpense, removeExpense} from "../../actions/expenses";

test('should set up remove expenses action object', () => {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
});

test('should set up edit expense adction obj', () => {
    const action = editExpense('123abc', {note: 'Test note'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'Test note'
        }
    })
});

test('should set up add expense obj whith provided values', () => {
    const expenseData = {
        description: 'Test',
        amount: '1300',
        createdAt: '1000',
        note: 'test note'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
});

test('should set up add expense obj with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    })
});