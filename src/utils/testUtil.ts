import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { AppThemeProvider } from '../providers/ThemeProvider';

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AppThemeProvider, ...options });

export * from '@testing-library/react';
export { customRender as render };
