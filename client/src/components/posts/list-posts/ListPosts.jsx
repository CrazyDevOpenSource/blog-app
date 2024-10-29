import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Skeleton,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useEffect, useState } from "react";
import axios from "axios";
import { ListComments } from "../../comments";
import CommentIcon from "@mui/icons-material/Comment";

export const ListPosts = () => {
  const endpoint = process.env.REACT_APP_POSTS_SERVICE_ENDPOINT;
  const [posts, setPosts] = useState([]);
  const [openCommentDialog, setOpenCommentDialog] = useState(false);
  const [currPost, setCurrPost] = useState({});

  var cardStyle = {
    display: "block",
    width: "20vw",
    transitionDuration: "0.3s",
    height: "10vw",
  };

  useEffect(() => {
    axios.get(endpoint).then((res) => {
      setPosts(res.data);
    });
  }, []);

  return (
    <>
      <Grid container spacing={2} rowSpacing={3}>
        {posts && posts.length > 0
          ? posts.map((post) => {
              return (
                <Box key={post.id}>
                  <Grid size={{ xs: 6, md: 8 }}>
                    <Card sx={{ minWidth: 275 }} style={cardStyle}>
                      <CardContent>
                        <Typography
                          gutterBottom
                          sx={{ color: "text.secondary", fontSize: 14 }}
                        >
                          {post.id}
                        </Typography>
                        <Typography variant="body2">{post.title}</Typography>
                      </CardContent>
                      <CardActions
                        sx={{
                          display: "flex",
                          justifyContent: "end",
                        }}
                      >
                        <Button
                          size="small"
                          variant="text"
                          onClick={() => {
                            setCurrPost(post);
                            setOpenCommentDialog(true);
                          }}
                        >
                          <CommentIcon />
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                </Box>
              );
            })
          : Array.from(new Array(8)).map((item, index) => (
              <Box key={index}>
                <Grid size={{ xs: 6, md: 8 }}>
                  <Skeleton variant="rectangular" width={302} height={150} />
                </Grid>
              </Box>
            ))}
      </Grid>

      {openCommentDialog && (
        <ListComments
          openCommentBox={openCommentDialog}
          closeCommentBox={setOpenCommentDialog}
          currPost={currPost}
        />
      )}
    </>
  );
};
