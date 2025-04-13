import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

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
      <Stack sx={style} >
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
