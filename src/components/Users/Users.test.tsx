import { render, screen } from '@testing-library/react';
import Users from '.';
import React from 'react';

describe('Testing users component', () => {
  it('check users component with mock api', async () => {
    render(<Users />);
    // const listItemElements = await screen.findAllByRole('listitem', undefined, {
    //   timeout: 2000,
    // });
    // expect(listItemElements).toHaveLength(3);
  });
});
