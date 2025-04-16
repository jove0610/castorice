import { useState } from "react";
import dayjs from "dayjs";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddItemModal from "./AddItemModal";
import {
  formatExpenseItems,
  currencyFormatter,
  generateId,
} from "./helpers";
import { ExpenseItem } from "./types";
import { useExpenses } from "./hooks";
import DelItemModal from "./DelItemModal";

function Expense() {
  const [showAddItemModal, setShowAddItemModal] = useState(false);
  const [showDelItemModal, setShowDelItemModal] = useState(false);
  const [expenseToBeDeleted, setExpenseToBeDeleted] = useState('');
  const [expenses, setExpenses] = useExpenses();
  const formattedExpenses = formatExpenseItems(expenses);

  const toggleAddItemModal = () => {
    setShowAddItemModal(prev => !prev)
  }

  const toggleDelItemModal = () => {
    setShowDelItemModal(prev => !prev)
  }

  const handleDelIconClick = (id: string) => {
    setExpenseToBeDeleted(id);
    toggleDelItemModal();
  }

  const handleAddItem = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const registeredDate = formData.get('registeredDate') as string;
    const description = (formData.get('description') as string).trim();
    const amount = (formData.get('amount') as string).trim();

    if (
      !registeredDate ||
      !description ||
      !amount ||
      isNaN(Number(amount))
    ) {
      return;
    };
    const expense: ExpenseItem = {
      id: generateId(),
      registeredDate: dayjs(registeredDate).format('YYYY-MM-DD'),
      description,
      amount: Number(amount),
    }
    setExpenses(expenses.concat(expense));
    e.currentTarget.reset();
    toggleAddItemModal();
  }

  const handleDelItem = () => {
    setExpenses(expenses.filter(({id}) => id !== expenseToBeDeleted));
    setExpenseToBeDeleted('');
    toggleDelItemModal();
  }

  return (
    <Stack gap={3}>
      <Typography variant="h3">
        Expense
      </Typography>

      <Stack gap={3}>
        <Button variant='contained' sx={{mr: 'auto'}} onClick={toggleAddItemModal}>
          Add Expense
        </Button>

        {formattedExpenses.map(({registeredDate, totalAmount, expenses}) => (
          <Accordion key={registeredDate}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`${registeredDate}-content`}
            >
              <Stack direction='row' justifyContent='space-between' width='98%'>
                <Typography>
                  {dayjs(registeredDate).format('MMM D')}
                </Typography>
                <Typography>
                  {currencyFormatter.format(totalAmount)}
                </Typography>
              </Stack>
            </AccordionSummary>

            <AccordionDetails>
              <TableContainer component={Paper}>
                <Table aria-label={`${registeredDate}-table`}>
                  <TableHead>
                    <TableRow>
                      <TableCell>Description</TableCell>
                      <TableCell align="right">Amount</TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {expenses.map(({id, description, amount}) => (
                      <TableRow
                        key={`${description}-${amount}`}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          <IconButton
                            aria-label="delete-expense"
                            onClick={() => handleDelIconClick(id)}
                          >
                            <DeleteIcon />
                          </IconButton>
                          {description}
                        </TableCell>
                        <TableCell align="right">
                          {currencyFormatter.format(amount)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </AccordionDetails>
          </Accordion>
        ))}
      </Stack>

      <AddItemModal
        open={showAddItemModal}
        onClose={toggleAddItemModal}
        handleSubmit={handleAddItem}
      />
      <DelItemModal
        open={showDelItemModal}
        onClose={toggleDelItemModal}
        handleSubmit={handleDelItem}
      />
    </Stack>
  )
}

export default Expense
