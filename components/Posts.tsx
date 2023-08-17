import { PostItem } from "@/app/blog/[id]/page";
import Link from "next/link";

type Props = {
	posts: PostItem[];
};
export const Posts = ({ posts }: Props) => (
	<ul className="flex flex-col px-32 py-8">
		{posts.map((post: PostItem) => (
			<li key={post.id} className="py-2">
				<Link href={`/blog/${post.id}`}>{post.title}</Link>
			</li>
		))}
	</ul>
);
