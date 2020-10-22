import React from 'react';
import ReactDOM, { unmountComponentAtNode } from 'react-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Input from '../components/input/input.js';

let container = null;

beforeEach(() => {
  container = document.createElement("div");
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('Renders Input component without crashing', () => {
    container = document.createElement('div');
    ReactDOM.render(<Input />, container);
});

it('Renders input tag with attr:id', () => {
    const { getByTestId } = render(<Input />);
    expect(getByTestId('element-input')).toHaveAttribute('id', 'inp-num');
});

it('Renders input tag with attr:type', () => {
  const { getByTestId } = render(<Input />);
  expect(getByTestId('element-input')).toHaveAttribute('type', 'number');
});