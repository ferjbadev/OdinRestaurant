import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'
import { GiAxeInStump, GiDrakkar } from 'react-icons/gi'
import { GiHornedHelm } from "react-icons/gi";
import { GiVikingHelmet } from "react-icons/gi";

const FooterLink = ({ href, children }) => (
    <a href={href} className="hover:text-yellow-400 transition-colors duration-300">
        {children}
    </a>
)

const SocialIcon = ({ href, icon: Icon }) => (
    <a href={href} className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
        <Icon className="w-6 h-6" />
    </a>
)

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-3">
                        <h3 className="text-yellow-500 text-lg font-bold flex items-center">
                            <GiVikingHelmet className="mr-2" /> Valhalla Bistro
                        </h3>
                        <p className="text-sm">Feast like a Viking, drink like a god.</p>
                    </div>

                    <div>
                        <h4 className="text-yellow-500 font-semibold mb-3 flex items-center">
                            <GiAxeInStump className="mr-2" /> Navigate
                        </h4>
                        <ul className="space-y-2">
                            <li><FooterLink href="/">Home</FooterLink></li>
                            <li><FooterLink href="/menu">Menu</FooterLink></li>
                            <li><FooterLink href="/reservations">Reservations</FooterLink></li>
                            <li><FooterLink href="/about">Our Saga</FooterLink></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-yellow-500 font-semibold mb-3 flex items-center">
                            <GiDrakkar className="mr-2" /> Legal Runes
                        </h4>
                        <ul className="space-y-2">
                            <li><FooterLink href="/privacy">Privacy Shield</FooterLink></li>
                            <li><FooterLink href="/terms">Terms of Service</FooterLink></li>
                            <li><FooterLink href="/faq">FAQ</FooterLink></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-yellow-500 font-semibold mb-3 flex items-center">
                            < GiHornedHelm className="mr-2" /> Join the Feast
                        </h4>
                        <p className="mb-3 text-sm">Subscribe to our mead-mail for exclusive offers and Viking tales!</p>
                        <form className="flex">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="bg-gray-800 text-white px-3 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-yellow-500" />
                            <button
                                type="submit"
                                className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-r-md hover:bg-yellow-400 transition-colors duration-300">
                                Join
                            </button>
                        </form>
                    </div>
                </div>
                {/* Redes sociales */}
                <div className="mt-2 pt-2 border-t  border-gray-700 flex flex-col sm:flex-row justify-between items-center">
                    <p className="text-sm">&copy; {new Date().getFullYear()} Valhalla Bistro. All rights reserved by Odin's decree.</p>
                    <div className="flex space-x-4 mt-4 sm:mt-0">
                        <div className='hover:scale-125'>
                            <SocialIcon href="https://facebook.com" icon={FaFacebook} />
                        </div>
                        <div className='hover:scale-125'>
                            <SocialIcon href="https://twitter.com" icon={FaTwitter} />
                        </div>
                        <div className='hover:scale-125'>
                            <SocialIcon href="https://instagram.com" icon={FaInstagram} />
                        </div>
                        <div className='hover:scale-125'>
                            <SocialIcon href="https://youtube.com" icon={FaYoutube} />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}