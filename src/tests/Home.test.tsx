import * as React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Home from '../screens/Home/Home';

test('pressing right arrow of an artwork goes to detail screen', () => {
  const {getByText} = render(<Home />);

  const iconBtn = getByText('arrow-right');
  fireEvent.press(iconBtn);

  const artworkDetailScreen = getByText('Artwork Detail');
  expect(artworkDetailScreen).toBeDefined();
});
