import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { useMDXComponent } from "next-contentlayer/hooks";

import Image from "next/image";

import type { MDXComponents } from "mdx/types";

// @ts-ignore
export default function Page({ params }) {
  const post = allPosts.find(
    (post) => post.url.split("/").pop() === params.slug
  );

  if (!post) {
    notFound();
  }

  const mdxComponents: MDXComponents = {
    Image: ({ src, alt }) => (
      <Image
        src={src}
        width="0"
        height="0"
        sizes="100vw"
        className="w-full h-auto"
        alt={alt}
      />
    ),
  };

  const MDXContent = useMDXComponent(post.body.code);

  return (
    <article className="prose prose-neutral md:prose-lg lg:prose-xl dark:prose-invert min-w-full">
      <h1>{post.title}</h1>
      <div>
        <MDXContent components={mdxComponents} />
      </div>
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
