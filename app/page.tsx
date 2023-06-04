import { Button } from "@/components/ui/button";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { LoginButton, LogoutButton } from "./auth";
import { User } from "./user";

export default async function Home() {
	const session = await getServerSession(authOptions);

	return (
		<main className="container mx-auto mt-12">
			Homepage
			{session ? (
				<Button>
					<Link href="./account">Account</Link>
				</Button>
			) : (
				<LoginButton />
			)}
			<h2>Server Session</h2>
			<pre>{JSON.stringify(session)}</pre>
			<h2>Client Call</h2>
			{/* <User /> */}
		</main>
	);
}
