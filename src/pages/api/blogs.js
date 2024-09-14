// Example API route: pages/api/blogs.js
import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get(
      `https://api.hubapi.com/cms/v3/blogs/posts?hapikey=${process.env.HUBSPOT_API_KEY}`
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch blogs' });
  }
}
