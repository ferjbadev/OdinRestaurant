import React from 'react'

const Card = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
            <div className="card bg-woodBrown text-iceBlue shadow-xl">
                <figure><img src="/images/mead.jpg" alt="Hidromiel" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Hidromiel Dorada</h2>
                    <p>La bebida de los dioses, perfecta para un festín épico.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-asgardGold">Ordenar</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Card
