import { Box, Button, Drawer, Grid2, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { CreateComment } from "../create-comment";
import CloseIcon from "@mui/icons-material/Close";

const ListComments = ({ openCommentBox, closeCommentBox, currPost }) => {
  const endpoint = process.env.REACT_APP_COMMENTS_SERVICE_ENDPOINT;
  const [openDrawer, setOpenDrawer] = useState(openCommentBox);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get(endpoint + `/${currPost.id}/comments`)
      .then((res) => {
        setComments(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleClose = () => {
    closeCommentBox(false);
    setOpenDrawer(false);
  };

  return (
    <Drawer anchor="right" open={openDrawer} onClose={handleClose}>
      <Box sx={{ marginLeft: "auto", marginTop: "1rem" }}>
        <Button size="large" onClick={handleClose}>
          <CloseIcon />
        </Button>
      </Box>
      <Box
        sx={{
          minWidth: "600px",
          height: "100%",
          padding: "0px 20px 10px 20px",
        }}
      >
        <Box sx={{ padding: "5px 20px 0px 20px  " }}>
          <Typography variant="h4" sx={{ margin: 2 }}>
            {currPost.title}'s comments
          </Typography>
          {comments && comments.length > 0 ? (
            <Box
              sx={{
                overflowY: "scroll",
                height: "60vh",
                position: "relative",
              }}
            >
              <Paper sx={{ maxWidth: "500px", padding: "40px 20px" }}>
                <Box>
                  <Grid2 container spacing={4}>
                    {comments.map((comment) => {
                      return (
                        <Grid2 size={12} justifyContent="left" key={comment.id}>
                          <h4 style={{ margin: 0, textAlign: "left" }}>
                            {comment.id}
                          </h4>
                          <p style={{ textAlign: "left" }}>{comment.content}</p>
                          <p style={{ textAlign: "left", color: "gray" }}>
                            posted 1 minute ago
                          </p>
                        </Grid2>
                      );
                    })}
                  </Grid2>
                </Box>
              </Paper>
            </Box>
          ) : (
            <Box
              sx={{
                margin: "1rem",
                position: "absolute",
                top: "50%",
                left: "40%",
              }}
            >
              <Typography>No comments yet!</Typography>
            </Box>
          )}
        </Box>
      </Box>
      <Box
        sx={{
          margin: "1rem 2rem",
        }}
      >
        <CreateComment post={currPost} />
      </Box>
    </Drawer>
  );
};

export { ListComments };
