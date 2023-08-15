"use client";

export default function ErrorWrapper({ error }: { error: Error }) {
	return <h1 style={{ display: "flex" }}>Oops!!! {error.message}</h1>;
}
