import {
  Box,
  Input,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import PropTypes from "prop-types";
import React, { useState } from "react";
import AddCommentIcon from "@mui/icons-material/AddComment";
import axios from "axios";

const CreateComment = ({ post }) => {
  const endpoint = process.env.REACT_APP_COMMENTS_SERVICE_ENDPOINT;
  const [comment, setComment] = useState("");

  const createComment = async () => {
    if (!comment || comment.length <= 0) return;

    await axios.post(endpoint + `/${post.id}/comments`, {
      content: comment,
    });
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box>
        <FormControl sx={{ m: 1 }} fullWidth variant="standard">
          <InputLabel htmlFor="add-comment">Add a comment...</InputLabel>
          <Input
            fullWidth
            multiline
            maxRows={4}
            id="add-comment"
            onChange={(event) => {
              setComment(event.target.value);
            }}
            sx={{
              width: "95%",
            }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="add-comment"
                  onClick={createComment}
                  edge="end"
                >
                  <AddCommentIcon />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </Box>
    </Box>
  );
};

CreateComment.propTypes = {
  postId: PropTypes.string,
};

export { CreateComment };
