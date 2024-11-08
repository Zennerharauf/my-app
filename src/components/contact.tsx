
function Contact() {
    return (
        <section id="contact" className="p-10 bg-gray-100">
            <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
            <p className="text-center text-gray-700 mb-10">
                Im always open to discussing new projects, creative ideas, or opportunities...
            </p>
            <form className="max-w-lg mx-auto space-y-4">
                <input type="text" placeholder="Name" className="w-full p-3 border rounded" required />
                <input type="email" placeholder="Email" className="w-full p-3 border rounded" required />
                <textarea placeholder="Message" className="w-full p-3 border rounded" required></textarea>
                <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600">Send Message</button>
            </form>
        </section>
    );
}

export default Contact;