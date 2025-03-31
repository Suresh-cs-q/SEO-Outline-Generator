import { 
  Container, 
  Typography, 
  Box, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails,
  Paper,
  Grid,
  Card,
  CardContent,
  Divider,
  Fade
} from '@mui/material';
import { useState, useEffect } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import SearchIcon from '@mui/icons-material/Search';
import SpeedIcon from '@mui/icons-material/Speed';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

function AboutPage() {
  const [animateEntry, setAnimateEntry] = useState(false);

  useEffect(() => {
    setAnimateEntry(true);
  }, []);

  const faqs = [
    {
      question: "How does the SEO Outline Generator work?",
      answer: "Our SEO Outline Generator uses advanced algorithms to analyze your keyword and generate a comprehensive content outline. It considers search intent, common questions, and best practices to create a structure that's optimized for search engines and valuable for readers."
    },
    {
      question: "Is the generated outline ready to use?",
      answer: "Yes! The outline is ready to use as a framework for your content. You may want to customize it based on your specific needs, but it provides a solid foundation that covers key aspects of your topic."
    },
    {
      question: "Can I use the outlines for commercial purposes?",
      answer: "Absolutely. You can use the generated outlines for any purpose, including commercial content, blog posts, articles, or educational materials."
    },
    {
      question: "How many outlines can I generate?",
      answer: "There are no limits to how many outlines you can generate. Feel free to create outlines for as many keywords as you need."
    },
    {
      question: "Does this replace a content writer?",
      answer: "The SEO Outline Generator provides the structure and framework for your content, but you'll still need to write the actual content. It's a tool to help writers create more effective, SEO-friendly content more efficiently."
    },
    {
      question: "Is my data secure?",
      answer: "Yes. We don't store your keywords or generated outlines. Everything happens in your browser session and is not saved on our servers."
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ pt: { xs: 4, md: 6 }, pb: { xs: 4, md: 6 } }}>
      <Fade in={animateEntry} timeout={800}>
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          <Typography 
            variant="h1" 
            component="h1" 
            sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 800,
              letterSpacing: '-0.02em',
              mb: 3,
              background: 'linear-gradient(135deg, #2563eb, #1e40af)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 2px 2px rgba(0, 0, 0, 0.1))'
            }}
          >
            About Our SEO Outline Generator
          </Typography>
          <Typography 
            variant="h5" 
            sx={{ 
              color: 'rgba(17, 24, 39, 0.7)',
              fontWeight: 500,
              maxWidth: '700px',
              mx: 'auto',
              lineHeight: 1.6
            }}
          >
            Helping content creators build better, more effective content that ranks
          </Typography>
        </Box>
      </Fade>

      <Fade in={animateEntry} timeout={1000}>
        <Card 
          elevation={0}
          sx={{ 
            mb: 6,
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
            <Typography 
              variant="h4" 
              component="h2" 
              sx={{ 
                fontWeight: 700,
                mb: 3,
                color: '#1a1a1a',
                letterSpacing: '-0.02em'
              }}
            >
              How It Works
            </Typography>
            
            <Typography 
              sx={{ 
                color: 'rgba(17, 24, 39, 0.7)',
                fontSize: '1.1rem',
                lineHeight: 1.7,
                mb: 5
              }}
            >
              The SEO Outline Generator is designed to help content creators, marketers, and SEO professionals 
              create comprehensive, well-structured content outlines optimized for search engines. Our tool 
              simplifies the content planning process and helps you create content that ranks well and 
              provides value to your audience.
            </Typography>
            
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <Card 
                  elevation={0}
                  sx={{ 
                    height: '100%',
                    background: 'rgba(37, 99, 235, 0.02)',
                    border: '1px solid rgba(37, 99, 235, 0.05)',
                    borderRadius: '20px',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      backgroundColor: 'rgba(37, 99, 235, 0.04)',
                      transform: 'translateY(-4px)',
                    }
                  }}
                >
                  <CardContent sx={{ p: 4, textAlign: 'center' }}>
                    <SearchIcon sx={{ fontSize: 48, color: '#2563eb', mb: 2 }} />
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontWeight: 600,
                        mb: 2,
                        color: '#1a1a1a'
                      }}
                    >
                      1. Enter Your Keyword
                    </Typography>
                    <Typography sx={{ color: 'rgba(17, 24, 39, 0.7)' }}>
                      Simply input the primary keyword or topic you want to create content about.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              
              <Grid item xs={12} md={4}>
                <Card 
                  elevation={0}
                  sx={{ 
                    height: '100%',
                    background: 'rgba(37, 99, 235, 0.02)',
                    border: '1px solid rgba(37, 99, 235, 0.05)',
                    borderRadius: '20px',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      backgroundColor: 'rgba(37, 99, 235, 0.04)',
                      transform: 'translateY(-4px)',
                    }
                  }}
                >
                  <CardContent sx={{ p: 4, textAlign: 'center' }}>
                    <AutoAwesomeIcon sx={{ fontSize: 48, color: '#2563eb', mb: 2 }} />
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontWeight: 600,
                        mb: 2,
                        color: '#1a1a1a'
                      }}
                    >
                      2. Generate Outline
                    </Typography>
                    <Typography sx={{ color: 'rgba(17, 24, 39, 0.7)' }}>
                      Our algorithm analyzes your keyword and creates a comprehensive, SEO-friendly outline.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              
              <Grid item xs={12} md={4}>
                <Card 
                  elevation={0}
                  sx={{ 
                    height: '100%',
                    background: 'rgba(37, 99, 235, 0.02)',
                    border: '1px solid rgba(37, 99, 235, 0.05)',
                    borderRadius: '20px',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      backgroundColor: 'rgba(37, 99, 235, 0.04)',
                      transform: 'translateY(-4px)',
                    }
                  }}
                >
                  <CardContent sx={{ p: 4, textAlign: 'center' }}>
                    <TrendingUpIcon sx={{ fontSize: 48, color: '#2563eb', mb: 2 }} />
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontWeight: 600,
                        mb: 2,
                        color: '#1a1a1a'
                      }}
                    >
                      3. Create Better Content
                    </Typography>
                    <Typography sx={{ color: 'rgba(17, 24, 39, 0.7)' }}>
                      Use the outline to create content that's comprehensive, well-structured, and optimized for search.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Fade>

      <Fade in={animateEntry} timeout={1200}>
        <Card 
          elevation={0}
          sx={{ 
            mb: 6,
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
            <Typography 
              variant="h4" 
              component="h2" 
              sx={{ 
                fontWeight: 700,
                mb: 4,
                color: '#1a1a1a',
                letterSpacing: '-0.02em'
              }}
            >
              Benefits
            </Typography>
            
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                {[
                  {
                    icon: <SpeedIcon sx={{ fontSize: 32, color: '#2563eb' }} />,
                    title: "Save Time",
                    description: "Reduce research time and quickly generate comprehensive content outlines."
                  },
                  {
                    icon: <SearchIcon sx={{ fontSize: 32, color: '#2563eb' }} />,
                    title: "SEO Optimized",
                    description: "Create content structures that are designed to perform well in search engines."
                  },
                  {
                    icon: <AutoAwesomeIcon sx={{ fontSize: 32, color: '#2563eb' }} />,
                    title: "Comprehensive Coverage",
                    description: "Ensure your content covers all important aspects of your topic."
                  }
                ].map((benefit, index) => (
                  <Box 
                    key={index} 
                    sx={{ 
                      display: 'flex', 
                      alignItems: 'flex-start', 
                      mb: index === 2 ? 0 : 4,
                      p: 3,
                      borderRadius: '16px',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(37, 99, 235, 0.04)',
                        transform: 'translateX(4px)'
                      }
                    }}
                  >
                    <Box sx={{ mr: 3 }}>{benefit.icon}</Box>
                    <Box>
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          fontWeight: 600,
                          mb: 1,
                          color: '#1a1a1a'
                        }}
                      >
                        {benefit.title}
                      </Typography>
                      <Typography sx={{ color: 'rgba(17, 24, 39, 0.7)' }}>
                        {benefit.description}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Grid>
              
              <Grid item xs={12} md={6}>
                {[
                  {
                    icon: <TrendingUpIcon sx={{ fontSize: 32, color: '#2563eb' }} />,
                    title: "Improve Rankings",
                    description: "Well-structured, comprehensive content tends to rank better in search results."
                  },
                  {
                    icon: <SpeedIcon sx={{ fontSize: 32, color: '#2563eb' }} />,
                    title: "Streamline Workflow",
                    description: "Make content creation more efficient with ready-to-use outlines."
                  },
                  {
                    icon: <SearchIcon sx={{ fontSize: 32, color: '#2563eb' }} />,
                    title: "Content Ideas",
                    description: "Discover new angles and subtopics to cover in your content."
                  }
                ].map((benefit, index) => (
                  <Box 
                    key={index} 
                    sx={{ 
                      display: 'flex', 
                      alignItems: 'flex-start', 
                      mb: index === 2 ? 0 : 4,
                      p: 3,
                      borderRadius: '16px',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(37, 99, 235, 0.04)',
                        transform: 'translateX(4px)'
                      }
                    }}
                  >
                    <Box sx={{ mr: 3 }}>{benefit.icon}</Box>
                    <Box>
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          fontWeight: 600,
                          mb: 1,
                          color: '#1a1a1a'
                        }}
                      >
                        {benefit.title}
                      </Typography>
                      <Typography sx={{ color: 'rgba(17, 24, 39, 0.7)' }}>
                        {benefit.description}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Fade>

      <Fade in={animateEntry} timeout={1400}>
        <Card 
          elevation={0}
          sx={{ 
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
            <Typography 
              variant="h4" 
              component="h2" 
              sx={{ 
                fontWeight: 700,
                mb: 4,
                color: '#1a1a1a',
                letterSpacing: '-0.02em'
              }}
            >
              Frequently Asked Questions
            </Typography>
            
            <Box sx={{ mt: 3 }}>
              {faqs.map((faq, index) => (
                <Accordion 
                  key={index} 
                  disableGutters 
                  elevation={0} 
                  sx={{ 
                    border: '1px solid rgba(37, 99, 235, 0.1)',
                    mb: 2,
                    borderRadius: '16px !important',
                    overflow: 'hidden',
                    '&:before': {
                      display: 'none',
                    },
                    '&.Mui-expanded': {
                      margin: '0 0 16px 0',
                    }
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: '#2563eb' }} />}
                    aria-controls={`faq-content-${index}`}
                    id={`faq-header-${index}`}
                    sx={{
                      backgroundColor: 'rgba(37, 99, 235, 0.02)',
                      '&:hover': {
                        backgroundColor: 'rgba(37, 99, 235, 0.04)',
                      },
                      '&.Mui-expanded': {
                        backgroundColor: 'rgba(37, 99, 235, 0.04)',
                      }
                    }}
                  >
                    <Typography 
                      variant="subtitle1" 
                      sx={{ 
                        fontWeight: 600,
                        color: '#1a1a1a'
                      }}
                    >
                      {faq.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ p: 3 }}>
                    <Typography 
                      sx={{ 
                        color: 'rgba(17, 24, 39, 0.7)',
                        lineHeight: 1.7
                      }}
                    >
                      {faq.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
          </CardContent>
        </Card>
      </Fade>
    </Container>
  );
}

export default AboutPage;
