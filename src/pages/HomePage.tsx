import React from "react";
import { useTranslation } from "react-i18next";

import { Card, CardContent, CardHeader, Container } from "@mui/material";

export const HomePage = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Card elevation={0}>
        <CardHeader title={t("home")} />
        <CardContent>{t("homeText")}</CardContent>
      </Card>
    </Container>
  );
};
