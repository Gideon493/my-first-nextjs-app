import Link from "next/link";

export default function Navbar() {

    return (

        <nav className="p-4 flex flex-row">

            <h1 className="text-red-500 text-xl basis-1/4 ">My First Next Application</h1>

            <Link href="/" className="text-xl basis-1/4">Home</Link>

            <Link href="/about" className="text-xl basis-1/4">About</Link>

        </nav>

    );

}