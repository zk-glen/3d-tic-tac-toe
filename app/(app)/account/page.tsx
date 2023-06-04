import { Button } from "@/components/ui/button";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import { LogoutButton } from "../../auth";

export default async function Account() {
	const session = await getServerSession(authOptions);
	const UserDetails = JSON.stringify(session);
	const { id, name, email, randomKey } = JSON.parse(UserDetails).user;

	return (
		<div className="container h-screen flex flex-col justify-center items-center">
			<h1 className=" text-4xl font-bold basis-1/6">Account Page</h1>
			<Button>
				<Link href="./">Home</Link>
			</Button>
			<div className=" flex flex-col gap-5 basis-5/6 justify-center">
				<h2 className="text-xl text-center ">Details</h2>
				<div className="flex flex-col gap-1">
					<p>Id: {id}</p>
					<p>Name: {name}</p>
					<p>Email: {email}</p>
					<p>Random Key: {randomKey}</p>
				</div>
				<LogoutButton />
			</div>
		</div>
	);
}
