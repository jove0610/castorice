import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from "@mui/material/Stack";
import Expense from "./expense/Expense"

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Stack maxWidth={560} mx='auto' p={2.5}>
          <Expense />
        </Stack>
      </ThemeProvider>
    </LocalizationProvider>
  ) 
}

export default App
