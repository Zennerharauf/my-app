function Footer() {
    return (
        <footer className="p-6 bg-gray-900 text-white">
            <div className="flex flex-col items-center">
                <h3 className="text-xl font-bold">ZARQ</h3>
                <p className="mt-2 text-center">Thank you for visiting my portfolio!</p>
                <ul className="flex space-x-4 mt-4">
                    <li><a href="https://www.linkedin.com/in/zennerha-rauf-7a39002b8/" target="_blank" className="hover:text-gray-300">LinkedIn</a></li>
                    <li><a href="https://github.com/Zennerharauf" target="_blank" className="hover:text-gray-300">GitHub</a></li>
                    <li><a href="https://vercel.com/zennerha-rauf-s-projects" target="_blank" className="hover:text-gray-300">Vercel</a></li>
                </ul>
            </div>
            <p className="text-center mt-6">&copy; 2024 Zennerha Rauf. All rights reserved.</p>
        </footer>
    );
}

export default Footer;