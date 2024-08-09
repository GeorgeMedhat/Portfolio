'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {

    const currentPath = usePathname();
    return (
        <header className="sm:px-16 px-8 py-8  z-10 w-full">
            <nav className='flex justify-between items-center max-w-[1440px] mx-auto mb-5 '>
                <Link href='/' className="mx-auto max-lg:text-center ">
                    <h1 className="font-extrabold text-[30px]">
                        George
                        <span className="font-extrabold text-[#4099FF]">.</span>
                    </h1>
                </Link>

                <ul className='flex-[0.7] flex justify-center items-center gap-16 max-lg:hidden'>
                    <li>
                        <Link href="/" className={`navitem ${(currentPath==="/")&&'navselected'}`}>Home</Link>
                    </li>
                    <li>
                        <Link href="/projects" className={`navitem ${(currentPath==="/projects")&&'navselected'}`}>projects</Link>
                    </li>
                    <li>
                        <Link href='/cv' className={`navitem ${(currentPath==="/cv")&&'navselected'}`}>CV</Link>
                    </li>
                    <li>
                        <Link href='/contactme'> 
                            <button className="bg-[#4099FF] px-3 py-1 rounded-2xl hover:bg-[#2c68ad] ">
                                    Contact Me
                            </button>
                        </Link>
                    </li>

                </ul>
                <h1 className="hidden max-lg:block">
                    hamburger
                </h1>
            </nav>
        </header>
    )
}