import { ExpenseItem, FormattedExpenseItems } from "./types";

export const formatExpenseItems = (data: ExpenseItem[]) => {
  const formattedData: FormattedExpenseItems[] = [];
  data.forEach(expense => {
    const index = formattedData.findIndex(
      data => data.registeredDate === expense.registeredDate
    );
    if (index === -1) {
      formattedData.push({
        registeredDate: expense.registeredDate,
        totalAmount: expense.amount,
        expenses: [expense]
      })
    } else {
      formattedData[index].totalAmount += expense.amount;
      formattedData[index].expenses.push(expense);
    }
  });
  return formattedData;
}

export const currencyFormatter = new Intl.NumberFormat('en-PH', {
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
