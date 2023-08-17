import { getAllPosts, getPostsBySearch } from "@/services/getPosts";
import { PostItem } from "@/app/blog/[id]/page";
import { create } from "zustand";
type UsePosts = {
	posts: PostItem[];
	loading: boolean;
	getAllPosts: () => void;
	getPostsBySearch: (v: string) => void;
};
export const usePosts = create<UsePosts>()((set) => ({
	posts: [],
	loading: false,
	getAllPosts: () => {
		set({ loading: true });
		getAllPosts().then((posts) => {
			set({ posts, loading: false });
		});
	},
	getPostsBySearch: (search) => {
		set({ loading: true });
		getPostsBySearch(search).then((posts) => {
			set({ posts, loading: false });
		});
	},
}));
