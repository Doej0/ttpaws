import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-gray-100 p-4">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                <div className="mb-4 md:mb-0 flex flex-col items-center">
                    <p className="text-lg font-semibold">Check out our Socials!</p>
                    <ul className="flex space-x-4 mt-2">
                        <li>
                            <Link href="https://www.facebook.com/TeachersPaws">
                                <Image src="/fb.svg" width={30} height={30} alt="Facebook" />
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.instagram.com/TeachersPaws">
                                <Image src="/ig.svg" width={30} height={30} alt="Instagram" />
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.tiktok.com/@TeachersPaws">
                                <Image src="/tictok.svg" width={30} height={30} alt="TikTok" />
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="w-full md:w-auto">
                    <ul className="flex flex-wrap justify-between md:justify-start space-y-2 md:space-y-0">
                        <li className="w-1/2 md:w-auto md:mr-4">Home</li>
                        <li className="w-1/2 md:w-auto md:mr-4">Services</li>
                        <li className="w-1/2 md:w-auto md:mr-4">Pricing</li>
                        <li className="w-1/2 md:w-auto md:mr-4">About Us</li>
                        <li className="w-1/2 md:w-auto md:mr-4">Blog</li>
                        <li className="w-1/2 md:w-auto md:mr-4">FAQs</li>
                    </ul>
                </div>
            </div>
            <p className="text-center mt-4">Copyright 2024</p>
        </footer>
    );
};

export default Footer;
