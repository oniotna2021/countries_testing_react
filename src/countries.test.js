import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './components/Card';


describe('Flag', () => {
    test('card image must have alt = countries', () => {
      const {getByRole}=render(<Card/>);
  
      const flag = getByRole('img');
    
      expect(flag).toBeVisible

      expect(flag).toHaveAttribute('alt', 'countries');

      expect(flag).toHaveClass('Rounded');
    
    });
  });