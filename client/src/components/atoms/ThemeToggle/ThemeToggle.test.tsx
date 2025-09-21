import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import ThemeToggle from './ThemeToggle';

const renderToggle = () => render(<ThemeToggle />);

describe('ThemeToggle', () => {
  it('toggles theme attribute on click', () => {
    document.documentElement.setAttribute('data-theme', 'light');

    renderToggle();

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
  });
});
