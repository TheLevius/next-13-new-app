import Link from "next/link";

const TheHeader = () => {
	return (
		<header className="flex justify-around columns-3">
			<Link className="p" href="/">
				Home
			</Link>
			<Link href="/blog">Blog</Link>
			<Link href="/about">About</Link>
		</header>
	);
};

export { TheHeader };
