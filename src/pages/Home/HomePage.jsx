import { useState, useEffect } from 'react';
import { 
  Container, 
  Typography, 
  TextField, 
  Button, 
  Box, 
  Alert,
  Grid,
  Card,
  CardContent,
  Fade,
  Tooltip,
  IconButton,
  alpha
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DownloadIcon from '@mui/icons-material/Download';
import PrintIcon from '@mui/icons-material/Print';
import { generateOutline } from '../../services/apiService';

function HomePage() {
  const [topic, setTopic] = useState('');
  const [keywords, setKeywords] = useState('');
  const [loading, setLoading] = useState(false);
  const [outline, setOutline] = useState(null);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);
  const [animateEntry, setAnimateEntry] = useState(false);
  

  
  useEffect(() => {
    setAnimateEntry(true);
  }, []);

  useEffect(() => {
    let timer;
    if (copied) {
      timer = setTimeout(() => setCopied(false), 2000);
    }
    return () => clearTimeout(timer);
  }, [copied]);

  const validateInputs = () => {
    if (!topic.trim()) {
      setError('Please enter a blog topic');
      return false;
    }
    if (!keywords.trim()) {
      setError('Please enter at least one keyword');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateInputs()) return;

    setError('');
    setLoading(true);
    
    try {
      const generatedOutline = await generateOutline(topic, keywords);
      setOutline(generatedOutline);
    } catch (err) {
      setError(err.message || 'Failed to generate outline. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  
  const copyToClipboard = () => {
    if (!outline) return;
    
    navigator.clipboard.writeText(outline);
    setCopied(true);
  };
  
  const downloadOutline = () => {
    if (!outline) return;
    
    const blob = new Blob([outline], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    
    a.href = url;
    a.download = `seo-outline-${topic.replace(/\s+/g, '-').toLowerCase()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const formatOutline = (text) => {
    if (!text) return '';
    
    let formatted = text
      .replace(/\n\s*\n/g, '\n\n')
      .replace(/\s+/g, ' ')
      .replace(/\n\s+/g, '\n')
      .replace(/\s+\n/g, '\n')
      .replace(/\*\s+\*/g, '*')
      .replace(/\*\*\s+\*\*/g, '**')
      .replace(/\*\*\*\s+\*\*\*/g, '***')
      .replace(/\s+\(\s+/g, '(')
      .replace(/\s+\)\s+/g, ')')
      .replace(/\s+:\s+/g, ': ')
      .replace(/\s+,\s+/g, ', ')
      .replace(/\s+\.\s+/g, '. ')
      .replace(/\s+!\s+/g, '!')
      .replace(/\s+\?\s+/g, '?');

    formatted = formatted
      .replace(/Blog Title:\s*(.*?)\n/g, '<div class="section-title">$1</div>')
      .replace(/Meta Description:\s*(.*?)\n/g, '<div class="meta-description">$1</div>')
      .replace(/Blog Post Outline:\s*(.*?)\n/g, '<div class="blog-outline">$1</div>')
      .replace(/I\.\s*(.*?)\n/g, '<div class="main-section"><h3>I. $1</h3>')
      .replace(/II\.\s*(.*?)\n/g, '<div class="main-section"><h3>II. $1</h3>')
      .replace(/III\.\s*(.*?)\n/g, '<div class="main-section"><h3>III. $1</h3>')
      .replace(/IV\.\s*(.*?)\n/g, '<div class="main-section"><h3>IV. $1</h3>')
      .replace(/V\.\s*(.*?)\n/g, '<div class="main-section"><h3>V. $1</h3>')
      .replace(/VI\.\s*(.*?)\n/g, '<div class="main-section"><h3>VI. $1</h3>')
      .replace(/VII\.\s*(.*?)\n/g, '<div class="main-section"><h3>VII. $1</h3>');

    formatted = formatted
      .replace(/A\.\s*(.*?)\n/g, '<div class="sub-section"><h4>A. $1</h4>')
      .replace(/B\.\s*(.*?)\n/g, '<div class="sub-section"><h4>B. $1</h4>')
      .replace(/C\.\s*(.*?)\n/g, '<div class="sub-section"><h4>C. $1</h4>')
      .replace(/D\.\s*(.*?)\n/g, '<div class="sub-section"><h4>D. $1</h4>')
      .replace(/E\.\s*(.*?)\n/g, '<div class="sub-section"><h4>E. $1</h4>')
      .replace(/F\.\s*(.*?)\n/g, '<div class="sub-section"><h4>F. $1</h4>');

    formatted = formatted
      .replace(/\*\s*(.*?)\n/g, '<ul class="outline-list"><li>$1</li></ul>')
      .replace(/\*\*\*\s*(.*?)\n/g, '<ul class="nested-list"><li>$1</li></ul>');

    formatted = formatted
      .replace(/"(.*?)"/g, '<span class="keyword">$1</span>')
      .replace(/\[(.*?)\]/g, '<span class="important">$1</span>');

    formatted = formatted
      .replace(/Keyword Placement:\s*/g, '<div class="keyword-placement">')
      .replace(/Important Considerations:\s*/g, '<div class="important-considerations">')
      .replace(/Call to Action:\s*/g, '<div class="cta">');

    formatted = formatted
      .replace(/\n\n/g, '</p><p>')
      .replace(/\n/g, '<br>')
      .replace(/<br><br>/g, '<br>');

    formatted = formatted
      .replace(/\*\*(.*?)\*\*/g, '$1')
      .replace(/\*(.*?)\*/g, '$1');

    formatted = formatted
      .replace(/<div class="main-section">/g, '<div class="main-section">')
      .replace(/<div class="sub-section">/g, '<div class="sub-section">');

    formatted = `<div class="outline-content">
      <div class="outline-header">
        <h1>SEO Outline for "${topic}"</h1>
        <p class="keywords">Target Keywords: ${keywords}</p>
      </div>
      <div class="outline-body">
        ${formatted}
      </div>
    </div>`;

    return formatted;
  };

  return (
    <Container maxWidth="lg" sx={{ pt: { xs: 4, md: 6 }, pb: { xs: 4, md: 6 } }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Fade in={animateEntry} timeout={1000}>
            <Card 
              elevation={0}
              sx={{ 
                height: '100%', 
                background: 'linear-gradient(135deg, #ffffff 0%, #f8faff 100%)',
                border: '1px solid',
                borderColor: 'rgba(230, 235, 245, 0.9)',
                borderRadius: '24px',
                boxShadow: '0 4px 24px rgba(0, 0, 0, 0.03)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 12px 40px rgba(0, 0, 0, 0.08)',
                  borderColor: 'rgba(200, 210, 225, 0.9)',
                }
              }}
            >
              <CardContent sx={{ p: { xs: 3, md: 5 } }}>
                <Box sx={{ textAlign: 'center', mb: 5 }}>
                  <Typography 
                    variant="h2" 
                    component="h1" 
                    sx={{ 
                      fontSize: { xs: '2rem', md: '2.5rem' },
                      fontWeight: 800, 
                      letterSpacing: '-0.02em',
                      mb: 2,
                      background: 'linear-gradient(135deg, #2563eb, #1e40af)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      filter: 'drop-shadow(0 2px 2px rgba(0, 0, 0, 0.1))'
                    }}
                  >
                    SEO Outline Generator
                  </Typography>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      color: 'rgba(17, 24, 39, 0.7)',
                      fontWeight: 500,
                      maxWidth: '460px',
                      mx: 'auto',
                      lineHeight: 1.6
                    }}
                  >
                    Create comprehensive SEO-optimized content outlines in seconds
                  </Typography>
                </Box>

                <form onSubmit={handleSubmit}>
                  <Box sx={{ mb: 4 }}>
                    <TextField
                      fullWidth
                      label="Blog Topic"
                      placeholder="What would you like to write about?"
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      variant="outlined"
                      size="large"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: '16px',
                          backgroundColor: 'white',
                          transition: 'all 0.2s ease',
                          fontSize: '1.1rem',
                          '& fieldset': {
                            borderColor: 'rgba(200, 210, 225, 0.6)',
                          },
                          '&:hover fieldset': {
                            borderColor: '#2563eb',
                          },
                          '&.Mui-focused': {
                            boxShadow: '0 0 0 4px rgba(37, 99, 235, 0.1)',
                            '& fieldset': {
                              borderColor: '#2563eb',
                            }
                          }
                        },
                        '& .MuiInputLabel-root': {
                          color: 'rgba(17, 24, 39, 0.7)',
                          fontSize: '1rem',
                          '&.Mui-focused': {
                            color: '#2563eb',
                          }
                        }
                      }}
                      required
                    />
                  </Box>

                  <Box sx={{ mb: 4 }}>
                    <TextField
                      fullWidth
                      label="Target Keywords"
                      placeholder="e.g., SEO tips, content marketing, digital strategy"
                      value={keywords}
                      onChange={(e) => setKeywords(e.target.value)}
                      variant="outlined"
                      size="large"
                      helperText="Separate multiple keywords with commas"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: '16px',
                          backgroundColor: 'white',
                          transition: 'all 0.2s ease',
                          fontSize: '1.1rem',
                          '& fieldset': {
                            borderColor: 'rgba(200, 210, 225, 0.6)',
                          },
                          '&:hover fieldset': {
                            borderColor: '#2563eb',
                          },
                          '&.Mui-focused': {
                            boxShadow: '0 0 0 4px rgba(37, 99, 235, 0.1)',
                            '& fieldset': {
                              borderColor: '#2563eb',
                            }
                          }
                        },
                        '& .MuiInputLabel-root': {
                          color: 'rgba(17, 24, 39, 0.7)',
                          fontSize: '1rem',
                          '&.Mui-focused': {
                            color: '#2563eb',
                          }
                        },
                        '& .MuiFormHelperText-root': {
                          fontSize: '0.875rem',
                          color: 'rgba(17, 24, 39, 0.6)',
                          marginLeft: '4px'
                        }
                      }}
                      required
                    />
                  </Box>

                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      startIcon={<SearchIcon />}
                      disabled={loading}
                      sx={{
                        width: '100%',
                        height: '56px',
                        borderRadius: '16px',
                        textTransform: 'none',
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
                        boxShadow: '0 4px 14px rgba(37, 99, 235, 0.3)',
                        transition: 'all 0.2s ease',
                        '&:hover': {
                          boxShadow: '0 6px 20px rgba(37, 99, 235, 0.4)',
                          transform: 'translateY(-1px)',
                        },
                        '&:active': {
                          transform: 'translateY(1px)',
                        },
                        '&:disabled': {
                          background: '#e5e7eb',
                          boxShadow: 'none',
                        }
                      }}
                    >
                      {loading ? 'Generating...' : 'Generate Outline'}
                    </Button>
                  </Box>

                  {error && (
                    <Alert 
                      severity="error" 
                      sx={{ 
                        mt: 3,
                        borderRadius: '12px',
                        border: '1px solid rgba(239, 68, 68, 0.2)'
                      }}
                    >
                      {error}
                    </Alert>
                  )}
                </form>
              </CardContent>
            </Card>
          </Fade>
        </Grid>

        <Grid item xs={12} md={6}>
          <Fade in={animateEntry} timeout={1200}>
            <Card 
              elevation={0}
              sx={{ 
                height: '100%',
                background: 'linear-gradient(135deg, #ffffff 0%, #f8faff 100%)',
                border: '1px solid',
                borderColor: 'rgba(230, 235, 245, 0.9)',
                borderRadius: '24px',
                boxShadow: '0 4px 24px rgba(0, 0, 0, 0.03)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 12px 40px rgba(0, 0, 0, 0.08)',
                  borderColor: 'rgba(200, 210, 225, 0.9)',
                }
              }}
            >
              <CardContent sx={{ p: { xs: 3, md: 5 } }}>
                <Box sx={{ mb: 4 }}>
                  <Typography 
                    variant="h4" 
                    sx={{ 
                      fontSize: { xs: '1.5rem', md: '1.75rem' },
                      fontWeight: 700, 
                      color: 'rgba(17, 24, 39, 0.9)',
                      mb: 1,
                      letterSpacing: '-0.02em'
                    }}
                  >
                    Generated Outline
                  </Typography>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: 'rgba(17, 24, 39, 0.6)',
                      fontWeight: 500
                    }}
                  >
                    Your SEO-optimized outline will appear here
                  </Typography>
                </Box>

                {outline ? (
                  <Box sx={{ position: 'relative' }}>
                    <Box 
                      sx={{ 
                        background: alpha('#fff', 0.6),
                        borderRadius: '16px',
                        p: 4,
                        minHeight: '400px',
                        border: '1px solid',
                        borderColor: 'rgba(230, 235, 245, 0.9)',
                        '& .outline-content': {
                          '& h1': {
                            fontSize: '1.5rem',
                            fontWeight: 700,
                            color: '#1a1a1a',
                            mb: 3
                          },
                          '& .keywords': {
                            color: '#2563eb',
                            fontWeight: 500,
                            mb: 4
                          },
                          '& h3': {
                            fontSize: '1.25rem',
                            fontWeight: 600,
                            color: '#1a1a1a',
                            my: 2
                          },
                          '& h4': {
                            fontSize: '1.1rem',
                            fontWeight: 500,
                            color: '#374151',
                            my: 1.5
                          },
                          '& ul': {
                            listStyle: 'none',
                            pl: 3,
                            '& li': {
                              position: 'relative',
                              '&::before': {
                                content: '""',
                                position: 'absolute',
                                left: '-20px',
                                top: '10px',
                                width: '6px',
                                height: '6px',
                                borderRadius: '50%',
                                backgroundColor: '#2563eb'
                              }
                            }
                          }
                        }
                      }}
                      dangerouslySetInnerHTML={{ __html: formatOutline(outline) }}
                    />
                    
                    <Box 
                      sx={{ 
                        display: 'flex', 
                        gap: 2, 
                        mt: 3,
                        justifyContent: 'flex-end'
                      }}
                    >
                      <Tooltip title={copied ? "Copied!" : "Copy to clipboard"}>
                        <IconButton 
                          onClick={copyToClipboard}
                          sx={{
                            backgroundColor: copied ? alpha('#2563eb', 0.1) : 'transparent',
                            border: '1px solid',
                            borderColor: copied ? '#2563eb' : 'rgba(200, 210, 225, 0.6)',
                            '&:hover': {
                              backgroundColor: alpha('#2563eb', 0.1),
                              borderColor: '#2563eb'
                            }
                          }}
                        >
                          <ContentCopyIcon sx={{ color: copied ? '#2563eb' : '#64748b' }} />
                        </IconButton>
                      </Tooltip>
                      
                      <Tooltip title="Download as text">
                        <IconButton 
                          onClick={downloadOutline}
                          sx={{
                            border: '1px solid rgba(200, 210, 225, 0.6)',
                            '&:hover': {
                              backgroundColor: alpha('#2563eb', 0.1),
                              borderColor: '#2563eb'
                            }
                          }}
                        >
                          <DownloadIcon sx={{ color: '#64748b' }} />
                        </IconButton>
                      </Tooltip>
                      
                      <Tooltip title="Print outline">
                        <IconButton 
                          onClick={() => window.print()}
                          sx={{
                            border: '1px solid rgba(200, 210, 225, 0.6)',
                            '&:hover': {
                              backgroundColor: alpha('#2563eb', 0.1),
                              borderColor: '#2563eb'
                            }
                          }}
                        >
                          <PrintIcon sx={{ color: '#64748b' }} />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  </Box>
                ) : (
                  <Box 
                    sx={{ 
                      background: alpha('#fff', 0.6),
                      borderRadius: '16px',
                      p: 4,
                      minHeight: '400px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid',
                      borderColor: 'rgba(230, 235, 245, 0.9)',
                    }}
                  >
                    <Typography 
                      variant="body1"
                      sx={{ 
                        color: 'rgba(17, 24, 39, 0.5)',
                        fontWeight: 500,
                        textAlign: 'center',
                        maxWidth: '300px'
                      }}
                    >
                      Enter your topic and keywords to generate an SEO-optimized outline
                    </Typography>
                  </Box>
                )}
              </CardContent>
            </Card>
          </Fade>
        </Grid>
      </Grid>
    </Container>
  );
}

export default HomePage;
