import { postSlugs, postForSlug } from "../../posts";
import Layout from "../../components/Layout";
import ReactMarkdown from "react-markdown";
import CodeBlock from "../../components/CodeBlock"
import Image from "next/image"
import backIcon from "../../public/back.svg"

function Post({ frontmatter, body }) {
  if (!frontmatter) return <></>;

  return (
    <Layout pageTitle={frontmatter.title}>
      <div className="w-full">
        <div className="place-content-center h-8 hover:bg-gray-100">
          <a href="/" rel="none" >
            <span>
            <Image 
            src={backIcon} 
            alt="back icon"
            className="inline-block"
            />
            </span>
            <span className="inline-block h-8">
            Back
            </span>  
          </a>
        </div>
        <article className="prose max-w-none">
          <h1>{frontmatter.title}</h1>
          <p className="italic">{frontmatter.date}</p>
          <ReactMarkdown children={body} components={{code:CodeBlock}} />
        </article>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const { frontmatter, body } = await postForSlug(params.post);

  return {
    props: {
      frontmatter,
      body,
    },
  };
}

export async function getStaticPaths() {
  const paths = postSlugs().map((slug) => `/posts/${slug}`);

  return {
    paths,
    fallback: false,
  };
}

export default Post;