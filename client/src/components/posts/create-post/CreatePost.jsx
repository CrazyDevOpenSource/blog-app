import axios from "axios";
import { useState } from "react";
import SendIcon from "@mui/icons-material/Send";

const {
  Box,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
} = require("@mui/material");

export const CreatePost = () => {
  const endpoint = process.env.REACT_APP_POSTS_SERVICE_ENDPOINT;

  const [title, setTitle] = useState("");

  const submitPost = async () => {
    if (!title || title.length <= 0) return;
    await axios
      .post(endpoint, {
        title,
      })
      .then(() => {
        setTitle("");
      });
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <FormControl sx={{ m: 1 }} fullWidth variant="standard">
        <InputLabel htmlFor="add-post">What's on your mind...</InputLabel>
        <Input
          fullWidth
          multiline
          rows={4}
          id="add-post"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          sx={{
            width: "95%",
          }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="add-post"
                onClick={submitPost}
                edge="end"
                sx={{
                  color: "#1876d2",
                }}
              >
                <SendIcon
                  sx={{
                    ":hover": {
                      animation: "doPost 2s linear 0s 1 normal forwards;",
                      "@keyframes doPost": {
                        "0%, 50%, 100%": {
                          opacity: 1,
                        },
                        "25%, 75%": {
                          opacity: 0,
                        },
                      },
                    },
                  }}
                />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      {/* <TextField
        fullWidth
        id="outlined-multiline-static"
        label="Create new post"
        multiline
        placeholder="Do epic shit!"
        rows={4}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
        sx={{
          width: "500px",
        }}
      />
      <Button
        variant="contained"
        sx={{
          margin: "2rem",
        }}
        onClick={submitPost}
      >
        <SendIcon
          sx={{
            animation: "postComment 2s linear 0s 1 normal forwards;",
            "@keyframes postComment": {
              "0%, 50%, 100%": {
                opacity: 1,
              },
              "25%, 75%": {
                opacity: 0,
              },
            },
          }}
        />
      </Button> */}
    </Box>
  );
};
