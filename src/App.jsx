import { useState } from "react";
import { Button, Container, Slider, Typography } from "@mui/joy";

function App() {
  const [likes, setLikes] = useState(42);

  function handleChange(e, v) {
    setLikes(v);
  }

  return (
    <Container>
      <Typography level="h2">
        Welcome!
      </Typography>
      <Slider
        color="danger"
        size="lg"
        value={likes}
        defaultValue={likes}
        onChange={handleChange}
      />
      <Button
        onClick={() => setLikes(likes + 1)}
      >
        {likes} ❤️
      </Button>
      <p>
        <Typography level="body2">
          Made by me, James Tennant: jorahty.com
        </Typography>
      </p>
    </Container>
  );
}

export default App;
