"use client";

//
// import { useEffect, useState } from "react";
// import { jwtDecode } from "jwt-decode";
// import Cookies from "js-cookie";
//
// export default  function Page() {
// 	// Cookies.set("test", "hello", { expires: 7, path: "" });
// 	const result = Cookies.get("jwt"); // => 'value'
// 	console.log(result);
//
// 	return <div>{result}</div>;
// }

import {useAuth} from "@/components/useAuth"
// import {useAuth} from "@/components/useAuth-server"

export default function Page() {
  useAuth();
  return (
    <div>hello</div>
  )
}
