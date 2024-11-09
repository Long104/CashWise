"use server";

import { jwtDecode } from "jwt-decode";
// import { useAuth } from "@/context/auth";
import { cookies } from "next/headers";
async function Fetch() {
	// const { user, login, logout, good } = useAuth();
	const cookieStore = await cookies();
	const jwt = cookieStore.get("jwt");
	let id;
	if (jwt) {
		const decoded = jwtDecode<{ user_id: number }>(jwt.value);
		id = decoded.user_id;
	} else {
		console.error("Error decoding JWT:");
	}
	// const response = await fetch("http://localhost:8080/categories", {
	const response = await fetch(`http://localhost:8080/user/${id}`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${jwt?.value}`, // Add the Bearer token
		},
		cache: "no-store",
	});
	// const response = await fetch("http://localhost:8080/test",{  cache: 'force-cache' | 'no-store' });
	if (!response.ok) {
		throw new Error("Cannot fetch data");
	}

	// Ensure the response is parsed as JSON
	return await response.json();
}

export default async function Page() {
	const result = await Fetch();

	// Check if result is an array, otherwise set it to an empty array
	// if (!Array.isArray(result)) {
	// 	return <div>Data format is incorrect</div>;
	// }
	console.log(result);

	return (
		<div>
			{/* {result.map((res: { name: string; id: number }, index: number) => ( */}
			{/* 	<div key={index}> {res.id}</div> */}
			{/* ))} */}
			{result.name} <br/>
      {result.email}
		</div>
	);
}
