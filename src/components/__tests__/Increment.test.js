import React from 'react';
import {shallow } from 'enzyme';
import App from './App';
import { italic } from 'ansi-colors';


describe('App component', () => {
    it('starts with a count of 0', () => {
        const wrapper = shallow(<App />);
        const text = wrapper.find('p').text();
        expect(text).toEqual('count: 0');
    });

    it('increments count by 1 when the increment button is clicked', () => {
        const wrapper = shallow(<App />);
        const incrementBtn = wrapper.find('button.increment');
        incrementBtn.simulate('click');
        const text = wrapper.find('p').text();
        expect(text).toEqual('Count: 1');
    });
    
    it('decrements count by 1 when the decrement button is clicked', () => {
        const wrapper = shallow(<App />);
        const decrementBtn = wrapper.find('button.decrement');
        decrementBtn.simulate('click');
        const text = wrapper.find('p').text();
        expect(text).toEqual('Count: -1');
    });
    it('matches snapshots ', () => {
        const wrapper = shallow(<App />).toJSON();
        expect(wrapper).toMatchSnapshot();
    })
});