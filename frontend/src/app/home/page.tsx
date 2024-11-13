import React from "react";

const page = () => {
	return (
		<>
			<div className="flex min-h-screen flex-col items-center justify-center p-5 ">
				<h1 className="font-medium text-white ~text-2xl/4xl">
					Fluid for Tailwind CSS
				</h1>
				<p className="text-slate-600 ~text-base/lg ~mt-1/3">
					(Try resizing the window)
				</p>
				<a
					href="https://fluid.tw"
					target="_blank"
					className="block w-fit rounded-full bg-slate-900 px-4 py-2 text-white ~text-sm/base ~mt-4/6 hover:bg-slate-700"
				>
					{" "}
					Read the docs &rarr;{" "}
				</a>
			</div>
		</>
	);
};

export default page;
