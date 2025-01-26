import Skills from './skills';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';

describe('Testing the Skill component', () => {
  const skills = ['html', 'css', 'js'];

  it('To render the component', () => {
    render(<Skills skills={skills} />);
    const unorderList = screen.getByRole('list');
    expect(unorderList).toBeInTheDocument();
  });

  it('To render the skills component with listitems', () => {
    render(<Skills skills={skills} />);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(skills.length);
  });

  it('check started button rendered successfully or not', () => {
    render(<Skills skills={skills} />);
    const startedButtonElement = screen.queryByRole('button', {
      name: 'started',
    });
    expect(startedButtonElement).toBeInTheDocument();
    const notStartedBtnElement = screen.queryByRole('button', {
      name: 'Not started',
    });
    expect(notStartedBtnElement).not.toBeInTheDocument();
  });

  it('check user looged in eventually', async () => {
    const { container } = render(<Skills skills={skills} />);
    console.log(container);
    const loggedInElement = await screen.findByText(
      'logged in',
      { exact: false },
      { timeout: 1500 },
    );
    expect(loggedInElement).toBeInTheDocument();
  });
});
