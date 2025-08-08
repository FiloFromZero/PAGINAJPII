import { getRssString } from '@astrojs/rss';
import { S as SITE, M as METADATA, c as getPermalink } from './404_Dw-3UrCo.mjs';
import { f as fetchPosts } from './personal_TfNDwqkd.mjs';

const GET = async () => {
  const posts = await fetchPosts();
  const rss = await getRssString({
    title: `${SITE.name}’s Blog`,
    description: METADATA?.description,
    site: "https://iejuanpabloiisoacha.edu.co",
    items: posts.map((post) => ({
      link: getPermalink(post.permalink, "post"),
      title: post.title,
      description: post.excerpt,
      pubDate: post.publishDate
    })),
    trailingSlash: SITE.trailingSlash
  });
  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml"
    }
  });
};

export { GET };
