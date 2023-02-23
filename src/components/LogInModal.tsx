import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import {
  Button,
  DialogContentText,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { authUser } from "../store/slice/authSlice";

interface ILogInModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LogInModal = ({ open, setOpen }: ILogInModalProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const handleClose = () => {
    setOpen(false);
    setError(false);
  };

  const onLogIn = useCallback(() => {
    if (name === "admin" && password === "12345") {
      setOpen(false);
      setError(false);
      navigate("/profile");
      localStorage.setItem("token", JSON.stringify(name));
      dispatch(authUser());
    } else {
      setError(true);
    }
  }, [name, password, setOpen, setError, navigate, dispatch]);

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{t("logIn")}</DialogTitle>
        <DialogContent>
          {error && (
            <DialogContentText sx={{ color: "red" }}>
              {t("logInErr")}
            </DialogContentText>
          )}
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label={t("name")}
            fullWidth
            variant="standard"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            margin="dense"
            id="password"
            label={t("password")}
            type="password"
            fullWidth
            variant="standard"
            onChange={(e) => setPassword(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{t("сancel")}</Button>
          <Button onClick={onLogIn}>{t("logIn")}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
