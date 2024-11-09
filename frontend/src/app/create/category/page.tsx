"use client";

import React, { useState } from "react";
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

type Category = {
	// id: number;
	name: string;
};
const Page = () => {
	const [result, setResult] = useState<any[]>([]);
	const [category, setCategory] = useState<Category>({ name: "" });

	async function handleCategorySubmit(e: React.FormEvent) {
		e.preventDefault();
		const token = Cookies.get("jwt");

		if (token) {
			try {
				const data = await postWithBearer(
					"http://localhost:8080/category",
					token,
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
			<div>
				<form onSubmit={handleCategorySubmit}>
					<input
						type="text"
						name="name"
						value={category.name}
						className="border border-gray-400 text-indigo-300"
						onChange={(e) => setCategory({ name: e.target.value })}
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
