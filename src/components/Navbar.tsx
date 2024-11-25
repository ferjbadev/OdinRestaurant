import React, { useState } from "react";
import { FaHamburger, FaTimes } from "react-icons/fa";

const NavItem = ({ href, children }) => (
    <li>
        <a
            href={href}
            className="hover:text-asgardGold transition duration-300"
        >
            {children}
        </a>
    </li>
);

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className="bg-charcoal text-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl hover:scale-105">
                        <a
                            href="/"
                            className="hover:text-asgardGold transition duration-300 "
                        >
                            Valhalla Bistro
                        </a>
                    </h1>

                    <div className="hidden md:flex items-center space-x-8 font-semibold">
                        <ul className="flex space-x-10">
                            <div className="hover:scale-150">
                                <NavItem href="/" >Inicio</NavItem>
                            </div>
                            <div className="hover:scale-150">
                                <NavItem href="/menu">Menú</NavItem>
                            </div>
                            <div className="hover:scale-150">
                                <NavItem href="/reservaciones">Reservaciones</NavItem>
                            </div>
                            <div className="hover:scale-150">
                                <NavItem href="/contacto">Contacto</NavItem>
                            </div>
                        </ul>
                        <button className="bg-asgardGold/70 hover:scale-125 text-charcoal px-4 py-2 rounded-xl  transition duration-300 font-semibold">
                            Reservar Banquete
                        </button>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-white hover:text-asgardGold transition duration-300"
                            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
                        >
                            {isMenuOpen ? <FaTimes size={24} /> : <FaHamburger size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <NavItem href="/">Inicio</NavItem>
                        <NavItem href="/menu">Menú</NavItem>
                        <NavItem href="/reservaciones">Reservaciones</NavItem>
                        <NavItem href="/contacto">Contacto</NavItem>
                    </div>
                    <div className="px-2 py-3">
                        <button className="w-full bg-asgardGold text-charcoal px-6 py-2 rounded hover:bg-woodBrown transition duration-300 font-semibold">
                            Reservar Banquete
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
