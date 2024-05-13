import { getBlogs } from "@/lib/actions";

export default async function Home() {
  const blogs = await getBlogs()
  console.log(blogs)
  return <div>hello</div>;
}
