import { describe, it, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, useLocation } from 'react-router-dom';
import { AuthProvider } from '../../../app/providers/AuthProvider';
import Hero from './Hero';

function LocationDisplay() {
  const location = useLocation();
  return <div data-testid="location-display">{location.pathname}</div>;
}

describe('Hero Component', () => {
  it('render the hero content', () => {
    render(
      <MemoryRouter>
        <AuthProvider>
          <Hero />
        </AuthProvider>
      </MemoryRouter>,
    );

    const heroSection = document.querySelector<HTMLElement>('.hero');
    if (!heroSection) throw new Error('Hero section not found');

    expect(screen.getByText('Build your future with')).toBeInTheDocument();
    expect(within(heroSection).getByRole('link', { name: /Browse Courses/i })).toBeInTheDocument();
  });

  it('should check browse courses link', async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <AuthProvider>
          <Hero />
          <LocationDisplay />
        </AuthProvider>
      </MemoryRouter>,
    );

    const browseCoursesLink = screen.getByRole('link', { name: /Browse Courses/i });
    await user.click(browseCoursesLink);

    expect(screen.getByTestId('location-display')).toHaveTextContent('/courses');
  });
});
