import { defineDocumentType, makeSource } from "contentlayer/source-files";
import highlight from "rehype-highlight";
import remarkGfm from "remark-gfm";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "Title of the post",
      required: true,
    },
    summary: {
      type: "string",
      description: "Short summary of the post",
      required: true,
    },
    publishedDate: {
      type: "date",
      description: "Date that the post was published",
      required: true,
    },
    tags: {
      type: "list",
      of: { type: "string" },
      description: "List of related tags for further search use cases",
      required: true,
    },
    category: {
      type: "enum",
      options: ["off-topic", "react"],
      default: "react",
      description: "Category of the post",
      required: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/posts/${post._raw.flattenedPath.split("/").pop()}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "./src/posts",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    // @ts-ignore
    rehypePlugins: [highlight],
  },
});
