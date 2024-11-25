import React from 'react'

const Home = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: "url('/images/valhalla-bg.jpg')" }}>
            <div className="hero-overlay bg-opacity-50"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Bienvenidos al Valhalla Bistro</h1>
                    <p className="mb-5">Disfruta de los manjares divinos dignos de un guerrero eterno.</p>
                    <button className="btn btn-primary">Explorar Menú</button>
                </div>
            </div>
        </div>

    )
}

export default Home
