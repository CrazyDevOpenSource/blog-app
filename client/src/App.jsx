import React from "react";
import Box from "@mui/material/Box";
import { CreatePost, ListPosts } from "./components";
import { Typography } from "@mui/material";

const App = () => {
  return (
    <Box
      sx={{
        margin: "2rem",
      }}
    >
      <Box
        sx={{
          padding: 5,
          boxShadow: "1px 0px 15px 0px rgba(66,65,66,1)",
        }}
      >
        <Typography variant="h5">Create new post</Typography>
        <Box
          sx={{
            padding: "2rem 0",
          }}
        >
          <CreatePost />
        </Box>
        <Typography variant="h5">Published timeline</Typography>
        <Box
          sx={{
            marginTop: "2rem",
          }}
        >
          <ListPosts />
        </Box>
      </Box>
    </Box>
  );
};

export default App;
