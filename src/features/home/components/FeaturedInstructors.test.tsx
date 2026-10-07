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

    await waitFor(
      () => {
        expect(screen.getByText('Featured Instructors')).toBeInTheDocument();
        expect(screen.getByText('John Smith')).toBeInTheDocument();
        expect(screen.getByText('Sarah Johnson')).toBeInTheDocument();
        expect(screen.getByText('Mike Chen')).toBeInTheDocument();
        expect(screen.getByText('Emily Davis')).toBeInTheDocument();
      },
      {
        timeout: 3000,
        interval: 100,
      },
    );
  });
});
