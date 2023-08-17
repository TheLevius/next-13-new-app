"use client";
import { PostItem } from "@/app/blog/[id]/page";
import useSWR from "swr";
import Link from "next/link";
import { getAllPosts } from "@/services/getPosts";

export const Posts = () => {
	const { data: posts, isLoading } = useSWR("posts", getAllPosts);

	return isLoading ? (
		<h3>Loading...</h3>
	) : (
		<ul className="flex flex-col px-32 py-8">
			{posts.map((post: PostItem) => (
				<li key={post.id} className="py-2">
					<Link href={`/blog/${post.id}`}>{post.title}</Link>
				</li>
			))}
		</ul>
	);
};
