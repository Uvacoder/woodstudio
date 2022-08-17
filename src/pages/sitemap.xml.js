import fs from "fs";
import { getAllProjects } from "@lib/api";

const Sitemap = () => {};

const baseUrl = {
  development: "http://localhost:3000",
  production: "https://onend.studio",
}[process.env.NODE_ENV];

const staticPages = fs
  .readdirSync("src/pages")
  .filter((staticPage) => {
    return ![
      "_app.tsx",
      "_document.tsx",
      "_error.tsx",
      "sitemap.xml.js",
    ].includes(staticPage);
  })
  .map((staticPagePath) => {
    return `${baseUrl}/${staticPagePath}`;
  });

export const getServerSideProps = ({ res }) => {
  const dynamicPages = getAllProjects(["slug"]).map(({ slug }) => {
    return `${baseUrl}/work/${slug}`;
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${[...staticPages, ...dynamicPages]
        .map((url) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        })
        .join("")}
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
