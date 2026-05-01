import { ApolloProvider } from "@apollo/client/react";
import {
  ThemeProvider,
  CssBaseline,
  Container,
  Box,
  Typography,
} from "@mui/material";
import { theme } from "./theme";
import { client } from "./apolloClient";
import { BookList } from "./components/BookList";
import { CreateBook } from "./components/CreateBook";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="md">
          <Box py={6}>
            <Typography variant="h3" gutterBottom>
              Book Tracker
            </Typography>

            <CreateBook />

            <Box mt={6}>
              <BookList />
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </ApolloProvider>
  );
}
