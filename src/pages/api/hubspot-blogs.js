// src/pages/api/hubspot-blogs.js
import { fetchPublishedBlogs } from '@/utils/hubspot';

export default async function handler(req, res) {
  try {
    console.log('Fetching blogs...');
    const blogs = await fetchPublishedBlogs();
    if (!blogs || blogs.length === 0) {
      console.warn('No blogs found.');
      return res.status(404).json({ error: 'No blogs found.' });
    }
    console.log('Blogs fetched successfully.');
    res.status(200).json(blogs);
  } catch (error) {
    if (error.response) {
      console.error('API Error:', error.response.data);
    } else {
      console.error('Error:', error.message || error);
    }
    res.status(500).json({ error: 'Failed to fetch blogs from HubSpot', details: error.message });
  }
}
