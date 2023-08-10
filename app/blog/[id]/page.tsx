import { Metadata } from "next";

type Props = {
	params: {
		id: string;
	};
};

async function getData(id: string): Promise<Post> {
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${id}`,
		{
			next: {
				revalidate: 60,
			},
		}
	);
	return response.json();
}

export async function generateMetadata({
	params: { id },
}: Props): Promise<Metadata> {
	const post = await getData(id);
	return {
		title: post.title,
	};
}
export default async function Post({ params: { id } }: Props) {
	const post = await getData(id);
	return (
		<div className="flex flex-col mx-20">
			<h1 className="pb-8 font-semibold text-xl">{post.title}</h1>
			<p className="text-base">{post.body}</p>
		</div>
	);
}

export type Post = {
	userId: number;
	id: number;
	title: string;
	body: string;
};
