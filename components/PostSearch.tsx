"use client";
import { PostItem } from "@/app/blog/[id]/page";
import { getPostsBySearch } from "@/services/getPosts";
import { FormEventHandler, useState } from "react";

type Props = {
	onSearch: (value: PostItem[]) => void;
};

export const PostSearch = ({ onSearch }: Props) => {
	const { 0: search, 1: setSearch } = useState("");
	const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
		event.preventDefault();
		const posts = await getPostsBySearch(search);
		onSearch(posts);
	};
	return (
		<form
			onSubmit={handleSubmit}
			className="flex flex-row justify-center pt-4"
		>
			<input
				className="text-slate-700"
				type="search"
				placeholder="search"
				value={search}
				onChange={(event) => setSearch(event.target.value)}
			/>
			<button type="submit">Search</button>
		</form>
	);
};
