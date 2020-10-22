import React from 'react';
import ReactDOM, { unmountComponentAtNode } from 'react-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Label from '../components/label/label.js';

let container = null;

beforeEach(() => {
  container = document.createElement("div");
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('Renders Label without crashing', () => {
    container = document.createElement('div');
    ReactDOM.render(<Label />, container);
});


it('Renders Label with attr:for', () => {
    const { getByTestId } = render(<Label />);
    expect(getByTestId('element-label')).toHaveAttribute('for', 'inp-num');
});


it('Renders Label with text', () => {
  const { getByTestId } = render(<Label />);
  expect(getByTestId('element-label')).toHaveTextContent('Count:');
});