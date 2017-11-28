import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {startAddExpense, addExpense, editExpense, removeExpense} from "../../actions/expenses";
import expenses from '../fixtures/expenses'

const createMockStore = configureMockStore([thunk]);

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
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })
});

test('should add expense to database and store', (done) =>{
    const store = createMockStore({});
    const expenseData ={
        descriptopn : 'MacBook',
        amount: '200000',
        note: 'Man I love macbooks',
        createdAt: 3000

    };
    store.dispatch(startAddExpense(expenseData)).then(() =>{
        done();
    })
});

test('should add expense with defaults to database and store', () =>{

});