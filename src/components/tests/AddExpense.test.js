import { render, screen } from "@testing-library/react";
import AddExpense from "../pages/AddExpense";
import userEvent from "@testing-library/user-event";

describe("AddExpense component", () => {
  test("renders Expense Title label", () => {
    render(<AddExpense />);
    const expenseTitleLabel = screen.getByText("Expense Title");
    expect(expenseTitleLabel).toBeInTheDocument();
  });

  test("renders Category label", () => {
    render(<AddExpense />);
    const categoryLabel = screen.getByText("Category");
    expect(categoryLabel).toBeInTheDocument();
  });

  test("renders Price label", () => {
    render(<AddExpense />);
    const priceLabel = screen.getByText("Price");
    expect(priceLabel).toBeInTheDocument();
  });

  test("renders Add Expense button", () => {
    render(<AddExpense />);
    const addExpenseButton = screen.getByRole("button", { name: "Add Expense" });
    expect(addExpenseButton).toBeInTheDocument();
  });
});
