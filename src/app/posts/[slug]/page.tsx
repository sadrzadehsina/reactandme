import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";

export default function Page({ params }) {
  const post = allPosts.find(
    (post) => post.url.split("/").pop() === params.slug
  );

  if (!post) {
    notFound();
  }

  return (
    <article className="prose prose-neutral md:prose-lg lg:prose-xl dark:prose-invert">
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.body.html }}></div>
      <time dateTime={post.publishedDate} className="text-sm">
        {post.publishedDate.split("T")[0]}
      </time>
    </article>
  );
}

export async function generateStaticParams() {
  return allPosts.map(({ url }) => ({
    slug: url.split("/").pop(),
  }));
}
