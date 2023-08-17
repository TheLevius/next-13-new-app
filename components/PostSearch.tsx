"use client";
import { getPostsBySearch } from "@/services/getPosts";
import { FormEventHandler, useState } from "react";
import useSWR from "swr";

export const PostSearch = () => {
	const { mutate } = useSWR("posts");
	const { 0: search, 1: setSearch } = useState("");
	const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
		event.preventDefault();
		getPostsBySearch(search).then((posts) => {
			mutate(posts);
		});
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
