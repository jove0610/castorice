import dayjs from "dayjs";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import mockData from "./mockData";
import { formatExpenseItems, currencyFormatter } from "./helpers";

function Expense() {
  const formattedExpenses = formatExpenseItems(mockData);

  return (
    <Stack gap={3}>
      <Typography variant="h3">
        Expense
      </Typography>

      <Stack>
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
                    {expenses.map(({description, amount}) => (
                      <TableRow
                        key={`${description}-${amount}`}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
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
    </Stack>
  )
}

export default Expense
