import dayjs from 'dayjs';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { modalStyle } from './styles';

interface AddItemModalProps {
  open: boolean;
  onClose: () => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

function AddItemModal(props: AddItemModalProps) {
  const {
    open,
    onClose,
    handleSubmit
  } = props

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-add-expense"
      aria-describedby="modal-add-expense-form"
    >
      <Stack sx={modalStyle} component='form' onSubmit={handleSubmit}>
        <Typography variant="h6" component="h2">
          Add Expense
        </Typography>
        <Stack gap={2} mt={2}>
          <DatePicker
            label='Date'
            name='registeredDate'
            format='ll'
            defaultValue={dayjs()}
          />
          <TextField label='Description' name='description' size="small" />
          <TextField label='Amount' name='amount' size="small" />
          <Stack direction='row' gap={2}>
            <Button type="submit" variant='contained'>Add</Button>
            <Button onClick={onClose} variant='outlined'>
              Close
            </Button>
          </Stack>
        </Stack>
      </Stack >
    </Modal>
  );
}

export default AddItemModal;
