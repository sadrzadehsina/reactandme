import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import highlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: '**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'Title of the post',
      required: true,
    },
    summary: {
      type: 'string',
      description: 'Short summary of the post',
      required: false,
    },
    publishedDate: {
      type: 'date',
      description: 'Date that the post was published',
      required: false,
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
      description: 'List of related tags for further search use cases',
      required: false,
    },
    category: {
      type: 'enum',
      options: ['off-topic', 'react'],
      default: 'react',
      description: 'Category of the post',
      required: false,
    },
    parent: {
      type: 'string',
      required: false,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) =>
        ['/posts', post.parent, post._raw.flattenedPath.split('/').pop()]
          .filter(Boolean)
          .join('/'),
    },
  },
}));

export default makeSource({
  contentDirPath: './src/posts',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    // @ts-ignore
    rehypePlugins: [highlight],
  },
});
