import { render, screen } from '@testing-library/react';
import { beforeAll, describe, expect, it } from 'vitest';
import { MemoryRouter } from 'react-router-dom';

import NotFoundPage from './index';
import { initTranslations } from '@/translations';

beforeAll(async () => {
  await initTranslations();
});

describe('NotFoundPage', () => {
  it('renders translated 404 copy', async () => {
    render(
      <MemoryRouter>
        <NotFoundPage />
      </MemoryRouter>
    );

    expect(screen.getByText(/Page not found/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Return home/i })).toHaveAttribute('href', '/');
  });
});
