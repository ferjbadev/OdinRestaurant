import React from 'react'
import { FaShieldAlt, FaDrumstickBite, FaFish, FaBeer, FaBreadSlice, FaHammer, FaFire, FaUtensils } from 'react-icons/fa'

const MenuItem = ({ title, description, price, image, icon: Icon }) => (
    <div className="bg-woodBrown text-iceBlue rounded-lg shadow-xl overflow-hidden transform transition duration-300 hover:scale-105">
        <div className="relative">
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="absolute top-0 right-0 bg-asgardGold text-charcoal p-2 rounded-bl-lg font-bold">
                {price} Gold
            </div>
        </div>
        <div className="p-6">
            <h2 className="flex items-center text-2xl font-bold mb-2">
                <Icon className="mr-2 text-asgardGold" />
                {title}
            </h2>
            <p className="text-iceBlue/80 mb-4">{description}</p>
            <button className="w-full bg-asgardGold text-charcoal py-2 px-4 rounded-full font-bold hover:bg-iceBlue hover:text-woodBrown transition duration-300">
                Order
            </button>
        </div>
    </div>
);

const Menu = () => {
    const menuItems = [
        {
            title: "Golden Mead",
            description: "The drink of the gods, perfect for an epic feast",
            price: 5,
            image: "hidro.png",
            icon: FaBeer
        },
        {
            title: "Roasted Abali",
            description: "Tender wild boar roasted over wood with forest herbs",
            price: 15,
            image: "jabali.png",
            icon: FaDrumstickBite
        },
        {
            title: "Fjord Salmon",
            description: "Fresh smoked salmon with Nordic spices",
            price: 12,
            image: "salmon.png",
            icon: FaFish
        },
        {
            title: "Warrior Stew",
            description: "Comforting meat and wild vegetable stew",
            price: 10,
            image: "carne.png",
            icon: FaShieldAlt
        },
        {
            title: "Freya's Bread",
            description: "Artisan bread with seeds and honey, blessed by the goddess Freya",
            price: 3,
            image: "pan.png",
            icon: FaBreadSlice
        },
        {
            title: "Odin's Beer",
            description: "Dark and powerful beer, worthy of the father of all",
            price: 4,
            image: "cerveza.png",
            icon: FaBeer
        },
        {
            title: "Thor's Hammer",
            description: "Spicy grilled lamb chops with a side of roasted garlic potatoes",
            price: 18,
            image: "carne2.png",
            icon: FaHammer
        },
        {
            title: "Valkyrie Wings",
            description: "Crispy chicken wings glazed with honey and chili sauce",
            price: 8,
            image: "pollo.png",
            icon: FaFire
        },
        {
            title: "Jotun Casserole",
            description: "A hearty beef and root vegetable casserole, perfect for giants",
            price: 14,
            image: "carne3.png",
            icon: FaUtensils
        },
    ];

    return (
        <div className="bg-gray-300 min-h-screen py-2 px-4 sm:px-6 lg:px-8 shadow-lg">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-center text-asgardGold mb-3">
                    Valhalla Feast
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {menuItems.map((item, index) => (
                        <MenuItem key={index} {...item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Menu;
