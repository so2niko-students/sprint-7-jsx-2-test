import React from 'react';
import ReactDOM, { unmountComponentAtNode } from 'react-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import MyInput from '../components/my-input/my-input.js';

let container = null;

beforeEach(() => {
  container = document.createElement("div");
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('Renders MyInput component without crashing', () => {
    container = document.createElement('div');
    ReactDOM.render(<MyInput />, container);
});

it('Renders input tag with attr:id', () => {
    const { getByTestId } = render(<MyInput />);
    expect(getByTestId('element-input')).toHaveAttribute('id', 'inp-num');
});

it('Renders input tag with attr:type', () => {
  const { getByTestId } = render(<MyInput />);
  expect(getByTestId('element-input')).toHaveAttribute('type', 'number');
});