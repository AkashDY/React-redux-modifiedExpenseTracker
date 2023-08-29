import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ShowForm from '../pages/ShowForm';

test('renders ShowForm component', () => {
  render(<ShowForm onshowData={() => {}} />);
  
  const titleHeader = screen.getByText('Title');
  expect(titleHeader).toBeInTheDocument();
});

test('deleting an item', () => {
  const mockDispatch = jest.fn();
  jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: () => mockDispatch,
  }));

  render(<ShowForm onshowData={() => {}} />);
  
  // Add your test logic for deleting an item
});

test('editing an item', () => {
  const mockDispatch = jest.fn();
  jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: () => mockDispatch,
  }));

  render(<ShowForm onshowData={() => {}} />);
  
  // Add your test logic for editing an item
});
