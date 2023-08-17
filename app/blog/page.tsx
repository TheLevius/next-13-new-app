"use client";
import { Metadata } from "next";
import { useEffect, useState } from "react";
import { getAllPosts } from "@/services/getPosts";
import { PostItem } from "./[id]/page";
import { Posts } from "@/components/Posts";
import { PostSearch } from "@/components/PostSearch";

async function getData() {
	const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
		next: {
			revalidate: 60,
		},
	});
	return response.json();
}

const metadata: Metadata = {
	title: "Blog | Next App",
};

export default function Blog() {
	const { 0: posts, 1: setPosts } = useState<PostItem[]>([]);
	const { 0: loading, 1: setLoading } = useState<boolean>(true);

	useEffect(() => {
		getAllPosts()
			.then(setPosts)
			.finally(() => {
				setLoading(false);
			});
	}, []);
	return (
		<>
			<h1 className="flex flex-col items-center">Blog page</h1>
			<PostSearch
				onSearch={(downloadedPosts: PostItem[]) =>
					setPosts(downloadedPosts)
				}
			/>
			{loading ? <h3>Loading...</h3> : <Posts posts={posts} />}
		</>
	);
}
