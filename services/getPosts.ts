export const getAllPosts = async () => {
	const response = await fetch("https://jsonplaceholder.typicode.com/posts");
	if (!response.ok) throw new Error("Unable to fetch posts");
	return response.json();
};

export const getPostsBySearch = async (searchRequest: string) => {
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/posts?q=${searchRequest}`
	);
	if (!response.ok) throw new Error("Unable to fetch posts");
	return response.json();
};
