import React from 'react'
import { shallow } from 'enzyme';
import { ExpensesSummary } from "../../components/ExpensesSummary";
import expenses from '../fixtures/expenses'

test('Should render ExpenseSummary with 3 expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenses={expenses}/>);
    expect(wrapper).toMatchSnapshot();
});

test('Should render ExpenseSummary with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenses={[expenses[0]]}/>);
    expect(wrapper).toMatchSnapshot();
});
