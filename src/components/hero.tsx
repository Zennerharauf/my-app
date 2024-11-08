import Image from "next/image";

function Hero() {
    return (
        <section className="flex flex-col md:flex-row items-center p-10 pt-24 bg-gray-100"> 
            {/* Left - Image */}
            <div className="md:w-1/2 flex justify-center mb-4 md:mb-0">
                <Image src="/images/me.jpg" width={200} height={200} alt="profile" className="rounded-full mb-2" />
            </div>

            {/* Right - Text with Animation */}
            <div className="md:w-1/2 text-center md:text-left">
                <h1 className="text-4xl font-bold mb-4 animate-fade-in-down">Im Zennerha Rauf, Front-end Developer</h1>
                <p className="text-gray-700 mb-6">
                    As an enthusiastic and committed aspiring Front-end Developer, I am driven by a passion for coding and innovation...
                </p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">HIRE ME</button>
            </div>
        </section>
    );
}
export default Hero;