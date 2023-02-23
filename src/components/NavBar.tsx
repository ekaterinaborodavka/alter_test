import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import {
  Toolbar,
  AppBar,
  Box,
  Button,
  Container,
  ButtonGroup,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { LogInModal } from "./LogInModal";
import { IRootState } from "../store/";

import "./style.css";

const navItems: { name: string; path: string }[] = [
  { name: "home", path: "/" },
  { name: "news", path: "/news" },
  { name: "profile", path: "/profile" },
];

export const NavBar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const authUser = useSelector((state: IRootState) => state.authUser.auth);

  const { t, i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    console.log(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <AppBar
      component="nav"
      sx={{
        background: "#212121",
        alignItems: "baseline",
        flexDirection: "row",
      }}
    >
      <ButtonGroup
        color="success"
        aria-label="medium secondary button group"
        sx={{ ml: 1 }}
      >
        <Button onClick={() => changeLanguage("en")}>EN</Button>
        <Button onClick={() => changeLanguage("ua")}>UA</Button>
      </ButtonGroup>
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "end" }}>
          <Box>
            {navItems.map((item) => (
              <NavLink to={item.path} className="nav-link" key={item.path}>
                {t(item.name)}
              </NavLink>
            ))}
          </Box>
        </Toolbar>
        {!authUser && (
          <Button
            color="success"
            onClick={() => setOpen(true)}
            sx={{ p: 0, fontWeight: "600", fontSize: "20px" }}
          >
            {t("logIn")}
          </Button>
        )}
      </Container>
      <LogInModal open={open} setOpen={setOpen} />
    </AppBar>
  );
};
