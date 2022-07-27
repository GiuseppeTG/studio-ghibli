import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider, useDispatch } from 'react-redux';
import Home from '../components/Home/Home';

test('Create Home component', async () => {
  render(<Home />);
  expect(screen.getByTestId('rocket-list-test')).toBeInTheDocument();
});
