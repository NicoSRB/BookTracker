import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export function BookStatusSelect({ value, onChange }: Props) {
  return (
    <FormControl fullWidth>
      <InputLabel>Status</InputLabel>
      <Select
        label="Status"
        value={value}
        onChange={e => onChange(e.target.value)}
      >
        <MenuItem value="WANT_TO_READ">Want to Read</MenuItem>
        <MenuItem value="READING">Reading</MenuItem>
        <MenuItem value="COMPLETED">Completed</MenuItem>
      </Select>
    </FormControl>
  );
}
