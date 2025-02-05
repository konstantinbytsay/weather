// src/App.tsx
import React, { useState } from "react";
import { Button, Container, Typography } from "@mui/material";

const App: React.FC = () => {
  const [counter, setCounter] = useState(0);

  return (
    <Container>
      <Typography variant="h1" component="h1" gutterBottom>
        This is weather app
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setCounter(counter + 1)}
      >
        Click Me
      </Button>
      <Typography>{counter}</Typography>
    </Container>
  );
};

export default App;
