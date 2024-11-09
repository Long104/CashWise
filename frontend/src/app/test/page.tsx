// app/page.tsx
import { cookies } from "next/headers";

import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

export default async function Page() {
	const cookieStore = await cookies();
	const jwt = cookieStore.get("jwt");
	// const jwtToken = Cookies.get("jwt"); // Get JWT from cookies
	let decoded;
	if (jwt) {
		decoded = jwtDecode<{ exp: number }>(jwt.value); // Define the expected structure
	} else {
		// Handle the case where the token is not available
		console.error("JWT token is not available.");
		return <div>No JWT found</div>; // or redirect to login, etc.
	}
	const exp = decoded.exp * 1000; // Convert to milliseconds
	const currentTime = Date.now();
	console.log(jwt);
	console.log(decoded);
	console.log(exp);
	console.log(currentTime);
	async function getData() {
		try {
			const res = await fetch("http://localhost:8080/transactions", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${jwt?.value}`, // Add the Bearer token
					// Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imxvbmd3ZWVAZ21haWwuY29tIiwiZXhwIjoxNzMwOTAzODc4LCJuYW1lIjoiaGFoYTEyMyIsInJvbGUiOiJhZG1pbiIsInVzZXJfaWQiOjl9.emEj5_LhhE82gOA3FGYuk6cJfwoyxdJVC5JIDmL5Y50`, // Add the Bearer token
				},
			});

			if (!res.ok) {
				throw new Error("cannot fetch data");
			}

			return await res.json();
		} catch (error) {
			console.error(error);
			return <div>Error loading data</div>;
		}
	}

	const result = await getData();
  console.log(result)

	return (
		<div>
			{/* {result.map((res: { name: string; email: string }) => ( */}
			{/* 	<div key={res.email}>{res.name}</div> */}
			{/* ))} */}

			{result.map((res: any, index: number) => (
				<div key={index}>{res.amount}</div>
			))}
		</div>
	);
	// return <div>{jwt ? <p>JWT: {jwt.value}</p> : <p>No JWT found</p>}</div>;
}
