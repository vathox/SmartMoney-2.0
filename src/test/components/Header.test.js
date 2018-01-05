import React from 'react';
import {Header} from '../../components/Header'
import toJSON from 'enzyme-to-json'
import { shallow } from 'enzyme';

test('should render Header correctly', () => {
   const wrapper = shallow(<Header startLogOut={() => {}}/>);
   expect(toJSON(wrapper)).toMatchSnapshot();
});

test("should call startLogout on button click", () =>{
   const startLogout = jest.fn();
   const wrapper = shallow(<Header startLogout={startLogout}/>);
   wrapper.find('button').simulate('click');
   expect(startLogout).toHaveBeenCalled()
});
