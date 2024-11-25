import React from 'react'

const Footer = () => {
    return (
        <footer className="footer bg-charcoal text-iceBlue p-10">
            <div>
                <h3 className="font-bold text-lg">Valhalla Bistro</h3>
                <p>Comida épica para guerreros legendarios.</p>
            </div>
            <div>
                <span className="footer-title">Enlaces Rápidos</span>
                <a href="#" className="link link-hover">Inicio</a>
                <a href="#" className="link link-hover">Menú</a>
                <a href="#" className="link link-hover">Reservaciones</a>
                <a href="#" className="link link-hover">Contacto</a>
            </div>
        </footer>

    )
}

export default Footer
