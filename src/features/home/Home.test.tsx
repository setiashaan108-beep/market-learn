import { describe, it, expect } from 'vitest';
import { screen, render, waitFor, within } from '@testing-library/react';
import { MemoryRouter, useLocation } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import HomePage from '../../pages/HomePage';
import { AppProvider } from '../../app/providers/AppProvider';
import { AuthProvider } from '../../app/providers/AuthProvider';

function LocationDisplay() {
  const location = useLocation();
  return <div data-testid="location-display">{location.pathname}</div>;
}

describe('HomePage', () => {
  it('should render the Home component', async () => {
    // Render the HomePage component
    render(
      <MemoryRouter>
        <AppProvider>
          <AuthProvider>
            <HomePage />
          </AuthProvider>
        </AppProvider>
      </MemoryRouter>,
    );
    await waitFor(
      () => {
        expect(screen.getByText(/Build your future with/i)).toBeInTheDocument();
        expect(screen.getByText(/Featured Courses/i)).toBeInTheDocument();
        expect(screen.getByText(/Why MarketLearn?/i)).toBeInTheDocument();
        expect(screen.getByText(/Featured Instructors/i)).toBeInTheDocument();
        expect(screen.getByText(/Ready to Start Learning?/i)).toBeInTheDocument();
      },
      {
        timeout: 3000, // Wait up to 3 seconds instead of 1 (3000ms)
        interval: 100,
      },
    );
  });

  it('should check browse courses link', async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <AppProvider>
          <AuthProvider>
            <HomePage />
            <LocationDisplay />
          </AuthProvider>
        </AppProvider>
      </MemoryRouter>,
    );

    const heroContainer = document.querySelector<HTMLElement>('.hero');
    if (!heroContainer) throw new Error('Hero container not found');

    const browseCoursesLink = within(heroContainer).getByRole('link', { name: /Browse Courses/i });
    await user.click(browseCoursesLink);

    expect(screen.getByTestId('location-display')).toHaveTextContent('/courses');
  });

  it('should check instructors link', async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <AppProvider>
          <AuthProvider>
            <HomePage />
            <LocationDisplay />
          </AuthProvider>
        </AppProvider>
      </MemoryRouter>,
    );

    await waitFor(
      async () => {
        const section = await screen.findByRole('region', { name: /Featured Instructors/i });
        const instructorCards = within(section).findAllByRole('article');
        const firstInstructorCard = await instructorCards.then((cards) =>
          cards[0].querySelector('a')!,
        );

        await user.click(firstInstructorCard);

        const locationDisplay = screen.getByTestId('location-display');
        const expectedPath = firstInstructorCard.getAttribute('href');
        if (!expectedPath) throw new Error('Instructor link has no href');

        expect(locationDisplay).toHaveTextContent(expectedPath);
      },
      {
        timeout: 3000, // Wait up to 3 seconds instead of 1 (3000ms)
        interval: 100,
      },
    );
  });
});
