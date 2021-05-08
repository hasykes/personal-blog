import matter from "gray-matter";

export const postSlugs = () => {
    return ((context) => {
        return context
        .keys()
        .map(key => key.replace(/^.*[\\\/]/, "").slice(0, -3));
    })(require.context("./",true,/\.md$/));
}

export const postForSlug = async(slug) => {
    const document = await import(`./${slug}.md`);
    const {data:frontmatter,content:body} = matter(document.default);

    return {frontmatter,body,slug}
}