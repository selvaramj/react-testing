import { render, screen } from '@testing-library/react';
import Mui from './Mui';
import React from 'react';
import { AppThemeProvider } from '../../providers/ThemeProvider';
import { render as customRender } from '../../utils/testUtil';
console.log(data);
const data = '1';
describe('Testing MUI Component', () => {
  it('without theme provider', () => {
    render(<Mui />);
    const heading = screen.getByText('Current mode: light');
    expect(heading).toBeInTheDocument();
  });

  it('with theme provider', () => {
    customRender(<Mui />);
    const darkModeHeading = screen.getByText('Current mode: dark');
    expect(darkModeHeading).toBeInTheDocument();
  });
});
