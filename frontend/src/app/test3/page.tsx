// "use client";
//
// import React, { useEffect, useState } from "react";
// import Cookies from "js-cookie";
//
// export async function postWithBearer(
// 	url: string,
// 	token: string,
// ): Promise<any[] | undefined> {
// 	try {
// 		const response = await fetch(url, {
// 			method: "GET",
// // method: "POST",
// 			headers: {
// 				"Content-Type": "application/json",
// 				Authorization: `Bearer ${token}`,
// 			},
//        // body: JSON.stringify({ name: "New User" }),
// 		});
//
// 		if (!response.ok) {
// 			throw new Error(`Request failed: ${response.status}`);
// 		}
//
// 		return await response.json();
// 	} catch (error) {
// 		console.error("Error:", error);
// 	}
// }
//
// const Page = () => {
// 	const [result, setResult] = useState<any[]>([]);
//
// 	useEffect(() => {
// 		const fetchData = async () => {
// 			const token = Cookies.get("jwt");
//
// 			if (token) {
// 				try {
// 					const data = await postWithBearer(
// 						"http://localhost:8080/users",
// 						token,
// 					);
// 					if (data) {
// 						setResult(data);
// 					}
// 				} catch (error) {
// 					console.error("Error fetching data:", error);
// 				}
// 			}
// 		};
//
// 		fetchData();
// 	}, []);
//
// 	return (
// 		<>
// 			{result.map((value: any) => (
// 				<div key={value.id}>{value.name}</div>
// 			))}
// 		</>
// 	);
// };
//
// export default Page;

"use client";

import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

export async function postWithBearer(
	url: string,
	token: string,
	data: { [key: string]: any },
): Promise<any[] | undefined> {
	try {
		const response = await fetch(url, {
			// method: "GET",
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			// body: JSON.stringify({ name: "test" }),
			body: JSON.stringify(data),
		});

		if (!response.ok) {
			throw new Error(`Request failed: ${response.status}`);
		}

		return await response.json();
	} catch (error) {
		console.error("Error:", error);
	}
}

const Page = () => {
	const [result, setResult] = useState<any[]>([]);
	// const [name, setName] = useState<any[]>([]);
	const [name, setName] = useState<string>("");

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		const token = Cookies.get("jwt");
	//
	// 		if (token) {
	// 			try {
	// 				const data = await postWithBearer(
	// 					"http://localhost:8080/category",
	// 					token,
	//            { name: "test" },
	// 				);
	// 				if (data) {
	// 					setResult(data);
	// 				}
	// 			} catch (error) {
	// 				console.error("Error fetching data:", error);
	// 			}
	// 		}
	// 	};
	//
	// 	fetchData();
	// 	console.log(result);
	// }, []);

	async function handleCategorySubmit(e: React.FormEvent) {
		e.preventDefault();
		const token = Cookies.get("jwt");

		if (token) {
			try {
				const data = await postWithBearer(
					"http://localhost:8080/category",
					token,
					// { name: "test" },
					{ name },
				);
				if (data) {
					setResult(data);
				}
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		}
	}

	return (
		<>
			{/* {result.map((value: any) => ( */}
			{/* 	<div key={value.id}>{value.name}</div> */}
			{/* ))} */}
			<div>
				<form onSubmit={handleCategorySubmit}>
					<input
						type="text"
						name="name"
						value={name}
						className="border border-gray-400 text-indigo-300"
						onChange={(e) => setName(e.target.value)}
					/>
					<button type="submit" className="text-indigo-500">
						Submit
					</button>
				</form>
			</div>
		</>
	);
};

export default Page;
