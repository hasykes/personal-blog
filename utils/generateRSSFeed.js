import fs from 'fs';
import RSS from 'rss';
import {posts} from '../posts/posts'

export default async function generateRssFeed() {
 const site_url = 'localhost:3000';
 const allPosts = await posts();
 console.log(allPosts)

 const feedOptions = {
  title: 'Hayden Sykes Blog | RSS Feed',
  description: 'RSS for Hayden Sykes\' Blog',
  site_url: site_url,
  feed_url: `${site_url}/rss.xml`,
  image_url: `${site_url}/logo.png`,
  pubDate: new Date(),
  copyright: `All rights reserved ${new Date().getFullYear()}, Hayden Sykes`,
 };

 const feed = new RSS(feedOptions);

 allPosts.map((post) => {
    feed.item({
     title: post.title,
     description: post.description,
     url: `${site_url}/blog/${post.slug}`,
     date: post.date,
    });
   });

 fs.writeFileSync('./public/rss.xml', feed.xml({ indent: true }));
  
}
