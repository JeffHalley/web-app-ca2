import React, { useState, useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useNavigate } from "react-router-dom";
import { styled } from '@mui/material/styles';
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { AuthContext } from "../../contexts/authContext";

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const SiteHeader = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const context = useContext(AuthContext);
  const navigate = useNavigate();

  const menuOptions = [
    { label: "Home", path: "/" },
    { label: "Favorites", path: context.isAuthenticated ? "/movies/favorites" : "/login" },
    { label: "Upcoming", path: "/movies/upcoming" },
    { label: "Now Playing", path: "/movies/now_playing" },
    { label: "Popular", path: "/movies/popular" },
    { label: "Sign in", path: "/login", hideWhenAuth: true },
    { label: "Sign up", path: "/signup", hideWhenAuth: true },
    { label: "Log out", path: "/", action: () => context.signout(), showWhenAuth: true },
  ];

  const handleMenuSelect = (pageURL) => {
    navigate(pageURL, { replace: true });
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: "rgb(156, 39, 176)" }}>
        <Toolbar>
          <Typography variant="h4" sx={{ flexGrow: 1, color: 'white' }}>
            TMDB Client
          </Typography>
          <Typography variant="h6" sx={{ flexGrow: 1, color: 'white' }}>
            {context.isAuthenticated ? `Hi ${context.userName}, Welcome Back!` : "All you ever wanted to know about Movies!"}
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                sx={{ color: 'white' }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                {menuOptions.map((opt) => (
                  (!opt.hideWhenAuth || !context.isAuthenticated) &&
                  (!opt.showWhenAuth || context.isAuthenticated) && (
                    <MenuItem
                      key={opt.label}
                      onClick={() => opt.action ? opt.action() : handleMenuSelect(opt.path)}
                    >
                      {opt.label}
                    </MenuItem>
                  )
                ))}
              </Menu>
            </>
          ) : (
            <>
              {menuOptions.map((opt) => (
                (!opt.hideWhenAuth || !context.isAuthenticated) &&
                (!opt.showWhenAuth || context.isAuthenticated) && (
                  <Button
                    key={opt.label}
                    color="inherit"
                    onClick={() => opt.action ? opt.action() : handleMenuSelect(opt.path)}
                    sx={{ color: 'white' }}
                  >
                    {opt.label}
                  </Button>
                )
              ))}
            </>
          )}
        </Toolbar>
      </AppBar>
      <Offset />
    </>
  );
};

export default SiteHeader;
