import { Button } from "@/components/ui/button";

import Link from "next/link";

export default async function Dashboard() {
	return (
		<div className="container h-screen flex flex-col justify-center items-center">
			<h1 className=" text-4xl font-bold basis-1/6">Dashboard</h1>
			<Button>
				<Link href="./account">Account Page</Link>
			</Button>
		</div>
	);
}
