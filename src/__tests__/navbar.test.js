import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../components/Navbar';

describe('Navbar Component', () => {
  test('renders title correctly based on pathname', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/']}>
        <Navbar />
      </MemoryRouter>,
    );
    const titleForMostViews = getByText('Most views');
    expect(titleForMostViews).toBeInTheDocument();

    const { getByText: getByTextDetails } = render(
      <MemoryRouter initialEntries={['/details/US']}>
        <Navbar />
      </MemoryRouter>,
    );
    const titleForMoreDetails = getByTextDetails('More Details');
    expect(titleForMoreDetails).toBeInTheDocument();
  });

  test('renders navbar', () => {
    const { container } = render(
      <Router>
        <Navbar />
      </Router>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
