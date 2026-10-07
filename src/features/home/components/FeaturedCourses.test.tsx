import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
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

    expect(
      await screen.findByText('The Complete Web Development Bootcamp', undefined, {
        timeout: 3000,
      }),
    ).toBeInTheDocument();
    expect(
      await screen.findByText('Data Science for Beginners', undefined, { timeout: 3000 }),
    ).toBeInTheDocument();
    expect(
      await screen.findByText('UI/UX Design Fundamentals', undefined, { timeout: 3000 }),
    ).toBeInTheDocument();
    expect(
      await screen.findByText('Python Programming Masterclass', undefined, { timeout: 3000 }),
    ).toBeInTheDocument();
  });
});
