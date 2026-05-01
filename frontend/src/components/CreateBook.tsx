import { gql } from "@apollo/client";
import { useMutation } from "@apollo/client/react";
import { useState } from "react";
import {
  Card,
  CardContent,
  TextField,
  Button,
  Stack,
  Typography,
} from "@mui/material";
import { BookStatusSelect } from "./BookStatusSelect";

const CREATE_BOOK = gql`
  mutation ($title: String!, $status: BookStatus!) {
    createBook(title: $title, status: $status) {
      id
      title
      status
    }
  }
`;

export function CreateBook() {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("WANT_TO_READ");

  const [createBook] = useMutation(CREATE_BOOK, {
    refetchQueries: ["GetBooks"],
  });

  const handleSubmit = () => {
    if (!title.trim()) return;
    createBook({ variables: { title, status } });
    setTitle("");
    setStatus("WANT_TO_READ");
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" mb={2}>
          Add a Book
        </Typography>

        <Stack spacing={2}>
          <TextField
            label="Book Title"
            variant="outlined"
            value={title}
            onChange={e => setTitle(e.target.value)}
            fullWidth
          />

          <BookStatusSelect value={status} onChange={setStatus} />

          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            sx={{ alignSelf: "flex-start" }}
          >
            Add Book
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}
