"use client";
// import React, { useState, useEffect } from "react";
// import { fetchPost, fetchGet, fetchDelete } from "@/fetch/client";
//
// import { useAuth } from "@/context/auth";
// import { useUser } from "@/context/user";
// const page = () => {
// 	const { user, login, logout } = useAuth();
// 	const { user_data } = useUser();
//
// 	console.log(user);
// 	console.log(user?.user_id);
// 	console.log("user data", user_data);
// 	return <div>page</div>;
// };
//
// export default page;

import React from "react";
import useAuthStore from "@/zustand/auth";

const page = () => {
	const user = useAuthStore((state) => state.user);
	const jwt = useAuthStore((state) => state.jwt);
  console.log("this is user",user)
  console.log("this is jwt",jwt)
	return (
		<>
			<div>{user?.name}</div>
      <div>{jwt}</div>
		</>
	);
};

export default page;
