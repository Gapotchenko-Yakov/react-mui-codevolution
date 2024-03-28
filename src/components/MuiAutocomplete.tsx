import { Autocomplete, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

const options = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Sass",
  "Less",
  "Webpack",
  "Babel",
  "TypeScript",
  "GraphQL",
];

const skillOptions = options.map((label, index) => ({
  id: index,
  label,
}));

type Skill = {
  id: number;
  label: string;
};

const MuiAutocomplete = () => {
  const [value, setValue] = useState<string | null>(null);
  const [skill, setSkill] = useState<Skill | null>(null);
  console.log("🚀 ~ MuiAutocomplete ~ skill:", skill);

  return (
    <Stack spacing={2} width="250px">
      <Autocomplete
        value={value}
        onChange={(_event, value: string | null) => setValue(value)}
        freeSolo
        options={options}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Skills"
            size="small"
            color="secondary"
          />
        )}
      />
      <Autocomplete
        value={skill}
        onChange={(_event, value: Skill | null) => setSkill(value)}
        options={skillOptions}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Skills"
            size="small"
            color="secondary"
          />
        )}
      />
    </Stack>
  );
};

export default MuiAutocomplete;
