import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AddExpense from '../pages/AddExpense';

test('renders AddExpense component', () => {
  render(<AddExpense />);
  
  const addButton = screen.getByText('Add Expense');
  expect(addButton).toBeInTheDocument();
});

test('submitting the form', () => {
  render(<AddExpense />);
  
  const titleInput = screen.getByPlaceholderText('Enter Expense Title');
  const categoryInput = screen.getByPlaceholderText('Enter Category');
  const priceInput = screen.getByPlaceholderText('Enter Price');
  const addButton = screen.getByText('Add Expense');

  fireEvent.change(titleInput, { target: { value: 'Test Title' } });
  fireEvent.change(categoryInput, { target: { value: 'Test Category' } });
  fireEvent.change(priceInput, { target: { value: '100' } });
  fireEvent.click(addButton);

  // Add your assertions here based on the expected behavior after form submission
});
