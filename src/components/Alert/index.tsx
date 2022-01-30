import {FC, memo} from 'react';
import Alert, { AlertColor } from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

interface Props {
  severity: AlertColor | undefined;
  title: string;
  message: string;
  strongMessage: string;
}

const AlertMessage: FC<Props> = ({severity, title, message, strongMessage}) => {
  return (
    <Stack sx={{ width: '100%',pt: 10 }} spacing={2}>
      <Alert severity={severity}>
        <AlertTitle>{title}</AlertTitle>
        {message} — <strong>{strongMessage}</strong>
      </Alert>
    </Stack>
  );
}
 
export default memo(AlertMessage)
