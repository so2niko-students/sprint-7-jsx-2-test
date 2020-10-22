import React from 'react';
import ReactDOM, { unmountComponentAtNode } from 'react-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import MyLabel from '../components/my-label/my-label.js';

let container = null;

beforeEach(() => {
  container = document.createElement("div");
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('Renders MyLabel without crashing', () => {
    container = document.createElement('div');
    ReactDOM.render(<MyLabel />, container);
});


it('Renders MyLabel with attr:for', () => {
    const { getByTestId } = render(<MyLabel />);
    expect(getByTestId('element-label')).toHaveAttribute('for', 'inp-num');
});


it('Renders MyLabel with text', () => {
  const { getByTestId } = render(<MyLabel />);
  expect(getByTestId('element-label')).toHaveTextContent('Count:');
});