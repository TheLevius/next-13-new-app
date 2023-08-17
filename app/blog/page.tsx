"use client";
import { Metadata } from "next";
import { useEffect } from "react";
import { getAllPosts } from "@/services/getPosts";
import { PostItem } from "./[id]/page";
import { Posts } from "@/components/Posts";
import { PostSearch } from "@/components/PostSearch";
import { usePosts } from "@/store";
import { shallow } from "zustand/shallow";

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
	return (
		<>
			<h1 className="flex flex-col items-center">Blog page</h1>
			<PostSearch />
			<Posts />
		</>
	);
}
