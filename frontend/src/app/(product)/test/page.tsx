'use client'
import React from "react";
import { useUser } from "@/hooks/useUser";

const page = () => {
	const { userQuery, createUserMutation, deleteUserMutation } = useUser();
	const { data: user } = userQuery;
	console.log("User:", user);
	return <div>page</div>;
};

export default page;
