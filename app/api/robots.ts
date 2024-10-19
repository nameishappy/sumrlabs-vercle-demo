import { NextApiRequest, NextApiResponse } from 'next';

const Robots = (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader('Content-Type', 'text/plain');
  res.write(`User-agent: *
Allow: /

Sitemap: ${process.env.SITE_URL}/sitemap.xml`);
  res.end();
};

export default Robots;
