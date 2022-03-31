import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './components/Card';
import Search from './components/searchBar';

describe('Flag', () => {
    test('card must have visible image, alt props and class', () => {
      const {getByRole}=render(<Card/>);
  
      const flag = getByRole('img');
    
      expect(flag).toBeVisible

      expect(flag).toHaveAttribute('alt', 'countries');

      expect(flag).toHaveClass('Rounded');
    
    });
  });

  describe('Input', () => {
    test('Check Input', () => {

      const {getByAltText}=render(<Search/>);
      const {getByRole}=render(<Card/>);

      const flag = getByRole('img');
      const input = getByAltText('countries');

      const inputValue = "Colombia";
    
      input.value = inputValue;

      expect(flag.getAttribute('id').toLowerCase).toBe(inputValue.toLowerCase);
    
    });
  });