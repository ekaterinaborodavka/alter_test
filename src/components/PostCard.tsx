import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import {
  Card,
  CardHeader,
  Typography,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import { IPost } from "../store/types";
import { AppDispatch } from "../store/";
import { deletePostById } from "../store/slice/postSlice";

interface IPostCard {
  post: IPost;
}

export const PostCard = ({ post }: IPostCard) => {
  const { t } = useTranslation();
  const { body, title, id } = post;
  const dispatch = useDispatch<AppDispatch>();

  const onDeletePost = useCallback(() => {
    dispatch(deletePostById(id));
  }, [id, dispatch]);

  return (
    <Card elevation={6} sx={{ mb: 3 }}>
      <CardHeader title={title} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="medium" color="error" onClick={onDeletePost}>
          {t("delete")}
        </Button>
      </CardActions>
    </Card>
  );
};
