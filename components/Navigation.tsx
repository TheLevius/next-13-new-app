"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export type NavLink = {
	label: string;
	href: string;
};

type Props = {
	navLinks: NavLink[];
};

const Navigation = ({ navLinks }: Props) => {
	const pathname = usePathname();
	console.log(navLinks.map((link) => link.label));
	return (
		<>
			{navLinks.map((link) => (
				<Link
					key={link.label}
					href={link.href}
					className={
						link.href === pathname ? "text-white" : "text-cyan-400"
					}
				>
					{link.label}
				</Link>
			))}
		</>
	);
};

export { Navigation };
