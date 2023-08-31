import { render, screen } from "@testing-library/react";
import EditExpense from "../pages/EditExpense";
import userEvent from "@testing-library/user-event";

describe("EditExpense component", () => {
  test("renders Expense Title label", () => {
    render(<EditExpense />);
    const expenseTitleLabel = screen.getByText("Expense Title");
    expect(expenseTitleLabel).toBeInTheDocument();
  });

  test("renders Category label", () => {
    render(<EditExpense />);
    const categoryLabel = screen.getByText("Category");
    expect(categoryLabel).toBeInTheDocument();
  });

  test("renders Price label", () => {
    render(<EditExpense />);
    const priceLabel = screen.getByText("Price");
    expect(priceLabel).toBeInTheDocument();
  });

  test("renders Update button", () => {
    render(<EditExpense />);
    const updateButton = screen.getByRole("button", { name: "Update" });
    expect(updateButton).toBeInTheDocument();
  });

  test("renders Cancel button", () => {
    render(<EditExpense />);
    const cancelButton = screen.getByRole("button", { name: "Cancel" });
    expect(cancelButton).toBeInTheDocument();
  });
});
