"use client";
import React from "react";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	Legend,
	ResponsiveContainer,
} from "recharts";

const data = [
	{
		name: "1 week",
		before: 5000,
		after: 4000,
		result: 2400,
	},
	{
		name: "2 week",
		before: 5000,
		after: 3000,
		result: 2400,
	},
	{
		name: "3 week",
		before: 5000,
		after: 2000,
		result: 2400,
	},
	{
		name: "4 week",
		before: 5000,
		after: 1000,
		result: 2400,
	},
];

export function ChartMonth() {
	return (
		<ResponsiveContainer width={"100%"} height={"100%"}>
			<BarChart width={650} height={300} data={data}>
				<XAxis dataKey="name" />
				<YAxis />
				{/* <Tooltip /> */}
				<Legend verticalAlign="top" height={36} />
				<Bar dataKey="before" fill="var(--chart-1)" />
				<Bar dataKey="after" fill="var(--chart-2)" />
			</BarChart>
		</ResponsiveContainer>
	);
}

