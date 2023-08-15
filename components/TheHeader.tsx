import Link from "next/link";
import { NavLink, Navigation } from "./Navigation";

const navItems: NavLink[] = [
	{ label: "Home", href: "/" },
	{ label: "Blog", href: "/blog" },
	{ label: "About", href: "/about" },
];

const TheHeader = () => {
	return (
		<header className="flex justify-around bg-slate-600 py-4">
			<Navigation navLinks={navItems} />
		</header>
	);
};

export { TheHeader };
