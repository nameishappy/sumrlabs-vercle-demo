import React from "react";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { urlForImage } from "@/sanity/lib/sanity.image";
import Link from "next/link";

interface Post {
  title: string;
  mainImage: any;
  publishedAt: string;
  author: { name: string };
  categories: { _id: string; title: string }[];
  body: any;
  slug: string;
  _id: string;
}

// PostCard component
const PostCard = ({ post }: { post: Post }) => {
  //   console.log(post);
  return (
    <Link href={`/blog/${post.slug}`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {post.mainImage && (
          <div className="relative h-48">
            <Image
              src={urlForImage(post.mainImage).url()}
              alt={post.mainImage.alt || "Post image"}
              layout="fill"
              objectFit="cover"
            />
          </div>
        )}
        <div className="p-4">
          <h2 className="text-xl text-gray-700 font-semibold mb-2">
            {post.title}
          </h2>
          <p className="text-gray-600 mb-2">
            by {post.author?.name} •{" "}
            {new Date(post.publishedAt).toLocaleDateString()}
          </p>
          <div className="text-gray-700 mb-4 line-clamp-3">
            <PortableText value={post.body} />
          </div>
          <div className="flex flex-wrap gap-2">
            {post.categories?.map((category) => (
              <span
                key={category._id}
                className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded"
              >
                {category.title}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

// PostList component
const PostList = ({ posts }: { posts: Post[] }) => {
  return (
    <div className="container mx-auto px-10 py-8">
      <h1 className="text-3xl text-gray-700 font-bold mb-8">Latest Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default PostList;
