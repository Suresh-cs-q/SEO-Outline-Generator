import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import Slide from '@mui/material/Slide';
import { NAV_LINKS } from '../../constants';

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Track scroll position to add shadow when scrolled
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Slide appear={false} direction="down" in={true}>
      <AppBar 
        position="sticky" 
        elevation={scrolled ? 3 : 0}
        sx={{ 
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: scrolled 
            ? '0 8px 32px -2px rgba(0, 0, 0, 0.08)' 
            : 'none',
          background: 'linear-gradient(100deg, rgba(255,255,255,0.98) 0%, rgba(249,250,251,0.98) 100%)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(0,0,0,0.06)',
          color: '#1a1a1a'
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ py: { xs: 1.5, md: 2 } }}>
            {/* Desktop Logo */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
              <AutoAwesomeIcon 
                sx={{ 
                  mr: 1.5, 
                  fontSize: 28,
                  color: '#2563eb',
                  animation: 'pulse 3s infinite',
                  '@keyframes pulse': {
                    '0%': { opacity: 0.8, transform: 'scale(0.95)' },
                    '50%': { opacity: 1, transform: 'scale(1.05)' },
                    '100%': { opacity: 0.8, transform: 'scale(0.95)' },
                  }
                }} 
              />
              <Typography
                variant="h5"
                noWrap
                component={Link}
                to="/"
                sx={{
                  mr: 3,
                  fontWeight: 700,
                  letterSpacing: '-0.01rem',
                  color: '#1a1a1a',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    transform: 'translateY(-1px)',
                    color: '#2563eb',
                  }
                }}
              >
                SEO Outline Generator
              </Typography>
            </Box>

            {/* Mobile Menu */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                sx={{
                  color: '#1a1a1a',
                  border: '1px solid rgba(0,0,0,0.08)',
                  borderRadius: '12px',
                  padding: '8px',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(37,99,235,0.04)',
                    borderColor: '#2563eb',
                  }
                }}
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
                  '& .MuiPaper-root': {
                    borderRadius: '16px',
                    boxShadow: '0 10px 40px -10px rgba(0,0,0,0.15)',
                    mt: 1.5,
                    border: '1px solid rgba(0,0,0,0.08)',
                    background: 'rgba(255,255,255,0.98)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                  },
                }}
              >
                {NAV_LINKS.map((page) => (
                  <MenuItem 
                    key={page.name} 
                    onClick={handleCloseNavMenu}
                    component={Link}
                    to={page.path}
                    selected={location.pathname === page.path}
                    sx={{
                      my: 0.5,
                      mx: 1,
                      borderRadius: '12px',
                      backgroundColor: location.pathname === page.path 
                        ? 'rgba(37,99,235,0.04)' 
                        : 'transparent',
                      '&:hover': {
                        backgroundColor: 'rgba(37,99,235,0.04)',
                      },
                      transition: 'all 0.2s ease',
                      '&:active': {
                        transform: 'scale(0.98)',
                      }
                    }}
                  >
                    <Typography 
                      textAlign="center"
                      fontWeight={location.pathname === page.path ? 600 : 500}
                      color={location.pathname === page.path ? '#2563eb' : '#1a1a1a'}
                      sx={{
                        fontSize: '0.95rem',
                        transition: 'all 0.2s ease',
                        '&:hover': {
                          color: '#2563eb',
                        }
                      }}
                    >
                      {page.name}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* Mobile Logo */}
            <Box 
              sx={{ 
                display: { xs: 'flex', md: 'none' }, 
                flexGrow: 1, 
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <AutoAwesomeIcon sx={{ mr: 1, color: '#2563eb' }} />
              <Typography
                variant="h6"
                noWrap
                component={Link}
                to="/"
                sx={{
                  fontWeight: 700,
                  color: '#1a1a1a',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    color: '#2563eb',
                  }
                }}
              >
                SEO Generator
              </Typography>
            </Box>

            {/* Desktop Menu */}
            <Box sx={{ 
              flexGrow: 1, 
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'flex-end',
              gap: 1
            }}>
              {NAV_LINKS.map((page) => {
                const isActive = location.pathname === page.path;
                return (
                  <Button
                    key={page.name}
                    component={Link}
                    to={page.path}
                    selected={isActive}
                    sx={{
                      color: isActive ? '#2563eb' : '#1a1a1a',
                      fontWeight: isActive ? 600 : 500,
                      fontSize: '0.95rem',
                      textTransform: 'none',
                      borderRadius: '12px',
                      px: 2.5,
                      py: 1,
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(37,99,235,0.04)',
                        color: '#2563eb',
                        transform: 'translateY(-1px)',
                      },
                      '&:active': {
                        transform: 'translateY(0) scale(0.98)',
                      },
                      '&.Mui-selected': {
                        backgroundColor: 'rgba(37,99,235,0.04)',
                      }
                    }}
                  >
                    {page.name}
                  </Button>
                );
              })}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Slide>
  );
}

export default Navbar;
