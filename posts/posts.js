import matter from "gray-matter";

export const posts = () => {
    return ((context) => {
        const keys = context.keys();
        const documents = keys.map(context);

        return keys.map((key,i) => {
            //use filename as 'slug' for post
            const slug = key.replace(/^.*[\\\/]/,"").slice(0,-3);
            const document = documents[i];
            const {data:frontmatter,content:body} = matter(document.default);

            return {frontmatter, body, slug};
        })
        .sort(
            (post1,post2) => 
                new Date(post2.frontmatter.date) - new Date(post1.frontmatter.date)
        );
    })(
        // Since Next.js uses webpack we can take advantage of webpack's `require.context` to load our markdown files
        require.context("./", true, /\.md$/)
    );
}
