import { VisibilityOff } from "@mui/icons-material";
import { InputAdornment, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

const MuiTextField = () => {
  const [value, setValue] = useState<string>("");

  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label="Name" />
        <TextField label="Name" variant="standard" disabled />
        <TextField label="Name" variant="filled" />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField
          label="Small secondary"
          variant="filled"
          color="secondary"
          size="small"
        />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField
          label="Form Input"
          required
          error={!value}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          helperText={!value ? "Required" : null}
        />
        <TextField
          label="Password"
          type="password"
          helperText="Do not share your password with anyone."
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <VisibilityOff />
              </InputAdornment>
            ),
          }}
        />
        <TextField label="Readonly" InputProps={{ readOnly: true }} />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
};

export default MuiTextField;
