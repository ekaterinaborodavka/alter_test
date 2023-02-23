import React from "react";
import { useTranslation } from "react-i18next";

import {
  Card,
  Container,
  CardMedia,
  Typography,
  CardContent,
} from "@mui/material";

export const ProfilePage = () => {
  const { t } = useTranslation();

  return (
    <Container sx={{ mt: 10 }}>
      <Typography gutterBottom variant="h4" component="h4">
        {t("profile")}
      </Typography>
      <Card elevation={1} sx={{ alignItems: "center", display: "flex" }}>
        <CardMedia
          component="img"
          sx={{ height: 250, width: "auto" }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRog6epfJWr_aK4Q5m5o6OYOGoJAHZMpky4mA&usqp=CAU"
          title={t("user")}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {t("user")}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {t("profileText")}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};
