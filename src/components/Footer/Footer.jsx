import { Box, Container, Typography, Link, Grid, Paper } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        px: 2,
        mt: 'auto',
        background: 'linear-gradient(100deg, rgba(255,255,255,0.98) 0%, rgba(249,250,251,0.98) 100%)',
        borderTop: '1px solid rgba(0,0,0,0.06)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 4 }}>
              <Typography 
                variant="h5" 
                component="h2"
                sx={{ 
                  fontWeight: 700,
                  mb: 3,
                  letterSpacing: '-0.02em',
                  background: 'linear-gradient(135deg, #2563eb, #1e40af)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Contact Information
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Paper 
                    elevation={0}
                    sx={{ 
                      p: 2,
                      borderRadius: '16px',
                      backgroundColor: 'rgba(37, 99, 235, 0.02)',
                      border: '1px solid rgba(37, 99, 235, 0.05)',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(37, 99, 235, 0.04)',
                        transform: 'translateY(-2px)',
                        borderColor: 'rgba(37, 99, 235, 0.1)',
                      }
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <MailOutlineIcon sx={{ color: '#2563eb', fontSize: 24 }} />
                      <Link 
                        href="mailto:suresh.manghwar@gmail.com" 
                        sx={{ 
                          display: 'flex',
                          alignItems: 'center',
                          textDecoration: 'none',
                          color: '#1a1a1a',
                          transition: 'color 0.2s ease',
                          '&:hover': {
                            color: '#2563eb',
                          }
                        }}
                      >
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                          suresh.manghwar@gmail.com
                        </Typography>
                      </Link>
                    </Box>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Paper 
                    elevation={0}
                    sx={{ 
                      p: 2,
                      borderRadius: '16px',
                      backgroundColor: 'rgba(37, 99, 235, 0.02)',
                      border: '1px solid rgba(37, 99, 235, 0.05)',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(37, 99, 235, 0.04)',
                        transform: 'translateY(-2px)',
                        borderColor: 'rgba(37, 99, 235, 0.1)',
                      }
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <PhoneInTalkIcon sx={{ color: '#2563eb', fontSize: 24 }} />
                      <Link 
                        href="tel:+923131136263" 
                        sx={{ 
                          display: 'flex',
                          alignItems: 'center',
                          textDecoration: 'none',
                          color: '#1a1a1a',
                          transition: 'color 0.2s ease',
                          '&:hover': {
                            color: '#2563eb',
                          }
                        }}
                      >
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                          +92-313-1136263
                        </Typography>
                      </Link>
                    </Box>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Paper 
                    elevation={0}
                    sx={{ 
                      p: 2,
                      borderRadius: '16px',
                      backgroundColor: 'rgba(37, 99, 235, 0.02)',
                      border: '1px solid rgba(37, 99, 235, 0.05)',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(37, 99, 235, 0.04)',
                        transform: 'translateY(-2px)',
                        borderColor: 'rgba(37, 99, 235, 0.1)',
                      }
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <GitHubIcon sx={{ color: '#2563eb', fontSize: 24 }} />
                      <Link 
                        href="https://github.com/Suresh-cs-q" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        sx={{ 
                          display: 'flex',
                          alignItems: 'center',
                          textDecoration: 'none',
                          color: '#1a1a1a',
                          transition: 'color 0.2s ease',
                          '&:hover': {
                            color: '#2563eb',
                          }
                        }}
                      >
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                          github.com/Suresh-cs-q
                        </Typography>
                      </Link>
                    </Box>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Paper 
                    elevation={0}
                    sx={{ 
                      p: 2,
                      borderRadius: '16px',
                      backgroundColor: 'rgba(37, 99, 235, 0.02)',
                      border: '1px solid rgba(37, 99, 235, 0.05)',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(37, 99, 235, 0.04)',
                        transform: 'translateY(-2px)',
                        borderColor: 'rgba(37, 99, 235, 0.1)',
                      }
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <LinkedInIcon sx={{ color: '#2563eb', fontSize: 24 }} />
                      <Link 
                        href="https://linkedin.com/in/sureshkumar-cs" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        sx={{ 
                          display: 'flex',
                          alignItems: 'center',
                          textDecoration: 'none',
                          color: '#1a1a1a',
                          transition: 'color 0.2s ease',
                          '&:hover': {
                            color: '#2563eb',
                          }
                        }}
                      >
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                          linkedin.com/in/sureshkumar-cs
                        </Typography>
                      </Link>
                    </Box>
                  </Paper>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box 
              sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                alignItems: { xs: 'center', md: 'flex-end' },
                mt: { xs: 2, md: 0 }
              }}
            >
              <Typography 
                variant="body2" 
                sx={{ 
                  color: '#64748b',
                  textAlign: { xs: 'center', md: 'right' }
                }}
              >
                © {currentYear} Suresh Kumar. All rights reserved.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
