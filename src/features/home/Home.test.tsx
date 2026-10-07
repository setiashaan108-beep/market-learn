import { describe, it, expect } from 'vitest';
import { screen, render, within } from '@testing-library/react';
import { MemoryRouter, useLocation } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Home from './Home';
import { AppProvider } from '../../app/providers/AppProvider';
import { AuthProvider } from '../../app/providers/AuthProvider';

function LocationDisplay() {
  const location = useLocation();
  return <div data-testid="location-display">{location.pathname}</div>;
}

describe('Home', () => {
  it('should render the Home component', async () => {
    // Render the HomePage component
    render(
      <MemoryRouter>
        <AppProvider>
          <AuthProvider>
            <Home />
          </AuthProvider>
        </AppProvider>
      </MemoryRouter>,
    );
    expect(await screen.findByText(/Build your future with/i)).toBeInTheDocument();
    expect(await screen.findByText(/Featured Courses/i)).toBeInTheDocument();
    expect(await screen.findByText(/Why MarketLearn?/i)).toBeInTheDocument();
    expect(
      await screen.findByText(/Featured Instructors/i, undefined, { timeout: 3000 }),
    ).toBeInTheDocument();
    expect(await screen.findByText(/Ready to Start Learning?/i)).toBeInTheDocument();
  });

  it('should check browse courses link', async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <AppProvider>
          <AuthProvider>
            <Home />
            <LocationDisplay />
          </AuthProvider>
        </AppProvider>
      </MemoryRouter>,
    );

    const heroContainer = screen.getByRole('region', { name: /Hero section/i });

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
            <Home />
            <LocationDisplay />
          </AuthProvider>
        </AppProvider>
      </MemoryRouter>,
    );

    const section = await screen.findByRole('region', { name: /Featured Instructors/i });
    const instructorCards = within(section).findAllByRole('article');
    const firstInstructorCard = await instructorCards.then((cards) => cards[0].querySelector('a')!);

    await user.click(firstInstructorCard);

    const locationDisplay = screen.getByTestId('location-display');

    expect(locationDisplay).toHaveTextContent('/instructors/1');
  });
});
