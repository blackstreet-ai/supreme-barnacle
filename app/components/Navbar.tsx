import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { auth, signOut, signIn } from "@/auth";


// Navbar component
const Navbar = async () => {
    const session = await auth(); // Replace with actual session fetching logic
    return (
        <header className={"px-5 py-3 bg-white shadow-sm flex font-work-sans"}>
            <nav className={"flex justify-between items-center w-full"}>
                <Link href="/">
                    <Image src="/logo.png" alt={"logo"} width={144} height={30}></Image>
                </Link>

                <div className={"flex items-center gap-5 text-black"}>
                    {session && session?.user ? (
                        <>
                            <Link href={"/"}>
                                <span>Create</span>
                            </Link>

                            <form action={async ()=> {
                                "use server"
                                await signOut({ redirectTo: "/" });
                            }}>
                                <button type="submit">Log Out</button>
                            </form>

                            <Link href={`/user/${session?.user.id}`}>
                                <span>{session?.user?.name}</span>
                            </Link>
                        </>
                    ) : (
                        <form action={async ()=> {
                            "use server"
                            await signIn('github');
                        }}>
                            <button type="submit">
                                <span>Log In</span>
                            </button>
                        </form>
                    )}
                </div>
            </nav>
        </header>
    )
}
export default Navbar
