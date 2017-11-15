import React from 'react';
import SmartMoneyDashboard from '../../components/SmartMoneyDashboard'
import { shallow } from 'enzyme';

test('should render Dashboard correctly', () => {
    const wrapper = shallow(<SmartMoneyDashboard/>);
    expect(wrapper).toMatchSnapshot();
});