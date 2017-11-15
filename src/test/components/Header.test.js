import React from 'react';
import Header from '../../components/Header'
import toJSON from 'enzyme-to-json'
import { shallow } from 'enzyme';

test('should render Header correctly', () => {
   const wrapper = shallow(<Header/>);
   expect(toJSON(wrapper)).toMatchSnapshot();
});