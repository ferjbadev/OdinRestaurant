import React from "react";

const Navbar = () => {
    return (
        <nav className=" bg-gray-300 text-black shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl hover:scale-105">
                        <p className="flex items-center space-x-2 transition duration-300 hover:scale-125 cursor-pointer">
                            <img
                                src="odin.png"
                                height={60}
                                width={60}
                                color="white" />
                            Valhalla Bistro
                        </p>
                    </h1>

                    <div className="hidden md:flex items-center space-x-8 font-semibold">
                        <ul className="flex space-x-10">
                            {/* Home */}
                            <div className="flex items-center space-x-2 transition duration-300 hover:scale-125 cursor-pointer">
                                <img src="home.png" height={35} width={35} color="white" />
                                <h3>Home</h3>
                            </div>
                            {/* Menu */}
                            <div className="flex items-center space-x-2 transition duration-300 hover:scale-125 cursor-pointer">
                                <img src="menu.png" height={35} width={35} color="white" />
                                <h3>Menu</h3>
                            </div>
                            {/* Reservas */}
                            <div className="flex items-center space-x-2 transition duration-300 hover:scale-125 cursor-pointer">
                                <img src="reservation.png" height={35} width={35} color="white" />
                                <h3>Reservation</h3>
                            </div>
                            {/* Contacto */}
                            <div className="flex items-center space-x-2 transition duration-300 hover:scale-125 cursor-pointer ">
                                <img src="contact.png" height={35} width={35} color="white" />
                                <h3>Contact</h3>
                            </div>
                        </ul>

                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
