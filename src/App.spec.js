import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import axios from 'axios';
import App, { Counter, dataReducer } from './App';
const list = ['a', 'b', 'c'];
describe('App', () => {
 
  test('snapshot renders', () => {
    const component = renderer.create(<App />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders the inner Counter', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(Counter).length).toEqual(1);
  });
  it('passes all props to Counter', () => {
    const wrapper = mount(<App />);
    const counterWrapper = wrapper.find(Counter);
    expect(counterWrapper.find('p').text()).toEqual('0');
  });

  it('passes all props to Counter', () => {
    const wrapper = mount(<App />);
    const counterWrapper = wrapper.find(Counter);
    expect(counterWrapper.find('p').text()).toEqual('0');
  });
  it('increments the counter', () => {
    const wrapper = mount(<App />);
    wrapper
      .find('button')
      .at(0)
      .simulate('click');
    const counterWrapper = wrapper.find(Counter);
    expect(counterWrapper.find('p').text()).toBe('1');
  });
  it('decrements the counter', () => {
    const wrapper = mount(<App />);
    wrapper
      .find('button')
      .at(1)
      .simulate('click');
    const counterWrapper = wrapper.find(Counter);
    expect(counterWrapper.find('p').text()).toBe('-1');
  });
  it('fetches async data but fails', done => {
    const promise = new Promise((resolve, reject) =>
      setTimeout(() => reject(new Error('Whoops!')), 100)
    );
    axios.get = jest.fn(() => promise);
    const wrapper = mount(<App />);
    promise.catch(() => {
      setImmediate(() => {
        wrapper.update();
        expect(wrapper.find('li').length).toEqual(0);
        expect(wrapper.find('.error').length).toEqual(1);
        axios.get.mockClear();
        done();
      });
    });
  });
});
describe('Reducer', () => {
  it('fetches async data', () => {
    axios.get = jest.fn(() => promise);
      setTimeout(
        () =>
          resolve({
            data: {
              hits: [
                { objectID: '1', title: 'a' },
                { objectID: '2', title: 'b' },
              ],
            },
          }),
        100
      )
    const wrapper = mount(<App />);
    expect(wrapper.find('li').length).toEqual(0);
    promise.then(() => {
      expect(wrapper.find('li').length).toEqual(2);
      axios.get.mockClear();
    });
  });
});
