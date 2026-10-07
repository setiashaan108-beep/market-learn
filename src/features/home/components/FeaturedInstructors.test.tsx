import { describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthProvider } from '../../../app/providers/AuthProvider';
import { AppProvider } from '../../../app/providers/AppProvider';
import FeaturedInstructors from './FeaturedInstructors';

describe('FeaturedInstructors Component', () => {
  it('renders the featured instructors', async () => {
    render(
      <MemoryRouter>
        <AppProvider>
          <AuthProvider>
            <FeaturedInstructors />
          </AuthProvider>
        </AppProvider>
      </MemoryRouter>,
    );

    expect(
      await screen.findByText('Featured Instructors', undefined, { timeout: 3000 }),
    ).toBeInTheDocument();
    expect(await screen.findByText('John Smith', undefined, { timeout: 3000 })).toBeInTheDocument();
    expect(
      await screen.findByText('Sarah Johnson', undefined, { timeout: 3000 }),
    ).toBeInTheDocument();
    expect(await screen.findByText('Mike Chen', undefined, { timeout: 3000 })).toBeInTheDocument();
    expect(
      await screen.findByText('Emily Davis', undefined, { timeout: 3000 }),
    ).toBeInTheDocument();
  });
});
