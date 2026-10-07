import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { AuthProvider } from '../../../app/providers/AuthProvider';
import { AppProvider } from '../../../app/providers/AppProvider';
import FeaturedCourses from './FeaturedCourses';

describe('FeaturedCourses Component', () => {
  it('renders the featured courses', async () => {
    render(
      <MemoryRouter>
        <AppProvider>
          <AuthProvider>
            <FeaturedCourses />
          </AuthProvider>
        </AppProvider>
      </MemoryRouter>,
    );
    await waitFor(
      () => {
        expect(screen.getByText('The Complete Web Development Bootcamp')).toBeInTheDocument();
        expect(screen.getByText('Data Science for Beginners')).toBeInTheDocument();
        expect(screen.getByText('UI/UX Design Fundamentals')).toBeInTheDocument();
        expect(screen.getByText('Python Programming Masterclass')).toBeInTheDocument();
      },
      {
        timeout: 3000,
        interval: 100,
      },
    );
  });
});
