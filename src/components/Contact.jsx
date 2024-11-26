const Contact = () => {

    return (
        <div className="py-3 bg-gray-200 flex items-center justify-center sm:px-6 lg:px-8">
            <div className="max-w-md space-y-4">
                <h2 className="text-center text-3xl font-extrabold text-black">
                    Contact the Gods of Asgard
                </h2>
                <p className="text-center text-sm text-black">
                    Your message shall be carried by Huginn and Muninn to the halls of Valhalla
                </p>
                {/* Formulario */}
                <form className="space-y-6" >
                    <div className="rounded-full shadow-sm -space-y-px">
                        {/* Campo de nombre */}
                        <label htmlFor="name" className="sr-only">Name</label>
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <div className="h-5 w-5 text-white" />
                        </div>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            className="appearance-none rounded-none relative block w-full px-3 py-2 pl-10 border border-gray-700 placeholder-gray-500 text-gray-100 rounded-t-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm bg-gray-800"
                            placeholder="Your Name" />
                        {/* Campo de email */}
                        <label htmlFor="email" className="sr-only">Email address</label>
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <div className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="appearance-none rounded-none relative block w-full px-3 py-2 pl-10 border border-gray-700 placeholder-gray-500 text-gray-100 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm bg-gray-800"
                            placeholder="Email address" />
                        {/* Campo de mensaje */}
                        <label htmlFor="message" className="sr-only">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            className="appearance-none rounded-none relative block w-full px-3 py-2 pl-10 border border-gray-700 placeholder-gray-500 text-gray-100 rounded-b-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm bg-gray-800"
                            placeholder="Your message to the gods"
                            rows={4}
                        ></textarea>
                    </div>
                    {/* Boton de enviar */}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="w-[200px] flex justify-center py-2 px-4 border border-black text-sm font-medium rounded-full text-gray-900 bg-yellow-500 hover:bg-yellow-400 focus:outline-none focus:ring-2 hover:scale-110 focus:ring-offset-2 focus:ring-yellow-500 transition duration-150 ease-in-out">
                            Send to Odin
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact