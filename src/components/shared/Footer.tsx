import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="z-10 w-full p-4 bg-gray-800 shadow md:flex md:items-center md:justify-between md:p-6">
            <span className="text-sm text-gray-400 sm:text-center">
                © 2023 Gunn Capstone. All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-400 sm:mt-0">
                <li>
                    <Link href="#" className="mr-4 hover:underline md:mr-6 ">
                        About
                    </Link>
                </li>
                <li>
                    <Link href="#" className="mr-4 hover:underline md:mr-6">
                        Privacy Policy
                    </Link>
                </li>
                <li>
                    <Link href="#" className="mr-4 hover:underline md:mr-6">
                        Open Source Licenses
                    </Link>
                </li>
                <li>
                    <Link href="#" className="hover:underline">
                        Contact
                    </Link>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;
