// src/utils/hubspot.js
import axios from 'axios';

// Fetch the published blogs from HubSpot
export const fetchPublishedBlogs = async () => {
  try {
    const response = await axios.get('https://api.hubapi.com/cms/v3/blogs/posts', {
      headers: {
        Authorization: `Bearer ${process.env.HUBSPOT_BLOG_MANAGER_API_KEY}`,
      },
      params: {
        limit: 10, // You can adjust this limit based on how many posts you want to fetch
        state: 'published', // Fetch only published posts
      },
    });

    console.log('Fetched Blogs:', response.data.results); // Log the fetched data for debugging
    return response.data.results;
  } catch (error) {
    console.error('Error fetching blogs from HubSpot:', error);
    return [];
  }
};
