"use client";
import Cookies from "js-cookie";

export async function fetchGet(url: string): Promise<any> {
	const jwt = Cookies.get("jwt");
	// const jwtToken = Cookies.get("jwt"); // Get JWT from cookies
	try {
		const res = await fetch(`http://localhost:8080/${url}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${jwt}`, // Add the Bearer token
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

export async function fetchPost(url: string, data: any): Promise<any> {
	const jwt = Cookies.get("jwt");
	// const jwtToken = Cookies.get("jwt"); // Get JWT from cookies
	try {
		const res = await fetch(`http://localhost:8080/${url}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${jwt}`, // Add the Bearer token
			},
			body: JSON.stringify(data),
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
