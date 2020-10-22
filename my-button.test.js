import React from 'react';
import ReactDOM, { unmountComponentAtNode } from 'react-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import MyButton from '../components/my-button/my-button.js';

let container = null;

beforeEach(() => {
  container = document.createElement("div");
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('Renders MyButton without crashing', () => {
    container = document.createElement('div');
    ReactDOM.render(<MyButton />, container);
});

it('Renders MyButton correctly', () => {
  const { getByTestId } = render(<MyButton />);
  expect(getByTestId('element-button')).toHaveTextContent('Add to account');
});