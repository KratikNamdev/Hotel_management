import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained">Profile</Button>
      <Button variant="contained">notification</Button>
      <Button variant="contained">Logout</Button>
    </Stack>
  );
}

