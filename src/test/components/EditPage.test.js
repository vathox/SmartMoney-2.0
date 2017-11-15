import React from 'react'
import {shallow} from 'enzyme'
import {EditPage} from "../../components/EditPage";
import expenses from '../fixtures/expenses'

let editExpense, removeExpense, history, wrapper;

beforeEach(() => {
    editExpense = jest.fn();
    removeExpense= jest.fn();
    history = {push: jest.fn()};
    wrapper = shallow(<EditPage
        editExpense={editExpense}
        history={history}
        removeExpense={removeExpense}
        expense={expenses[0]}/>)
});

test('should render edit page correctly', () => {
    expect(wrapper).toMatchSnapshot()
});

test('should handle edit expense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    expect(history.push).toHaveBeenCalledWith('/');
    expect(editExpense).toHaveBeenCalledWith(expenses[0].id, expenses[0])
});

test('should handle remove expense', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenCalledWith('/');
    expect(removeExpense).toHaveBeenCalledWith({id: expenses[0].id})
});