"use client";
import { PostItem } from "@/app/blog/[id]/page";
import { usePosts } from "@/store";
import { FormEventHandler, useState } from "react";

export const PostSearch = () => {
	const { 0: search, 1: setSearch } = useState("");
	const getPostsBySearch = usePosts((state) => state.getPostsBySearch);
	const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
		event.preventDefault();
		getPostsBySearch(search);
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
