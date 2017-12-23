import React from 'react'
import {shallow} from 'enzyme'
import {EditPage} from "../../components/EditPage";
import expenses from '../fixtures/expenses'

let editExpense, startRemoveExpense, history, wrapper;

beforeEach(() => {
    editExpense = jest.fn();
    startRemoveExpense= jest.fn();
    history = {push: jest.fn()};
    wrapper = shallow(<EditPage
        editExpense={editExpense}
        history={history}
        startRemoveExpense={startRemoveExpense}
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
    expect(startRemoveExpense   ).toHaveBeenCalledWith({id: expenses[0].id})
});