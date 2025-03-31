import axios from 'axios';

const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

export const generateOutline = async (topic, keywords) => {
  try {
    // Ensure API key is properly encoded
    const encodedApiKey = encodeURIComponent(API_KEY);
    
    const prompt = `
      Generate a comprehensive SEO-friendly blog outline for the topic: "${topic}"
      
      Target keywords: ${keywords}
      
      Requirements:
      1. Create 5-7 structured headings/subheadings
      2. Suggest keyword placements within relevant sections
      3. Include a meta description optimized for SEO
      4. Format in a readable bullet-point structure
      5. Ensure proper hierarchy and logical flow
    `;

    console.log('API Request URL:', `${API_URL}?key=${encodedApiKey}`);
    console.log('API Request Body:', {
      contents: [{
        parts: [{
          text: prompt
        }]
      }]
    });

    const response = await axios.post(
      `${API_URL}?key=${encodedApiKey}`,
      {
        contents: [{
          parts: [{
            text: prompt
          }]
        }]
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    return response.data.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error('API Error Details:', {
      status: error.response?.status,
      statusText: error.response?.statusText,
      data: error.response?.data,
      message: error.message
    });
    
    if (error.response?.data?.error?.message) {
      throw new Error(error.response.data.error.message);
    }
    
    throw new Error('Failed to generate outline. Please check your API key and try again.');
  }
};
