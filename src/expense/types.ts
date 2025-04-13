export type ExpenseItem = {
  id: string,
  registeredDate: string,
  description: string,
  amount: number,
}

export type FormattedExpenseItems = {
  registeredDate: string,
  totalAmount: number,
  expenses: ExpenseItem[]
}
