import React from 'react';
import NotFoundPage from '../../components/NotFoundPage'
import toJSON from 'enzyme-to-json'
import { shallow } from 'enzyme';

test('should render NotFoundPAge correctly', () => {
    const wrapper = shallow(<NotFoundPage/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
});