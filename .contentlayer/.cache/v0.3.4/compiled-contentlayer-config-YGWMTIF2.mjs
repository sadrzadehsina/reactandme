// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "**/*.md",
  fields: {
    title: {
      type: "string",
      description: "Title of the post",
      required: true
    },
    summary: {
      type: "string",
      description: "Short summary of the post",
      required: true
    },
    publishedDate: {
      type: "date",
      description: "Date that the post was published",
      required: true
    },
    tags: {
      type: "list",
      of: { type: "string" },
      description: "List of related tags for further search use cases",
      required: true
    },
    category: {
      type: "enum",
      options: ["off-topic", "react"],
      default: "react",
      description: "Category of the post",
      required: true
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/posts/${post._raw.flattenedPath}`
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "./src/posts",
  documentTypes: [Post]
});
export {
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-YGWMTIF2.mjs.map
