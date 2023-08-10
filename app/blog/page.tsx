import { Metadata } from "next";
import Link from "next/link";
import { Post } from "./[id]/page";

async function getData() {
	const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
		next: {
			revalidate: 60,
		},
	});
	return response.json();
}

export const metadata: Metadata = {
	title: "Blog | Next App",
};

export default async function Blog() {
	const posts = await getData();
	return (
		<>
			<h1 className="flex flex-col items-center">Blog page</h1>
			<ul className="flex flex-col px-32 py-16">
				{posts.map((post: Post) => (
					<li key={post.id} className="py-2">
						<Link href={`/blog/${post.id}`}>{post.title}</Link>
					</li>
				))}
			</ul>
		</>
	);
}
