
const Contact = () => {
    return (
        <section id="contactus" className="py-10 bg-gray-100">
            <div className="container mx-auto px-4">
                <h3 className="text-2xl font-semibold text-center mb-8">Contact Us</h3>
                
                <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
                    <form>
                        <div className="mb-4">
                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                            <input 
                                type="text" 
                                id="firstName" 
                                name="firstName" 
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                            <input 
                                type="text" 
                                id="lastName" 
                                name="lastName" 
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                            <input 
                                type="tel" 
                                id="phone" 
                                name="phone" 
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Write a Message</label>
                            <textarea 
                                id="message" 
                                name="message" 
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                            ></textarea>
                        </div>

                        <div>
                            <input 
                                type="submit" 
                                value="Submit" 
                                className="w-full bg-purple-500 text-white p-2 rounded-md hover:bg-purple-600"
                            />
                        </div>
                    </form>
                </div>

                <div className="text-center mt-8">
                    <p className="text-lg font-medium">The Teacher&apos;s Paws</p>
                    <p>307 Leader Street</p>
                    <p>Vidalia,GA</p>
                    <p>(912)293-7007</p>
                </div>
            </div>
        </section>
    );
};

export default Contact;