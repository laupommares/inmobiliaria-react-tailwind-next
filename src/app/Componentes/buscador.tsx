'use client'

export const Buscador = () => {
    const handleChange = () => {}

    return (
       <div className="card card-body bg-white p-3 mr-5">
            <div role="tablist" className="tabs tabs-lifted ">
            <input type="radio" name="my_tabs_2" defaultChecked role="tab" className="tab" aria-label="Ventas" onChange={() => handleChange()} />
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                <select className="select select-bordered w-full max-w-xs">
                    <option>Casas</option>
                    <option>Departamentos</option>
                    <option>Quintas</option>
                    <option>Duplex</option>
                    <option>Lotes</option>
                </select>
                <button className="btn btn-primary">Get Started</button>
            </div>

            <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Permutas"   />
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Permutas</div>

            {/* <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Alquileres" />
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Tab content 3</div> */}
        </div>
       </div>
    )
}