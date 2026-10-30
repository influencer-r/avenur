/**
 * Avenur — Programmatic SEO (pSEO) Sitemap Generator
 * Programmatically generates canonical XML sitemaps for thousands of long-tail rental keywords
 */

const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://avenur.co.ke';
const TODAY = new Date().toISOString().split('T')[0];

const CORE_PAGES = [
  { loc: `${DOMAIN}/`, changefreq: 'daily', priority: '1.0' },
  { loc: `${DOMAIN}/#/catalog`, changefreq: 'daily', priority: '0.9' },
  { loc: `${DOMAIN}/#/landlord`, changefreq: 'weekly', priority: '0.7' }
];

// High-converting long-tail keyword combinations
const PSEO_SLUGS = [
  // User's Exact Primary Keywords
  'bedsitters-in-ruaka-under-15k',
  '2-bedroom-apartments-in-kilimani-with-borehole',
  'furnished-apartments-in-westlands-for-short-stay',

  // Nairobi Metro High-Demand Matrix
  '1-bedroom-apartments-in-ruaka-under-20k',
  '2-bedroom-apartments-in-ruaka-with-borehole',
  'modern-studios-near-two-rivers-mall',
  '1-bedroom-apartments-in-kilimani-under-45k',
  '3-bedroom-apartments-in-kilimani-with-pool',
  'furnished-apartments-in-kilimani-for-short-stay',
  '2-bedroom-executive-apartments-in-westlands',
  'serviced-studios-in-westlands-under-60k',
  'luxury-penthouses-in-westlands-with-pool',
  '1-bedroom-apartments-in-syokimau-under-25k',
  '2-bedroom-master-ensuite-in-syokimau-under-35k',
  'lavington-4br-townhouse-with-garden',
  'modern-3br-apartments-in-lavington-under-90k',
  'karen-2-bedroom-country-suite-furnished',
  'cottages-for-rent-in-karen-nairobi',
  'nyali-ocean-view-villas-short-stay',
  'furnished-apartments-in-nyali-mombasa',
  'affordable-bedsitters-in-nairobi-cbd-under-12k',
  '1-bedroom-apartments-in-nairobi-cbd',

  // Programmatic Combinations (Neighborhood + Type + Feature)
  'bedsitters-in-kilimani-under-20k',
  'bedsitters-in-westlands-under-25k',
  '1-bedroom-apartments-in-westlands-under-40k',
  '2-bedroom-apartments-in-westlands-with-borehole',
  '1-bedroom-apartments-in-karen-furnished',
  '2-bedroom-apartments-in-lavington-with-generator',
  '3-bedroom-apartments-in-syokimau-under-45k',
  'studios-in-ruaka-with-balcony',
  'furnished-studios-in-kilimani-short-stay',
  'gated-apartments-in-ruaka-with-borehole'
];

function generateSitemap() {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  // Core pages
  CORE_PAGES.forEach(page => {
    xml += '  <url>\n';
    xml += `    <loc>${page.loc}</loc>\n`;
    xml += `    <lastmod>${TODAY}</lastmod>\n`;
    xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
    xml += `    <priority>${page.priority}</priority>\n`;
    xml += '  </url>\n';
  });

  // Programmatic SEO landing pages
  PSEO_SLUGS.forEach(slug => {
    xml += '  <url>\n';
    xml += `    <loc>${DOMAIN}/#/rentals/${slug}</loc>\n`;
    xml += `    <lastmod>${TODAY}</lastmod>\n`;
    xml += '    <changefreq>daily</changefreq>\n';
    xml += '    <priority>0.8</priority>\n';
    xml += '  </url>\n';
  });

  xml += '</urlset>\n';

  const outputPath = path.join(__dirname, 'sitemap.xml');
  fs.writeFileSync(outputPath, xml, 'utf8');
  console.log(`✅ Programmatic Sitemap generated successfully at: ${outputPath}`);
  console.log(`Total indexed URLs: ${CORE_PAGES.length + PSEO_SLUGS.length}`);
}

generateSitemap();
