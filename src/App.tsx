import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import CssBaseline from '@mui/material/CssBaseline';
import Stack from "@mui/material/Stack";
import Expense from "./expense/Expense"


function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <CssBaseline />
      <Stack maxWidth={560} mx='auto' p={2.5}>
        <Expense />
      </Stack>
    </LocalizationProvider>
  ) 
}

export default App
