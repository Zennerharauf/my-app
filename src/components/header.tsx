import Link from "next/link";

function Header() {
    return (
        <header className="fixed top-0 left-0 w-full flex justify-between items-center p-5 bg-gray-900 text-white shadow-md z-50">
            <h1 className="text-3xl font-bold">ZARQ</h1>
            <nav>
                <ul className="flex space-x-6">
                    <li><Link href="#home" className="hover:text-gray-300">HOME</Link></li>
                    <li><Link href="#about" className="hover:text-gray-300">ABOUT</Link></li>
                    <li><Link href="#skills" className="hover:text-gray-300">SKILLS</Link></li>
                    <li><Link href="#projects" className="hover:text-gray-300">PROJECT</Link></li>
                    <li><Link href="#contact" className="hover:text-gray-300">CONTACT-ME</Link></li>
                </ul>
            </nav>
        </header>
    );
}
export default Header;