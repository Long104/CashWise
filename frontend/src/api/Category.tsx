import Cookies from "js-cookie";

export async function fetchDeleteCategory(url: string): Promise<any> {
	const jwt = Cookies.get("jwt");
	try {
		const res = await fetch(`http://localhost:8080/${url}`, {
			method: "DELETE",
			headers: {
				Authorization: `Bearer ${jwt}`,
			},
		});

		if (!res.ok) {
			throw new Error("Cannot delete data");
		}

		const text = await res.text();
		console.log(text);
		return text ? JSON.parse(text) : null;
		// return await res.json(); // Or `return { success: true };` if no JSON response
	} catch (error) {
		console.error(error);
		return { error: "Error deleting data" };
	}
}
