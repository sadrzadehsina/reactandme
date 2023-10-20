import { allPosts } from "contentlayer/generated";
import Link from "next/link";

export default function Page() {
  const posts = allPosts
    .filter((post) => post.category === "react")
    .sort(
      (first, second) =>
        new Date(second.publishedDate).getTime() -
        new Date(first.publishedDate).getTime()
    );

  return (
    <div>
      {posts.map((post) => (
        <div key={post.url} className="pb-16">
          <Link href={post.url}>
            <article className="prose prose-neutral md:prose-lg lg:prose-xl dark:prose-invert min-w-full">
              <h2>{post.title}</h2>
              <p className="not-prose">{post.summary}</p>
              <time dateTime={post.publishedDate} className="text-sm">
                {post.publishedDate.split("T")[0]}
              </time>
            </article>
          </Link>
        </div>
      ))}
    </div>
  );
}
