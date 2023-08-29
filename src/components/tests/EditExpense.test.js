import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import EditExpense from '../pages/EditExpense';

test('renders EditExpense component', () => {
  render(<EditExpense editData={{}} cancel={() => {}} />);
  
  const updateButton = screen.getByText('Update');
  expect(updateButton).toBeInTheDocument();
});

test('editing the form', () => {
  render(<EditExpense editData={{}} cancel={() => {}} />);
  
  const titleInput = screen.getByPlaceholderText('Enter Expense Title');
  const categoryInput = screen.getByPlaceholderText('Enter Category');
  const priceInput = screen.getByPlaceholderText('Enter Price');
  const updateButton = screen.getByText('Update');

  fireEvent.change(titleInput, { target: { value: 'New Test Title' } });
  fireEvent.change(categoryInput, { target: { value: 'New Test Category' } });
  fireEvent.change(priceInput, { target: { value: '200' } });
  fireEvent.click(updateButton);

  // Add your assertions here based on the expected behavior after form submission
});
