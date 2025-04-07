async function buildPostData(ctx, req) {
  const post = await req();
  const { description, publishDate, section, tags, title, updateDate } = post.frontmatter;
  return {
    url: new URL(post.url, ctx.url.origin).href,
    title,
    description,
    section,
    tags: tags.split(",").map((s) => s.trim()) || [],
    publishDate,
    updateDate: updateDate ?? null
  };
}
const get = async (ctx) => {
  const files = Object.values(/* #__PURE__ */ Object.assign({"./test.mdx": () => import('./test_862cd98f.mjs')}));
  const posts = await Promise.all(
    Object.values(files).map((file) => buildPostData(ctx, file))
  );
  posts.sort((a, b) => b.publishDate.getTime() - a.publishDate.getTime());
  return { body: JSON.stringify(posts) };
};

export { get };
//# sourceMappingURL=posts_f831a3de.mjs.map
