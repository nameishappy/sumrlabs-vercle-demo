import { getPosts } from "../../sanity/lib/queries";
import PostList from "../blog/_components/PostList";

export default async function PostsPage() {
  const posts = await getPosts();
  console.log(posts, "ALL the posts list");
  return <PostList posts={posts} />;
}
