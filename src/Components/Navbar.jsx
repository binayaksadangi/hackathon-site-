import React from "react";
import logo from "../assets/dphi_logo.png";
import { AppBar, Container, Box, Toolbar, Link } from "@mui/material";
// import AdbIcon from '@mui/icons-material/Adb';
const Navbar = () => {
  return (
    <>
      <AppBar position="static" elevation={0} sx={{ height: "74px" }}>
        <Container maxWidth="xl">
          <Toolbar>
            <Link href="/">
              <Box component="img" sx={{ height: 41 }} alt="Logo" src={logo} />
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;
