import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import HomePage from '../components/HomePage';

test('renders Details component correctly', () => {
  const { container } = render(
    <Provider store={store}>
      <HomePage />
    </Provider>,
  );
  expect(container.firstChild).toMatchSnapshot();
});
