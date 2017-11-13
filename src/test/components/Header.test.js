import React from 'react';
import Header from '../../components/Header'
import ReactShallowRenderer from 'react-test-render/shallow';

test('should render Header correctly', () => {
   const renderer = new ReactShallowRenderer();
   renderer.render(<Header/>);
    expect(renderer.getRenderOutput().toMatchSnapshot())
});