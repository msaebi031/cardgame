import React, { useState } from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar, Button, MenuItem, Link } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const pages = [
  { name: 'ویژگی های ربات', href: "#Property" },
  { name: 'قابلیت های ربات', href: "#Ability" },
  { name: "جوایز ها", href: "#awards" },
  { name: 'ادمین ها', href: "#admins" },
  { name: "ربات حکم", href: "https://t.me/PersianCards_bot" },
  { name: "ربات  شلم", href: "https://t.me/Shelem_Jokerbot" }
];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar className="bg-navbar" position="fixed">
      <Container maxWidth="xl">
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page, index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  <Link href={page.href} >
                    <Typography color="light" variant='body2' className="font-light" textAlign="center">{page.name}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page, index) => (
              <Button
                href={page.href}
                size='small'
                className="font-light"
                key={index}
                onClick={handleCloseNavMenu}
                sx={{ my: 1.5, mx: 1.4, color: 'gray', display: 'block' }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
          <Box className='flexgrow-0'>
            <Avatar className='avatar-nav' variant="square" alt="Remy Sharp" src="/img/logo.png" />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
