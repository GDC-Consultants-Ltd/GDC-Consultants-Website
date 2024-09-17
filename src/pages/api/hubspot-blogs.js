// src/pages/api/hubspot-blogs.js
import { fetchPublishedBlogs } from '@/utils/hubspot';

export default async function handler(req, res) {
  try {
    const blogs = await fetchPublishedBlogs();
    res.status(200).json(blogs);
  } catch (error) {
    console.error('Error fetching blogs from HubSpot API route:', error);
    res.status(500).json({ error: 'Failed to fetch blogs from HubSpot' });
  }
}
