import { posts } from "../posts/posts"
import Layout from "../components/Layout";
import Link from "next/link"
import generateRssFeed from '../utils/generateRSSFeed';

const Index = ({posts}) => {
  return (
    <Layout pageTitle="Things you may (or may not) be interested in...">    
      <h1 className="text-2xl font-semibold">Posts</h1>
      <PostsList posts={posts} />
    </Layout>
  );
}

const PostsList = ({posts}) => {
  if(!posts || !posts.length) return <p>No posts found</p>

  return(
    <div className="w-full">
      <ul className="mt-4">
        {posts.map((post) => {
          const {frontmatter,slug} = post;
          const {description,date,title} = frontmatter;

          return (
            <li 
            key={slug} 
            className="px-8 py-2 m-0 mt-4 border-b border-card-border hover:bg-gray-100"
            >
              <Link href={`/posts/${slug}`}>
                  <div className="text-xl font-medium">{title}</div>
                  <p className="mt-2 mb-4 font-light">{description}</p>
                  <p className="text-sm font-hairline">{date}</p>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  );
};

export async function getStaticProps(){
  const postsData = await posts();
  await generateRssFeed();

  return{
    props:{
      posts:postsData || null,
    },
  }
}

export default Index;