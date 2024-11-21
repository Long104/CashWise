"use client";
import React from "react";
import { fetchPost, fetchGet, fetchDelete } from "@/fetch/client";
import useAuthStore from "@/zustand/auth";
const page = () => {
	const [user, setUser] = React.useState<{ name: string } | null>(null);
  const users = useAuthStore((state) => state.user);
	const handleFetch = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		const res = await fetchGet(`user/${users?.user_id}`);
		console.log(res);
		setUser(res);
	};
	return (
		<>
			<div>{user?.name}</div>
			<button onClick={handleFetch}>click this</button>
		</>
	);
};

export default page;
