import React, { useState, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import { toast } from "react-toastify";
import {
  CircularProgress,
  Stack,
  Container,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { PostCard } from "../components";
import { AppDispatch, IRootState } from "../store/";
import { getPosts } from "../store/slice/postSlice";

export const NewsPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { t } = useTranslation();

  const postsData = useSelector((state: IRootState) => state.posts);
  const { error, loading, posts, deleteError } = postsData;
  const [limit, setLimit] = useState<number>(10);

  useEffect(() => {
    dispatch(getPosts(limit));
  }, [limit, dispatch]);

  const loadNewPosts = useCallback(() => {
    setLimit((limit) => limit + 10);
  }, [setLimit]);

  if (loading && !posts.length) {
    return (
      <Stack alignItems="center" justifyContent="center" height="90vh">
        <CircularProgress color="secondary" size={70} />
      </Stack>
    );
  }

  if (error || deleteError) {
    toast.error(deleteError ? "Deletion error " : "Failed to fetch", {
      position: "top-right",
    });
  }

  return (
    <Container sx={{ mt: 10, mb: 5, justifyContent: "end" }}>
      <Typography gutterBottom variant="h4" component="h4">
        {t("posts")}
      </Typography>
      {posts &&
        posts.map((item: any) => <PostCard post={item} key={item.id} />)}
      <Box display="flex" justifyContent="end">
        <Button
          size="large"
          color="success"
          variant="contained"
          onClick={loadNewPosts}
          disabled={limit === 100}
        >
          {t("postsLoad")}
        </Button>
      </Box>
    </Container>
  );
};
