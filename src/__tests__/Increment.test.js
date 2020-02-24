import React from 'react';
import {shallow } from '../enzyme';
import Increment from '../components/Increment';


describe('App component', () => {
    it('starts with a count of 0', () => {
        const wrapper = shallow(<Increment />);
        const text = wrapper.find('p').text();
        expect(text).toEqual('Count: 0');
    });

    it('increments count by 1 when the increment button is clicked', () => {
        const wrapper = shallow(<Increment />);
        const incrementBtn = wrapper.find('button.increment');
        incrementBtn.simulate('click');
        const text = wrapper.find('p').text();
        expect(text).toEqual('Count: 0');
    });
    
    it('decrements count by 1 when the decrement button is clicked', () => {
        const wrapper = shallow(<Increment />);
        const decrementBtn = wrapper.find('button.decrement');
        decrementBtn.simulate('click');
        const text = wrapper.find('p').text();
        expect(text).toEqual('Count: -1');
    });
    it('matches snapshots ', () => {
        const wrapper = shallow(<Increment />);
        expect(wrapper).toMatchSnapshot();
    })
});