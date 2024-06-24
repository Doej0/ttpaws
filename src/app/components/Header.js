import Link from "next/link";
import Image from "next/image";

const Header = () => {
    return (
        <header className="bg-white p-4">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">

                {/* Logo */}
                <div className="flex-shrink-0">
                    <Image src="/ttplogo.png" width={75} height={75} alt="Logo" />
                </div>

                {/* Centered Titles */}
                <div className="mt-4 md:mt-0 flex-grow text-center">
                    <h1 className="text-2xl text-purple-400 font-bold">The Teacher&apos;s Paws</h1>
                    <h2 className="text-lg text-purple-700">Pet Boarding, Doggie Day Care & Canine Obedience Training</h2>

                    <nav className="mt-2">
                        <ul className="mt-4 flex flex-wrap justify-center md:justify-center space-x-4 text-purple-400">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="#services">Services</Link></li>
                            <li><Link href="/pricing">Pricing</Link></li>
                            <li><Link href="#about">About</Link></li>
                            <li><Link href="#contactus">Contact Us</Link></li>
                            <li>
                                <button className="bg-purple-500 text-white font-bold py-4 px-6 rounded hover:bg-purple-700 mt-2 md:mt-0">
                                    <Link href="/booknow">Book Now!</Link>
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
