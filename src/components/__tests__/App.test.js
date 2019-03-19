import {shallow} from 'enzyme';
import App from '../App';
import React from 'react';

describe('App Component', () =>{
    it('snapshot test', () => {
        const wrapper = shallow(<App/>);
        expect(wrapper).toMatchSnapshot();
    });
})