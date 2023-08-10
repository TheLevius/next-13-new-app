import { Metadata } from "next";

export const metadata: Metadata = {
	title: "About | Next App",
};
export default function About() {
	return <h2 className="flex flex-col items-center">Select subitem</h2>;
}
