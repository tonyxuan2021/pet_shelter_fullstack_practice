import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { theme } from "../theme/theme";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1, mb: 2 }}>
      <AppBar
        position="static"
        sx={{ background: "transparent", boxShadow: "none" }}
      >
        <Toolbar sx={{ justifyContent: "space-between", p: 0 }}>
          <IconButton
            size="large"
            edge="start"
            color="primary"
            aria-label="menu"
            // sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="primary"
          >
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
