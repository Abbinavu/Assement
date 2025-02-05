import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useSpring, animated } from "@react-spring/web";

const Counter = () => {
  const [count, setCount] = useState(0);

  const bgSpring = useSpring({
    backgroundColor: `rgba(100, 149, 237, ${Math.min(count * 0.1, 1)})`,
    config: { tension: 120, friction: 14 },
  });

  return (
    <animated.div style={{ ...bgSpring, padding: "20px", borderRadius: "10px" }}>
      <Typography variant="h4">Counter: {count}</Typography>
      <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
        <Button variant="contained" onClick={() => setCount(count + 1)}>Increment</Button>
        <Button variant="contained" color="warning" onClick={() => setCount(count - 1)}>Decrement</Button>
        <Button variant="contained" color="error" onClick={() => setCount(0)}>Reset</Button>
      </Box>
    </animated.div>
  );
};

export default Counter;
