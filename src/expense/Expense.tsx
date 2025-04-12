import Typography from "@mui/material/Typography";

type ExpenseItem = {
  id: string,
  registeredDate: string,
  description: string,
  amount: number,
}

function Expense() {
  const data: ExpenseItem[] = [];
  console.log(data)
  
  return (
    <Typography variant="h3">
      Expense
    </Typography>
  )
}

export default Expense
