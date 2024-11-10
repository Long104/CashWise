"use client";
import React, { useEffect, useState } from "react";
import { fetchGet } from "@/fetch/client";

const page = () => {
	const [data, setData] = useState<any[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				setData(await fetchGet("users"));
        // const response = await fetchGet("users");
        // setData(response);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []);
	console.log(data);
	return (
		<div>
			{data.map((value: any, index: number) => (
				<div key={index}>{value.name}</div>
			))}
		</div>
	);
};

export default page;
