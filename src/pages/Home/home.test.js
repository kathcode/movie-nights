import { render, screen } from '@testing-library/react';
import Home from './index';

test('Render spinners when there is no data', () => {
  const { getAllByTestId } = render(<Home />);
  const filter = getAllByTestId('snipper');
  
  expect(filter.length).toBe(2)
});