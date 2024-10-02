import React from 'react';
import App from './App';
import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';

global.fetch = vi.fn()
  .mockResolvedValue({
    ok: true,
    text: () => {
      return Promise.resolve(JSON.stringify({}));
    },
  })

describe('App Component', () => {

  beforeAll(() => {
    global.matchMedia = vi.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
    }));
  });

  beforeEach(() => {
    render(<App />);
  })

  test('render title', () => {
    const titleElement = screen.getByText(/HP React App/i);
    expect(titleElement).toBeDefined();
  });

  test('render button', () => {
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeDefined();
  });

  test('change theme on button click', () => {
    const buttonElement = screen.getByRole('button');

    expect(document.documentElement.getAttribute('data-theme')).toBe('light');

    fireEvent.click(buttonElement);

    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');

    fireEvent.click(buttonElement);

    expect(document.documentElement.getAttribute('data-theme')).toBe('light');

  });
});
