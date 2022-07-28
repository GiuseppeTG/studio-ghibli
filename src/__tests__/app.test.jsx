import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { screen } from '@testing-library/react';
import App from '../App';
import { renderWithProviders } from '../../utils/testUtils';
import '@testing-library/jest-dom';

describe('Testing component rednering propperly', () => {
  test('Render Home hero', () => {
    renderWithProviders(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    const img = screen.getByAltText('studio ghibli logo');
    expect(img.src).toMatch(/title-logo.png/i);
  });
  test('Render All Movies', async () => {
    renderWithProviders(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    const listedMovies = await screen.findAllByTestId('listed-movie');
    expect(listedMovies.length).toBe(22);
  });
  test('Render All Movies', async () => {
    renderWithProviders(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    const filterInput = document.querySelector('.filter-input');
    filterInput.children[1].selected = true;
    expect(filterInput.value).toBe('Hayao Miyazaki');
  });
});
