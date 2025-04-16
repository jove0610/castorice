import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { modalStyle } from './styles';

interface DelItemModalProps {
  open: boolean;
  onClose: () => void;
  handleSubmit: () => void;
}

function DelItemModal(props: DelItemModalProps) {
  const {
    open,
    onClose,
    handleSubmit
  } = props

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-delete-expense"
      aria-describedby="modal-delete-expense-confirmation"
    >
      <Stack sx={modalStyle} >
        <Typography variant="h6" component="h2">
          Are you sure you want to delete?
        </Typography>
          <Stack direction='row' gap={2} mt={2}>
            <Button variant='contained' onClick={handleSubmit}>Yes</Button>
            <Button variant='outlined' onClick={onClose}>
              No
            </Button>
          </Stack>
      </Stack>
    </Modal>
  );
}

export default DelItemModal;
