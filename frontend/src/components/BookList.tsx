import { gql } from "@apollo/client";
import { useQuery, useMutation } from "@apollo/client/react";
import {
  Card,
  CardContent,
  Typography,
  Select,
  MenuItem,
  Stack,
  Box,
} from "@mui/material";

const GET_BOOKS = gql`
  query GetBooks {
    books {
      id
      title
      status
    }
  }
`;
const UPDATE_BOOK = gql`
  mutation UpdateBook($id: Int!, $status: BookStatus!) {
    updateBook(id: $id, status: $status) {
      id
      title
      status
    }
  }
`;

type Book = {
  id: number;
  title: string;
  status: "WANT_TO_READ" | "READING" | "COMPLETED";
};

type BooksQueryResult = {
  books: Book[];
};

const statusColors = {
  WANT_TO_READ: "secondary",
  READING: "primary",
  COMPLETED: "success",
} as const;

export function BookList() {
  const { data } = useQuery<BooksQueryResult>(GET_BOOKS, {
    fetchPolicy: "network-only",
  });
  const [updateBook] = useMutation(UPDATE_BOOK, {
    refetchQueries: [{ query: GET_BOOKS }],
  });

  if (!data) return null;

  return (
    <Stack spacing={2}>
      <Typography variant="h5">Your Books</Typography>

      {data.books.map(book => (
        <Card key={book.id}>
          <CardContent>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="body1">{book.title}</Typography>

              <Select
                size="small"
                value={book.status}
                onChange={e =>
                  updateBook({
                    variables: {
                      id: book.id,
                      status: e.target.value,
                    },
                  })
                }
                sx={{ minWidth: 150 }}
              >
                <MenuItem value="WANT_TO_READ">Want to Read</MenuItem>
                <MenuItem value="READING">Reading</MenuItem>
                <MenuItem value="COMPLETED">Completed</MenuItem>
              </Select>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Stack>
  );
}
