"use client";
import { PostItem } from "@/app/blog/[id]/page";
import { usePosts } from "@/store";
import Link from "next/link";
import { useEffect } from "react";
import { shallow } from "zustand/shallow";

export const Posts = () => {
	const { posts, loading, getAllPosts } = usePosts(
		({ posts, loading, getAllPosts }) => ({ posts, loading, getAllPosts })
	);

	useEffect(getAllPosts, []);

	return loading ? (
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
