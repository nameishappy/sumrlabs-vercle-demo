import React from "react";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { urlForImage } from "@/sanity/lib/sanity.image";
import { getPost, getPosts } from "../../../sanity/lib/queries";

interface Post {
  title: string;
  mainImage: any;
  publishedAt: string;
  author: { name: string };
  categories: { _id: string; title: string }[];
  body: any;
  slug: string;
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post: Post = await getPost(params.slug);

  if (!post) {
    return <div className="container mx-auto px-4 py-8">Post not found</div>;
  }

  return (
    <article className="container mx-auto px-4 py-8">
      {post.mainImage && (
        <div className="relative w-full h-64 md:h-96 mb-8">
          <Image
            src={urlForImage(post.mainImage).url()}
            alt={post.mainImage.alt || post.title}
            fill
            style={{ objectFit: "cover" }}
            className="rounded-lg"
          />
        </div>
      )}
      <h1 className="text-4xl text-gray-700 font-bold mb-4">{post.title}</h1>
      <div className="flex items-center text-gray-600 mb-4">
        {post.author && <span>by {post.author.name}</span>}
        {post.publishedAt && (
          <span className="ml-4">
            {new Date(post.publishedAt).toLocaleDateString()}
          </span>
        )}
      </div>
      {post.categories && post.categories.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {post.categories.map((category) => (
            <span
              key={category._id}
              className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded"
            >
              {category.title}
            </span>
          ))}
        </div>
      )}
      <div className="prose max-w-none">
        <PortableText value={post.body} />
      </div>
    </article>
  );
}

//generate static params
export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post: Post) => ({
    slug: post.slug,
  }));
}
